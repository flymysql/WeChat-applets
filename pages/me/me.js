
var Bmob = require('../../dist/Bmob-1.6.4.min.js');
Bmob.initialize("你的bmob云appid", "你的bmob云密钥");
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yes:false,
    toforgive:false,
    tobackup:false,
    user_note:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = this.set_time(new Date())
      this.setData({
        have_done: wx.getStorageSync(time),
        day_task: wx.getStorageSync('day_task'),
        my_word_num: wx.getStorageSync("my_word_num"),
        free_word_num: wx.getStorageSync("free_word_num"),
        complete_day: wx.getStorageSync("day_num"),
        add_word_num:wx.getStorageSync("word_list").length,
      })
      if(!wx.getStorageSync("userInfo")){
        this.setData({user_note:"点击获得头像昵称"})
      }
      else{
        this.setData({
          userInfo: wx.getStorageSync("userInfo"),
          hasUserInfo: true,
          user_note: wx.getStorageSync("userInfo").nickName
        })
      }


  },

  show_backup(){
    if(this.data.tobackup===false){
      this.setData({ tobackup: true })
    }
    else{
      this.setData({ tobackup: false })
    }
    
  },

  toup(){
    const query = Bmob.Query('user_data');
    var obid = wx.getStorageSync("data_objectid");
    if( obid===undefined || obid===null){
      query.set("username", wx.getStorageSync("userInfo").nickName)
      query.set("word_list", wx.getStorageSync("word_list"))
      query.set("day_num", wx.getStorageSync("day_num"))
      query.set("openid", wx.getStorageSync("openid"))
      query.set("all_detail", wx.getStorageSync("all_detail"))
      query.set("my_word_num", wx.getStorageSync("my_word_num"))
      query.set("free_word_num", wx.getStorageSync("free_word_num"))
      query.save().then(res => {
        console.log(res)
        wx.setStorage({
          key: 'data_objectid',
          data: res.objectId,
        })
        const query2 = Bmob.Query('_User');
        query2.get(wx.getStorageSync("usr_objectId")).then(res => {
          console.log(res)
          res.set('data_objectid', wx.getStorageSync("data_objectid"))
          res.save()
        }).catch(err => {
          console.log(err)
        })
      }).catch(err => {
        console.log(err)
      })
    }
    else{
      query.get(obid).then(res => {
        console.log(res)
        res.set("username", wx.getStorageSync("userInfo").nickName)
        res.set("word_list", wx.getStorageSync("word_list"))
        res.set("day_num", wx.getStorageSync("day_num"))
        res.set("openid", wx.getStorageSync("openid"))
        res.set("all_detail", wx.getStorageSync("all_detail"))
        res.set("my_word_num", wx.getStorageSync("my_word_num"))
        res.set("free_word_num", wx.getStorageSync("free_word_num"))
        res.save()

      }).catch(err => {

      })
    }
    
    this.setData({tobackup:false})
    wx.showToast({
      title: '备份成功'
    })

    
  },

  my_word_list(){
    wx.navigateTo({
      url: '../my_word/my_word',
    })
  },

  toback(){
    const query = Bmob.Query('user_data');
    query.get(wx.getStorageSync("data_objectid")).then(res => {
      wx.setStorage({
        key: 'word_list',
        data: res.word_list,
      })
      wx.setStorage({
        key: 'day_num',
        data: res.day_num,
      })
      wx.setStorage({
        key: 'all_detail',
        data: res.all_detail,
      })
      wx.setStorage({
        key: 'my_word_num',
        data: res.my_word_num,
      })
      wx.setStorage({
        key: 'free_word_num',
        data: res.free_word_num,
      })
      wx.showToast({
        title: '还原成功'
      })
    }).catch(err => {
      console.log(err)
      wx.showToast({
        title: '还原失败，请确认登陆并有先前的备份！'
      })
    })
    this.setData({tobackup:false})
  },


  getUserInfo: function (e) {
    
    var info = e.detail.userInfo;
    app.globalData.userInfo = info
    
    Bmob.User.upInfo(info)
    console.log(info)
    this.setData({
      userInfo: info,
      hasUserInfo: true,
      user_note: info.nickName
    })
    wx.setStorage({
      key: 'userInfo',
      data: info,
    })
  },
    
  set_time: function (date) {
    var month = date.getMonth() + 1
    var day = date.getDate()
    var year = date.getFullYear()
    const formatNumber = n => {
      n = n.toString()
      return n[1] ? n : '0' + n
    }
    return [year, month, day].map(formatNumber).join('/')

  },
 
  update(data) {
    data = data || this.data
    this.setData(data)

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
 
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },
   

  voteTitle: function (e) {
    if(e.detail.value<500&&e.value>0)
    this.setData({ day_task: e.detail.value })
    wx.setStorage({
      key: 'day_task',
      data: e.detail.value,
    })

  },
  /**
   * 用户点击右上角分享
   */
  

  onShareAppMessage: function () {
    return {
      title: options.target.id,
      path: '/pages/study/study',
      success: function (res) {
        wx.setStorage({
          key: 'my_word_num',
          data: wx.getStorageSync("my_word_num") + 5,
        })
        wx.setStorage({
          key: 'free_word_num',
          data: wx.getStorageSync("free_word_num") + 5,
        })
      }
    }
  },
  set_time: function (date) {
    var month = date.getMonth() + 1
    var day = date.getDate()
    var year = date.getFullYear()
    const formatNumber = n => {
      n = n.toString()
      return n[1] ? n : '0' + n
    }
    return [year, month, day].map(formatNumber).join('/')

  },
  my_collect(){
    wx.navigateTo({
      url: '../collect_card/collect_card',
    })
  },
  choice_book(){
    this.setData({
      yes:true
    })
  },
  choice(){
    this.setData({yes:false})
    wx.navigateTo({
      url: '../choice/choice',
    })
  },
  test_card(){
    wx.navigateTo({
      url: '../test/test',
    })
  },
  about_me(){
    wx.navigateTo({
      url: '../about/about',
    })
  },
  cancle(){
    this.setData({
      yes:false
    })
  },
  my_word(){
    wx.navigateTo({
      url: '../my_word/my_word',
    })
  },
  suggestion(){
    wx.navigateTo({
      url: '../suggestion/suggestion',
    })
  },
  forgive(){
    this.setData({toforgive:false})
  },
  toforgive(){
    this.setData({toforgive:true})
  }
})