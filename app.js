//app.js
var Bmob = require('/dist/Bmob-1.6.4.min.js');
//var qcloud = require('./vendor/wafer2-client-sdk/index');
//var config = require('./config');
var util = require('./utils/util.js')
Bmob.initialize("你的bmob云appid", "你的bmob云密钥");

App({
  globalData:{
    userInfo:[]
  },
  appData: {
 
  },
  onLaunch(opt) {
    this.appData.opt = opt
   // qcloud.setLoginUrl(config.service.loginUrl);  //设置登录地址
   // this.doLogin();
    Bmob.User.auth().then(res => {
      console.log(res)
      const query = Bmob.Query('_User');
      query.get(res.objectId).then(res => {
        console.log(res)
        wx.setStorage({
          key: 'data_objectid',
          data: res.data_objectid,
        })
      }).catch(err => {
        console.log(err)
      })
      wx.setStorage({
        key: 'usr_objectId',
        data: res.objectId,
      })
      
      console.log('一键登陆成功')

    }).catch(err => {
      console.log(err)
    });

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
      //判断是否是从微信群内打开该程序的
      wx.getShareInfo({
        shareTicket: opt.shareTicket,
        //含GId的情况
        success: (res) => {
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
              let GId = res.data.data
              store(that, userInfo, opt, GId)
            }
          })
        },
        //不含GId的情况
        fail: function (res) {
          store(that, userInfo, opt)
        }
      })
    }
  },
  
})