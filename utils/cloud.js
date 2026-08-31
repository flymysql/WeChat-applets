/**
 * 云开发数据封装 —— 统一调用 data 云函数
 * 替代原 Bmob 的 Query / User API
 */

function call(action, data) {
  if (!wx.cloud) {
    return Promise.reject(new Error('当前基础库版本过低，无法使用云开发'));
  }
  return wx.cloud.callFunction({
    name: 'data',
    data: { action, data },
  }).then(res => {
    const r = res.result || {};
    if (!r.ok) {
      return Promise.reject(new Error(r.msg || '云函数调用失败'));
    }
    return r;
  });
}

/**
 * 备份用户数据到云端
 */
function backup(userData) {
  return call('backup', userData);
}

/**
 * 从云端恢复用户数据
 */
function restore() {
  return call('restore');
}

/**
 * 提交测试分数（排行榜）
 */
function setScore(score, userInfo) {
  return call('setScore', {
    score,
    headUrl: userInfo && userInfo.avatarUrl || '',
    title: userInfo && userInfo.nickName || '匿名',
  });
}

/**
 * 获取全球排行榜
 */
function getRank(limit) {
  return call('rank', { limit });
}

/**
 * 提交建议
 */
function suggest(content, name) {
  return call('suggest', { content, name });
}

module.exports = {
  backup,
  restore,
  setScore,
  getRank,
  suggest,
};
