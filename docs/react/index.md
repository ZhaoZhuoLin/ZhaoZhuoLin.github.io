# React学习
:::tip 欢迎Star⭐
记录编写React的点点滴滴
Github: https://github.com/ZhaoZhuoLin/react-blog.git 
:::
## 一.React是什么？
:::tip 
用于构建用户界面的JavaScript库，是一个将数据渲染伟HTML视图的JavaScript库。近十年，被腾讯，阿里等一线大厂使用
:::
```

1.发送数据获取数据
2.处理数据（格式处理）
3.操作DOM呈现页面
```
## 二. React优点
```
1.原生JavaScript操作DOM操作繁琐，效率低（DOM-API操作UI)。
2.使用JavaScript直接操作DOM，浏览器会进行大量的重绘重排。
3.原生JavaScript没有组件化的编码方案，代码复用率低。
```
## 二.React特点
```
1.采用组件化模式，声明式编程，提高开发效率以及组件复用率。
2.在React Native中可以使用React语法进行移动端开发。
3.本质是Object类型的对象（一般对象)。虚拟DOM比较轻，真实DOM重，因为虚拟DOM是React内容在用，无需真实DOM上那么多的属性
4.使用虚拟DOM和优秀的Diffing算法，尽量减少与真实DOM的交互。
```
## 四. JSX语法规则
```
1.定义虚拟DOM，不需要写引号，使用()
2.标签中混入JS表达式时使用{}
3.样式的类名指定不要用class，需使用className
4.内联样式，使用style={{key:value}}方式
5.虚拟DOM必须只要一个根标签
6.使用标签必须闭合
7.标签首字母
   (1):若小写字母开头，则将标签改为html中同名元素，反之报错
   (2):若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错
```
## 五. 组件
	1. 函数式组件
	2. 类式组件
## 六. 组件实例的三大属性
### state
```
1.state是组件对象最重要的属性，值是对象可以包含多个key-value的组合
2.组件被称为“状态机”，通过更新组件的state来更新对应页面显示（重新reader）
```
#### state注意：
```
1.组件中render方法中的this为组件实例对象
2.组件自定义的方法中this为undefined，如何解决？
 a ：使用bind修改this指向
 b ：箭头函数
3. 状态数据不能直接修改或者更新，需要使用setState
```
### props理解：
```
1.每个组件都会有props属性
2.组件标签的所有属性都保存在props中
```
#### props作用：
```
1. 通过标签属性从组件外部向组件内部传递变化的数据
2. 组件内部不要修改props数据
```
## 七：事件处理   
	1. 通过哦onXxx属性指定时间处理函数（注意大小写）
	 a. React中使用自定义合成时间，而不是使用原生的DOM事件-为了更好 兼容性
	 b. React中的事件是通过事件委托方式处理的（委托给组件最层的元素）-为了高效
	2. 通过event.targer得到发生事件的DOM元素-不要过度使用ref
## 八：生命周期
### 1.初始化阶段，由render触发
```
a.constructor()
b.componentWillMount()
c.render()
d.componentDidMount()
一般在d中做一些初始化的事情：开启定时器，发起网络请求，初始化用户行为
```
### 2.更新阶段，由内部this.setState触发
```
 a.shouldComponentUpdate()
 b.componentWillUpdate()
 c.componentDidUpdate()
```

### 3.卸载阶段，由unmountComponentAtNode触发
```
a.componentWillUnmount()
一般在a中做一些收尾的事情，关闭定时器，取消订阅消息
```