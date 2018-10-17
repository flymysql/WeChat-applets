
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
   time:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = this.set_time(new Date())
    this.setData({
       have_done: wx.getStorageSync('have_done'),
        time: time,
        day_num: wx.getStorageSync('day_num')
        })
    if (time=== wx.getStorageSync('day')){
    
    }
    else {
      wx.setStorage({
        key: "day",
        data: time
      })
      wx.setStorage({
        key: time,
        data: 0
      })
      if (wx.getStorageSync('have_done')){
        var num = wx.getStorageSync('word_num')
        var day_task = wx.getStorageSync('day_task')
        var task = wx.getStorageSync("task")
        var length = task.length
       if(length<day_task){
         for (var i = num; i <= num + (day_task - length) - 1; i++) {
           task.push(i)
         }
         wx.setStorage({
           key: "task",
           data: task
         })
         wx.setStorage({
           key: "word_num",
           data: num + day_task - length
         })
       }
      
      }


    }
    this.setData({
      new_word: Math.floor(Math.random() * 20) + 1,
      today_word: wx.getStorageSync('day_task'),
      lest_word: wx.getStorageSync(this.data.time),
      my_word: wx.getStorageSync('word_num')
    })

    if (!wx.getStorageSync('cet4')[1]){
      var cet4 = require('../../data/cet4.js')
      var cet4_import = require('../../data/cet4_import.js')
      var cet6 = require('../../data/cet6.js')
      var cet6_import = require('../../data/cet6_import.js')
      var kaoyan = require('../../data/kaoyan.js')
      var kaoyan_import = require('../../data/kaoyan_import.js')
      var suiji = require('../../data/vocabulary.js')
      var zy8 = require('../../data/zy8.js')
      wx.setStorage({
        key: "cet4",
        data: cet4.wordList
      })
      wx.setStorage({
        key: "cet4_import",
        data: cet4_import.wordList
      })
      wx.setStorage({
        key: "cet6",
        data: cet6.wordList
      })
      wx.setStorage({
        key: "cet6_import",
        data: cet6_import.wordList
      })
      wx.setStorage({
        key: "kaoyan",
        data: kaoyan.wordList
      })
      wx.setStorage({
        key: "kaoyan_import",
        data: kaoyan_import.wordList
      })
      wx.setStorage({
        key: "suiji",
        data: suiji.wordList
      })
      wx.setStorage({
        key: "zy8",
        data: zy8.wordList
      })
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
    this.setData({ have_done: wx.getStorageSync('have_done') })
    this.setData({
      today_word: wx.getStorageSync('day_task'),
      lest_word: wx.getStorageSync(this.data.time),
      my_word: wx.getStorageSync('word_num'),
      day_num: wx.getStorageSync('day_num')
    })
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

  star_study:function(){

    wx.navigateTo({
      url: '../study/study'
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
  choice(){
    wx.navigateTo({
      url: '../choice/choice',
    })
  },
  test1_card(){
    wx.navigateTo({
      url: '../test/test',
    })
  },
  test2_card(){
    wx.navigateTo({
      url: '../test/test',
    })
  },
})