{
  "class": "DepictionTabView",
  "minVersion": "0.4",
  "headerImage": "",
  "tintColor": "#0a84ff",
  "tabs": [
    {
      "class": "DepictionStackView",
      "tabname": "描述",
      "views": [
        {
          "class": "DepictionMarkdownView",
          "markdown": "WatchFix 是用于改善旧版 iOS 与 Apple Watch 连接、配对和协同功能兼容性的工具。<br><br>本分支重写并扩充了应用内插件说明，把防止信息卸载从原来的AppsSupport拆分出来；应用内关于页面切换语言；增加屏蔽iPhone上面的watch更新提示。一些界面的优化",
          "useRawFormat": true
        },
        {
          "class": "DepictionSpacerView",
          "spacing": 16
        },
        {
          "class": "DepictionSeparatorView"
        },
        {
          "class": "DepictionSpacerView",
          "spacing": 16
        }
      ]
    },
    {
      "class": "DepictionStackView",
      "tabname": "更新日志",
      "views": [
        {
          "class": "DepictionSubheaderView",
          "title": "2.0.2",
          "useBoldText": true,
          "useBottomMargin": false
        },
        {
          "class": "DepictionMarkdownView",
          "markdown": "更新 WatchFix mod 包，扩充应用内插件说明与多语言帮助，并细分手表 App 安装兼容、信息相关兼容和 watchOS 更新屏蔽模块。",
          "useRawFormat": true
        }
      ]
    }
  ]
}
