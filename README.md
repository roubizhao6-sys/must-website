# MUST 介绍站（中文模板）

这是一个用于展示澳门科技大学（MUST）介绍的静态站模板（中文）。

目录结构：
- index.html — 首页
- about.html — 学校简介
- academics.html — 学院与专业
- admissions.html — 招生信息
- life.html — 校园生活
- contact.html — 联系我们（含前端演示表单）
- assets/css/style.css — 自定义样式
- assets/img/ — 占位图片

快速部署（GitHub Pages）：
1. 在仓库 Settings -> Pages 中，选择发布源（Branch: main, Folder: / (root)），保存。
2. 等待几分钟，访问 https://<你的用户名>.github.io/must-website/ 查看站点。

替换内容建议：
- 用学校官方 Logo 替换顶部文字（替换 index.html 与各页面中的 `MUST 介绍站`，或放置图片链接）。
- 在 assets/img/ 下放置真实校园照片并替换页面引用。
- 若需要表单功能：
  - 使用 Formspree（https://formspree.io/）或 Netlify Forms 将表单提交到邮件。
  - 或在 contact.html 中将前端表单改为指向你自己的后端 API。

开发与定制：
- 若想迁移到 React/Vite，我可以提供一个 Vite + React 的版本。
- 若需要中英双语支持，可引入 i18n 或制作独立英文页面。

联系方式：
如需我继续替换 Logo、添加更多页面或启用 GitHub Pages，请回复我想要的操作。