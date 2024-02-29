import{_ as s,c as i,o as a,R as n}from"./chunks/framework.8gwMId7n.js";const o=JSON.parse('{"title":"异步事件","description":"","frontmatter":{},"headers":[],"relativePath":"node/异步事件.md","filePath":"node/异步事件.md","lastUpdated":1702286571000}'),t={name:"node/异步事件.md"},h=n(`<h1 id="异步事件" tabindex="-1">异步事件 <a class="header-anchor" href="#异步事件" aria-label="Permalink to &quot;异步事件&quot;">​</a></h1><p>NodeJS核心API都是采用异步事件驱动架构 核心是通过有效的方法来监听时间状态的变化，并在变化的时候做出响应的动作（常见：回调函数）</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> EventEmitter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;events&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> event</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EventEmitter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置最大监听数为16个</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setMaxListeners</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 监听</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;data&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 关闭监听</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// event.off(&#39;data&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">emit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;data&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;event&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div>`,3),p=[h];function l(e,k,E,d,r,g){return a(),i("div",null,p)}const y=s(t,[["render",l]]);export{o as __pageData,y as default};
