# wx-mini-emoji

#### 介绍
​	介于在网上找了好久的小程序emoji组件都没有合适的，于是乎自己手写了一个，做了一个简陋的版本，但也满足自己目前需求了，有需要的可以在此版本基础上面修改。

#### 软件架构
​	小程序原生开发


#### 安装教程

​	直接使用微信开发工具导入项目即可

#### 预览效果

​	模拟器效果

​	<img src="images/virtual.png" alt="virtual"  /> 

​	真机效果

​	<img src="images/native.png" alt="native" />

#### 使用说明

1.  页面json配置导入emoji组件

![import-emoji](images/import-emoji.png)

1.  页面使用组件

![use-emoji](images/use-emoji.png)

- is-show为必传参数，控制emoji面板的显隐
- height和background-color为面板的高度和背景颜色，不传时默认为600rpx和#f7f7f7
- bindclose和bindchoose为关闭和选择emoji事件，绑定到自己写的事件上

1. emoji图标数组在/components/emoji/emoji.js的emojiList，可自己替换成别的

   ![replace-emoji](images/replace-emoji.png)

#### Emoji数据来源

1. 本项目里使用的emoji数据来源为该网址：[表情emoji大全](https://www.fuhaozi.com/emoji/biaoqing.html)

   ![emoji-html](images/emoji-html.png)

2. 获取emoji方式：打开浏览器的开发者工具（F12），切换tab到Console执行以下脚本

      ```javascript
      var emojiTag = $(".list_moji").find("li").find("p");
      var emojiArr = [];
      for(var i = 0; i < emojiTag.length;i++){ 
          emojiArr.push($(emojiTag[i]).text())
      }
      console.log(emojiArr)
      ```
   
   ![emoji-script](images/emoji-script.png)
   
    直接复制数据内容替换掉emojiList即可。


#### 备注

1. 目前只实现了最简单的版本，还有很多可以完善的地方，在这里我只使用了表情类的emoji，还可以在面板加入多个tab，把其他类的emoji也加进来。

2. 样式方面可以再美化一下

   

   
