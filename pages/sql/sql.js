// pages/test/test.js
var list = require('../../data/kaoyan_import.js')
var list_t = require('../../data/cet4_t.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sql:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var i=3631
      for(i=3631;i<3966;i++){
        this.search(i)
      }
   
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
  onShareAppMessage: function (options) {
    return {
      title: "我在小鸡单词测试，答对了" + this.data.true_num + "道题，你也快来测一测吧！",
    }

  },
  search(a) {
    var i=a-3631
    var that=this
    var word = list.wordList[i]
    var title = list_t.wordList[i]
    var num = Math.floor(Math.random() * 400) + 1
    if (num < 100) {
      that.setData({
        sql: that.data.sql + "(" + a + ",3, '" + title + "', '[" + "{\"right\": true, \"answer\": \"" + word + "\"}" + "," + "{\"right\": false, \"answer\": \"" + list.wordList[i + 12] + "\"}" + "," + "{\"right\": false, \"answer\": \"" + list.wordList[i + 14] + "\"}" + "," + "{\"right\": false, \"answer\": \"" + list.wordList[i + 13] + "\"}"  + "]'),"
      })
    }
    if (100 < num && num < 200) {
      that.setData({
        sql: that.data.sql + "(" + a + ",3, '" + title + "', '[" + "{\"right\": false, \"answer\": \"" + list.wordList[i + 12] + "\"}" + "," + "{\"right\": true, \"answer\": \"" + word + "\"}" + "," + "{\"right\": false, \"answer\": \"" + list.wordList[i + 16] + "\"}" + "," + "{\"right\": false, \"answer\": \"" + list.wordList[i + 14] + "\"}" + "]'),"
      })
    }
    if (num < 300 && num > 200) {
      that.setData({
        sql: that.data.sql + "(" + a + ",3, '" + title + "', '[" + "{\"right\": false, \"answer\": \"" + list.wordList[i + 13] + "\"}" + "," + "{\"right\": false, \"answer\": \"" + list.wordList[i + 11] + "\"}" + "," + "{\"right\": true, \"answer\": \"" + word + "\"}" + "," + "{\"right\": false, \"answer\": \"" + list.wordList[i + 12] + "\"}" + "]'),"
      })
    }
    if (num > 300) {
      that.setData({
        sql: that.data.sql + "(" + a + ",3, '" + title + "', '[" + "{\"right\": false, \"answer\": \"" + list.wordList[i + 14] + "\"}" + "," + "{\"right\": false, \"answer\": \"" + list.wordList[i + 12] + "\"}" + "," + "{\"right\": false, \"answer\": \"" + list.wordList[i + 13] + "\"}"  + "," + "{\"right\": true, \"answer\": \"" + word + "\"}" + "]'),"
      })
    }
  },


})

