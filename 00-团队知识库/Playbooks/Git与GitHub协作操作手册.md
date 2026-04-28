# Git 与 GitHub 协作操作手册

适用于团队共同维护项目文档与代码，覆盖本地 Git、GitHub、提交更新与拉取项目。

## 1. 基础概念

- 工作区：你正在编辑的本地文件。
- 暂存区：即将进入本次提交的文件集合。
- 本地提交（commit）：保存在你电脑里的版本历史。
- 远程推送（push）：把本地提交上传到 GitHub，团队可见。
- 远程拉取（pull）：把 GitHub 最新提交同步到本地。

一句话记忆：

- `commit` = 本地保存
- `push` = 上传 GitHub
- `pull` = 下载并合并远程更新

## 2. 日常更新文档（推荐流程）

在仓库根目录执行：

```bash
git status -- "00-团队知识库" "AI渠道数据分析工具"
git add "00-团队知识库" "AI渠道数据分析工具"
git diff --cached --name-only
git commit -m "更新共享知识库与项目文档"
git push origin main
```

说明：

- 优先按目录精确 `git add`，避免误提交其他项目文件。
- 提交前看一次 `git diff --cached --name-only` 做自检。

## 3. 如何判断是否已经同步到 GitHub

```bash
git status
```

常见结果解读：

- `Your branch is up to date with 'origin/main'`：已同步。
- `Your branch is ahead of 'origin/main' by N commits`：本地有提交未推送。
- `nothing to commit, working tree clean`：当前没有未提交改动。

## 4. 首次从 GitHub 拉取项目

```bash
git clone https://github.com/<owner>/<repo>.git
cd <repo>
```

如果已配置 SSH：

```bash
git clone git@github.com:<owner>/<repo>.git
cd <repo>
```

## 5. 已有本地仓库，拉取最新代码

```bash
git pull origin main
```

等价于：

```bash
git fetch origin main
git merge origin/main
```

建议先检查本地状态：

```bash
git status
```

若有未提交改动，可先暂存：

```bash
git stash
git pull origin main
git stash pop
```

## 6. 常见问题与处理

### 6.1 `cd` 路径失败（含空格）

```bash
cd "/Users/xxx/Documents/快看漫画_工作/K 智能体/Vibe Coding/AI渠道数据分析工具"
```

或转义空格：

```bash
cd /Users/xxx/Documents/快看漫画_工作/K\ 智能体/Vibe\ Coding/AI渠道数据分析工具
```

### 6.2 `git add "AI渠道数据分析工具"` 报未匹配文件

- 如果你已经在 `AI渠道数据分析工具` 目录内，请用：

```bash
git add .
```

- 如果你在上一级目录，请用：

```bash
git add "AI渠道数据分析工具"
```

### 6.3 `git push` 弹出钥匙串密码框

- 输入 Mac 登录密码（电脑解锁密码）。
- 这是 `git-credential-osxkeychain` 读取 GitHub 凭据的正常行为。

## 7. 团队协作建议

- 项目私有内容写在项目 `docs/`。
- 跨项目复用内容写在 `00-团队知识库/`。
- 每次变更都要有清晰提交信息，说明“为什么改”。
- 每周整理高频问答，更新 `FAQ/FAQ.md` 与 `INDEX.md`。
