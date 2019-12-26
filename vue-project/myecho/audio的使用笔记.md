# audio
## 写法
```
<audio id="media" src="音频地址" controls></audio>
```
```
<audio controls="controls">
  <source src="song.ogg" type="audio/ogg">
  <source src="song.mp3" type="audio/mpeg">
</audio>
```
## 属性
```
//获取audio和video的标签

var oMedia=document.getElementById("media");
```
### 用法
```
oMedia.src
```
- src:返回或设置当前资源的URL
- currentTime:当前播放的位置，赋值可改变位置
- duration:当前资源长度，流返回无限
- paused:是否暂停
- played:是否在播放
- ended:是否结束(实际开发中可以用于判断当前媒体播放结束后，跳转下一个或上一个)
- autoPlay:页面加载自动播放(移动端失效，微信里面需要用微信接口可以自动播放)

### 方法
```
oMedia.play()
```
- play():播放
- pause():暂停

### 监听事件
```
//play()和autoplay开始播放时触发
oMedia.addEventListener("play",function(){  
    //在这里写代码
});
```
- play:play()和autoplay开始播放时触发
- pause():暂停时触发
- waiting:等待数据，并非错误(实际开发中网速慢时出现loading图标在这里开始写代码)
- playing:正在播放时触发(实际开发中获取“当前时长”和“总时长”在这里写代码)
- ended:播放结束