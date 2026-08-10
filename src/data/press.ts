import { localized, type PressItem } from './types';

export const pressItems = [
  {
    id: 'jixin',
    href: 'https://mp.weixin.qq.com/s/OyY2oX--Bb7TXS9uZkZrTw',
    date: '2025 · 12 · 20',
    outlet: localized('机器之心', 'Synced'),
    headline: localized(
      '玩到崩溃，《青椒模拟器》游戏爆火，我在AI世界一路升级做院士',
      'Played till it crashed: Tenure-Track Simulator went viral — I ranked up to academician in an AI world',
    ),
    tag: localized('产品体验', 'Hands-on'),
  },
  {
    id: 'gamecha',
    href: 'https://youxichaguan.com/archives/184254',
    date: '2026 · 01 · 06',
    outlet: localized('游戏茶馆', 'GameCha'),
    headline: localized(
      '专访：DAU 达 9 万、2000 人同时在线，两个博士生的 AI 游戏凭什么击中玩家？',
      'Interview: 90K DAU, 2K concurrent — how a tiny AI game from two PhDs hit a nerve',
    ),
    tag: localized('主创专访', 'Interview'),
  },
  {
    id: 'sciencenet',
    href: 'https://news.sciencenet.cn/htmlnews/2026/1/558423.shtm',
    date: '2026 · 01 · 08',
    outlet: localized('科学网', 'Science Net'),
    headline: localized(
      '三本院校出身，逆袭拿下诺奖？两位 95 后博士生写了部“神人游戏”',
      'From a third-tier college to a Nobel: two 95-born PhD students wrote a “godly game”',
    ),
    tag: localized('人物专题', 'Profile'),
  },
  {
    id: 'jizhou',
    href: 'https://mp.weixin.qq.com/s/YG70lGn-gT1QeUD02tqV-w',
    date: '2026 · 01 · 20',
    outlet: localized('极昼工作室', 'Jizhou Studio'),
    headline: localized(
      '重生之我在「青椒模拟器」做导师，一路飞升到院士',
      'Reborn as a mentor in Tenure-Track Simulator — flying all the way to academician',
    ),
    tag: localized('人物专题', 'Profile'),
  },
  {
    id: 'gcores',
    href: 'https://www.gcores.com/radios/210229',
    date: '2026 · 01 · 28',
    outlet: localized('405 游局', '405 Podcast'),
    headline: localized(
      'Ep.32 第一次用 AI 做游戏的实战经验分享 · 对话《青椒模拟器》主创',
      'Ep.32 — Hands-on lessons from a first AI game · with the Tenure-Track Simulator team',
    ),
    tag: localized('播客', 'Podcast'),
  },
  {
    id: 'nature',
    href: 'https://www.nature.com/articles/d41586-026-00224-5',
    date: '2026 · 04 · 08',
    outlet: localized('Nature', 'Nature'),
    headline: localized(
      "When career anxiety becomes gameplay: lessons from China's “young-faculty simulator”",
      "When career anxiety becomes gameplay: lessons from China's “young-faculty simulator”",
    ),
    tag: localized('News Feature', 'News Feature'),
    international: true,
  },
] satisfies PressItem[];
