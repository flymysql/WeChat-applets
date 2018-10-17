# -
一个用来背单词每天打卡的微信小程序，还有词汇测试，包含多种词库
后台由腾讯云wafer解决方案
=====================================
![image](https://raw.githubusercontent.com/flymysql/WeChat-applets/master/12.jpg)

## 源码简介

```tree
Demo
├── LICENSE
├── README.md
├── app.js
├── app.json
├── config.js
├── package.json
├── pages
│   ├── about
│   ├── audio_rest
│   ├── choice
│   ├── collect_test
│   ├── detail_word
│   ├── index
│   ├── job
│   ├── me
│   ├── my_word
│   ├── rank
│   ├── search
│   ├── study
│   ├── suggestion
│   └── test
├── utils
├── data
├── assets
├── images
└── vendor
    └── qcloud-weapp-client-sdk/
```

`app.js` 是小程序入口文件。

`app.json` 是小程序的微信配置，其中指定了本示例的两个页面，页面分别在 `pages/index/` 和 `pages/chat/` 目录下。

`config.js` 是我们小程序自己的业务配置。

`wafer2-client-sdk` 是[客户端 SDK](https://github.com/tencentyun/wafer2-client-sdk)

仅供学习，转载请注明出处
另外个人博客求一波友链 https://www.idealli.com
