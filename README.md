# 嵌入式开发工程师个人网站

这是一个展示嵌入式开发工程师个人信息的响应式网站，包含个人简介、项目展示、生活分享等多个板块。

## 功能特点

- 响应式设计，完美适配桌面端和移动端
- 现代化UI界面，包含动画和交互效果
- 深色主题和优雅的渐变效果
- 项目展示功能，支持详细的项目描述
- 照片墙和照片集展示功能
- 生活随笔和兴趣爱好展示
- 交互式联系表单，支持数据库存储
- 支持社交媒体链接
- 支持键盘快捷键操作照片查看器

## 技术栈

### 前端
- HTML5 (语义化标签)
- CSS3
  - Flexbox和Grid布局
  - CSS变量
  - 动画和过渡效果
  - 媒体查询实现响应式
- JavaScript
  - 原生JS实现交互
  - 模块化设计
  - 事件委托
  - 异步操作

### 后端
- PHP 7+
- MySQL 5.7+
- Apache/Nginx

### 工具和库
- Font Awesome 6.0 图标库
- normalize.css
- Google Fonts

## 目录结构

```
personal-website/
├── css/
│   ├── style.css          # 主样式文件
│   └── normalize.css      # CSS重置文件
├── js/
│   └── main.js           # 主JavaScript文件
├── images/
│   ├── profile.jpg       # 个人头像
│   ├── project1.jpg      # 项目图片1
│   ├── project2.jpg      # 项目图片2
│   ├── project3.jpg      # 项目图片3
│   ├── life1.jpg         # 生活照片1
│   ├── life2.jpg         # 生活照片2
│   └── gallery/          # 照片墙图片
├── php/
│   └── submit.php        # 表单处理脚本
├── index.html            # 首页
├── about.html            # 关于页面
├── projects.html         # 项目展示页面
├── life.html            # 生活随笔页面
├── contact.html         # 联系页面
└── README.md            # 项目文档
```

## 导航栏结构

网站导航栏按以下顺序排列：
1. 首页
2. 项目
3. 关于我
4. 生活随笔
5. GitHub
6. 联系我

## 功能模块说明

### 1. 首页 (index.html)
- 个人简介展示
- 技能标签云
- 项目预览
- 社交媒体链接
- 动态二进制背景效果
- 悬浮电路图案效果

### 2. 项目展示 (projects.html)
- 项目卡片展示
- 项目详细信息
- 技术栈标签
- 项目时间线
- 团队规模显示

### 3. 生活分享 (life.html)
- 兴趣爱好展示
- 生活随笔
- 照片墙
- 照片集查看器
- 旅行时间线
- 个人感悟

### 4. 联系页面 (contact.html)
- 联系表单
- 表单验证
- 数据库存储
- 响应反馈

## 安装和配置

1. 环境要求
   - PHP 7.0+
   - MySQL 5.7+
   - Apache/Nginx
   - mod_rewrite 模块（Apache）

2. 数据库配置
   ```sql
   CREATE DATABASE personal_website;
   USE personal_website;
   CREATE TABLE contact_messages (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(100) NOT NULL,
       email VARCHAR(100) NOT NULL,
       subject VARCHAR(200) NOT NULL,
       message TEXT NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

3. 安装步骤
   ```bash
   # 1. 克隆仓库
   git clone https://github.com/yourusername/personal-website.git

   # 2. 设置权限
   chmod 755 -R personal-website
   chmod 777 -R personal-website/images

   # 3. 配置数据库连接
   # 编辑 submit.php 中的数据库配置信息
   ```

## 自定义配置

### 主题定制
在 `css/style.css` 中修改CSS变量：
```css
:root {
    --primary-color: #1a365d;
    --secondary-color: #2563eb;
    --accent-color: #3b82f6;
    --light-bg: #f3f4f6;
}
```

### 添加新项目
1. 在 `projects.html` 中复制项目卡片模板
2. 更新项目信息和图片
3. 在 `images` 目录添加项目图片

### 添加照片集
1. 在 `images` 目录创建新的照片文件夹
2. 在 `life.html` 的 `photoCollections` 对象中添加新集合
3. 更新照片墙网格布局

## 性能优化

- 图片优化
  - 使用适当的图片尺寸
  - 压缩图片文件
  - 使用响应式图片
- 代码优化
  - 最小化CSS和JavaScript
  - 使用异步加载
  - 实现懒加载

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- iOS Safari
- Android Chrome

## 开发建议

1. 代码风格
   - 使用2空格缩进
   - 使用语义化标签
   - 保持代码整洁和注释完整

2. 图片处理
   - 照片尺寸：800x600px（横向）
   - 项目图片：1200x400px
   - 头像：300x300px

3. 性能考虑
   - 压缩图片
   - 合并CSS和JS文件
   - 使用CDN加载第三方库

## 维护和更新

1. 定期更新
   - 检查并更新依赖库
   - 更新项目展示内容
   - 添加新的生活照片

2. 备份
   - 定期备份数据库
   - 备份图片资源
   - 保存源代码版本

## 许可

MIT License

## 作者

王文龙
- GitHub: [github.com/wangwenlong](https://github.com/wangwenlong)
- Email: contact@example.com

## 更新日志

### v1.0.0 (2024-03-11)
- 初始版本发布
- 完成基本功能实现
- 添加响应式设计
- 实现照片墙功能

### v1.1.0 (计划中)
- 添加深色模式
- 优化照片查看器
- 添加更多交互效果
- 改进表单验证

#   M y - S i t e 
 
 