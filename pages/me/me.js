
var cloud = require('../../utils/cloud.js');
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
    // 腾讯云开发：备份用户学习数据（替代原 Bmob user_data）
    const userInfo = wx.getStorageSync("userInfo") || {};
    const payload = {
      username: userInfo.nickName || '',
      word_list: wx.getStorageSync("word_list") || [],
      day_num: wx.getStorageSync("day_num") || 10,
      all_detail: wx.getStorageSync("all_detail") || [],
      my_word_num: wx.getStorageSync("my_word_num") || 0,
      free_word_num: wx.getStorageSync("free_word_num") || 0,
    };
    cloud.backup(payload).then(res => {
      console.log('备份成功', res);
      if (res.id) {
        wx.setStorageSync('data_objectid', res.id);
      }
      this.setData({ tobackup: false });
      wx.showToast({ title: '备份成功' });
    }).catch(err => {
      console.error('备份失败', err);
      this.setData({ tobackup: false });
      wx.showToast({ title: '备份失败', icon: 'none' });
    });
  },

  my_word_list(){
    wx.navigateTo({
      url: '../my_word/my_word',
    })
  },

  toback(){
    // 腾讯云开发：从云端恢复用户学习数据（替代原 Bmob user_data）
    cloud.restore().then(res => {
      if (!res.ok || !res.data) {
        throw new Error('no_backup');
      }
      const d = res.data;
      wx.setStorageSync('word_list', d.word_list || []);
      wx.setStorageSync('day_num', d.day_num || 10);
      wx.setStorageSync('all_detail', d.all_detail || []);
      wx.setStorageSync('my_word_num', d.my_word_num || 0);
      wx.setStorageSync('free_word_num', d.free_word_num || 0);
      wx.showToast({ title: '还原成功' });
    }).catch(err => {
      console.error('还原失败', err);
      wx.showToast({ title: '还原失败，请确认登陆并有先前的备份！', icon: 'none' });
    });
    this.setData({ tobackup: false });
  },


  getUserInfo: function (e) {
    
    var info = e.detail.userInfo;
    app.globalData.userInfo = info
    
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