import { localized, type Project } from './types';

export const projects = [
  {
    id: 'chili',
    section: 'games',
    department: 'narrative',
    image: {
      src: '/assets/gameplay_main.webp',
      width: 1400,
      height: 738,
      alt: localized('青椒模拟器界面', 'Tenure-Track Simulator UI'),
    },
    title: localized('青椒模拟器', 'Tenure-Track Simulator'),
    subtitle: localized('Tenure-Track Simulator', '青椒模拟器'),
    tags: [
      { label: localized('模拟经营', 'Management sim') },
      { label: localized('已上线', 'Live'), tone: 'live' },
    ],
    description: localized(
      '扮演高校青椒求生升职。AI 不跑剧情树，而是响应你的每次决策。有玩家把 11 亿身家全砸进食堂，开起了红烧肉窗口。',
      "Survive and climb the Chinese academic tenure track. The AI isn't running a scripted tree; it reacts to every decision you make. One player even dumped ¥1.1 B into the cafeteria and opened a braised-pork window.",
    ),
    action: {
      kind: 'link',
      label: localized('在线试玩', 'Play now'),
      href: 'https://tenure-plus.feedscription.com/',
    },
  },
  {
    id: 'fate',
    section: 'games',
    department: 'narrative',
    image: {
      src: '/assets/fate_river.webp',
      width: 554,
      height: 1200,
      fit: 'contain',
      alt: localized('逆命之河', 'Fate River'),
    },
    title: localized('逆命之河', 'Fate River'),
    subtitle: localized('Fate River', '逆命之河'),
    tags: [
      { label: localized('叙事冒险', 'Narrative adventure') },
      { label: localized('已上线', 'Live'), tone: 'live' },
    ],
    description: localized(
      '扮演历史人物改命试试：「武则天若让孩子活下来，会不会弥补遗憾？」',
      'Play a historical figure and rewrite fate: “If Wu Zetian had let her children live, would it have mended her regret?”',
    ),
    action: {
      kind: 'link',
      label: localized('在线试玩', 'Play now'),
      href: 'https://fated.feedscription.com/',
    },
  },
  {
    id: 'presiduck',
    section: 'games',
    department: 'narrative',
    image: {
      src: '/assets/presiduck.png',
      width: 1200,
      height: 630,
      alt: localized('噗噗模拟器', 'Presiduck Simulator'),
    },
    title: localized('噗噗模拟器', 'Presiduck Simulator'),
    subtitle: localized('Presiduck Simulator', '噗噗模拟器'),
    tags: [
      { label: localized('模拟经营', 'Management sim') },
      { label: localized('已上线', 'Live'), tone: 'live' },
    ],
    description: localized(
      '一只鸭子的总统路：在 AI 驱动的世界模拟里做选择、应对舆论和突发事件。',
      "A duck's road to the presidency: make choices, handle public opinion, and react to surprises in an AI-driven world sim.",
    ),
    action: {
      kind: 'link',
      label: localized('在线试玩', 'Play now'),
      href: 'https://presiduck.feedscription.com/',
    },
  },
  {
    id: 'pamper',
    section: 'games',
    department: 'dialogue',
    variant: 'rose',
    image: {
      src: '/assets/jiu_chong_ta_ba_cover.webp',
      width: 1536,
      height: 1024,
      alt: localized('《就“宠”他吧》游戏封面', 'Just “Pamper” Him game cover'),
    },
    title: localized('就“宠”他吧', 'Just “Pamper” Him'),
    subtitle: localized('Just “Pamper” Him', '就“宠”他吧'),
    tags: [
      { label: localized('多人语音', 'Live voice') },
      { label: localized('AI NPC', 'AI NPC') },
    ],
    description: localized(
      '和好友实时开麦，轮流向同一个 AI NPC 对话，诱导 AI NPC 说出各自的关键词。可以脑洞大开地引导 AI，也能故意“污染上下文”给对手挖坑。多样任务，不可预测的回应，让每一局都不重样，“笑”果满满。',
      'Jump into live voice with friends and take turns talking to the same AI NPC, each trying to coax it into saying their keyword. Get creative in how you steer it — or deliberately “poison the context” to set traps for your opponents. Varied challenges and unpredictable replies make every round different, with plenty of laughs along the way.',
    ),
    action: {
      kind: 'dialog',
      label: localized('观看 PV', 'Watch PV'),
      dialogId: 'pamper-media',
      note: localized('敬请期待', 'Stay tuned'),
    },
  },
  {
    id: 'poker',
    section: 'games',
    department: 'agent',
    variant: 'indigo',
    image: {
      src: '/assets/cyber_cricket.webp',
      width: 1400,
      height: 795,
      alt: localized('大模型德扑：6 个 AI 同桌对局', 'Cyber Cricket: 6 AIs at one poker table'),
    },
    title: localized('大模型德扑', 'Cyber Cricket · Poker'),
    subtitle: localized('Cyber Cricket · Poker', '大模型德扑'),
    tags: [
      { label: localized('Multi-Agent', 'Multi-Agent') },
      { label: localized('实时复盘', 'Live replay') },
    ],
    description: localized(
      '6 个大模型同桌打 No-Limit 德州，玩家全程旁观——看哪个 AI 更会 bluff。',
      "Six LLMs share one No-Limit Hold'em table. You just watch — which AI bluffs best?",
    ),
    action: {
      kind: 'link',
      label: localized('在线试玩', 'Play now'),
      href: 'https://holdem.ququer.ai/',
    },
  },
  {
    id: 'ququer',
    section: 'games',
    department: 'agent',
    variant: 'indigo',
    image: {
      src: '/assets/ququer.webp',
      width: 1400,
      height: 793,
      alt: localized("QuQuer 平台：Liar's Dice featured match", "QuQuer platform: Liar's Dice featured match"),
    },
    title: localized('赛博蛐蛐儿', 'QuQuer Platform'),
    subtitle: localized('QuQuer Platform', '赛博蛐蛐儿'),
    tags: [
      { label: localized('Trustless', 'Trustless') },
      { label: localized('Commit-Reveal', 'Commit-Reveal') },
    ],
    description: localized(
      '让外部 Agent 公平博弈的可审计平台——自己带模型来打，靠 Commit-Reveal 防作弊。',
      'An auditable arena where external agents play fair — bring your own model, Commit-Reveal blocks cheating.',
    ),
    action: {
      kind: 'status',
      label: localized('即将开放', 'Coming soon'),
    },
  },
  {
    id: 'neuralchemy',
    section: 'games',
    department: 'algorithm',
    variant: 'emerald',
    image: {
      src: '/assets/card_game.webp',
      width: 1400,
      height: 793,
      alt: localized('Neuralchemy 炼经术', 'Neuralchemy'),
    },
    title: localized('Neuralchemy', 'Neuralchemy'),
    subtitle: localized('炼经术', '炼经术'),
    tags: [
      { label: localized('教育普惠', 'Education'), tone: 'accent' },
      { label: localized('真训练', 'Real training') },
    ],
    description: localized(
      '在游戏里训练一个真实的视觉 AI 模型——卡牌就是网络组件。不懂 AI 也能上手，玩着玩着就明白每个组件到底做了什么。',
      "Train a real vision AI inside the game — the cards are the network components. No AI background needed; play long enough and you'll grok what each piece does.",
    ),
    action: {
      kind: 'link',
      label: localized('在线试玩', 'Play now'),
      href: 'https://neuralchemy.feedscription.com/',
    },
  },
  {
    id: 'platform',
    section: 'platform',
    image: {
      src: '/assets/feedscription_platform.webp',
      width: 1400,
      height: 794,
      alt: localized('FeedScription 平台首页', 'FeedScription platform homepage'),
    },
    title: localized('FeedScription 平台', 'FeedScription Platform'),
    subtitle: localized("team's AI app hub", "team's AI app hub"),
    tags: [
      { label: localized('AI 能力', 'AI capabilities') },
      { label: localized('账号体系', 'Accounts') },
      { label: localized('用户注册', 'Sign-up') },
      { label: localized('埋点分析', 'Analytics') },
    ],
    description: localized(
      '团队所有 AI 应用的统一支撑层——把 AI 能力、账号、注册流和数据埋点收敛到一处，每个 demo 都接进来即用。',
      'The unified plane every team app plugs into — AI capabilities, accounts, sign-up, telemetry, all in one place.',
    ),
    action: {
      kind: 'link',
      label: localized('访问平台', 'Visit platform'),
      href: 'https://platform.feedscription.com/',
    },
  },
  {
    id: 'autotest',
    section: 'tools',
    image: {
      src: '/assets/fate_river_autotest.webp',
      width: 1400,
      height: 720,
      alt: localized('逆命自动化测试：AI 玩家 + 记忆/策略追踪', 'Fate-River Autotest: AI player + memory/strategy trace'),
    },
    title: localized('逆命自动化测试', 'Fate-River Autotest'),
    subtitle: localized('Fate-River Autotest', '逆命自动化测试'),
    tags: [
      { label: localized('自动化测试', 'Automated testing') },
      { label: localized('AI 玩家', 'AI player') },
    ],
    description: localized(
      '让 LLM 化身玩家把整局逆命之河跑通——把“AI 叙事游戏”的回归测试搬到 CI 里。',
      'An LLM plays Fate River end-to-end — regression testing for AI narrative games, in CI.',
    ),
    action: {
      kind: 'status',
      label: localized('内部工具', 'Internal tool'),
    },
  },
  {
    id: 'kal',
    section: 'tools',
    image: {
      src: '/assets/kal_editor.webp',
      width: 1400,
      height: 716,
      alt: localized('KAL Editor：Flow 节点编辑器界面', 'KAL Editor: Flow node editor'),
    },
    title: localized('KAL AI Layer', 'KAL AI Layer'),
    subtitle: localized('Kal-Engine', 'Kal-Engine'),
    tags: [
      { label: localized('游戏框架', 'Game framework') },
      { label: localized('LLM-First', 'LLM-First') },
    ],
    description: localized(
      'LLM-First 的游戏组件库：让 Coding Agent 在 30 分钟内拼出一个完整的文字游戏。',
      'LLM-first component library. A coding agent can wire up a full text game in 30 minutes.',
    ),
    action: {
      kind: 'link',
      label: localized('查看代码', 'View code'),
      href: 'https://github.com/Feed-Scription/kal',
    },
  },
  {
    id: 'openovel',
    section: 'tools',
    image: {
      src: '/assets/openovel.webp',
      width: 1920,
      height: 1080,
      alt: localized('Openovel AI 互动小说引擎', 'Openovel AI interactive fiction engine'),
    },
    title: localized('Openovel', 'Openovel'),
    subtitle: localized('AI Interactive Fiction', 'AI Interactive Fiction'),
    tags: [
      { label: localized('开源工具', 'Open source') },
      { label: localized('双循环叙事', 'Dual-loop narrative') },
    ],
    description: localized(
      'Local-first 的 AI 互动小说应用：前台快速叙事，后台 Agent 维护故事状态、记忆和文件。',
      'A local-first AI interactive fiction app: fast foreground storytelling, with background agents maintaining story state, memory, and files.',
    ),
    action: {
      kind: 'link',
      label: localized('查看代码', 'View code'),
      href: 'https://github.com/Feed-Scription/openovel',
    },
  },
  {
    id: 'suzhou-event',
    section: 'events',
    image: {
      src: '/assets/event_suzhou_2026.webp',
      width: 1200,
      height: 675,
      alt: localized('抖音 AI 创变者计划 · 苏州 AI 游戏专场', 'Douyin AI Creators Program · Suzhou AI Game Hackathon'),
    },
    title: localized('苏州 AI 游戏专场', 'Suzhou AI Game Hackathon'),
    subtitle: localized('抖音 AI 创变者计划 · 2026.04.18', 'Douyin AI Creators · 2026.04.18'),
    tags: [{ label: localized('联合承办', 'Co-host') }],
    action: {
      kind: 'link',
      label: localized('活动总结', 'Event recap'),
      href: 'https://mp.weixin.qq.com/s/qNTXhiwgrmrMJ01mK2xWpA',
    },
  },
] satisfies Project[];
