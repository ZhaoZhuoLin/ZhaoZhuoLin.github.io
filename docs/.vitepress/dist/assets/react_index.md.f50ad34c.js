import{_ as a,o as s,c as e,Q as n}from"./chunks/framework.b814b613.js";const b=JSON.parse('{"title":"React学习","description":"","frontmatter":{},"headers":[],"relativePath":"react/index.md","filePath":"react/index.md"}'),l={name:"react/index.md"},p=n(`<h1 id="react学习" tabindex="-1">React学习 <a class="header-anchor" href="#react学习" aria-label="Permalink to &quot;React学习&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">欢迎Star⭐</p><p>记录编写React的点点滴滴 Github: <a href="https://github.com/ZhaoZhuoLin/react-blog.git" target="_blank" rel="noreferrer">https://github.com/ZhaoZhuoLin/react-blog.git</a></p></div><h2 id="一-react是什么" tabindex="-1">一.React是什么？ <a class="header-anchor" href="#一-react是什么" aria-label="Permalink to &quot;一.React是什么？&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>用于构建用户界面的JavaScript库，是一个将数据渲染伟HTML视图的JavaScript库。近十年，被腾讯，阿里等一线大厂使用</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">1.发送数据获取数据</span></span>
<span class="line"><span style="color:#e1e4e8;">2.处理数据（格式处理）</span></span>
<span class="line"><span style="color:#e1e4e8;">3.操作DOM呈现页面</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">1.发送数据获取数据</span></span>
<span class="line"><span style="color:#24292e;">2.处理数据（格式处理）</span></span>
<span class="line"><span style="color:#24292e;">3.操作DOM呈现页面</span></span></code></pre></div><h2 id="二-react优点" tabindex="-1">二. React优点 <a class="header-anchor" href="#二-react优点" aria-label="Permalink to &quot;二. React优点&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.原生JavaScript操作DOM操作繁琐，效率低（DOM-API操作UI)。</span></span>
<span class="line"><span style="color:#e1e4e8;">2.使用JavaScript直接操作DOM，浏览器会进行大量的重绘重排。</span></span>
<span class="line"><span style="color:#e1e4e8;">3.原生JavaScript没有组件化的编码方案，代码复用率低。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.原生JavaScript操作DOM操作繁琐，效率低（DOM-API操作UI)。</span></span>
<span class="line"><span style="color:#24292e;">2.使用JavaScript直接操作DOM，浏览器会进行大量的重绘重排。</span></span>
<span class="line"><span style="color:#24292e;">3.原生JavaScript没有组件化的编码方案，代码复用率低。</span></span></code></pre></div><h2 id="二-react特点" tabindex="-1">二.React特点 <a class="header-anchor" href="#二-react特点" aria-label="Permalink to &quot;二.React特点&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.采用组件化模式，声明式编程，提高开发效率以及组件复用率。</span></span>
<span class="line"><span style="color:#e1e4e8;">2.在React Native中可以使用React语法进行移动端开发。</span></span>
<span class="line"><span style="color:#e1e4e8;">3.本质是Object类型的对象（一般对象)。虚拟DOM比较轻，真实DOM重，因为虚拟DOM是React内容在用，无需真实DOM上那么多的属性</span></span>
<span class="line"><span style="color:#e1e4e8;">4.使用虚拟DOM和优秀的Diffing算法，尽量减少与真实DOM的交互。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.采用组件化模式，声明式编程，提高开发效率以及组件复用率。</span></span>
<span class="line"><span style="color:#24292e;">2.在React Native中可以使用React语法进行移动端开发。</span></span>
<span class="line"><span style="color:#24292e;">3.本质是Object类型的对象（一般对象)。虚拟DOM比较轻，真实DOM重，因为虚拟DOM是React内容在用，无需真实DOM上那么多的属性</span></span>
<span class="line"><span style="color:#24292e;">4.使用虚拟DOM和优秀的Diffing算法，尽量减少与真实DOM的交互。</span></span></code></pre></div><h2 id="四-jsx语法规则" tabindex="-1">四. JSX语法规则 <a class="header-anchor" href="#四-jsx语法规则" aria-label="Permalink to &quot;四. JSX语法规则&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.定义虚拟DOM，不需要写引号，使用()</span></span>
<span class="line"><span style="color:#e1e4e8;">2.标签中混入JS表达式时使用{}</span></span>
<span class="line"><span style="color:#e1e4e8;">3.样式的类名指定不要用class，需使用className</span></span>
<span class="line"><span style="color:#e1e4e8;">4.内联样式，使用style={{key:value}}方式</span></span>
<span class="line"><span style="color:#e1e4e8;">5.虚拟DOM必须只要一个根标签</span></span>
<span class="line"><span style="color:#e1e4e8;">6.使用标签必须闭合</span></span>
<span class="line"><span style="color:#e1e4e8;">7.标签首字母</span></span>
<span class="line"><span style="color:#e1e4e8;">   (1):若小写字母开头，则将标签改为html中同名元素，反之报错</span></span>
<span class="line"><span style="color:#e1e4e8;">   (2):若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.定义虚拟DOM，不需要写引号，使用()</span></span>
<span class="line"><span style="color:#24292e;">2.标签中混入JS表达式时使用{}</span></span>
<span class="line"><span style="color:#24292e;">3.样式的类名指定不要用class，需使用className</span></span>
<span class="line"><span style="color:#24292e;">4.内联样式，使用style={{key:value}}方式</span></span>
<span class="line"><span style="color:#24292e;">5.虚拟DOM必须只要一个根标签</span></span>
<span class="line"><span style="color:#24292e;">6.使用标签必须闭合</span></span>
<span class="line"><span style="color:#24292e;">7.标签首字母</span></span>
<span class="line"><span style="color:#24292e;">   (1):若小写字母开头，则将标签改为html中同名元素，反之报错</span></span>
<span class="line"><span style="color:#24292e;">   (2):若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错</span></span></code></pre></div><h2 id="五-组件" tabindex="-1">五. 组件 <a class="header-anchor" href="#五-组件" aria-label="Permalink to &quot;五. 组件&quot;">​</a></h2><pre><code>1. 函数式组件
2. 类式组件
</code></pre><h2 id="六-组件实例的三大属性" tabindex="-1">六. 组件实例的三大属性 <a class="header-anchor" href="#六-组件实例的三大属性" aria-label="Permalink to &quot;六. 组件实例的三大属性&quot;">​</a></h2><h3 id="state" tabindex="-1">state <a class="header-anchor" href="#state" aria-label="Permalink to &quot;state&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.state是组件对象最重要的属性，值是对象可以包含多个key-value的组合</span></span>
<span class="line"><span style="color:#e1e4e8;">2.组件被称为“状态机”，通过更新组件的state来更新对应页面显示（重新reader）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.state是组件对象最重要的属性，值是对象可以包含多个key-value的组合</span></span>
<span class="line"><span style="color:#24292e;">2.组件被称为“状态机”，通过更新组件的state来更新对应页面显示（重新reader）</span></span></code></pre></div><h4 id="state注意" tabindex="-1">state注意： <a class="header-anchor" href="#state注意" aria-label="Permalink to &quot;state注意：&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.组件中render方法中的this为组件实例对象</span></span>
<span class="line"><span style="color:#e1e4e8;">2.组件自定义的方法中this为undefined，如何解决？</span></span>
<span class="line"><span style="color:#e1e4e8;"> a ：使用bind修改this指向</span></span>
<span class="line"><span style="color:#e1e4e8;"> b ：箭头函数</span></span>
<span class="line"><span style="color:#e1e4e8;">3. 状态数据不能直接修改或者更新，需要使用setState</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.组件中render方法中的this为组件实例对象</span></span>
<span class="line"><span style="color:#24292e;">2.组件自定义的方法中this为undefined，如何解决？</span></span>
<span class="line"><span style="color:#24292e;"> a ：使用bind修改this指向</span></span>
<span class="line"><span style="color:#24292e;"> b ：箭头函数</span></span>
<span class="line"><span style="color:#24292e;">3. 状态数据不能直接修改或者更新，需要使用setState</span></span></code></pre></div><h3 id="props理解" tabindex="-1">props理解： <a class="header-anchor" href="#props理解" aria-label="Permalink to &quot;props理解：&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.每个组件都会有props属性</span></span>
<span class="line"><span style="color:#e1e4e8;">2.组件标签的所有属性都保存在props中</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.每个组件都会有props属性</span></span>
<span class="line"><span style="color:#24292e;">2.组件标签的所有属性都保存在props中</span></span></code></pre></div><h4 id="props作用" tabindex="-1">props作用： <a class="header-anchor" href="#props作用" aria-label="Permalink to &quot;props作用：&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1. 通过标签属性从组件外部向组件内部传递变化的数据</span></span>
<span class="line"><span style="color:#e1e4e8;">2. 组件内部不要修改props数据</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1. 通过标签属性从组件外部向组件内部传递变化的数据</span></span>
<span class="line"><span style="color:#24292e;">2. 组件内部不要修改props数据</span></span></code></pre></div><h2 id="七-事件处理" tabindex="-1">七：事件处理 <a class="header-anchor" href="#七-事件处理" aria-label="Permalink to &quot;七：事件处理&quot;">​</a></h2><pre><code>1. 通过哦onXxx属性指定时间处理函数（注意大小写）
 a. React中使用自定义合成时间，而不是使用原生的DOM事件-为了更好 兼容性
 b. React中的事件是通过事件委托方式处理的（委托给组件最层的元素）-为了高效
2. 通过event.targer得到发生事件的DOM元素-不要过度使用ref
</code></pre><h2 id="八-生命周期" tabindex="-1">八：生命周期 <a class="header-anchor" href="#八-生命周期" aria-label="Permalink to &quot;八：生命周期&quot;">​</a></h2><h3 id="_1-初始化阶段-由render触发" tabindex="-1">1.初始化阶段，由render触发 <a class="header-anchor" href="#_1-初始化阶段-由render触发" aria-label="Permalink to &quot;1.初始化阶段，由render触发&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">a.constructor()</span></span>
<span class="line"><span style="color:#e1e4e8;">b.componentWillMount()</span></span>
<span class="line"><span style="color:#e1e4e8;">c.render()</span></span>
<span class="line"><span style="color:#e1e4e8;">d.componentDidMount()</span></span>
<span class="line"><span style="color:#e1e4e8;">一般在d中做一些初始化的事情：开启定时器，发起网络请求，初始化用户行为</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">a.constructor()</span></span>
<span class="line"><span style="color:#24292e;">b.componentWillMount()</span></span>
<span class="line"><span style="color:#24292e;">c.render()</span></span>
<span class="line"><span style="color:#24292e;">d.componentDidMount()</span></span>
<span class="line"><span style="color:#24292e;">一般在d中做一些初始化的事情：开启定时器，发起网络请求，初始化用户行为</span></span></code></pre></div><h3 id="_2-更新阶段-由内部this-setstate触发" tabindex="-1">2.更新阶段，由内部this.setState触发 <a class="header-anchor" href="#_2-更新阶段-由内部this-setstate触发" aria-label="Permalink to &quot;2.更新阶段，由内部this.setState触发&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"> a.shouldComponentUpdate()</span></span>
<span class="line"><span style="color:#e1e4e8;"> b.componentWillUpdate()</span></span>
<span class="line"><span style="color:#e1e4e8;"> c.componentDidUpdate()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"> a.shouldComponentUpdate()</span></span>
<span class="line"><span style="color:#24292e;"> b.componentWillUpdate()</span></span>
<span class="line"><span style="color:#24292e;"> c.componentDidUpdate()</span></span></code></pre></div><h3 id="_3-卸载阶段-由unmountcomponentatnode触发" tabindex="-1">3.卸载阶段，由unmountComponentAtNode触发 <a class="header-anchor" href="#_3-卸载阶段-由unmountcomponentatnode触发" aria-label="Permalink to &quot;3.卸载阶段，由unmountComponentAtNode触发&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">a.componentWillUnmount()</span></span>
<span class="line"><span style="color:#e1e4e8;">一般在a中做一些收尾的事情，关闭定时器，取消订阅消息</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">a.componentWillUnmount()</span></span>
<span class="line"><span style="color:#24292e;">一般在a中做一些收尾的事情，关闭定时器，取消订阅消息</span></span></code></pre></div>`,31),t=[p];function o(c,i,r,d,h,u){return s(),e("div",null,t)}const g=a(l,[["render",o]]);export{b as __pageData,g as default};
