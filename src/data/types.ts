export type Locale = 'zh' | 'en';

export type LocalizedText = Record<Locale, string>;

export type CardVariant = 'rose' | 'indigo' | 'emerald';

export type SectionId = 'games' | 'platform' | 'tools' | 'events';

export type DepartmentId = 'narrative' | 'dialogue' | 'agent' | 'algorithm';

export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  alt: LocalizedText;
  fit?: 'contain';
}

export interface ProjectTag {
  label: LocalizedText;
  tone?: 'live' | 'accent';
}

export type ProjectAction =
  | {
      kind: 'link';
      label: LocalizedText;
      href: string;
    }
  | {
      kind: 'dialog';
      label: LocalizedText;
      dialogId: string;
      note?: LocalizedText;
    }
  | {
      kind: 'status';
      label: LocalizedText;
    };

export interface Project {
  id: string;
  section: SectionId;
  department?: DepartmentId;
  variant?: CardVariant;
  image: ImageAsset;
  title: LocalizedText;
  subtitle: LocalizedText;
  tags: ProjectTag[];
  description?: LocalizedText;
  action: ProjectAction;
}

export interface PressItem {
  id: string;
  href: string;
  date: string;
  outlet: LocalizedText;
  headline: LocalizedText;
  tag: LocalizedText;
  international?: boolean;
}

export const localized = (zh: string, en: string): LocalizedText => ({ zh, en });

export const textFor = (text: LocalizedText, locale: Locale): string => text[locale];
