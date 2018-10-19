
Page({
  data: {
   time:"",
   cpt:false,
   counter:{},
   today_new_word:0,
   dis:false,
   id1:"我在小鸡单词看到这个单词觉得很有趣，一起来学习吧！",
   id2:"我在小鸡单词完成了今天的所有单词！",
   id3:3,
   id4:4,
   today_num:0,
   today_word:[],
   bottomline:"",
   task_detail:[]
  },
  onLoad: function (options) {
    this.setData({
      time: this.set_time(new Date()),           //日期
      day_num: wx.getStorageSync('day_task'),    //每天任务量
      })
    if(this.data.time!=wx.getStorageSync("day")){
      this.new_day();
    }
    this.setData({
      book: wx.getStorageSync('book'),           //
      today_word: wx.getStorageSync('today_word'),
      task_detail: wx.getStorageSync("task_detail")
    })

    if(this.data.today_word.length<this.data.day_num)
    {
        this.setData({
          goto_choice:true,
          bottomline:"在词库里挑选自己每天要背的单词！"
          })
    }
    else{
      var today_task = wx.getStorageSync('task')
      var length = today_task.length
      if (length > 0) {
        var n = today_task[0];
        this.setData({ showNot: false })
        this.setData({ counter: n })
        wx.setStorage({
          key: "task",
          data: today_task
        })
        this.search(this.data.today_word[n].word)
      } else {
        if(!wx.getStorageSync("first_login")) this.complete()
      }
    }       
  },

  onShow: function () {
  
    this.setData({
      today_word: wx.getStorageSync('today_word'),
      task_detail: wx.getStorageSync("task_detail")
    })
  
    if (this.data.today_word.length < this.data.day_num ) {
      this.setData({ goto_choice: true })
    }
    else {
      this.setData({goto_choice:false})
      
      var today_task = wx.getStorageSync('task')
      var length = today_task.length
      if (length > 0) {
        var n = today_task[0];
        this.setData({ showNot: false })
        this.setData({ counter: n })
        wx.setStorage({
          key: "task",
          data: today_task
        })
        this.search(this.data.today_word[n].word)
      } else {
        this.complete()
      }
     
    }
    
  },


  onHide:function() {
    wx.setStorageSync("task_detail", this.data.task_detail);
  },

  onUnload:function() {
    wx.setStorageSync("task_detail", this.data.task_detail);
  },

  show: function () {

    this.setData({
      showNot: true,
      more: false
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
  next:function() {
    var temp=this.data.counter;
    this.data.task_detail[temp].rem++;
    if (this.data.task_detail[temp].rem >= this.data.task_detail[temp].forget * 4 + this.data.task_detail[temp].mohu*3){
      wx.setStorage({
        key: this.data.time,
        data: wx.getStorageSync(this.data.time) + 1
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
          this.search(this.data.today_word[n].word)
     }
     else{
         this.complete()
       }
       
  },

  forget:function(){
    this.data.task_detail[this.data.counter].forget++;
    var today_task = wx.getStorageSync('task')
    var length = today_task.length
    today_task.splice(length / 2, 0, this.data.counter)
    today_task.splice(length / 3, 0, this.data.counter)
    today_task.splice(6, 0, this.data.counter)
    today_task.splice(2, 0, this.data.counter)
    wx.setStorage({
      key: "task",
      data: today_task
    })
    var n = today_task.shift()
    this.setData({ showNot: false })
    this.setData({ counter: n })
    wx.setStorage({
      key: "task",
      data: today_task
    })
    this.search(this.data.today_word[n].word)
  },

  mohu:function(){
    this.data.task_detail[this.data.counter].mohu++;
    var today_task = wx.getStorageSync('task')
    var length = today_task.length
    today_task.splice(length / 3, 0, this.data.counter)
    today_task.splice(10, 0, this.data.counter)
    today_task.splice(3, 0, this.data.counter)
    wx.setStorage({
      key: "task",
      data: today_task
    })
    var n = today_task.shift()
    this.setData({ showNot: false })
    this.setData({ counter: n })
    wx.setStorage({
      key: "task",
      data: today_task
    })
    this.search(this.data.today_word[n].word)
  },

  search:function (word) {
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
    wx.setStorage({
      key: 'first_login',
      data: false,
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
    
    this.setData({more:!(this.data.more)})
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
    if (!wx.getStorageSync("first_login")) this.setData({cpt:true})
    if(!wx.getStorageSync("complete"))
    {
      wx.setStorage({
        key: 'day_num',
        data: wx.getStorageSync('day_num') + 1
      })
      wx.setStorage({
        key: 'complete',
        data: true,
      })
      this.sort_wordlist();
    }
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
        that.setData({ bottomline: res.data.data[0].translation})
      },
      fail: function () {
      },
      complete: function () {
      }
    })

  },
  tags(){
    wx.navigateTo({
      url: '../test/test',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  sort_wordlist(){
    var last_list=wx.getStorageSync("word_list");
    var today_detail=this.data.task_detail;
    //var today_word=this.data.today_word;
    var len=today_detail.length;
    for(var i=0;i<len;i++){
      last_list[i].day=0;
      if(today_detail[i].rem >= 1){
        last_list[i].ease=last_list[i].ease+0.05;
      }
      else{
        if (today_detail[i].mohu < today_detail[i].forget){
          last_list[i].ease = last_list[i].ease - 0.1;
        }
        else last_list[i].ease = last_list[i].ease - 0.05;
      }
    }
    var len2=last_list.length;
    for (var i = len; i <len2;i++){
      last_list[i].day++;
    }
    for(var i=0;i<len2;i++){
      for(var j=i+1;j<len2;j++){
        if(last_list[j].ease < last_list[i].ease){
          var temp=last_list[j];
          last_list[j]=last_list[i];
          last_list[i]=temp;
        }
      }
    }
    wx.setStorageSync("word_list", last_list);
  },

  new_day(){

    
    wx.setStorage({
      key: 'day',
      data: this.data.time,
    })
    wx.setStorage({
      key: 'complete',
      data: false,
    })
    wx.setStorage({
      key: this.data.time,
      data: 0
    })
    wx.setStorage({
      key: 'first_login',
      data: true,
    })
    
    var last_list = wx.getStorageSync("word_list");
    var len2 = last_list.length;
    var day_num = wx.getStorageSync("day_task");
    var today_list = [];
    for (var i = 0, k = 0; i < len2; i++) {
      if (k === day_num || (last_list[i].ease > 0.5 && last_list[i].day < 3)) break;
      today_list[k++] = last_list[i];
    }
    wx.setStorage({
      key: 'today_word',
      data: today_list,
    })
    wx.setStorage({
      key: 'task_detail',
      data: [],
    })

    var nn = [];
    var bb = [];
    var day=wx.getStorageSync("day_task")
    for (var i = 0; i < day; i++) {
      nn[i] = i;
      bb[i] = { "rem": 0, "mohu": 0, "forget": 0 }
    }
    wx.setStorage({
      key: 'task',
      data: nn,
    })
    wx.setStorage({
      key: 'task_detail',
      data: bb,
    })
  }
})

