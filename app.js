// app.js —— 小鸡单词
var config = require('./config.js');
var util = require('./utils/util.js')

// 初始化云开发（腾讯云 CloudBase，替代原 Bmob 云）
if (!wx.cloud) {
  console.error('当前基础库版本过低，请使用 2.2.3 以上版本以支持云开发');
} else {
  wx.cloud.init({
    env: config.CLOUD_ENV,
    traceUser: true,
  });
}

App({
  globalData:{
    userInfo:[]
  },
  appData: {
 
  },
  onLaunch(opt) {
    this.appData.opt = opt

    // 云开发登录：获取 openid 并保存（替代 Bmob.User.auth）
    this.cloudLogin();

    this.globalData.userInfo=wx.getStorageSync("userInfo")
    if(!wx.getStorageSync("word_list")&&!wx.getStorageSync("all_detail")){
      wx.setStorage({
        key: 'all_detail',
        data: [],
      })

      wx.setStorage({
        key: 'word_list',
        data: [{"word":"equip","ease":0.5,"day":0},{"word":"frown","ease":0.5,"day":0},{"word":"fasten","ease":0.5,"day":0},{"word":"software","ease":0.5,"day":0},{"word":"stir","ease":0.5,"day":0},{"word":"distribution","ease":0.5,"day":0},{"word":"flexible","ease":0.5,"day":0},{"word":"solution","ease":0.5,"day":0},{"word":"lad","ease":0.5,"day":0},{"word":"panel","ease":0.5,"day":0},{"word":"ministry","ease":0.5,"day":0},{"word":"supreme","ease":0.5,"day":0},{"word":"supreme","ease":0.5,"day":0},{"word":"describe","ease":0.5,"day":0},{"word":"limb","ease":0.5,"day":0},{"word":"circumstance","ease":0.5,"day":0},{"word":"core","ease":0.5,"day":0},{"word":"assistant","ease":0.5,"day":0},{"word":"mess","ease":0.5,"day":0},{"word":"minus","ease":0.5,"day":0},{"word":"sector","ease":0.5,"day":0},{"word":"detection","ease":0.5,"day":0},{"word":"statue","ease":0.5,"day":0},{"word":"saucer","ease":0.5,"day":0},{"word":"skillful","ease":0.5,"day":0},{"word":"civilization","ease":0.5,"day":0},{"word":"overhead","ease":0.5,"day":0},{"word":"hobby","ease":0.5,"day":0},{"word":"statistic","ease":0.5,"day":0},{"word":"pregnant","ease":0.5,"day":0}],
      })
      wx.setStorage({
        key: 'day_task',
        data: 10,
      })
      wx.setStorage({
        key: "my_word_num",
        data: 1000,
      })

      wx.setStorage({
        key: "free_word_num",
        data: 1000,
      })
    }    
  },

  /**
   * 云开发登录：调用 login 云函数获取 openid
   * 替代原 Bmob.User.auth() 一键登录
   */
  cloudLogin() {
    if (!wx.cloud) return Promise.resolve(null);
    return wx.cloud.callFunction({
      name: 'login',
    }).then(res => {
      const openid = res.result && res.result.openid;
      if (openid) {
        wx.setStorageSync('openid', openid);
        console.log('云开发登录成功, openid:', openid);
      }
      return openid;
    }).catch(err => {
      console.error('云开发登录失败', err);
      return null;
    });
  },

  onShow(opt) {
    this.storeUser_network(opt)//每次打开程序都启动存储用户关系表
  },
  
 
  storeUser_network(opt) {
    const that = this
    const userInfo = wx.getStorageSync('user_info_F2C224D4-2BCE-4C64-AF9F-A6D872000D1A')
    if (userInfo) {//已缓存的用户数据直接用
      getGId(that, userInfo, opt)
    } else {
      this.userInfoReadyCallback = (userInfo) => {  //获取用户信息后的回调函数
        getGId(that, userInfo, opt)
      }
    }
    function getGId(that, userInfo, opt) {
      // 判断是否是从微信群内打开该程序的
      wx.getShareInfo({
        shareTicket: opt && opt.shareTicket,
        // 含GId的情况
        success: (res) => {
          // qcloud 为可选依赖：未接入 waft2 云开发时跳过 GId 上报
          if (typeof qcloud !== 'undefined' && qcloud.request) {
            qcloud.request({
              login: false,
              data: {
                appId: that.appData.appId,
                openId: userInfo.openId,
                encryptedData: res.encryptedData,
                iv: res.iv
              },
              url: `${that.appData.baseUrl}getGId`,
              success: (res) => {
                const GId = res.data.data
                safeStore(that, userInfo, opt, GId)
              }
            })
          } else {
            safeStore(that, userInfo, opt)
          }
        },
        // 不含GId的情况
        fail: function (res) {
          safeStore(that, userInfo, opt)
        }
      })
    }

    // 原实现缺失的 store 函数：静默兼容（未接入云开发时数据仅存本地）
    function safeStore(that, userInfo, opt, GId) {
      try {
        wx.setStorageSync('user_info_local', userInfo || {})
        if (GId) wx.setStorageSync('group_id', GId)
        console.log('[小鸡单词] 用户关系记录已保存（本地模式）')
      } catch (e) {
        console.warn('[小鸡单词] 保存用户关系失败', e)
      }
    }
  },
  
})
