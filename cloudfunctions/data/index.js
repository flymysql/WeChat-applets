/**
 * 云函数：data —— 统一数据操作（替代原 Bmob 后端）
 *
 * 功能：
 *   - backup:   备份用户学习数据到 user_data 集合
 *   - restore:  从 user_data 集合恢复用户学习数据
 *   - setScore: 提交测试分数到 diary 集合（排行榜）
 *   - rank:     获取全球排行榜（diary 集合按 score 排序）
 *   - suggest:  提交建议到 suggestion 集合
 *
 * 数据库集合（在云开发控制台创建）：
 *   user_data   用户备份数据，_openid 自动记录
 *   diary       测试分数（排行榜）
 *   suggestion  用户建议
 *
 * 部署方式：微信开发者工具右键 cloudfunctions/data -> 上传并部署
 */
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const openid = wxContext.OPENID
  const { action, data } = event

  try {
    switch (action) {
      case 'backup': {
        const userData = data || {}
        // 先尝试更新，不存在则新增（按 openid 定位用户）
        const exist = await db.collection('user_data').where({ _openid: openid }).get()
        const doc = {
          username: userData.username || '',
          word_list: userData.word_list || [],
          day_num: userData.day_num || 10,
          all_detail: userData.all_detail || [],
          my_word_num: userData.my_word_num || 0,
          free_word_num: userData.free_word_num || 0,
          updateTime: db.serverDate(),
        }
        if (exist.data.length > 0) {
          await db.collection('user_data').doc(exist.data[0]._id).update({ data: doc })
          return { ok: true, id: exist.data[0]._id, action: 'update' }
        }
        const addRes = await db.collection('user_data').add({ data: doc })
        return { ok: true, id: addRes._id, action: 'create' }
      }

      case 'restore': {
        const exist = await db.collection('user_data').where({ _openid: openid }).get()
        if (exist.data.length === 0) {
          return { ok: false, msg: 'no_backup' }
        }
        const d = exist.data[0]
        return {
          ok: true,
          data: {
            word_list: d.word_list,
            day_num: d.day_num,
            all_detail: d.all_detail,
            my_word_num: d.my_word_num,
            free_word_num: d.free_word_num,
            username: d.username,
          },
        }
      }

      case 'setScore': {
        const score = data && data.score
        const headUrl = data && data.headUrl
        const title = data && data.title
        const exist = await db.collection('diary').where({ _openid: openid }).get()
        if (exist.data.length > 0) {
          await db.collection('diary').doc(exist.data[0]._id).update({
            data: { score, headUrl, title, updateTime: db.serverDate() },
          })
          return { ok: true, id: exist.data[0]._id, action: 'update' }
        }
        const addRes = await db.collection('diary').add({
          data: { score, headUrl, title, createTime: db.serverDate() },
        })
        return { ok: true, id: addRes._id, action: 'create' }
      }

      case 'rank': {
        const limit = Math.min(data && data.limit || 20, 100)
        const res = await db.collection('diary')
          .orderBy('score', 'desc')
          .limit(limit)
          .get()
        return { ok: true, data: res.data.map(d => ({
          score: d.score,
          headUrl: d.headUrl,
          title: d.title,
        })) }
      }

      case 'suggest': {
        const content = data && data.content
        const name = data && data.name
        if (!content) return { ok: false, msg: 'empty_content' }
        const addRes = await db.collection('suggestion').add({
          data: { content, name: name || '匿名', createTime: db.serverDate() },
        })
        return { ok: true, id: addRes._id }
      }

      default:
        return { ok: false, msg: 'unknown action: ' + action }
    }
  } catch (err) {
    console.error('[data] error:', err)
    return { ok: false, msg: err.message || String(err) }
  }
}
