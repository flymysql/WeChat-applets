const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    time: "",
    slist: 0,
    choice: false,
    book_list: [],
    id1: "kaoyan",
    id2: "suiji",
    id3: "cet4",
    id4: "cet6",
    id11: "kaoyan_import",
    id12: "cet4_import",
    id13: "cet6_import",
    id15: "500",
    id14: "zy8",
    today_new_num: 0,
    today_had_choice: 0,
    day_num: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    if (wx.getStorageSync("today_new_num")){
      this.setData({
        today_new_num: wx.getStorageSync("today_new_num"),
      })

    }
    
    var time = this.set_time(new Date())
    this.setData({
      have_done: wx.getStorageSync('have_done'),
      time: time,
      day_num: wx.getStorageSync('day_num')
    })

    /*
    if (time=== wx.getStorageSync('day')){
    
    }
    else {
      wx.setStorage({
        key: "day",
        data: time
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

    */
    this.setData({
      day_num: wx.getStorageSync('day_num'),
      lest_word: wx.getStorageSync(this.data.time),
      my_word: wx.getStorageSync('word_list').length,
    })

    if (!wx.getStorageSync('cet4')[1]) {
      var cet4 = require('../../data/cet4.js')
      var cet4_import = require('../../data/cet4_import.js')
      var cet6 = require('../../data/cet6.js')
      var cet6_import = require('../../data/cet6_import.js')
      var kaoyan = require('../../data/kaoyan.js')
      var kaoyan_import = require('../../data/kaoyan_import.js')
      var suiji = require('../../data/vocabulary.js')
      var zy8 = require('../../data/zy8.js')
      var d500 = require('../../data/500.js')
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
      wx.setStorage({
        key: "500",
        data: d500.wordList
      })
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  showlist: function(index) {
    this.setData({
      slist: index
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.setData({
      have_done: wx.getStorageSync('have_done')
    })
    this.setData({
      lest_word: wx.getStorageSync(this.data.time),
      my_word: wx.getStorageSync('word_list').length,
      day_num: wx.getStorageSync('day_num')
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    this.sort_wordlist();
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    this.sort_wordlist();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: options.target.id,
      path: '/pages/study/study',
      success: function (res) {
        wx.setStorage({
          key: 'my_word_num',
          data: wx.getStorageSync("my_word_num") + 5,
        })
        wx.setStorage({
          key: 'free_word_num',
          data: wx.getStorageSync("free_word_num") + 5,
        })
      }
    }
  },

  star_study: function() {
    wx.navigateTo({
      url: '../study/study'
    })
  },
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

  test1_card() {
    wx.navigateTo({
      url: '../test/test',
    })
  },
  test2_card() {
    wx.navigateTo({
      url: '../test/test',
    })
  },

  choice_book(e) {
    var book = e.currentTarget.id;
    if (book != 'no') {
      wx.setStorage({
        key: "book",
        data: book
      })
      this.setData({
        choice: true,
        book_list: wx.getStorageSync(book)
      })
    } else {
      this.setData({
        choice: false
      })
      this.sort_wordlist();

    }

  },

  choice_word(e) {
    var add = e.currentTarget.id;
    var word = {
      "word": add,
      "ease": 0.5,
      "day": 0
    };
    var wordlist = wx.getStorageSync("word_list");
    wordlist.push(word);
    wx.setStorageSync("word_list", wordlist);
    var list = this.data.book_list;
    var len = list.length;
    var i = 0;
    for (var i = 0; i < len; i++) {
      if (list[i] == add) break;
    }
    list.splice(i, 1);
    var book = wx.getStorageSync("book");
    wx.setStorageSync(book, list);
    this.setData({
      book_list: list,
      my_word: this.data.my_word + 1,
      today_had_choice: this.data.today_had_choice + 1
    });
  },

  sort_wordlist() {
    var last_list = wx.getStorageSync("word_list");
    var len2 = last_list.length;
    for (var i = 0; i < len2; i++) {
      for (var j = i + 1; j < len2; j++) {
        if (last_list[j].ease < last_list[i].ease) {
          var temp = last_list[j];
          last_list[j] = last_list[i];
          last_list[i] = temp;
        } else {
          if (last_list[j].ease === last_list[i].ease && last_list[j].day > last_list[i].day) {
            var temp = last_list[j];
            last_list[j] = last_list[i];
            last_list[i] = temp;
          }
        }
      }
    }
    wx.setStorageSync("word_list", last_list);

    var day_num = wx.getStorageSync("day_task");
    var today_list = [];
    for (var i = 0, k = 0; i < len2; i++) {
      if (k === day_num || (last_list[i].ease > 0.5 && last_list[i].day > 3)) break;
      today_list[k++] = last_list[i];
    }
    wx.setStorage({
      key: 'today_word',
      data: today_list,
    })

  },

  goto_search(){
    wx.navigateTo({
      url: '../detail-word/detail-word',
    })
  }

})