

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: [],
    yes:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = this.set_time(new Date())
      this.setData({
        have_done: wx.getStorageSync(time),
        word_num: wx.getStorageSync('word_num'),
        day_task: wx.getStorageSync('day_task'),
      })


  },

  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    Bmob.User.upInfo(e.detail.userInfo)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
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
  }
})