

const app = getApp()
Page({
  data: {
   time:"",
   cpt:false,
   counter:0,
   dis:false,
   id1:"我在小鸡单词看到这个单词觉得很有趣，一起来学习吧！",
   id2:"我在小鸡单词完成了今天的所有单词！",
   id3:3,
   id4:4,
   today_num:0
  },
  onLoad: function (options) {
    this.setData({ 
      time: this.set_time(new Date()),
      day_num: wx.getStorageSync('day_task'),
      book: wx.getStorageSync('book'),
      })
    var today_task = wx.getStorageSync('task')
    var length = today_task.length
    if (length > 0) {
      var n = today_task.shift()
      this.setData({ showNot: false })
      this.setData({ counter: n })
      wx.setStorage({
        key: "task",
        data: today_task
      })

      this.search(n)
    }else{
      this.complete()
    }
   
  },
  show: function () {

    this.setData({
      showNot: true,
      more: false
    })
    var today_task = wx.getStorageSync('task')
    var length = today_task.length
    today_task.push(this.data.counter)
    today_task.splice(length / 2, 0, this.data.counter)
    wx.setStorage({
      key: "task",
      data: today_task
    })
  },
  onShareAppMessage: function (options) {
    return{
      title:options.target.id,
      path:'/pages/job/job',
      success:function(res){
        console.log(res)
      }
    }
    
  },
  next:function(e) {
   console.log(e)
   if (e.currentTarget.id ){
     wx.setStorage({
       key: this.data.time,
       data: wx.getStorageSync(this.data.time)+1
     })
   }
    var today_task = wx.getStorageSync('task')
    var length = today_task.length
        if (length > 0) {
          var n = today_task.shift()
        this.setData({ showNot: false})
         this.setData({counter:n})
         wx.setStorage({
           key: "task",
           data: today_task
         })

         this.search(n)
     }
     else{
         this.complete()
       }
       
  },

  search:function (n) {

    var word = wx.getStorageSync(this.data.book)[n]
    this.setData({ content: word})
    var that = this;
    wx.request({
      url: 'https://api.shanbay.com/bdc/search/?word=' + word,
      data: {},
      method: 'GET',
      success: function (res) {
        console.log(res)
         that.setData({
           pron: res.data.data.pronunciations,
           pron_audio: res.data.data.audio_addresses,
          definition: res.data.data.definition,
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true
        innerAudioContext.src = res.data.data.audio_addresses.uk[0]
        innerAudioContext.onPlay(() => {
        })
        var id = res.data.data.conent_id
        that.liju(id)
      },
      fail: function () {
      },
      complete: function () {
      }
    })
    
  },
  read: function (e) {
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = e.target.id
    innerAudioContext.onPlay(() => {
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  moredefen:function()
  {
    this.setData({more:true})
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
  complete(){
    this.setData({cpt:true})
    wx.setStorage({
      key: 'day_num',
      data: wx.getStorageSync('day_num')+1
    })
  },
  handleSaveTap(){
    if(wx.getStorageSync('collect')){
      var collect = wx.getStorageSync('collect')
    }
    else {
      var collect=[]
    }
    collect.push([this.data.content, this.data.pron, this.data.pron_audio, this.data.defen, this.data.definition])
    wx.setStorage({
      key: "collect",
      data: collect
    })
   
    wx.showToast({ title: '收藏成功' })
  },
  liju(id) {
    var that=this
    wx.request({
      url: 'https://api.shanbay.com/bdc/example/?vocabulary_id=' + id,
      data: {},
      method: 'GET',
      success: function (res) {
        console.log(res)
        that.setData({ 
          defen: [res.data.data[0], res.data.data[1], res.data.data[3], res.data.data[4]]
  
        })
      },
      fail: function () {
      },
      complete: function () {
      }
    })

  },
  test(){
    wx.navigateTo({
      url: '../test/test',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})