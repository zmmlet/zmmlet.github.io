import{_ as n,Q as s,S as a,a7 as e}from"./framework-ca2498c6.js";const p={},t=e(`<h1 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置" aria-hidden="true">#</a> 基础配置</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在 <code>docs\\.vuepress</code> 文件下新建 <code>config.js</code> 文件，基础配置所有配置项在 <code>config.js</code> 文件中进行配置</p></div><h2 id="配置项目名称-项目描述" tabindex="-1"><a class="header-anchor" href="#配置项目名称-项目描述" aria-hidden="true">#</a> 配置项目名称，项目描述</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;我睡着的时候不困唉&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 网站标题</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;记录学习笔记&#39;</span> <span class="token comment">// 网站的描述</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项目本地端口-打包目录" tabindex="-1"><a class="header-anchor" href="#配置项目本地端口-打包目录" aria-hidden="true">#</a> 配置项目本地端口，打包目录</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 设置编译后的输出目录./ROOT代表在工程的根目录下生成一个ROOT文件，里面是编译好的文件，可以拿ROOT直接部署</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/zmmblog/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 设置站点根路径 // 路径名为 &quot;/&lt;REPO&gt;/&quot;</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3026</span> <span class="token comment">// 端口号</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-head" tabindex="-1"><a class="header-anchor" href="#配置-head" aria-hidden="true">#</a> 配置 head</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
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
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-theme-的-navbar" tabindex="-1"><a class="header-anchor" href="#配置-theme-的-navbar" aria-hidden="true">#</a> 配置 theme 的 navbar</h2><ol><li>在 <code>docs\\.vuepress</code> 文件夹中新建 <code>config\\navbar\\index.js</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> navbar <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;站外链接&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;gitee&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://gitee.com/zmmlet&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;掘金&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://juejin.cn/user/114004940306909&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;前端&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;CSS&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/frontend/css/purgeCSS.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/frontend/css/SCSS.md&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;javaScript&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/frontend/javaScript/ES6.md&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Vue&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/frontend/vue/electron+Vue使用总结.md&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在 <code>docs\\.vuepress\\config\\</code> 文件夹中新建 <code>index.js</code> 文件</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./navbar/index.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>在 <code>docs\\.vuepress\\config.js</code> 文件中引入使用</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> navbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./config/index&#39;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/images/logo.png&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 默认主题配置</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> navbar
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-theme-的-sidebar" tabindex="-1"><a class="header-anchor" href="#配置-theme-的-sidebar" aria-hidden="true">#</a> 配置 theme 的 sidebar</h2><ol><li>在 <code>docs\\.vuepress</code> 文件夹中新建 <code>config\\sidebar\\index.js</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> sidebar <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;/frontend/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;CSS&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/frontend/css/purgeCSS.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/frontend/css/SCSS.md&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;javaScript&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/frontend/javaScript/ES6.md&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Vue&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/frontend/vue/electron+Vue使用总结.md&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在 <code>docs\\.vuepress\\config\\index.js</code> 文件</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./sidebar/index.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>在 <code>docs\\.vuepress\\config.js</code> 文件中引入使用</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> sidebar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./config/index&#39;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/images/logo.png&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 默认主题配置</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> sidebar
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基础配置完整代码" tabindex="-1"><a class="header-anchor" href="#基础配置完整代码" aria-hidden="true">#</a> 基础配置完整代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
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

  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/images/logo.png&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 默认主题配置</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> navbar<span class="token punctuation">,</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> sidebar
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),o=[t];function l(i,r){return s(),a("div",null,o)}const u=n(p,[["render",l],["__file","02基础配置.html.vue"]]);export{u as default};
