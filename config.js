/**
 * 小鸡单词 —— 全局配置
 *
 * 后端已从 Bmob 云迁移至【微信云开发 CloudBase】（腾讯云）。
 *
 * 使用前需要：
 *   1. 在微信开发者工具中开通云开发（工具栏 -> 云开发 -> 开通，创建环境）
 *   2. 将下方 CLOUD_ENV 替换为你的云开发环境 ID（如 "cloud1-xxxx"）
 *   3. 在云开发控制台创建数据库集合：user_data / diary / suggestion
 *   4. 部署云函数：cloudfunctions/login、cloudfunctions/data
 *   5. 编译运行
 */

const CLOUD_ENV = 'your-cloud-env-id';  // TODO: 替换为你的云开发环境 ID

module.exports = {
  CLOUD_ENV,
};
