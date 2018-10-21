var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var lineChart = null;
var startPos = null;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  touchHandler: function (e) {
    lineChart.scrollStart(e);
  },
  moveHandler: function (e) {
    lineChart.scroll(e);
  },
  touchEndHandler: function (e) {
    lineChart.scrollEnd(e);
    lineChart.showToolTip(e, {
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },
  createSimulationData: function () {
    var categories = [];
    var rem = [];
    var mohu = [];
    var forget = [];
    var all_detail=wx.getStorageSync("all_detail");
    var length=all_detail.length;
    if(length===0){
      for(var i=0;i<15;i++){
        categories.push('2018-10-'+i);
        rem.push(50+Math.random() * (25 - 10) + 10);
        mohu.push(30 + Math.random() * (25 - 10) + 10);
        forget.push(20 + Math.random() * (25 - 10) + 10)
      }
    }
    else if(length<15){
      for (var i = 0; i < 15; i++) {
        if(i<length){
          categories.push(all_detail[i].day);
          rem.push(all_detail[i].rem);
          mohu.push(all_detail[i].mohu);
          forget.push(all_detail[i].forget)
        }
        else{
          categories.push("未来");
          rem.push(all_detail[length - 1].rem + Math.random() * (15 - 10)+2);
          mohu.push(all_detail[length-1].mohu + Math.random() * (15 - 10) + 2);
          forget.push(all_detail[length-1].forget - Math.random() * (15 - 10) + 2)
        }
        
      }
      
    }
    else {
      for (var i = 0; i < 15; i++) {
          categories.push(all_detail[i].day);
          rem.push(all_detail[i].rem);
          mohu.push(all_detail[i].mohu);
          forget.push(all_detail[i].forget)
        }
      
    }
    return {
      categories: categories,
      rem: rem,
      mohu: mohu,
      forget: forget
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    var simulationData = this.createSimulationData();
    lineChart = new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: simulationData.categories,
      animation: false,
      series: [{
        name: '认识',
        data: simulationData.rem,
        format: function (val, name) {
          return val.toFixed(2);
        }
      }, {
        name: '模糊',
        data: simulationData.mohu,
        format: function (val, name) {
          return val.toFixed(2);
        }
        }, {
          name: '忘记',
          data: simulationData.forget,
          format: function (val, name) {
            return val.toFixed(2);
          }
        }
      ],
      xAxis: {
        disableGrid: false
      },
      yAxis: {
        title: '学习情况',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: windowWidth,
      height: 260,
      dataLabel: true,
      dataPointShape: true,
      enableScroll: true,
      extra: {
        lineStyle: 'curve'
      }
    });

    var wordlist=wx.getStorageSync("word_list");
    var len=wordlist.length;
    var r=0,m=0,f=0;
    for(var i=0;i<len;i++){
       if(wordlist[i].ease>0.7)r++;
       else{
         if (wordlist[i].ease > 0.4)m++;
         else r++;
       }
    }
    var today_detail=wx.getStorageSync("today_detail")
    this.setData({
      rem:r,
      mohu:m,
      forget:f,
      today_rem:today_detail.rem,
      today_mohu:today_detail.mohu,
      today_forget:today_detail.forget,
      total_word:len,
      day_num:wx.getStorageSync("day_num")
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.onLoad();
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.onLoad();
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
    
  }
})