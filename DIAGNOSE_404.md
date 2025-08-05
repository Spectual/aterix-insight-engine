# 404错误详细诊断指南

## 立即检查步骤

### 1. 检查GitHub Pages设置
访问：`https://github.com/Spectual/aterix-insight-engine/settings/pages`

**应该看到**：
- Source: "GitHub Actions"
- 如果有URL显示，应该是：`https://spectual.github.io/aterix-insight-engine/`

### 2. 检查Actions状态
访问：`https://github.com/Spectual/aterix-insight-engine/actions`

**应该看到**：
- "Deploy to GitHub Pages" 工作流
- 最新的运行状态（绿色勾号表示成功）

### 3. 尝试访问的URL
```
https://spectual.github.io/aterix-insight-engine/
```

**注意**：
- 必须包含末尾的斜杠
- 用户名是 `spectual`
- 仓库名是 `aterix-insight-engine`

## 常见问题及解决方案

### 问题1：GitHub Pages未启用
**症状**：访问URL显示404
**解决**：
1. 进入仓库Settings → Pages
2. Source选择"GitHub Actions"
3. 保存设置

### 问题2：Actions部署失败
**症状**：Actions页面显示红色叉号
**解决**：
1. 点击失败的运行
2. 查看详细错误信息
3. 确保仓库是公开的

### 问题3：部署成功但页面404
**症状**：Actions成功但访问404
**解决**：
1. 等待5-10分钟（首次部署较慢）
2. 清除浏览器缓存
3. 尝试无痕模式访问

### 问题4：URL格式错误
**症状**：访问错误URL
**正确URL**：`https://spectual.github.io/aterix-insight-engine/`
**错误URL**：
- `https://spectual.github.io/aterix-insight-engine`（缺少斜杠）
- `https://your-username.github.io/aterix-insight-engine/`（用户名错误）

## 手动验证

### 1. 检查构建文件
```bash
npm run build
ls -la dist/
```

### 2. 检查index.html内容
确保包含正确的路径：
```html
<script src="/aterix-insight-engine/assets/..."></script>
```

### 3. 本地测试
```bash
npm run preview
```
访问：`http://localhost:4173/aterix-insight-engine/`

## 最新修复

已应用的修复：
- ✅ 配置了正确的base路径
- ✅ 添加了构建配置
- ✅ 创建了重定向页面
- ✅ 添加了SPA路由支持

## 联系支持

如果问题持续存在：
1. 检查GitHub仓库权限
2. 确认GitHub Pages功能已启用
3. 查看Actions详细日志 