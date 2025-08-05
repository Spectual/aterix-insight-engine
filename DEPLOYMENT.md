# GitHub Pages 部署说明

## 自动部署

本项目已配置GitHub Actions自动部署到GitHub Pages。

### 部署步骤：

1. **推送代码到main分支**
   ```bash
   git add .
   git commit -m "Update for deployment"
   git push origin main
   ```

2. **启用GitHub Pages**
   - 进入GitHub仓库设置
   - 找到 "Pages" 选项
   - 在 "Source" 中选择 "GitHub Actions"

3. **查看部署状态**
   - 在GitHub仓库页面点击 "Actions" 标签
   - 查看 "Deploy to GitHub Pages" 工作流运行状态

## 手动部署

如果需要手动部署：

```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 预览构建结果
npm run preview
```

## 访问地址

部署成功后，网站将在以下地址可用：
`https://[your-username].github.io/aterix-insight-engine/`

## 故障排除

### 404错误解决方案：

1. **检查仓库设置**：
   - 确保仓库是公开的
   - 在Settings → Pages中，Source选择"GitHub Actions"

2. **检查Actions**：
   - 在GitHub仓库页面点击"Actions"标签
   - 查看"Deploy to GitHub Pages"工作流是否成功运行

3. **等待部署完成**：
   - 首次部署可能需要5-10分钟
   - 部署完成后，GitHub会显示网站URL

4. **清除浏览器缓存**：
   - 按Ctrl+F5强制刷新页面
   - 或清除浏览器缓存后重试

5. **检查URL格式**：
   - 确保URL格式为：`https://[username].github.io/aterix-insight-engine/`
   - 注意末尾的斜杠

### 常见问题：

- **仓库名称不匹配**：确保vite.config.ts中的base路径与仓库名称一致
- **分支名称**：确保代码在main分支上
- **权限问题**：确保GitHub Actions有部署权限

## 注意事项

- 确保仓库是公开的（GitHub Pages免费版要求）
- 首次部署可能需要几分钟时间
- 如果遇到路径问题，检查vite.config.ts中的base配置
- 已添加SPA路由支持，解决刷新页面404问题 