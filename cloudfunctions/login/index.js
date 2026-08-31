/**
 * 云函数：login —— 获取用户 openid（替代原 Bmob.User.auth 一键登录）
 *
 * 部署方式：在微信开发者工具中右键 cloudfunctions/login -> 上传并部署
 */
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return {
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID || '',
  }
}
