# 澳门科技大学（MUST）介绍站

一个用于展示澳门科技大学（Macau University of Science and Technology，MUST）的静态介绍站点，中英双语、Bootstrap 响应式设计，可直接部署到 GitHub Pages。

在线地址：<https://roubizhao6-sys.github.io/must-website/>

## 页面结构

| 中文 | English | 说明 |
| --- | --- | --- |
| `index.html` | `en/index.html` | 首页 |
| `about.html` | `en/about.html` | 学校简介 |
| `academics.html` | `en/academics.html` | 学院与专业 |
| `admissions.html` | `en/admissions.html` | 招生信息 |
| `life.html` | `en/life.html` | 校园生活 |
| `contact.html` | `en/contact.html` | 联系我们（含表单） |

每个页面右上角都有「English / 中文」语言切换按钮，可在对应语言页面之间跳转。

## 已包含的内容

- **官方校徽 Logo**：顶部导航栏已使用澳门科技大学官方校徽（`assets/img/logo.svg`）。
- **真实校园照片**：已替换占位图为 Wikimedia Commons 上的真实校园照片（鸟瞰、主楼、图书馆、庭院、运动场等）。
- **可用的联系表单**：`contact.html` / `en/contact.html` 已接入 Formspree，填写表单 ID 后即可把咨询发送到邮箱。
- **中英双语**：全部 6 个页面均提供中文与英文版本。

## 启用联系表单（Formspree）

1. 到 <https://formspree.io> 免费注册并创建一个表单。
2. 复制表单端点，形如 `https://formspree.io/f/abcdwxyz`。
3. 打开 `assets/js/contact.js`，把

   ```js
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```

   替换为你的真实端点，例如

   ```js
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/abcdwxyz";
   ```

4. 保存并提交即可。

> 未配置时，表单会自动回退为调用访客本机的邮件客户端（`mailto:`）发送，方便先测试前端效果。
>
> 如需改用 Netlify Forms，只需在 `contact.html` 的表单上添加 `data-netlify="true"`、`name="contact"` 等属性并将站点部署到 Netlify 即可（GitHub Pages 不提供后端表单服务）。

## 部署（GitHub Pages）

1. 在仓库 `Settings → Pages` 中选择发布源 `Deploy from a branch`，Branch 选 `main`，Folder 选 `/ (root)`，保存。
2. 等待几分钟，访问 `https://<你的用户名>.github.io/must-website/`。

## 图片版权与署名

- 校徽（`assets/img/logo.svg`）：澳门科技大学官方标志，来自中文维基百科。
- 校园照片来自 Wikimedia Commons，按 CC BY-SA 授权：
  - *An aerial view of MUST* — Winslowchen（CC BY-SA 3.0）
  - *Macau University of Science and Technology - Yard* — Winslowchen（CC BY-SA 3.0）
  - *Macau University of Science and Technology* — Bill9999360（CC BY-SA 4.0）
  - *Universidade de Ciência e Tecnologia de Macau*（2025-10-26）— Yumeto（CC BY-SA 4.0）
  - *Biblioteca da Universidade de Ciência e Tecnologia de Macau* — Yumeto（CC BY-SA 4.0）
  - *Campo de Futebol e de Atletismo da Universidade de Ciência e Tecnologia de Macau*（2026-06-27）— Yumeto（CC BY-SA 4.0）

## 免责声明

本站为介绍性质的模板站点，**并非**澳门科技大学官方网站；正式信息请以官网 <https://www.must.edu.mo/> 为准。

## 开发

直接编辑 HTML 文件即可；自定义样式位于 `assets/css/style.css`，表单逻辑位于 `assets/js/contact.js`。可使用任意静态服务器本地预览，例如：

```bash
python3 -m http.server 8000
```

然后访问 <http://localhost:8000/>。
