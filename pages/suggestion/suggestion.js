// pages/suggestion/suggestion.js
var Bmob = require('../../dist/Bmob-1.6.4.min.js');
Bmob.initialize("你的appid", "你的secret id");

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  voteTitle: function (e) {
    this.setData({ voteTitle: e.detail.value })

  },
  ok(){
    wx.showToast({ title: '提交成功' })
    const query = Bmob.Query('suggestion');
    query.set("content", this.data.voteTitle)
    query.set("name", wx.getStorageSync("userInfo").nickName)
    query.save().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

})