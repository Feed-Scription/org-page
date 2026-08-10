import type { CardVariant, DepartmentId, Locale, SectionId } from './types';

interface NavItem {
  href: string;
  label: string;
}

interface DepartmentCopy {
  id: DepartmentId;
  number: string;
  title: string;
  englishLabel: string;
  variant?: CardVariant;
}

interface SiteCopy {
  meta: {
    title: string;
    description: string;
    ogImageAlt: string;
  };
  brand: string;
  navLabel: string;
  nav: NavItem[];
  language: {
    href: string;
    shortLabel: string;
    ariaLabel: string;
  };
  themeLabel: string;
  skipLink: string;
  hero: {
    line: string;
    accent: string;
    pills: string[];
    topicsLabel: string;
  };
  sections: Record<SectionId | 'press', {
    chapter: string;
    title: string;
    accent: string;
  }>;
  departments: DepartmentCopy[];
  about: {
    title: string;
    accent: string;
    paragraphs: string[];
  };
  stats: Array<{ value: string; label: string }>;
  dialog: {
    title: string;
    close: string;
    unsupported: string;
    qualityGroup: string;
    quality: string;
    smooth: string;
    hd: string;
    photoAlt: string;
    photoCaption: string;
  };
  footer: {
    brand: string;
    github: string;
    tagline: string;
  };
}

export const siteCopy: Record<Locale, SiteCopy> = {
  zh: {
    meta: {
      title: '青椒模拟器团队 · 让 AI 拓展游戏想象的边界',
      description: '青椒模拟器团队 / Wortou.AI，用大模型重新想象游戏可能性。AI 叙事、AI 对话、Agent 博弈、AI 算法设计、平台与工具。',
      ogImageAlt: 'Wortou.AI 社交分享卡片',
    },
    brand: '青椒模拟器团队',
    navLabel: '主导航',
    nav: [
      { href: '#games', label: 'AI 游戏' },
      { href: '#platform', label: '平台' },
      { href: '#tools', label: '工具' },
      { href: '#events', label: '活动' },
      { href: '#press', label: '报道' },
      { href: '#about', label: '关于' },
    ],
    language: {
      href: '/en/',
      shortLabel: 'EN',
      ariaLabel: '切换至英文',
    },
    themeLabel: '深色模式',
    skipLink: '跳到主要内容',
    hero: {
      line: '让AI拓展',
      accent: '游戏想象的边界',
      pills: ['AI 叙事', 'AI 对话', 'Agent 博弈', '算法可玩化'],
      topicsLabel: '探索方向',
    },
    sections: {
      games: { chapter: 'Chapter I · Games', title: 'AI', accent: '游戏' },
      platform: { chapter: 'Chapter II · Platform', title: 'AI 应用', accent: '平台' },
      tools: { chapter: 'Chapter III · Tools', title: '游戏', accent: '工具' },
      events: { chapter: 'Chapter IV · Events', title: '活动', accent: '策划' },
      press: { chapter: 'Chapter V · Press', title: '媒体', accent: '报道' },
    },
    departments: [
      {
        id: 'narrative',
        number: 'No. 01',
        title: 'AI 叙事',
        englishLabel: 'AI Narrative',
      },
      {
        id: 'dialogue',
        number: 'No. 02',
        title: 'AI 对话',
        englishLabel: 'Real-time AI Dialogue',
        variant: 'rose',
      },
      {
        id: 'agent',
        number: 'No. 03',
        title: 'Agent 博弈',
        englishLabel: 'Multi-Agent Arena',
        variant: 'indigo',
      },
      {
        id: 'algorithm',
        number: 'No. 04',
        title: 'AI 算法设计',
        englishLabel: 'Algorithms-as-Play',
        variant: 'emerald',
      },
    ],
    about: {
      title: '关于',
      accent: '我们',
      paragraphs: [
        '青椒模拟器团队（Wortou.AI）是一支跨研究 / 工程 / 设计的 AI 游戏小队。我们相信大模型不只是写文案的工具，而是一种新的“游戏机制”。也相信一个 AI 游戏能不能立起来，最终还是要看玩法有不有趣、世界自不自洽。',
        '每个 demo 都坚持端到端跑通到能让陌生人玩到。过程里沉淀出的 KAL 引擎和自动化测试也开源出来——希望下一波做 AI 游戏的人，少踩几个我们已经踩过的坑。',
      ],
    },
    stats: [
      { value: '7', label: 'AI 游戏' },
      { value: '3', label: '开源工具' },
      { value: '4', label: '探索方向' },
    ],
    dialog: {
      title: '《就“宠”他吧》PV',
      close: '关闭',
      unsupported: '当前浏览器无法播放此视频。',
      qualityGroup: '视频画质',
      quality: '画质',
      smooth: '流畅',
      hd: '高清',
      photoAlt: '《就“宠”他吧》ChinaJoy 现场试玩',
      photoCaption: 'ChinaJoy 现场试玩图。',
    },
    footer: {
      brand: '青椒模拟器团队 / Wortou.AI',
      github: 'GitHub Org',
      tagline: '© 2026 · Made with chili pepper & a lot of LLM tokens',
    },
  },
  en: {
    meta: {
      title: 'Wortou.AI · Let AI expand the boundaries of game imagination',
      description: 'Wortou.AI team — reimagining games with LLMs. AI narrative, real-time AI dialogue, multi-agent arenas, algorithms-as-play, platform & tools.',
      ogImageAlt: 'Wortou.AI social preview card',
    },
    brand: 'Chili-Game Team',
    navLabel: 'Primary navigation',
    nav: [
      { href: '#games', label: 'Games' },
      { href: '#platform', label: 'Platform' },
      { href: '#tools', label: 'Tools' },
      { href: '#events', label: 'Events' },
      { href: '#press', label: 'Press' },
      { href: '#about', label: 'About' },
    ],
    language: {
      href: '/',
      shortLabel: '中',
      ariaLabel: '切换至中文',
    },
    themeLabel: 'Dark mode',
    skipLink: 'Skip to main content',
    hero: {
      line: 'Let AI expand',
      accent: 'the boundaries of game imagination',
      pills: ['AI Narrative', 'AI Dialogue', 'Multi-Agent', 'Algorithms-as-Play'],
      topicsLabel: 'Areas of exploration',
    },
    sections: {
      games: { chapter: 'Chapter I · Games', title: 'AI', accent: 'Games' },
      platform: { chapter: 'Chapter II · Platform', title: 'AI App', accent: 'Platform' },
      tools: { chapter: 'Chapter III · Tools', title: 'Game', accent: 'Tooling' },
      events: { chapter: 'Chapter IV · Events', title: 'Event', accent: 'Programs' },
      press: { chapter: 'Chapter V · Press', title: 'Press', accent: 'Coverage' },
    },
    departments: [
      {
        id: 'narrative',
        number: 'No. 01',
        title: 'AI Narrative',
        englishLabel: 'Plot-by-LLM',
      },
      {
        id: 'dialogue',
        number: 'No. 02',
        title: 'AI Dialogue',
        englishLabel: 'Voice-first Interaction',
        variant: 'rose',
      },
      {
        id: 'agent',
        number: 'No. 03',
        title: 'Multi-Agent Arena',
        englishLabel: 'Agent vs Agent',
        variant: 'indigo',
      },
      {
        id: 'algorithm',
        number: 'No. 04',
        title: 'Algorithms-as-Play',
        englishLabel: 'ML by Hand',
        variant: 'emerald',
      },
    ],
    about: {
      title: 'About',
      accent: 'us',
      paragraphs: [
        'The Chili-Game Team (Wortou.AI) is a small AI-game crew across research, engineering, and design. We treat LLMs as a new kind of game mechanic, not a copywriting assistant — and we still believe whether an AI game holds up comes down to the basics: is the gameplay fun, is the world internally consistent.',
        "Every demo we ship runs end-to-end well enough for a stranger to play. The KAL engine and the autotest harness we built along the way are open-sourced — so the next people taking on AI games can skip a few of the holes we've already fallen into.",
      ],
    },
    stats: [
      { value: '7', label: 'AI games' },
      { value: '3', label: 'Open-source tools' },
      { value: '4', label: 'Directions explored' },
    ],
    dialog: {
      title: 'Just “Pamper” Him — PV',
      close: 'Close',
      unsupported: 'Your browser cannot play this video.',
      qualityGroup: 'Video quality',
      quality: 'Quality',
      smooth: 'Data saver',
      hd: 'HD',
      photoAlt: 'Just “Pamper” Him playtest at ChinaJoy',
      photoCaption: 'ChinaJoy playtest photo.',
    },
    footer: {
      brand: 'Chili-Game Team / Wortou.AI',
      github: 'GitHub Org',
      tagline: '© 2026 · Made with chili pepper & a lot of LLM tokens',
    },
  },
};
