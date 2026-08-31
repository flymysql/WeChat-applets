// pages/suggestion/suggestion.js
var cloud = require('../../utils/cloud.js');

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
    // 腾讯云开发：提交建议到 suggestion 集合（替代原 Bmob）
    const content = this.data.voteTitle;
    if (!content) {
      wx.showToast({ title: '内容不能为空', icon: 'none' });
      return;
    }
    const name = (wx.getStorageSync("userInfo") || {}).nickName || '匿名';
    cloud.suggest(content, name).then(res => {
      console.log('建议提交成功', res);
      wx.showToast({ title: '提交成功' });
    }).catch(err => {
      console.error('建议提交失败', err);
      wx.showToast({ title: '提交失败，请重试', icon: 'none' });
    })
  }

})