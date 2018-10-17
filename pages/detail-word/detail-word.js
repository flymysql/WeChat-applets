Page({

  /**
   * 页面的初始数据
   */
  data: {
    voteTitle: null, 
    simple:false,
    detail:false
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
  onShareAppMessage: function (options) {

  },
  voteTitle: function (e) {
    this.setData({ simple:true,voteTitle:e.detail.value})

  },
  detail(){

    var that = this
    wx.request({
      url: 'https://api.shanbay.com/bdc/search/?word=' + this.data.voteTitle,
      data: {},
      method: 'GET',
      success: function (res) {

        console.log(res)
        that.setData({
          word: res.data.data.content,
          pron: res.data.data.pronunciation,
          definition: res.data.data.definition,
          pron_audio: res.data.data.audio
   
        })
        that.get_sams(res.data.data.conent_id)
      },
      fail: function () {
      },
      complete: function () {
      }
    })
    
    this.setData({
      detail: true,
      simple: false
    })
  },
  read(){
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = this.data.pron_audio
    innerAudioContext.onPlay(() => {
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  get_sams(id){
    var that=this
    wx.request({
      url: 'https://api.shanbay.com/bdc/example/?vocabulary_id=' + id,
      data: {},
      method: 'GET',
      success: function (res) {
        console.log(res)
        that.setData({
          defen: [res.data.data[0], res.data.data[4]]
        })
      },
      fail: function () {
      },
      complete: function () {
      }
    })
  }
})