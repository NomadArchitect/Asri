似水无声，形融于神，默默为你的笔记增添一份优雅和效率。

## 主题特性

* 🌓 支持亮色模式和暗色模式
* 📐 取消页面区块间的多余边距，内容自由延展，扩大展示范围
* 📃 默认隐藏顶栏，获得更多展示空间，优化窗口拖动区域

  * 📌 将鼠标移至窗口左上和右上部分有图标的区域即可自动弹出顶栏
  * 📌 主窗口用于拖动的区域改为**以下区域的空白部分**：

    * **标签栏**
    * **面包屑**
    * **左侧面板上部（仅在已钉住时、Mac 端生效）**
* 🚥 适配 #macOS# 红绿灯，避让红绿灯空间，适应任何布局。

  * ⭐️ 推荐在隐藏顶栏的状态下进入`设置`-`外观`-`代码片段`添加以下 js 代码，获得更好的观感：

    ```js
    const currentWindowModifyTfl = require("@electron/remote").getCurrentWindow();
    currentWindowModifyTfl.setTrafficLightPosition({ x: 16, y: 16 });
    ```

    ![tfl](assets/tfl-20231115183737-rp4hksq.png)
* 🗂️ 文档树目录缩进竖线
* 🌫️ 毛玻璃效果
* 🧩 插件样式适配：

  * [网页视图](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-webview)
  * [预览折叠列表](https://github.com/mdzz2048/siyuan-plugin-fold-list-preview)
* ……

主题仅为 css 样式修改，不含 js 代码，主题特性默认开启，如需关闭，请手动修改此主题的 theme.css 文件，将开头部分相关特性代码删除或注释掉，或手动删除 customizable 文件夹中的相关 css 文件：

* `customizable/blurring-anim.css`：搜索窗口、集市内容详情的弹出动画模糊过渡
* `customizable/cover-image.css`：题头图渐隐
* `customizable/filetree-indentation-lines.css`：文档树缩进线
* `customizable/hideBorders.css`：视觉上隐藏主界面分割线、边界线
* `customizable/hideToolbar.css`：隐藏顶栏、窗口拖动区域改动
* `customizable/translucency_components.css`：菜单、工具条、提示条等部件的毛玻璃背景
* `customizable/transluscency_tab-bar.css`：页签栏、面包屑区域毛玻璃背景

## 鸣谢

主题制作过程中参考借鉴了以下主题的相关代码，在此对各位主题开发者表示感谢 🙏：

| 借鉴内容                                   | 来自主题 | 作者 |
| -------------------------------------------- | ---------- | ------ |
| 1. 悬浮状态栏<br />2. Ctrl+P 窗口<br />3. 隐藏顶栏 | [Savor](https://github.com/royc01/notion-theme)         | [Roy](https://github.com/royc01)     |
| 页面滚动时面包屑显示阴影                   | [VSCode Lite](https://github.com/TinkMingKing/siyuan-themes-vscodelite)         | [TinkMingKing](https://github.com/TinkMingKing)     |
| 菜单背景模糊效果                           | [Cliff-Dark](https://github.com/chenshinshi/Cliff-Dark)         | [Crowds21](https://github.com/chenshinshi)     |
| 文档树缩进线                               | [Rem Craft](https://github.com/svchord/Rem-Craft)         | [Seven Chord](https://github.com/svchord)     |

## 其他
