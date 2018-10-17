// pages/audio_test/audio_test.js
var list = require('../../data/vocabulary.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    daan: false,
    showDaan: false,
    complete: false,
    num: 1,
    true_num: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
     this.search()

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
  search() {
    
    var that = this
    var num = Math.floor(Math.random() * 400) + 1
      var word4 = list.wordList[Math.floor(Math.random() * 12345) + 1]
    wx.request({
      url: 'https://api.shanbay.com/bdc/search/?word=' + word4,
      data: {},
      method: 'GET',
      success: function (res) {
        console.log(res)
        that.setData({
          da1: [res.data.data.definition.split(",")[0].split("\n")[0],word4]
        })
        if (num < 100) {
          that.setData({ truedaan: res.data.data.definition.split(",")[0].split("\n")[0], true_word: word4})
        }
      }
    })
    var word3 = list.wordList[Math.floor(Math.random() * 12345) + 1]
    wx.request({
      url: 'https://api.shanbay.com/bdc/search/?word=' + word3,
      data: {},
      method: 'GET',
      success: function (res) {
        console.log(res)
        that.setData({
          da2: [res.data.data.definition.split(",")[0].split("\n")[0], word3]
        })
        if (num < 200&&num>100) {
        that.setData({ truedaan: res.data.data.definition.split(",")[0].split("\n")[0], true_word: word3})
        }
      }
    })
    var word2 = list.wordList[Math.floor(Math.random() * 12345) + 1]
    wx.request({
      url: 'https://api.shanbay.com/bdc/search/?word=' + word2,
      data: {},
      method: 'GET',
      success: function (res) {
        console.log(res)
        that.setData({
          da3: [res.data.data.definition.split(",")[0].split("\n")[0],word2]
        })
        if (num < 300&&num>200) {
        that.setData({ truedaan: res.data.data.definition.split(",")[0].split("\n")[0],  true_word: word2 })
      }
      }
    })
    var word1 = list.wordList[Math.floor(Math.random() * 12345) + 1]
    wx.request({
      url: 'https://api.shanbay.com/bdc/search/?word=' + word1,
      data: {},
      method: 'GET',
      success: function (res) {
        console.log(res)
        that.setData({
          da4: [res.data.data.definition.split(",")[0].split("\n")[0],word1]
        })
        if (num >300) {        
        that.setData({ truedaan: res.data.data.definition.split(",")[0].split("\n")[0],  true_word: word1})
      }}
    })

  },
  choice(e){
    if(e.currentTarget.id === this.data.truedaan) {
    this.setData({daan:true,true_num:this.data.true_num+1})
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = 'http://media-audio1.qiniu.baydn.com/us/n/ni/nice_v3.mp3'
    innerAudioContext.onPlay(() => {
    })
    }
    else{
      this.setData({daan:false})
      const innerAudioContext = wx.createInnerAudioContext()
      innerAudioContext.autoplay = true
      innerAudioContext.src = 'https://media-audio1.baydn.com/us%2Fs%2Fsa%2Fsad_v4.mp3'
      innerAudioContext.onPlay(() => {
      })
      this.setData({ complete: true })
      this.my_score()
      this.paiming()
    }
    
    this.setData({ showDaan: true})
   
  },
  next(){
    this.search()
    this.setData({ showDaan: false, num: this.data.num + 1 })
  },
  again() {
    this.setData({
      showDaan: false,
      complete: false,
      num: 1,
      true_num: 0
    })
  }
})