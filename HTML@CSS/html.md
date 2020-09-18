# 1 HTML笔记

## 1.1 font标签
```
<p>我的心愿是<font color='red' size='14'>世界和平</font>哈哈</p>
```

## 1.2 文档声明：`<doctype>`
html5的文档声明：用来告诉浏览器当前网页的版本
```
<!doctype html>
<!doctype HTML>
```

## 1.3 `<meta>`设置网页的元数据
    <meta name='keywords' content='网上购物，手机，笔记本电脑' charset='utf-8'>
    name:指定数据的名称，取值：
        keywords表示网页的关键字，可以指定多个关键字，关键字之间使用逗号隔开
        description表示网页的描述，一般是一段话
        http-equiv:将网页重定向到另一个页面
    content:指定数据的内容
        作为keywords时，这些内容在网页引擎时作为标题显示
        作为discription时，这些内容在网页引擎时作为主体内容显示
        作为http-equiv:3秒后跳转到百度界面
            <meta name='http-equiv' content='3,http://www.baidu.com' charset='utf-8'>
    具体可以参见京东页面


## 1.4 html实体

- 浏览器会默认将多个空格其解析为一个空格  
- 由于`<>`是标签的符号，如果我们想要显示这些内容也会出现问题  
- 如果我们想要显示特殊符号，则需要转义：&实体的名字;  
- 例如：空格就是`&nbsp;`    大于符号就是`&gt;`   小于符号就是`&lt;`
```
<p>
    今天         天气真不错!
    今天&nbsp;&nbsp;&nbsp;&nbsp;天气真不错
</p>
```

## 1.5 块元素和行内元素:理解标签主要从语义入手
- hgroup标签将一组相关的标题放在一起，为标题分组：`<hgroup> <h1>哒哒</h1> <h2>哈哈</h2> </hgroup>`
- 块元素：在页面中独占一行的元素
    - h1~h6：其中一个页面中一般只有一个h1
    - div
- 行内元素：主要用来包裹文字,span

- 两者的嵌套使用：
	- 一般块元素中可以放置任何元素，但是p元素内不能放置块元素
    - 行内元素内部拌牛肉放置块元素
- 如果我们的写法不符合规范，浏览器在解析时一般会自动对网页中的内容进行修正，但是不会在源码中修正，而是在网页运行产生的内存中修正  

## 1.6 列表
- 列表有三类：有序列表，无序列表，自定义列表  
- 一般在使用中，由于列表自己产生的序号在各个浏览器中显示的大小不同，所以一般直接将序号去掉
- **有序列表**：每个列表项前使用.排列
```
<ol>
    <li></li>
    <li></li>
</ol>
```
- **无序列表**：每个列表项前使用1,2,...排列
```
<ul>
    <li></li>
    <li></li>
</ul>
```
- **自定义列表**：dl标签定义创建一个定义列表，dt表示定义的内容，dd表示解释说明内容
```
<dl>
    <dt></dt>
    <dd></dd>
</dl>
```

## 1.7 超链接`<a href="#" target="_self"></a>`
- href属性：指定超链接指定的网页，可以使用绝对地址或者相对地址
    - `#`：点击后页面不会跳转，而是跳转到当前页面的顶部位置，即回到顶部
    - #目标元素的id名:可以直接跳转到该元素所在的位置

- target属性：指定超链接打开的位置
    -  `_self`:在当前页面中打开
	- `_blank`:在一个新的页面中打开

在开发中，如果我们还没有确定超链接的连接地址，就可以将href属性设置为`#`或者`javascript;`,此时点击超链接将没有任何反应
```
<a href="#"></a>
<a href="javascript;"></a>
```

# 图片标签`<img src="" alt=''>`

- src属性规定外部图片的地址  
- alt规定图片的替代文本，在图片无法正常显示时显示该文本内容；搜索引擎会根据alt的内容来识别图片，所以不写alt时搜索引擎不会识别该图片  
- `width`:图片的宽度(单位是像素)
- `height`:图片的高度
    宽度与高度只修改一个，另外一个会等比例放缩
    在pc端，不建议修改图片的大小，需要图片多大就裁多大
    在客户端，经常需要修改图片的大小

# 图片的格式
- jpeg:支持颜色较丰富，不支持透明效果，不支持动图
    - 一般显示照片
- gif:支持颜色少，支持简单透明，支持动图
    - 适合颜色单一的图片，动图
- png:支持颜色较丰富，支持复杂透明，不支持动图
    - 适合颜色丰富，复杂透明图片
- webp:谷歌推出的专门用于表示网页图片的一种格式，具备其他图片的优点，还比较小
    - 缺点：兼容性差
- base64:将图片使用base64编码，即将图片转为字符引入，这样可以实现图片和网页一起加载的效果，较少用(图片转为base64后：字符比较复杂且长)
    - 图片在线转base64:https://tool.chinaz.com/tools/imgtobase

- **选择原则**:
    - 效果一样，用小的
    - 效果不一样，用好的

# 内联框架`<iframe src="" width='' height='' frameborder='0'></iframe>`
- 向页面中引入其他的页面
    - src属性为其他页面的地址
    - width、height:指定框架的宽度和高度
    - frameborder:指定框架是否具备边框，0没有，1有
- `<iframe src="http://www.baidu.com" width="800px" height="500px" frameborder="0"></iframe>`
很少使用

# 引入音视频文件
`<audio src='' controls autoplay loop></audio>`:引入音频文件，默认不允许用户控制
  - controls:允许用户自己控制
  - autoplay:音频文件自动播放
  - loop:音乐循环播放

- 除了通过src指定文件路径外，还可以使用`<source src="" type="">`  
- 这样就可以在浏览器不支持的情况下给予用户提示   

```
<audio controls>
    对不起，您的浏览器不支持播放音频，请升级浏览器！！
    <source src="1.mp3">
</audio>
```

- 上面两种ie8均不支持，基本所有浏览器均支持：`<embed src='' type='audio/mp3' width='' height=''></embed>`,但是这不好用  

- 兼容使用：
```
<audio controls>
    对不起，您的浏览器不支持播放音频，请升级浏览器！！
    <source src="1.mp3">
    <embed src='' type='audio/mp3' width='' height=''></embed>
</audio>
```

- 同理引入视频文件：`<video src=''></video>`
```
<video controls>
    对不起，您的浏览器不支持播放音频，请升级浏览器！！
    <source src="1.mp3">
    <embed src='' type='audio/mp3' width='' height=''></embed>
</video>
```