/*
 * 小鸡单词，主要代码，更新于2018/10/21
   作者：兰州小红鸡
 */

var wxCharts = require('../../utils/wxcharts.js');

var app = getApp();
var pieChart = null;

Page({
  data: {
    time: "",
    cpt: false,
    counter: {},                          //存储当前单词号码
    today_new_word: 0,
    dis: false,
    id1: "我在小鸡单词看到这个单词觉得很有趣，一起来学习吧！",
    id2: "我在小鸡单词完成了今天的所有单词！",
    id3: 3,
    id4: 4,
    today_num: 0,
    today_word: [],
    bottomline: "",       //底部提示
    task_detail: {}
  },
  onLoad: function(options) {
    var time=this.set_time(new Date())
    this.setData({
      time: time,        //日期
      day_num: wx.getStorageSync('day_task'), //每天任务量

    })
    if(!wx.getStorageSync('today_detail') || wx.getStorageSync('today_detail')===undefined){
      wx.setStorage({
        key: 'today_detail',
        data: { "day": this.data.time, "rem": 0, "mohu": 0, "forget": 0 }
      })
    }


    //如果是新的一天，调用new_day函数
    if (time != wx.getStorageSync("day")) {
      this.new_day();
    }

    //数据初始化
    this.setData({
      book: wx.getStorageSync('book'),
      today_word: wx.getStorageSync('today_word'),
      task_detail: wx.getStorageSync("task_detail"),
      today_new_num: wx.getStorageSync("today_new_num")
    })

    //如果单词列表的词不够，要求用户先去选词
    if (this.data.today_word.length < this.data.day_num) {

      this.setData({
        goto_choice: true,
        bottomline: "在词库里挑选自己每天要背的单词！"
      })
    } else {
      var today_task = wx.getStorageSync('task')
      var length = today_task.length
      if (length > 0) {
        var n = today_task[0];
        this.setData({
          showNot: false
        })
        this.setData({
          counter: n
        })
        
        this.search(this.data.today_word[n].word)
      } else {
        if (!wx.getStorageSync("first_login")) this.complete()  //登陆时判断是否今天已完成
      }
    }
    
    //可能会有task_detail数据丢失的情况，重新初始化
    if (!wx.getStorageSync("task_detail")){
      var nn = [];
      var bb = [];
      var day = wx.getStorageSync("day_task")
      for (var i = 0; i < day; i++) {
        nn[i] = i;
        bb[i] = {
          "rem": 0,
          "mohu": 0,
          "forget": 0
        }
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
    
  },

  onReady: function () {
  },


  //当用页面重新展示时调用函数
  onShow: function() {
    this.setData({
      today_word: wx.getStorageSync('today_word'),
      task_detail: wx.getStorageSync("task_detail"),
      //today_detail:wx.getStorageSync("today_detail")
    })

    if (this.data.today_word.length < this.data.day_num) {
      this.setData({
        goto_choice: true
      })
    } else {
      this.setData({
        goto_choice: false
      })
      
      //加载第一个单词
      var today_task = wx.getStorageSync('task')
      var length = today_task.length
      if (length > 0) {
        var n = today_task[0];
        this.setData({
          showNot: false
        })
        this.setData({
          counter: n
        })
        this.search(this.data.today_word[n].word)
      } else {
        this.complete()
      }

    }

  },

  //当页面被影藏时，保存数据
  onHide: function() {
    wx.setStorageSync("task_detail", this.data.task_detail);
 
  },

  //页面被卸载时，保存学习数据
  onUnload: function() {
    wx.setStorageSync("task_detail", this.data.task_detail);
    
  },

  //单词被展示时
  show: function() {
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = this.data.pron_audio.uk[0]
    innerAudioContext.onPlay(() => {})
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
    this.setData({
      showNot: true,
      more: false
    })
  },

  //页面分享函数
  onShareAppMessage: function(options) {
    return {
      title: options.target.id,
      path: '/pages/study/study',
      success: function(res) {
        wx.setStorage({
          key: 'my_word_num',
          data: wx.getStorageSync("my_word_num")+5,
        })
        wx.setStorage({
          key: 'free_word_num',
          data: wx.getStorageSync("free_word_num") + 5,
        })
      }
    }

  },


  //用户点击认识
  next: function() {

    var temp = this.data.counter;
    //判断当前单词是否最后一个单词，并准备加载下一个单词
    var today_task = wx.getStorageSync('task')
    today_task.shift();
    var length = today_task.length
    if (length > 0) {
      var n = today_task[0];
      this.setData({
        showNot: false
      })
      this.setData({
        counter: n
      })
      wx.setStorage({
        key: "task",
        data: today_task
      })
      this.search(this.data.today_word[n].word)
    } else {
      wx.setStorage({
        key: "task",
        data: today_task
      })
      this.complete()
    }

    //判断当前单词是否第一次展示
    
    if (this.data.task_detail[temp].rem === 0 && this.data.task_detail[temp].mohu === 0 && this.data.task_detail[temp].forget === 0){
      var td=wx.getStorageSync('today_detail');
      td.rem=td.rem+1;
      wx.setStorage({
        key: 'today_detail',
        data: td,
      })
    }

    this.data.task_detail[temp].rem++;

    //判断当前单词是否最后一次被显示
    if (this.data.task_detail[temp].rem >= this.data.task_detail[temp].forget * 3 + this.data.task_detail[temp].mohu * 2) {
      wx.setStorage({
        key: this.data.time,
        data: wx.getStorageSync(this.data.time) + 1
      })
    }

  },


  //用户点击忘记时调用该函数
  forget: function() {

    var temp = this.data.counter;
    var today_task = wx.getStorageSync('task')
    today_task.shift()
    var length = today_task.length

    //在单词队列中添加三个该单词
    today_task.splice(length / 2, 0, temp)
    //today_task.splice(length / 3, 0, temp)
    today_task.splice(6, 0, temp)
    today_task.splice(2, 0, temp)
    wx.setStorage({
      key: "task",
      data: today_task
    })
    var n = today_task[0]
    this.setData({
      showNot: false
    })
    this.setData({
      counter: n
    })
    wx.setStorage({
      key: "task",
      data: today_task
    })
    this.search(this.data.today_word[n].word)

    
    //判断是否第一次显示
    if (this.data.task_detail[temp].rem === 0 && this.data.task_detail[temp].mohu === 0 && this.data.task_detail[temp].forget === 0) {
      var td = wx.getStorageSync('today_detail');
      td.forget = td.forget + 1;
      wx.setStorage({
        key: 'today_detail',
        data: td,
      })
    }
    this.data.task_detail[temp].forget++;
    
  },

  //用户点击模糊时调用函数
  mohu: function() {

    var temp = this.data.counter;
    var today_task = wx.getStorageSync('task')
    today_task.shift()

    //在单词队列中国添加两个该单词
    var length = today_task.length
    today_task.splice(length / 3, 0, this.data.counter)
    //today_task.splice(10, 0, this.data.counter)
    today_task.splice(5, 0, this.data.counter)
    wx.setStorage({
      key: "task",
      data: today_task
    })
    var n = today_task[0]
    this.setData({
      showNot: false
    })
    this.setData({
      counter: n
    })
    wx.setStorage({
      key: "task",
      data: today_task
    })
    this.search(this.data.today_word[n].word)

    
    if (this.data.task_detail[temp].rem === 0 && this.data.task_detail[temp].mohu === 0 && this.data.task_detail[temp].forget === 0) {
      var td = wx.getStorageSync('today_detail');
      td.mohu = td.mohu + 1;
      wx.setStorage({
        key: 'today_detail',
        data: td,
      })
    }
    this.data.task_detail[this.data.counter].mohu++;
    
  },


  //通过扇贝提供的api搜索该函数
  search: function(word) {
    this.setData({
      content: word
    })
    var that = this;
    wx.request({
      url: 'https://api.shanbay.com/bdc/search/?word=' + word,
      data: {},
      method: 'GET',
      success: function(res) {

        that.setData({
          pron: res.data.data.pronunciations,
          pron_audio: res.data.data.audio_addresses,
          definition: res.data.data.definition,
        })
        /*
        console.log(res)
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true
        innerAudioContext.src = res.data.data.audio_addresses.uk[0]
        innerAudioContext.onPlay(() => {
        })
        */
        var id = res.data.data.conent_id
        that.liju(id)
      },
      fail: function() {},
      complete: function() {}
    })
    wx.setStorage({
      key: 'first_login',
      data: false,
    })

  },

  //单词发音触发函数
  read: function(e) {
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = e.target.id
    innerAudioContext.onPlay(() => {})
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },

  //更多例句触发函数
  moredefen: function() {

    this.setData({
      more: !(this.data.more)
    })
  },


  //设置当天日期
  set_time: function(date) {
    var month = date.getMonth() + 1
    var day = date.getDate()
    var year = date.getFullYear()
    const formatNumber = n => {
      n = n.toString()
      return n[1] ? n : '0' + n
    }
    return [year, month, day].map(formatNumber).join('/')

  },

  //完成当天学习任务后触发的函数
  complete() {
    if (!wx.getStorageSync("first_login")) this.setData({
      cpt: true,
      showNot: false,
      complete_day_num: wx.getStorageSync('day_num')
    })

    //绘制当天学习细节扇行图
    var chart_detail=wx.getStorageSync('today_detail');
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    pieChart = new wxCharts({
      animation: true,
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [{
        name: '认识',
        data: chart_detail.rem,
      }, {
        name: '模糊',
        data: chart_detail.mohu,
      }, {
        name: '忘记',
        data: chart_detail.forget,
      }],
      width: windowWidth,
      height: 220,
      dataLabel: true,
    });


    //第一次触发完成函数时
    //保存当天的学习情况
    if (!wx.getStorageSync("complete") || wx.getStorageSync('complete')===false) {

      var n = 0 + wx.getStorageSync('day_num');
      wx.setStorage({
        key: 'day_num',
        data: n + 1
      })
      this.setData({complete_day_num:n+1});
      wx.setStorage({
        key: 'complete',
        data: true,
      })
      this.sort_wordlist();
      wx.setStorage({
        key: 'my_word_num',
        data: wx.getStorageSync("my_word_num") + 10,
      })
      wx.setStorage({
        key: 'free_word_num',
        data: wx.getStorageSync("free_word_num") + 10,
      })

      var all_detail=[];
      if(!wx.getStorageSync("all_detail")){
        all_detail.push(wx.getStorageSync('today_detail'))
        wx.setStorage({
          key: 'all_detail',
          data: all_detail,
        })
      }
      else{
        all_detail = wx.getStorageSync("all_detail")
        all_detail.push(wx.getStorageSync('today_detail'))
        wx.setStorage({
          key: 'all_detail',
          data: all_detail,
        })
      }
      
    }

  },

  //用户触发收藏单词按钮
  handleSaveTap() {
    if (wx.getStorageSync('collect')) {
      var collect = wx.getStorageSync('collect')
    } else {
      var collect = []
    }
    collect.push([this.data.content, this.data.pron, this.data.pron_audio, this.data.defen, this.data.definition])
    wx.setStorage({
      key: "collect",
      data: collect
    })

    wx.showToast({
      title: '收藏成功'
    })
  },

  //触发例句函数
  liju(id) {
    var that = this
    wx.request({
      url: 'https://api.shanbay.com/bdc/example/?vocabulary_id=' + id,
      data: {},
      method: 'GET',
      success: function(res) {
        console.log(res)
        that.setData({
          defen: [res.data.data[0], res.data.data[1], res.data.data[3], res.data.data[4]]
        })
        that.setData({
          bottomline: res.data.data[0].translation
        })
      },
      fail: function() {},
      complete: function() {}
    })

  },

  //触发测试函数
  tags() {
    wx.navigateTo({
      url: '../test/test',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },


  //触发本地单词队列重新排序
  //在当天第一次完成单词任务后触发
  sort_wordlist() {
    var last_list = wx.getStorageSync("word_list");
    var today_detail = this.data.task_detail;
    //var today_word=this.data.today_word;

    //重新设置当天背的单词的权值
    var len = today_detail.length;
    for (var i = 0; i < len; i++) {
      last_list[i].day = 0;
      if (today_detail[i].rem >= 1) {
        last_list[i].ease = last_list[i].ease + 0.05;
      } else {
        if (today_detail[i].mohu < today_detail[i].forget) {
          last_list[i].ease = last_list[i].ease - 0.1;
        } else last_list[i].ease = last_list[i].ease - 0.05;
      }
    }

    //重新单词排序
    var len2 = last_list.length;
    for (var i = len; i < len2; i++) {
      last_list[i].day++;
    }
    for (var i = 0; i < len2; i++) {
      for (var j = i + 1; j < len2; j++) {
        if (last_list[j].ease < last_list[i].ease) {
          var temp = last_list[j];
          last_list[j] = last_list[i];
          last_list[i] = temp;
        }
      }
    }
    wx.setStorageSync("word_list", last_list);
  },

  //每天第一次登陆时触发，学习数据重置
  new_day() {
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
    wx.setStorage({
      key: this.data.time,
      data: 0,
    })
    if (!wx.getStorageSync("day_num")) {
      wx.setStorage({
        key: 'day_num',
        data: 0,
      })
    }
    wx.setStorage({
      key: 'today_had_choice',
      data: 0,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })

    wx.setStorage({
      key: 'today_detail',
      data: { "day": this.data.time, "rem": 0, "mohu": 0, "forget": 0 }
    })

    //安排当天的学习任务
    var last_list = wx.getStorageSync("word_list");
    var len2 = last_list.length;
    var day_num = wx.getStorageSync("day_task");
    var today_list = [];
    var k = 0;
    for (var i = 0; i < len2; i++) {
      if (k === day_num || (last_list[i].ease > 0.5 && last_list[i].day < 3)) break;
      today_list[k++] = last_list[i];
    }
    wx.setStorage({
      key: 'today_word',
      data: today_list,
    })
    wx.setStorage({
      key: 'today_new_num',
      data: wx.getStorageSync("day_task") - k,
    })

    var nn = [];
    var bb = [];
    var day = wx.getStorageSync("day_task")
    for (var i = 0; i < day; i++) {
      nn[i] = i;
      bb[i] = {
        "rem": 0,
        "mohu": 0,
        "forget": 0
      }
    }
    wx.setStorage({
      key: 'task',
      data: nn,
    })
    wx.setStorage({
      key: 'task_detail',
      data: bb,
    })
  },

  goto_choice() {
    wx.navigateTo({
      url: '../job/job',
    })
  },
  

})