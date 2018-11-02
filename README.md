## 欢迎fork，仅供学习参考，用你勤劳的小手点亮一颗star吧

<a href="https://www.vultr.com/?ref=7446652">
<p style="font-size: 18px;">vultr主机每月2.5美元起！</p></a>

<a href="https://www.vultr.com/?ref=7446652"><img src="https://www.vultr.com/media/banner_1.png" width="728" height="90"></a>

## 小鸡单词2

> 在之前的基础上做了较大的改动。代码现在看来比较臃肿，方法也都很笨，从第一个版本拿过来更改的，由于上课的原因，断断续续写了四天。现在终于干一段落了，还是要继续好好学习。**加油！！！**，另外，求关注鸭(っ °Д °;)っ


![兰州小红鸡](https://picture-1256429518.cos.ap-chengdu.myqcloud.com/blog/xiaoji2.png)

<br>

> 2018-11-02 更新

1. UI美化
2. 没了

> 2018-10-30 更新

<br>

**项目主页：[背单词微信小程序--小鸡单词](https://me.idealli.com/WeChat-applets/)**

**该项目已上架微信小程序市场，可以通过微信搜索“小鸡单词”进行使用**

![兰州小红鸡](https://picture-1256429518.cos.ap-chengdu.myqcloud.com/blog/110102.jpg)

<br>

## 项目介绍

<br>

**为什么要做微信小程序？微信小程序的优势**

1. 对用户使用上来说，确实方便，要用的时候打开，不用的时候关掉，即用即走。这点比需要下载，还要占用手机内存空间的APP要好。

2. 主要的样式代码都封装在微信小程序里面，所以打开速度比普通的HTML5要快，接近原生APP。

<!--more-->

3. 可以调用比HTML5更多的手机系统功能来进行开发，例如GPS定位、录音、拍视频、重力感应等，能开发更丰富的使用场景。

4. 在安卓手机上可以添加到手机桌面，看上去跟原生APP差不多，但仅限安卓手机，iphone就不行了。

5. 运行速度跟APP差不多，也能做出很多HTML5不做到的功能，开发成本跟HTML5差不多，相对来说开发成本比APP要低。

6. 在微信中打开率更高 同样的一个广告链接，在公众号图文中插入外链、阅读原文、文末广告和小程序广告位所获得的打开率完全不用，小程序和阅读原文的打开率差了20倍左右。

7. 公众号+小程序完美结合 朋友圈、公众号和小程序，分别对应着社交、内容和服务，这三者加起来正好是小程序目前最火爆的变现方案——社交电商。朋友圈推广、公众号引流，小程序变现，这就是公众号 + 小程序模式。

<br>

**这个背单词小程序有哪些优势？**


1. 根据用户记忆遗忘曲线安排每天的学习计划

2. 每天学习的细节比普通背单词程序更详细，用户可以实时看到自己每天忘记那些单词，熟悉那些单词

3. 用户自主选词，自己选择要背的单词，使用起来更主动

4. 功能齐全，市场背单词程序有的功能，在这个小程序上都有，可使用登陆备份等功能


## 项目概述

> 这是一个可以根据用户记忆曲线安排用户每天学习计划的背单词小程序，并且依托微信这个巨大的流量平台已经在小程序流量平台发布，拥有了一定数量的用户

<br>

- 项目免责说明：该项目界面UI一定程度模仿墨墨背单词，由于该项目并非用于商业，免费且开源，仅供学习参考，最终解释权归项目负责人所有

- 开源：本项目已在GitHub上开源，并在多个小程序社区被转载和发布

- 说明：该小程序并无自己的数据库，使用的是扇贝单词api（后期版本计划使用自己数据库）

> 背单词页面，仿墨墨背单词



> 单词选词页面（目前支持四六级词汇，考研词汇，四六级核心词汇等）


![兰州小红鸡](https://picture-1256429518.cos.ap-chengdu.myqcloud.com/blog/1102show1.jpg)



> 每天任务细节页面

1. 每个单词设置单词权重
2. 初始单词权重为0.5
3. 每忘记一次单词，会有相应的算法去减掉一定的权重
4. 会有排序算法将单词列表将单词按权重从低到高重新排列
5. 每天安排新的任务计划时，权重低的单词优先安排

<br>

![兰州小红鸡](https://picture-1256429518.cos.ap-chengdu.myqcloud.com/blog/1102show2.jpg)


<br>

> 个人设置页面

**目前实现功能**

1. 每日单词量设置
2. 已加入计划单词量
3. 备份与还原
4. 登陆设置
5. 词汇测试
6. 词汇量全服排名

<br>

**待完成功能**

1. 单词上限购买
2. 记忆模式：看中文拼英文

<br>

> 词汇量测试的全服排名模仿跳一跳的排名

<br>

![兰州小红鸡](https://picture-1256429518.cos.ap-chengdu.myqcloud.com/blog/1102show3.jpg)



## 项目历程

<br>

**该项目是由小鸡单词1.0进行版本更新，由于版本改动较大，所以作为新版本发布**

<br>

**项目todo列表**

1. [x] 背单词的界面美化

2. [x] 删掉wafer云后台

3. [x] 将数据放在bomb云

4. [x] 将单词的选择做成每日选词的模式

5. [x] 可以根据使用者对单词的掌握程度，在日后的学习中穿插复习

6. [x] 添加历史学习情况表

7. [x] 单词测试的排名

8. [x] 每日单词详情，细节

9. [ ] 增加购买单词的功能


## 源码简介

<br>

**下面是小程序的各页面构成**
一共15个页面，主要页面有5个，另外有五个页面由于上个版本遗留，暂时废弃，但是考虑到后续版本可能会继续使用，所以保留（不占空间）


```java
Demo
├─data                    //本地词库
├─dist                    //bmob云的sdk
├─images                  //图片素材
├─pages                   //
│  ├─about                //关于我
│  ├─all_detail           //统计页，学习情况详情
│  ├─audio_test           //听音词汇测试，本版本废弃
│  ├─choice               //挑选单词书，本版本废弃
│  ├─collect_card         //收集单词的卡片
│  ├─detail-word          //单词收索页，本版本废弃
│  ├─index                //
│  ├─job                  //选词页面
│  ├─me                   //设置页面
│  ├─my_word              //已挑选的单词展示页
│  ├─rank                 //排名页，本版本废弃
│  ├─search               //搜索页，本版本废弃
│  ├─study                //学习页，重要页面
│  ├─suggestion           //建议页
│  └─test                 //词汇测试页
└─utils

```


## 项目目前的发展

<br>

1. 小程序目前的累计使用人数已超过一千

<br>

主要集中在10月份

![兰州小红鸡](https://picture-1256429518.cos.ap-chengdu.myqcloud.com/blog/110103.png)

<br>

2. 小程序在搜索栏被打开的比例占了55%

<br>

![兰州小红鸡](https://picture-1256429518.cos.ap-chengdu.myqcloud.com/blog/110104.png)

<br>

3. 小程序使用人群

<br>

**从目前情况来看，18~24岁的年轻女性比较多**看来还是女孩子比较爱背单词

<br>

![兰州小红鸡](https://picture-1256429518.cos.ap-chengdu.myqcloud.com/blog/110105.png)

<br>

4. 目前小程序的发行版本 3.5.6666

> 3.5.6667版本开始加入广告

<br>

![兰州小红鸡](https://picture-1256429518.cos.ap-chengdu.myqcloud.com/blog/110106.png)

<br>

## 项目后期发展规划

1. 加入单词购买功能

2. 简化算法

3. 建立自己的单词数据库


## 感慨

代码现在看来还是比较臃肿，方法也都很笨，后期的版本更新会继续优化。

> 小程序的的核心代码在study页（代码较烂，有点看不下

后台使用bmob云，小程序够用，目前免费，感兴趣自行搜索

## 展示一部分臃肿的代码（逃

> 代码比较臃肿，可以说是很烂了，不过毕竟学习，也是做着玩玩，放出来大家看着笑笑就好了，不必当真

- study.js
```java
/*
 * 小鸡单词，主要代码，更新于2018/10/23
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

```



## 页面onload函数

> 主要负责判断是否新的一天，加载每天任务量，加载每天任务细节，和其他的细节内容 



```java
  onLoad: function(options) {
    this.setData({
      time: this.set_time(new Date()),        //日期
      day_num: wx.getStorageSync('day_task'), //每天任务量
      today_detail:wx.getStorageSync("today_detail")
    })


    //如果是新的一天，调用new_day函数
    if (this.data.time != wx.getStorageSync("day")) {
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
```



## 页面重新展示时的函数

> 主要因为用户如果当天第一次登陆后发现已选词汇不够，被强制要求先去选词，当用户离开本页面，前往词库选词回来后，需要刷新本页的数据，判断用户是否选够词。还有一些其他情况的判断



```java

  //当用页面重新展示时调用函数
  onShow: function() {
    this.setData({
      today_word: wx.getStorageSync('today_word'),
      task_detail: wx.getStorageSync("task_detail"),
      today_detail:wx.getStorageSync("today_detail")
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
```



## 页面隐藏与页面卸载函数




```java
  //当页面被影藏时，保存数据
  onHide: function() {
    wx.setStorageSync("task_detail", this.data.task_detail);
    wx.setStorage({
      key: 'today_detail',
      data: this.data.today_detail,
    })
  },

  //页面被卸载时，保存学习数据
  onUnload: function() {
    wx.setStorageSync("task_detail", this.data.task_detail);
    wx.setStorage({
      key: 'today_detail',
      data: this.data.today_detail,
    })
  },
```


```java
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
```




## 界面三个按钮绑定的事件（忘记，模糊，认识）需要判断以下事情

1. 单词是否第一次展示（如果是，判断第一次展示时用户时忘记还是认识）
2. 单词是否最后一次被展示
3. 单词是否是今天的最后一个单词
4. 这个单词模糊，忘记和认识的次数
5. 如果用户时忘记或模糊，则往单词队列的相应位置再次添加词单词




```java
  //用户点击认识
  next: function() {

    //判断当前单词是否第一次展示
    var temp = this.data.counter;
    if (this.data.task_detail[temp].rem === 0 && this.data.task_detail[temp].mohu === 0 && this.data.task_detail[temp].forget === 0){
      this.data.today_detail.rem++;
    }

    this.data.task_detail[temp].rem++;

    //判断当前单词是否最后一次被显示
    if (this.data.task_detail[temp].rem >= this.data.task_detail[temp].forget * 3 + this.data.task_detail[temp].mohu * 2) {
      wx.setStorage({
        key: this.data.time,
        data: wx.getStorageSync(this.data.time) + 1
      })
    }

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

  },


  //用户点击忘记时调用该函数
  forget: function() {
    var temp = this.data.counter;
    //判断是否第一次显示
    if (this.data.task_detail[temp].rem === 0 && this.data.task_detail[temp].mohu === 0 && this.data.task_detail[temp].forget === 0) {
      this.data.today_detail.forget++;
    }
    this.data.task_detail[temp].forget++;
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
  },

  //用户点击模糊时调用函数
  mohu: function() {
    var temp = this.data.counter;
    if (this.data.task_detail[temp].rem === 0 && this.data.task_detail[temp].mohu === 0 && this.data.task_detail[temp].forget === 0) {
      this.data.today_detail.mohu++;
    }
    this.data.task_detail[this.data.counter].mohu++;
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
  },
```



## 小程序并非使用自己的单词库，而是调用扇贝单词的api，在线获取单词细节
下面使用search函数调用扇贝api获取单词详情

- 在此感谢扇贝单词



```java
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
```

## 获取当天日期的函数

```java
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
```


## 完成当天学习任务后触发的函数

- 判断是否第一次登陆（因为当天第一次登陆时单词列表还没有单词，也会触发complete函数）
- 绘制当天学习情况扇形图
- 将当天学习情况写入本地


```java
  //完成当天学习任务后触发的函数
  complete() {
    if (!wx.getStorageSync("first_login")) this.setData({
      cpt: true,
      showNot: false,
      complete_day_num: wx.getStorageSync('day_num')
    })

    //绘制当天学习细节扇行图
    var chart_detail=this.data.today_detail;
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
    if (!wx.getStorageSync("complete")) {

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
        all_detail.push(this.data.today_detail)
        wx.setStorage({
          key: 'all_detail',
          data: all_detail,
        })
      }
      else{
        all_detail = wx.getStorageSync("all_detail")
        all_detail.push(this.data.today_detail)
        wx.setStorage({
          key: 'all_detail',
          data: all_detail,
        })
      }
      
    }

  },
```


## 用户收藏单词事件和点击更多例句的事件


```java
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
```


## 触发本地单词队列重新排序

在当天第一次完成单词任务后触发


```java

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
```

## newday函数

> 每天第一次登陆时触发，将一些当天学习情况置零



```java
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

    this.setData({
      today_detail:{"day":this.data.time,"rem":0,"mohu":0,"forget":0}
    })
    wx.setStorage({
      key: 'today_detail',
      data: this.data.today_detail,
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
```

## 感慨

代码现在看来比较臃肿，方法也都很笨，从第一个版本拿过来更改的，由于上课的原因，断断续续写了四天。现在终于干一段落了，还是要继续好好学习。**加油！！！**，另外，求关注鸭(っ °Д °;)っ


仅供学习，转载请注明出处
另外个人博客求一波友链 https://me.idealli.com
