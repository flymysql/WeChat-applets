
# 小鸡单词 —— 微信小程序背单词应用

![兰州小红鸡](https://picture-1256429518.cos.ap-chengdu.myqcloud.com/blog/110601.png)

> 根据用户记忆遗忘曲线安排每天学习计划的背单词微信小程序，已在微信小程序平台发布使用。

## ✨ 2026 现代化升级

- **配置集中化**：Bmob 云端密钥从硬编码占位符抽离到 [`config.js`](config.js)，一处配置全局生效
- **基础库升级**：`project.config.json` libVersion 2.3.0 → 3.7.8，启用新编译增强特性
- **新增 `sitemap.json`** + `app.json` 的 `sitemapLocation`（微信索引要求）
- **性能优化**：`app.json` 开启 `lazyCodeLoading: "requiredComponents"`（按需注入组件）
- **API 现代化**：`wx.getSystemInfoSync` → `wx.getWindowInfo`（带兼容回退）
- **健壮性修复**：修复 `store` 函数未定义、`qcloud` 缺失导致的分享场景潜在报错
- 页面与功能逻辑保持不变

### 快速开始

1. 在 [bmob.cn](https://bmob.cn) 注册并创建应用，获取 AppID 与密钥
2. 修改 [`config.js`](config.js) 中的 `BM_APP_ID` / `BM_SECRET_KEY`
3. 用微信开发者工具导入本项目（AppID 已配置：`wx90951b51c0e9f6f9`）

### 目录结构

```
app.js / app.json / app.wxss   # 全局配置
config.js                       # Bmob 云配置（集中管理）
pages/                          # 14 个业务页面
  study/ 学习                   job/ 选词
  all_detail/ 统计              search/ 搜索
  detail-word/ 单词详情          me/ 我的
  choice/ 选择                  test/ 测试
  collect_card/ 收藏卡          audio_test/ 语音测试
  about/ 关于                   my_word/ 我的单词
  suggestion/ 建议
data/                           # 词库（四六级/考研/专八）
dist/                           # Bmob SDK
utils/                          # 工具库（含 wxcharts 图表）
```

## 项目介绍

**这个背单词小程序有哪些特点？**

1. 根据用户记忆遗忘曲线安排每天的学习计划
2. 每天学习的细节比普通背单词程序更详细，用户可以实时看到自己每天忘记哪些单词，熟悉哪些单词
3. 用户自主选词，自己选择要背的单词，使用起来更主动
4. 功能齐全，市场背单词程序有的功能，在这个小程序上都有，可使用登录备份等功能

> 这是一个可以根据用户记忆曲线安排用户每天学习计划的背单词小程序，并且依托微信这个巨大的流量平台已经在小程序流量平台发布，拥有了一定数量的用户

- 项目免责说明：该项目界面 UI 一定程度模仿墨墨背单词，由于该项目并非用于商业，免费且开源，仅供学习参考，最终解释权归项目负责人所有

![兰州小红鸡](https://picture-1256429518.cos.ap-chengdu.myqcloud.com/blog/110102.jpg)

**项目主页**：[背单词微信小程序--小鸡单词](https://me.idealli.com/post/118d23db.html)

**更新日志**
- 2018-11-02：UI 美化
- 2018-10-30：上线微信小程序市场，可通过微信搜索"小鸡单词"使用
