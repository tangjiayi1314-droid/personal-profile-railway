# Livo 官网

Livo（漫语宙）漫画推荐平台静态官网单页。

## 本地运行

```bash
cd Livo官网
npm install
npm run dev
```

浏览器访问：<http://localhost:3000>。生产环境部署（如 Railway）使用 `npm start`，会读取环境变量 `PORT`。

## 部署到 Railway

按下面步骤即可把本站部署到 Railway 并获得公网访问链接。

### 第一步：确认代码已推送到 GitHub

- 当前项目在仓库里的路径是：**Livo官网**（即 Vibe Coding 仓库下的子目录）。
- 在终端执行：
  ```bash
  cd "/Users/yangyong/Documents/快看漫画_工作/K 智能体/Vibe Coding"
  git status
  ```
- 若有未提交修改，先提交并推送：
  ```bash
  git add Livo官网
  git commit -m "Livo 官网静态页"
  git push origin main
  ```
- 确保 GitHub 上该仓库能看到 **Livo官网** 目录及其中的 `index.html`、`package.json` 等文件。

### 第二步：登录 Railway 并连接 GitHub

1. 打开浏览器访问：**https://railway.app**
2. 点击 **Login**，选择 **Login with GitHub**，按提示授权 Railway 访问你的 GitHub 账号。
3. 登录成功后进入 Railway 控制台（Dashboard）。

### 第三步：从 GitHub 仓库创建项目

1. 点击 **New Project**（或 “Create new project”）。
2. 选择 **Deploy from GitHub repo**。
3. 若首次使用，按提示完成 “Configure GitHub App”，并选择要授权的仓库（勾选包含 **Vibe Coding / Livo官网** 的那个仓库）。
4. 在仓库列表中选中你的 **Vibe Coding** 仓库，点击 **Deploy**。
5. Railway 会创建一个新项目并开始第一次部署（可能先失败，因为还没设置根目录）。

### 第四步：设置根目录为 Livo官网

1. 在项目中点击刚创建的服务（Service，通常显示为你的仓库名）。
2. 打开 **Settings** 标签页。
3. 找到 **Root Directory**（或 “Source” 下的 Root Directory）。
4. 点击 **Configure** 或输入框，将根目录改为：
   ```text
   Livo官网
   ```
5. 保存后 Railway 会自动重新部署（Redeploy）。  
   - 若界面是 “Build” 相关设置：在 **Build** 里把 Root Directory 设为 `Livo官网`，**Start Command** 留空（使用 `package.json` 里的 `npm start`）。

### 第五步：生成公网访问链接（Public Domain）

1. 在同一服务的 **Settings** 里找到 **Networking** 区域（或顶部 **Settings → Networking**）。
2. 点击 **Generate Domain**（或 “Add public domain”）。
3. Railway 会分配一个类似 `xxx.up.railway.app` 的域名。
4. 等待部署状态为 **Success / Active** 后，点击该域名或 “Open” 即可在浏览器中打开你的 Livo 官网。

### 第六步：（可选）绑定自己的域名

- 在 **Settings → Networking → Domains** 中点击 **Custom Domain**，输入你的域名（例如 `www.example.com`）。
- 按页面提示在域名服务商处添加 CNAME 记录指向 Railway 给出的目标地址，验证通过后即可用自定义域名访问。

### 常见问题

| 情况 | 处理方式 |
|------|----------|
| 部署失败：找不到 `package.json` | 确认 **Root Directory** 已设为 `Livo官网`，且 GitHub 上该目录下有 `package.json`。 |
| 访问 404 或空白 | 确认 **Start Command** 未覆盖为其他命令（应使用默认的 `npm start`，即 `serve -s . -l $PORT`）。 |
| 端口错误 | Railway 会自动注入 `PORT`，无需在项目里写死端口。 |

---

部署完成后，你的 Livo 官网可通过 **https://你的域名.up.railway.app** 访问。若你卡在某一步，告诉我当前进行到第几步、界面提示或报错内容，我可以按你的截图/提示一步步帮你排查。

## 替换图片

当前使用占位图（SVG），替换为正式资源时：

- **Hero 插画**：替换 `images/hero-illustration.svg`
- **探索区插画**：替换 `images/explore-comic.svg`
- **热门/最新漫画封面**：替换 `images/covers/` 下对应文件（或改为 `.png`/`.jpg` 并更新 `index.html` 中的 `src`）

替换后无需改代码逻辑，仅需保证路径与 `index.html` 中引用一致。

## 目录结构

```
Livo官网/
├── index.html       # 单页主文件
├── package.json     # Railway 部署用
├── css/style.css    # 样式（含响应式）
├── js/main.js       # 热门漫画滚动、订阅表单校验
├── images/          # 图片与占位图
└── README.md
```
