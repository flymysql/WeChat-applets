
![兰州小红鸡](https://picture-1256429518.cos.ap-chengdu.myqcloud.com/blog/110601.png)

**2018-11-02 更新**

<a href="https://www.vultr.com/?ref=7446652"><img src="https://www.vultr.com/media/banner_1.png" width="728" height="90"></a>

1. UI美化
2. 没了

<!--more-->
**2018-10-30 更新**

<br>

**项目主页**：[背单词微信小程序--小鸡单词](https://me.idealli.com/post/118d23db.html)

该项目已上架微信小程序市场，可以通过微信搜索“小鸡单词”进行使用

![兰州小红鸡](https://picture-1256429518.cos.ap-chengdu.myqcloud.com/blog/110102.jpg)

<br>

## 项目介绍


**这个背单词小程序有哪些特点？**


> 1.根据用户记忆遗忘曲线安排每天的学习计划
2.每天学习的细节比普通背单词程序更详细，用户可以实时看到自己每天忘记那些单词，熟悉那些单词
3.用户自主选词，自己选择要背的单词，使用起来更主动
4.功能齐全，市场背单词程序有的功能，在这个小程序上都有，可使用登陆备份等功能

> 这是一个可以根据用户记忆曲线安排用户每天学习计划的背单词小程序，并且依托微信这个巨大的流量平台已经在小程序流量平台发布，拥有了一定数量的用户

<br>

- 项目免责说明：该项目界面UI一定程度模仿墨墨背单词，由于该项目并非用于商业，免费且开源，仅供学习参考，最终解释权归项目负责人所有

- 开源：本项目已在GitHub上开源，并在多个小程序社区被转载和发布

- 说明：该小程序并无自己的数据库，使用的是扇贝单词api（后期版本计划使用自己数据库）

- 背单词页面，仿墨墨背单词

- 单词选词页面（目前支持四六级词汇，考研词汇，四六级核心词汇等）


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

1. [✔] 背单词的界面美化

2. [✔] 删掉wafer云后台

3. [✔] 将数据放在bomb云

4. [✔] 将单词的选择做成每日选词的模式

5. [✔] 可以根据使用者对单词的掌握程度，在日后的学习中穿插复习

6. [✔] 添加历史学习情况表

7. [✔] 单词测试的排名

8. [✔] 每日单词详情，细节

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