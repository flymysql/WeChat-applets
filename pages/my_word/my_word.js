// pages/my_word/my_word.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id1: "kaoyan",
    id2: "suiji",
    id3: "cet4",
    id4: "cet6",
    id11: "kaoyan_import",
    id12: "cet4_import",
    id13: "cet6_import",
    id14: "zy8",
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
  choice_book(e){
    var that=this
    wx.getStorage({
      key: e.currentTarget.id,
      success: function(res) {
        that.setData({
          list: res.data,
          dianji: true,
        })
      },
    })
       
  }
})