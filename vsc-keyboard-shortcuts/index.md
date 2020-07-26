# 修改vscode中的键盘快捷方式


<!--more-->

{{< typeit >}}
在使用vscode编码的过程中，经常右手不得不离开主键盘区，去敲击遥远的方向键。真的很难受。于是我在查阅一些资料后，更改了设置。
{{< /typeit >}}

## 调整选择补全

打开`keybindings.json`，添加以下内容：

```json
  {
    "key": "tab",
    "command": "acceptSelectedSuggestion",
    "when": "suggestWidgetVisible && textInputFocus"
  },
  {
    "key": "shift+tab",
    "command": "acceptSelectedSuggestion",
    "when": "suggestWidgetVisible && textInputFocus"
  },
  {
    "key": "tab",
    "command": "selectNextSuggestion",
    "when": "editorTextFocus && suggestWidgetMultipleSuggestions && suggestWidgetVisible"
  },
  {
    "key": "shift+tab",
    "command": "selectPrevSuggestion",
    "when": "editorTextFocus && suggestWidgetMultipleSuggestions && suggestWidgetVisible"
  }
```

如此即可实现按`tab`键、`shift+tab`循环选择suggestion，`Enter`键accept。

## 组合键代替方向键移动光标

打开`keybindings.json`，添加以下内容：

```json
{
    "key": "shift+j",
    "command": "cursorLeft",
    "when": "textInputFocus"
  },
  {
    "key": "left",
    "command": "-cursorLeft",
    "when": "textInputFocus"
  },
{
    "key": "shift+l",
    "command": "cursorRight",
    "when": "textInputFocus"
  },
  {
    "key": "right",
    "command": "-cursorRight",
    "when": "textInputFocus"
  },
  {
    "key": "shift+i",
    "command": "cursorUp",
    "when": "textInputFocus"
  },
  {
    "key": "up",
    "command": "-cursorUp",
    "when": "textInputFocus"
  },
  {
    "key": "shift+k",
    "command": "cursorDown",
    "when": "textInputFocus"
  },
  {
    "key": "down",
    "command": "-cursorDown",
    "when": "textInputFocus"
  }
```

即可实现`shift+j`左移光标，`shift+l`右移光标，`shift+i`上移光标，`shift+k`下移光标。
