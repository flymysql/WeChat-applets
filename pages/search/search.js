//index.js
///var qcloud = require('../../vendor/wafer2-client-sdk/index')
//var config = require('../../config')
var util = require('../../utils/util.js')
const app = getApp();
Page({
  data: {
    score: 0,
    currentTab: 1,
    friendsData: [],
    globalData: [],
    loadNumber: 0//全球排名数据加载次数
  },
  onLoad(opt) {

    /*
    app.appData.fromClickId = opt.currentClickId
    app.upDateUser_networkFromClickId = require('../../utils/upDateUser_networkFromClickId.js').upDateUser_networkFromClickId
    wx.showShareMenu({
      withShareTicket: true
    })
   
    wx.showShareMenu({
      withShareTicket: true
    })
    app.pageGetUserInfo(this)
    this.getRankGlobalData();
    */
  },
  onShow() {

  },

  /*
  onShareAppMessage(res) {
    const that = this;
    return {
      title: '谁才是头脑王者？比比看吧！',
      path: `/pages/entry/entry?currentClickId=${app.appData.currentClickId}`,
      success: (res) => {
        //转发时向用户关系表中更新一条转发记录(个人为person，群为GId)。
        require('../../utils/upDateShareInfoToUser_network.js').upDateShareInfoToUser_network(app, that, res)
      }
    }
  },

  */
  onReachBottom: function () {//下拉加载
    const that = this
    if (that.data.currentTab) {
      that.getRankGlobalData()
    }
  },
  /*
  getRankGlobalData() {//加载全球排名的数据
    const that = this
    qcloud.request({
      login: false,
      url: app.appData.baseUrl + 'getRankGlobalData',
      data: {
        loadNumber: that.data.loadNumber
      },
      success: (res) => {
        that.setData({
          globalData: that.data.globalData.concat(res.data.data),//数据叠加
          loadNumber: that.data.loadNumber + 1
        })
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      },
    })
  },
  getRankFriendsData: function () {
    const that = this
    qcloud.request({
      login: false,
      url: app.appData.baseUrl + 'getRankFriendsData',
      data: {
        openId: this.data.openId
      },
      success: (res) => {
        this.setData({
          friendsData: res.data.data
        })
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      },
    });
  },
  swichNav(e) {
    var that = this;
    that.setData({
      currentTab: e.target.dataset.current,
    })
  },
  word_test(){
    wx.navigateTo({
      url: '../test/test',
    })
  },
  searchinput(){
    wx.navigateTo({
      url: '../detail-word/detail-word',
    })
  }
  */

})