# Musje - 简谱音乐处理工具

![Node.js 24+](https://img.shields.io/badge/Node.js-24%2B-green)
![License](https://img.shields.io/badge/License-MIT-blue)

Musje 是一个基于 JavaScript 的简谱（123 谱）音乐处理工具，支持简谱文本解析、SVG 可视化渲染和 MIDI 音频播放。本项目旨在为QinJianPu项目提供编辑器。

## 🎵 功能特性

- **简谱解析**: 支持中文简谱语法（如 "1=C G"）的完整解析
- **SVG 渲染**: 基于 Snap.svg 实现高质量的乐谱 SVG 可视化
- **MIDI 播放**: 集成 MIDI.js 实现音频播放功能
- **交互编辑**: 提供 CodeMirror 插件支持富文本编辑体验
- **模块化设计**: 独立的模型、解析器、渲染器和播放器模块
- **多格式输出**: 支持 UMD 模块格式，兼容浏览器、CommonJS 和 AMD

## 🚀 快速开始

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/jianpu/musje.git
cd musje

# 安装依赖 (需要 Node.js 24+)
npm install
```

### 构建项目

```bash
# 完整构建 (CSS + JS + 文档)
npm run build

# 单独构建各部分
npm run build:css          # 复制 CSS 文件
npm run build:dev          # 构建开发版本
npm run build:min          # 构建压缩版本  
npm run build:codemirror   # 构建 CodeMirror 插件
npm run build:doc          # 生成 API 文档
```

### 清理输出

```bash
npm run clean
```

### 运行测试

```bash
npm test
```

## 📁 项目结构

```
.
├── demo/                  # 示例页面
├── doc/                   # API 文档 (构建后生成)
├── lib/                   # 构建输出目录
│   ├── musje.css          # 核心样式文件
│   ├── musje.js           # 开发版本
│   ├── musje.min.js       # 压缩版本
│   └── addon/codemirror/  # CodeMirror 插件
├── lib-src/               # CSS 源文件目录
├── src/                   # 源代码目录
│   ├── model/             # 数据模型 (Score, Note, Chord 等)
│   ├── parser/            # 解析器 (Jison 语法文件和 loader)
│   ├── renderer/          # 渲染器 (SVG 布局和绘制)
│   ├── player/            # 播放器 (PlayerMixin)
│   └── addon/codemirror/  # CodeMirror 扩展插件
├── package.json           # 项目配置和依赖
├── webpack.config.js      # Webpack 开发配置
└── webpack.min.config.js  # Webpack 生产配置
```

## 🔧 技术栈

- **核心语言**: JavaScript (ES2015+)
- **构建工具**: Webpack 5, Babel 7
- **解析器**: Jison
- **渲染引擎**: Snap.svg
- **音频播放**: MIDI.js
- **编辑器**: CodeMirror
- **文档生成**: JSDoc 4
- **运行环境**: Node.js 24+

## 📖 使用示例

### 在浏览器中使用

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="lib/musje.css">
    <script src="demo/lib/snap.svg-min.js"></script>
    <script src="demo/lib/MIDI.min.js"></script>
    <script src="lib/musje.js"></script>
</head>
<body>
    <div id="score"></div>
    <script>
        // 解析简谱文本
        const score = musje.Score.parse('1=C G\n4/4\n1 2 3 1 | 3 4 5 - ||');
        
        // 渲染到指定元素
        score.renderTo(document.getElementById('score'));
        
        // 播放音乐
        score.play();
    </script>
</body>
</html>
```

### 在模块化环境中使用

```javascript
import musje from './lib/musje.js';

const score = musje.Score.parse('1=C G\n4/4\n1 2 3 1 | 3 4 5 - ||');
score.renderTo(document.getElementById('score'));
```

## 🛠️ 开发指南

### 编辑 CSS

CSS 源文件存放在 `lib-src/` 目录中：
- `lib-src/musje.css` - 核心音乐渲染样式
- `lib-src/addon/codemirror/musje-codemirror.css` - CodeMirror 插件样式

修改后运行 `npm run build:css` 复制到输出目录。

### 添加新功能

项目采用模块化架构，主要模块包括：

- **Model**: `src/model/` - 数据模型层
  - `Score.js` - 乐谱主类
  - `Note.js`, `Chord.js`, `Bar.js` - 音符、和弦、小节等
- **Parser**: `src/parser/` - 语法解析器
  - `parser.jison` - Jison 语法规则文件
  - `jison-loader.js` - Webpack loader
- **Renderer**: `src/renderer/` - SVG 渲染
  - `Layout/` - 布局管理
  - `Renderer/` - SVG 绘制
  - `defs/` - 符号定义
- **Player**: `src/player/` - 音频播放
  - `PlayerMixin.js` - 播放功能混入

### 生成文档

API 文档基于源代码中的 JSDoc 注释自动生成：

```bash
npm run build:doc
```

生成的文档位于 `doc/` 目录，可通过浏览器访问 `doc/index.html` 查看。

## 🧪 测试

项目使用 Mocha + Chai 进行单元测试：

```bash
# 运行所有测试
npm test

# 测试文件位置
src/**/__tests__/*.js
```

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE)。

## 🙏 致谢

- 原作者 Malcom Wu 的杰出工作
- Jison、Snap.svg、MIDI.js、CodeMirror 等开源项目
- 所有贡献者和用户的支持

---

**注意**: 本项目需要手动引入外部依赖（Snap.svg、MIDI.js），请参考 `demo/` 目录中的示例。