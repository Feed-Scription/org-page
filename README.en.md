<p align="right"><b>English</b> · <a href="./README.md">中文</a></p>

# Tenure-Track Chili Team · Feed-Scription

> Let LLMs stretch what a game can imagine.

AI Narrative · AI Dialogue · Multi-Agent Arena · Algorithms-as-Play

---

## I · AI Games

### AI Narrative
*Plot-by-LLM — AI sits inside the core loop, reacting to every player choice so no two runs play the same.*

**Tenure-Track Chili** · *青椒模拟器*
Sim management · Live
Survive and climb the Chinese academic tenure track. The AI doesn't run a scripted tree — it actually reacts to every decision you make. That's how one player dumped ¥1.1 B into the university cafeteria and opened a braised-pork window.
<https://tenure-plus.feedscription.com/>

**Fate River** · *逆命之河*
Narrative adventure · Live
Play a historical figure and rewrite fate: "If Wu Zetian had let her children live, would it have mended her regret?"
<https://fated.feedscription.com/>

**Presiduck Simulator** · *噗噗模拟器*
Management sim · Live
A duck's road to the presidency: make choices, handle public opinion, and react to surprises in an AI-driven world sim.
<https://presiduck.feedscription.com/>

### AI Dialogue
*Voice-first interaction — AI becomes a character you can actually talk to: it hears your voice, carries context, and can be steered off-course by every player at the table.*

**Just “Pamper” Him** · *就“宠”他吧*
Live voice · AI NPC · ChinaJoy playtest
Jump into live voice with friends and take turns talking to the same AI NPC, each trying to coax it into saying their keyword. Get creative in how you steer it — or deliberately “poison the context” to set traps for your opponents. Varied challenges and unpredictable replies make every round different, with plenty of laughs along the way.
[Watch PV (HD)](./public/assets/jiu_chong_ta_ba_pv.mp4) · [Data-saver version](./public/assets/jiu_chong_ta_ba_pv_smooth.mp4) · [ChinaJoy playtest](./public/assets/jiu_chong_ta_ba_chinajoy.webp) · *Stay tuned*

### Multi-Agent Arena
*Players become spectators while AI agents scheme against each other — an experience that was hard to deliver before LLMs.*

**Cyber Cricket · Poker** · *大模型德扑*
Multi-agent · Live replay
Six LLMs sit at one No-Limit Hold'em table. The player just watches — which AI bluffs best?
<https://holdem.ququer.ai/>

**QuQuer Platform** · *赛博蛐蛐儿*
Trustless · Commit-Reveal
An auditable arena where external agents play fair — bring your own model, Commit-Reveal blocks cheating.
*(coming soon)*

### Algorithms-as-Play
*Turn "tuning the network" into a card game — anyone, AI background or not, gets to train a real model with their own hands.*

**Neuralchemy** · *炼经术*
Education · Real training
Train a real vision AI inside the game — the cards *are* the network components. No AI background needed; you'll figure out what each piece does just by playing.
<https://neuralchemy.feedscription.com/>

---

## II · Platform

**FeedScription Platform** · *team's AI app hub*
AI capabilities · Auth · Sign-up · Analytics
The unified plane every team app plugs into — AI capabilities, accounts, sign-up flow, telemetry, all in one place.
<https://platform.feedscription.com/>

---

## III · Tools

**Fate-River Autotest** · *逆命自动化测试*
Automated testing · AI player
An LLM plays Fate River end-to-end — bringing regression testing to AI narrative games into CI.
*(internal tool)*

**KAL AI Layer** · *Kal-Engine*
Game framework · LLM-first
LLM-first component library. A coding agent can wire up a full text game in 30 minutes.
<https://github.com/Feed-Scription/kal>

**Openovel** · *AI Interactive Fiction*
Open source · Dual-loop narrative
A local-first AI interactive fiction app: fast foreground storytelling, with background agents maintaining story state, memory, and files.
<https://github.com/Feed-Scription/openovel>

---

## IV · Events

**Suzhou AI Game Hackathon** · *Douyin AI Creators Program*
2026-04-18 · Co-host
[Event recap](https://mp.weixin.qq.com/s/qNTXhiwgrmrMJ01mK2xWpA)

---

## V · Press

| Date | Outlet | Format | Title |
|---|---|---|---|
| 2026-01-06 | [游戏茶馆](https://youxichaguan.com/archives/184254) | Interview | 专访：DAU 达 9 万、2000 人同时在线，两个博士生的 AI 游戏凭什么击中玩家？ |
| 2026-01-08 | [科学网](https://news.sciencenet.cn/htmlnews/2026/1/558423.shtm) | Profile | 三本院校出身，逆袭拿下诺奖？两位 95 后博士生写了部"神人游戏" |
| 2026-01-28 | [405 游局](https://www.gcores.com/radios/210229) | Podcast | Ep.32 第一次用 AI 做游戏的实战经验分享 · 对话《青椒模拟器》主创 |
| 2026-04-08 | [Nature](https://www.nature.com/articles/d41586-026-00224-5) | News Feature | When career anxiety becomes gameplay: lessons from China's "young-faculty simulator" |

---

## About

The Tenure-Track Chili Team (Feed-Scription) is a small AI-game crew that cuts across research, engineering, and design. We think of LLMs as a new kind of *game mechanic*, not as a copywriting assistant. We also think whether an AI game holds up still comes down to the basics: is the gameplay fun, and is the world internally consistent?

Every demo we ship runs end-to-end well enough for a stranger to play. The KAL engine and automated test rig we built along the way are open-sourced too — so the next people taking on AI games can skip a few of the holes we've already fallen into.

**7 AI games · 3 open-source tools · 4 directions explored**

---

## Local development

```bash
npm install
npm run dev
```

Run `npm run check` and `npm run build` before committing. Astro emits a static site that is deployed by the GitHub Pages workflow.
