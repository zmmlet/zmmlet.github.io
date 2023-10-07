import{_ as s,Q as a,S as e,a7 as n}from"./framework-ca2498c6.js";const o={},t=n(`<h1 id="node升级导致-node-sass-项目依赖报错" tabindex="-1"><a class="header-anchor" href="#node升级导致-node-sass-项目依赖报错" aria-hidden="true">#</a> Node升级导致 node-sass 项目依赖报错</h1><blockquote><p>node-sass 升级为 dart-sass报错问题</p></blockquote><ul><li>在对 <code>Nodejs v14.18.2</code> 版本升级到 <code>Nodejs v16.14.2</code> 版本后启动<code>Vue</code>项目报错，因为原项目中使用<code>node-sass</code>，而<code>node-sass</code>是用 node (调用 cpp 编写的 libsass) 来编译 <code>sass</code>，对 <code>node</code> 版本有一定固定要求，而在这里我们改用<code>dart-sass</code>，而<code>dart-sass</code> 是用 drat VM 来编译 sass，也是官网主推的<code>Sass</code>编译方式，需要进行如下操作：</li></ul><ol><li><p>使用命令 <code>yarn remove node-sass sass-loader</code> 移除原有 node-sass CSS预处理</p></li><li><p>重新安装 <code>yarn add sass@1.32 sass-loader@10.0.5 -D</code></p></li><li><p>修改 vue.config.js 中的 scss 全局引入，将 <code>data</code> 修改为 <code>additionalData</code></p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">sass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@import &quot;@/assets/sass/scss-variable.scss&quot;;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>将程序代码中的 <code>/deep/.className{}</code> 穿透写法，修改为 <code>::v-deep.className{}</code> 或者 <code>:deep(.className){}</code> 的方式进行穿透修改样式</li></ol>`,6),c=[t];function p(d,l){return a(),e("div",null,c)}const r=s(o,[["render",p],["__file","vueCLI项目升级CSS预处理.html.vue"]]);export{r as default};
