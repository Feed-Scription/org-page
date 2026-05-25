<p align="right"><a href="./README.en.md">English</a> · <b>中文</b></p>

# org-page

> 青椒模拟器团队（Feed-Scription）作品集站点 —— 一页讲完这一年做了什么。

纯静态单页：5 个章节、一份团队叙事。**没有构建步骤、没有依赖**，部署到任何静态托管都跑。

## 页面结构

| Chapter | 内容 |
|---|---|
| I · Games | 5 款上线的 AI 原生游戏（青椒模拟器、逆命之河、大模型德扑、赛博蛐蛐儿、Neuralchemy）|
| II · Platform | FeedScription —— 团队所有应用的 AI / 账号 / 埋点统一支撑层 |
| III · Tools | KAL AI Layer、逆命自动化测试 |
| IV · Events | 抖音 AI 创变者计划 · 苏州 AI 游戏专场（联合承办）|
| V · Press | Nature · 科学网 · 游戏茶馆 · 405 游局 |

## 技术栈

- 一份 `index.html`（HTML + 内联 CSS）
- `assets/` 全部 WebP（共 ~376 KB）
- 字体走 Google Fonts CDN
- 浏览器兼容：现代浏览器（WebP 全球覆盖 97%+）

## 本地预览

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 部署

任意静态托管都行：

- **Vercel / Netlify / Cloudflare Pages**：导入仓库即生效
- **GitHub Pages**：Settings → Pages → Source = `main` / root
  > 当前 org 套餐不支持 Pages（HTTP 422），需升级或换其他静态托管

## 文件结构

```
.
├── index.html          # 单页全部内容 + 样式
└── assets/             # 8 张 WebP 截图 + 1 张品牌青椒水印
```

## 加一张卡片

每张卡片都是 `<article class="card">`，结构如下，复制粘贴即用：

```html
<article class="card">
  <div class="thumb"><img src="assets/xxx.webp" alt="..."></div>
  <div class="body">
    <div class="title-row">
      <span class="vbar"></span>
      <h3 class="card-title">标题<span class="en">英文副标题</span></h3>
    </div>
    <div class="tags"><span class="tag">标签</span></div>
    <p class="one-liner">一句话简介</p>
    <div class="cta-row">
      <a class="cta" href="..." target="_blank" rel="noopener">CTA 文本</a>
    </div>
  </div>
</article>
```

卡片配色用 `.card.indigo` / `.card.rose` / `.card.emerald` 切换（默认 amber）。

## 加一张配图

CDN 分发级压缩管线：

```bash
sips -Z 1400 input.png --out resized.png      # 缩到合理 retina 尺寸
cwebp -q 80 -m 6 resized.png -o assets/output.webp
```

竖屏截图（如手机界面）用 `<div class="thumb contain">` 替代 `<div class="thumb">`，会放进带 tint 背景的"画框"里展示完整图。

## License

MIT
