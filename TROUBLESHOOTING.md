# 404错误故障排除指南

## 问题诊断步骤

### 1. 检查GitHub Pages设置

1. **进入GitHub仓库设置**：
   - 点击仓库页面的"Settings"标签
   - 在左侧菜单中找到"Pages"

2. **检查Pages配置**：
   - Source应该选择"GitHub Actions"
   - 如果显示"Deploy from a branch"，请改为"GitHub Actions"

### 2. 检查Actions运行状态

1. **查看Actions**：
   - 点击仓库页面的"Actions"标签
   - 查看"Deploy to GitHub Pages"工作流

2. **检查部署状态**：
   - 绿色勾号表示成功
   - 红色叉号表示失败
   - 点击失败的运行查看详细错误信息

### 3. 检查网站URL

正确的URL格式应该是：
```
https://spectual.github.io/aterix-insight-engine/
```

**注意**：
- 确保包含末尾的斜杠
- 用户名是`spectual`（不是您的GitHub用户名）
- 仓库名是`aterix-insight-engine`

### 4. 等待部署完成

- 首次部署可能需要5-10分钟
- 后续部署通常需要2-5分钟
- 在Actions页面可以看到实时进度

### 5. 清除浏览器缓存

- 按`Ctrl+F5`（Windows）或`Cmd+Shift+R`（Mac）强制刷新
- 或者清除浏览器缓存后重试

## 常见问题解决方案

### 问题1：显示"404 Not Found"

**可能原因**：
- GitHub Pages未正确配置
- 部署未完成
- URL格式错误

**解决方案**：
1. 检查GitHub Pages设置
2. 等待部署完成
3. 使用正确的URL格式

### 问题2：页面显示但样式/功能异常

**可能原因**：
- 资源路径问题
- JavaScript错误

**解决方案**：
1. 检查浏览器控制台错误
2. 确认base路径配置正确
3. 清除浏览器缓存

### 问题3：Actions部署失败

**可能原因**：
- 构建错误
- 权限问题
- 依赖问题

**解决方案**：
1. 查看Actions详细错误信息
2. 检查package.json和依赖
3. 确保仓库是公开的

## 手动验证步骤

### 1. 本地构建测试
```bash
npm run build
```

### 2. 检查构建输出
```bash
ls -la dist/
```

### 3. 检查index.html
确保包含正确的base路径：
```html
<script src="/aterix-insight-engine/assets/..."></script>
```

## 联系支持

如果问题仍然存在：
1. 检查GitHub Actions日志
2. 确认仓库权限设置
3. 验证GitHub Pages功能已启用

## 最新修复

已修复的问题：
- ✅ 配置了正确的base路径
- ✅ 添加了SPA路由支持
- ✅ 更新了GitHub Actions工作流
- ✅ 移除了环境变量依赖 