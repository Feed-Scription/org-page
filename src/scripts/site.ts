type Theme = 'light' | 'dark';
type VideoQuality = 'smooth' | 'hd';

const THEME_STORAGE_KEY = 'org-page-theme';
const themeQuery = window.matchMedia('(prefers-color-scheme: dark)');

const safeStorage = {
  get(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
    } catch {
      // Theme selection still applies for the current page view.
    }
  },
};

function savedTheme(): Theme | null {
  const saved = safeStorage.get(THEME_STORAGE_KEY);
  return saved === 'light' || saved === 'dark' ? saved : null;
}

function systemTheme(): Theme {
  return themeQuery.matches ? 'dark' : 'light';
}

function updateThemeButton(): void {
  const button = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
  if (!button) return;

  const isDark = document.documentElement.dataset.theme === 'dark';
  button.setAttribute('aria-checked', String(isDark));

  const icon = button.querySelector<HTMLElement>('.theme-toggle-icon');
  if (icon) icon.textContent = isDark ? '☾' : '☀';
}

function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  updateThemeButton();
}

function setTheme(theme: Theme): void {
  safeStorage.set(THEME_STORAGE_KEY, theme);
  applyTheme(theme);
}

interface NetworkInformationLike {
  downlink?: number;
  effectiveType?: string;
  saveData?: boolean;
}

function preferredVideoQuality(): VideoQuality {
  const networkNavigator = navigator as Navigator & {
    connection?: NetworkInformationLike;
    mozConnection?: NetworkInformationLike;
    webkitConnection?: NetworkInformationLike;
  };
  const connection = networkNavigator.connection ?? networkNavigator.mozConnection ?? networkNavigator.webkitConnection;
  if (!connection) return 'smooth';

  const effectiveType = (connection.effectiveType ?? '').toLowerCase();
  const downlink = Number(connection.downlink);
  const constrained = Boolean(connection.saveData)
    || /(^|-)2g$|3g$/.test(effectiveType)
    || (Number.isFinite(downlink) && downlink > 0 && downlink < 2);

  return constrained ? 'smooth' : 'hd';
}

function updateVideoQualityControls(video: HTMLVideoElement): void {
  const current = video.dataset.quality;
  video.closest('.media-video')?.querySelectorAll<HTMLButtonElement>('[data-video-quality]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.videoQuality === current));
  });
}

function setVideoQuality(video: HTMLVideoElement | null, quality: string | undefined): void {
  if (!video) return;

  const normalized: VideoQuality = quality === 'hd' ? 'hd' : 'smooth';
  const source = normalized === 'hd' ? video.dataset.srcHd : video.dataset.srcSmooth;
  if (!source) return;

  if (video.dataset.quality === normalized && video.getAttribute('src')) {
    updateVideoQualityControls(video);
    return;
  }

  const resumeAt = Number.isFinite(video.currentTime) ? video.currentTime : 0;
  const shouldResume = !video.paused && !video.ended;

  video.dataset.quality = normalized;
  video.src = source;
  updateVideoQualityControls(video);

  video.addEventListener('loadedmetadata', () => {
    if (resumeAt > 0 && Number.isFinite(video.duration)) {
      video.currentTime = Math.min(resumeAt, Math.max(0, video.duration - 0.1));
    }
  }, { once: true });

  video.load();
  if (shouldResume && video.closest('dialog')?.open) {
    void video.play().catch(() => undefined);
  }
}

function prepareDialogVideo(dialog: HTMLDialogElement): void {
  const video = dialog.querySelector<HTMLVideoElement>('[data-video-player]');
  if (video && !video.getAttribute('src')) {
    setVideoQuality(video, preferredVideoQuality());
  }
}

function closeMediaDialog(dialog: HTMLDialogElement | null): void {
  if (!dialog) return;
  dialog.querySelector<HTMLVideoElement>('video')?.pause();
  if (dialog.open) dialog.close();
}

document.querySelectorAll<HTMLDialogElement>('.media-dialog').forEach((dialog) => {
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeMediaDialog(dialog);
  });
  dialog.addEventListener('close', () => {
    dialog.querySelector<HTMLVideoElement>('video')?.pause();
  });
});

document.addEventListener('click', (event) => {
  if (!(event.target instanceof Element)) return;

  const dialogTrigger = event.target.closest<HTMLElement>('[data-dialog-open]');
  if (dialogTrigger) {
    const dialogId = dialogTrigger.dataset.dialogOpen;
    const dialog = dialogId ? document.getElementById(dialogId) : null;
    if (dialog instanceof HTMLDialogElement) {
      prepareDialogVideo(dialog);
      dialog.showModal();
    }
    return;
  }

  const dialogClose = event.target.closest<HTMLElement>('[data-dialog-close]');
  if (dialogClose) {
    closeMediaDialog(dialogClose.closest<HTMLDialogElement>('dialog'));
    return;
  }

  const qualityButton = event.target.closest<HTMLButtonElement>('[data-video-quality]');
  if (qualityButton) {
    const video = qualityButton.closest('dialog')?.querySelector<HTMLVideoElement>('[data-video-player]') ?? null;
    setVideoQuality(video, qualityButton.dataset.videoQuality);
    return;
  }

  const themeButton = event.target.closest<HTMLButtonElement>('[data-theme-toggle]');
  if (themeButton) {
    const current: Theme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  }
});

applyTheme(savedTheme() ?? (document.documentElement.dataset.theme as Theme | undefined) ?? systemTheme());

themeQuery.addEventListener('change', () => {
  if (!savedTheme()) applyTheme(systemTheme());
});
