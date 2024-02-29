import{_ as a,c as e,o as t,R as r}from"./chunks/framework.8gwMId7n.js";const m=JSON.parse('{"title":"运行环境","description":"","frontmatter":{},"headers":[],"relativePath":"node/runnode.md","filePath":"node/runnode.md","lastUpdated":1702286571000}'),o={name:"node/runnode.md"},n=r('<h1 id="运行环境" tabindex="-1">运行环境 <a class="header-anchor" href="#运行环境" aria-label="Permalink to &quot;运行环境&quot;">​</a></h1><h2 id="构建" tabindex="-1">构建 <a class="header-anchor" href="#构建" aria-label="Permalink to &quot;构建&quot;">​</a></h2><p><a href="http://www.nodejs.com.cn/" target="_blank" rel="noreferrer">NodeJs</a>是构建喜在V8引擎之上的，V8引擎由C/C++编写，因此我们的JavaScript代码需要由C/C++转化之后再执行</p><h2 id="js层" tabindex="-1">JS层 <a class="header-anchor" href="#js层" aria-label="Permalink to &quot;JS层&quot;">​</a></h2><p>JS 层提供面向用户的调用底层能力的接口，即各种 NodeJS 原生模块，如 net、http、fs、DNS 以及 path 等</p><h2 id="c-层" tabindex="-1">C++层 <a class="header-anchor" href="#c-层" aria-label="Permalink to &quot;C++层&quot;">​</a></h2><p>C++ 层主要通过 <img src="https://github.com/v8/v8.git" alt="V8"> 为 JS 层提供与底层交互的能力，起到类似桥梁的作用，通过 V8 不仅实现 JS 的解释执行，还扩展的 JS 的能力边界</p><h2 id="c层" tabindex="-1">C层 <a class="header-anchor" href="#c层" aria-label="Permalink to &quot;C层&quot;">​</a></h2><p>C 层主要包括 <img src="https://github.com/libuv/libuv.git" alt="Libuv"> 这一跨平台的异步 IO 库以及其他第三方 C 库</p><h2 id="包管理工具" tabindex="-1">包管理工具 <a class="header-anchor" href="#包管理工具" aria-label="Permalink to &quot;包管理工具&quot;">​</a></h2><p>使用<a href="https://www.npmjs.com/package/npm" target="_blank" rel="noreferrer">NPM</a>进行管理,对标python的<a href="https://pypi.org/project/pip/" target="_blank" rel="noreferrer">pip</a>，java的<a href="https://maven.apache.org/" target="_blank" rel="noreferrer">Maven</a></p><h2 id="应用场景前端" tabindex="-1">应用场景前端 <a class="header-anchor" href="#应用场景前端" aria-label="Permalink to &quot;应用场景前端&quot;">​</a></h2><p>Vue React nuxtjs nextjs Angular</p>',13),h=[n];function i(l,s,c,d,p,u){return t(),e("div",null,h)}const f=a(o,[["render",i]]);export{m as __pageData,f as default};
