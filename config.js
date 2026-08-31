/**
 * 小鸡单词 —— 全局配置
 *
 * 使用 Bmob 云后端（https://bmob.cn）存储用户数据。
 * 使用前请前往 Bmob 控制台创建应用，并将下方占位符替换为你的 AppID / 密钥。
 *
 * 快速开始：
 *   1. 在 bmob.cn 注册并创建应用
 *   2. 复制应用密钥到下方 BM_APP_ID / BM_SECRET_KEY
 *   3. 用微信开发者工具导入本项目即可运行
 */

const BM_APP_ID = '你的bmob云appid';      // TODO: 替换为你的 Bmob AppID
const BM_SECRET_KEY = '你的bmob云密钥';    // TODO: 替换为你的 Bmob 密钥

module.exports = {
  BM_APP_ID,
  BM_SECRET_KEY,
};
