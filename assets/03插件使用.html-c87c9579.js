import{_ as p,Q as t,S as o,U as n,a4 as s,a6 as i,a7 as a,E as l}from"./framework-ca2498c6.js";const c={},r=a(`<h1 id="插件使用" tabindex="-1"><a class="header-anchor" href="#插件使用" aria-hidden="true">#</a> 插件使用</h1><h2 id="滚动选中目录" tabindex="-1"><a class="header-anchor" href="#滚动选中目录" aria-hidden="true">#</a> 滚动选中目录</h2><ol><li>安装 <code>yarn add @vuepress/plugin-active-header-links -D</code></li><li>在 <code>docs\\.vuepress\\config.js</code> 引入</li><li>配置</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> activeHeaderLinksPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/plugin-active-header-links&#39;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">activeHeaderLinksPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="搜索" tabindex="-1"><a class="header-anchor" href="#搜索" aria-hidden="true">#</a> 搜索</h2><ol><li>安装</li><li>在 <code>docs\\.vuepress\\config.js</code> 引入</li><li>配置</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> searchPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/plugin-search&#39;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">searchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;搜索&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;搜索&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 允许搜索 Frontmatter 中的 \`tags\`</span>
      <span class="token function-variable function">getExtraFields</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>tags <span class="token operator">??</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="返回顶部" tabindex="-1"><a class="header-anchor" href="#返回顶部" aria-hidden="true">#</a> 返回顶部</h2><ol><li>安装 <code>yarn add @vuepress/plugin-back-to-top -D</code></li><li>配置</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@vuepress/back-to-top&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="复制代码块" tabindex="-1"><a class="header-anchor" href="#复制代码块" aria-hidden="true">#</a> 复制代码块</h2>`,11),u={class:"hint-container tip"},d=n("p",{class:"hint-container-title"},"提示",-1),k={href:"https://vuepress-theme-hope.github.io/v2/copy-code/zh/",target:"_blank",rel:"noopener noreferrer"},v=a(`<ol><li>安装 <code>yarn add -D vuepress-plugin-copy-code2@next</code></li><li>在 <code>docs\\.vuepress\\config.js</code> 引入</li><li>配置</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> copyCodePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-plugin-copy-code2&#39;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">copyCodePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">showInMobile</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="完整配置代码" tabindex="-1"><a class="header-anchor" href="#完整配置代码" aria-hidden="true">#</a> 完整配置代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token comment">// 搜索框</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> searchPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/plugin-search&#39;</span>
<span class="token comment">// 滚动选择对应标题</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> activeHeaderLinksPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/plugin-active-header-links&#39;</span>
<span class="token comment">// 复制代码</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> copyCodePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-plugin-copy-code2&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> navbar<span class="token punctuation">,</span> sidebar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./config/index&#39;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;我睡着的时候不困唉&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 网站标题</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;记录学习笔记&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 网站的描述</span>
  <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 设置编译后的输出目录./ROOT代表在工程的根目录下生成一个ROOT文件，里面是编译好的文件，可以拿ROOT直接部署</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/zmmblog/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 设置站点根路径 // 路径名为 &quot;/&lt;REPO&gt;/&quot;</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3026</span><span class="token punctuation">,</span> <span class="token comment">// 端口号</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 增加一个自定义的 favicon</span>
    <span class="token punctuation">[</span>
      <span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;/favicons/favicon-16x16.png&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;image/png&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sizes</span><span class="token operator">:</span> <span class="token string">&#39;16x16&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token comment">// 解决外联图片不显示由于我们vuepress本地服务把当前本站的referrer带给了cdn图片请求，第三方发现不是本站的请求</span>
      <span class="token string">&#39;meta&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;referrer&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;no-referrer&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 移动端优化</span>
    <span class="token punctuation">[</span>
      <span class="token string">&#39;meta&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;viewport&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span>
          <span class="token string">&#39;width=device-width,initial-scale=1,user-scalable=no,maximum-scale=2&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 插件配置-----------------------------</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">copyCodePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">showInMobile</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">searchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;搜索&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;搜索&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 允许搜索 Frontmatter 中的 \`tags\`</span>
      <span class="token function-variable function">getExtraFields</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>tags <span class="token operator">??</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">activeHeaderLinksPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@vuepress/back-to-top&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/images/logo.png&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 默认主题配置</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> navbar<span class="token punctuation">,</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> sidebar
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function m(b,g){const e=l("ExternalLinkIcon");return t(),o("div",null,[r,n("div",u,[d,n("p",null,[s("官网："),n("a",k,[s("https://vuepress-theme-hope.github.io/v2/copy-code/zh/"),i(e)])])]),v])}const h=p(c,[["render",m],["__file","03插件使用.html.vue"]]);export{h as default};
