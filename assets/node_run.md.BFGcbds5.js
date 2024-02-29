import{_ as s,c as e,o as i,R as n}from"./chunks/framework.8gwMId7n.js";const t="/assets/npm-run.D6CTt-5n.png",a="/assets/node_modules-bin.BhklJBSF.png",l="/assets/npm-scirpt-dev.C1Wx1ZNF.png",p="/assets/npm-script-log.DTSg_JXo.png",b=JSON.parse('{"title":"启动npm run","description":"","frontmatter":{},"headers":[],"relativePath":"node/run.md","filePath":"node/run.md","lastUpdated":1702286571000}'),r={name:"node/run.md"},o=n('<h1 id="启动npm-run" tabindex="-1">启动npm run <a class="header-anchor" href="#启动npm-run" aria-label="Permalink to &quot;启动npm run&quot;">​</a></h1><h2 id="npm-run-dev-运行过程中发生了什么" tabindex="-1">npm run dev 运行过程中发生了什么 <a class="header-anchor" href="#npm-run-dev-运行过程中发生了什么" aria-label="Permalink to &quot;npm run dev 运行过程中发生了什么&quot;">​</a></h2><p><img src="'+t+'" alt="test"></p><h2 id="执行过程" tabindex="-1">执行过程： <a class="header-anchor" href="#执行过程" aria-label="Permalink to &quot;执行过程：&quot;">​</a></h2><ul><li>从当前项目node_modules/.bin查找可执行命令vite</li><li>没有，则从全局node_modules查找vite命令</li><li>没有，从环境变量中查找</li><li>没有，则报错</li></ul><p><img src="'+a+`" alt="test"></p><ul><li>/bin/sh 提供给linux nuix macOs使用</li><li>.cmd windows的cmd使用</li><li>ps1 给widnows的powershell使用</li></ul><h2 id="npm-run-生命周期" tabindex="-1">npm run 生命周期 <a class="header-anchor" href="#npm-run-生命周期" aria-label="Permalink to &quot;npm run 生命周期&quot;">​</a></h2><p>执行步骤:</p><ul><li>npm run dev --&gt; npm run predev --&gt; npm run postdev</li><li>npm run predev:在dev之前做一些预处理工作。例如：安装依赖、清理项目、生成配置。</li><li>npm run postdev:在dev之后做一些处理任务。例如：生成报告、部署项目。根据具体需求定制。</li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-WCrQV" id="tab-UBl-99s" checked="checked"><label for="tab-UBl-99s">npm run </label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;predev&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;node predev.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;dev&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vitepress dev docs&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;postdev&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;node postdev.js&quot;</span></span></code></pre></div></div></div><p><img src="`+l+'" alt="test"> 输出 <img src="'+p+'" alt="test"></p>',12),d=[o];function h(u,c,m,k,_,v){return i(),e("div",null,d)}const F=s(r,[["render",h]]);export{b as __pageData,F as default};
