import{_ as e,Q as t,S as o,U as n,a4 as s,a6 as p,a7 as l,E as i}from"./framework-ca2498c6.js";const c={},r=n("h1",{id:"vite-项目初始化配-vue3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vite-项目初始化配-vue3","aria-hidden":"true"},"#"),s(" Vite 项目初始化配(Vue3)")],-1),u=n("h2",{id:"使用包管理工具-pnpm-进行依赖管理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用包管理工具-pnpm-进行依赖管理","aria-hidden":"true"},"#"),s(" 使用包管理工具 pnpm 进行依赖管理")],-1),d={href:"https://www.pnpm.cn/installation",target:"_blank",rel:"noopener noreferrer"},k=l(`<ul><li>包安装速度极快（不会重复安装，重复包 pnpm 会使用直接使用 hard link 去.pnpm-store 找对应版本的包，直接写入到项目的 package.json 文件中）</li><li>磁盘空间利用效率高（体现在公共仓库.pnpm-store）</li></ul><h2 id="配置按需加载-ant-design-vue-ui-组件" tabindex="-1"><a class="header-anchor" href="#配置按需加载-ant-design-vue-ui-组件" aria-hidden="true">#</a> 配置按需加载 ant Design Vue UI 组件</h2><ol><li>安装 <code>pnpm add unplugin-vue-components -D</code></li><li>在 vite.config.js 引入配置</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入 ant design vue 按需加载</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AntDesignVueResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// ant design vue 按需加载</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">AntDesignVueResolver</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">importStyle</span><span class="token operator">:</span> <span class="token string">&#39;less&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-less-预处理-并自定义-ant-design-vue-ui-主题" tabindex="-1"><a class="header-anchor" href="#配置-less-预处理-并自定义-ant-design-vue-ui-主题" aria-hidden="true">#</a> 配置 less 预处理，并自定义 ant Design Vue UI 主题</h2><ol><li>安装 <code>pnpm add less -D</code></li><li>在 vite.config.js 引入配置</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// ant design vue 按需加载</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">AntDesignVueResolver</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">importStyle</span><span class="token operator">:</span> <span class="token string">&#39;less&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 自定义 ant desing vue 主题样式</span>
      <span class="token literal-property property">less</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">modifyVars</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;@primary-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&#39;@border-radius-base&#39;</span><span class="token operator">:</span> <span class="token string">&#39;0px&#39;</span> <span class="token comment">// 组件/浮层圆角</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">javascriptEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-scss-作为项目-css-预处理" tabindex="-1"><a class="header-anchor" href="#配置-scss-作为项目-css-预处理" aria-hidden="true">#</a> 配置 SCSS 作为项目 CSS 预处理</h2><ol><li>安装 <code>pnpm add sass -D</code></li><li>在 vite.config.js 引入配置</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 配置 scss 预处理</span>
      <span class="token literal-property property">scss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token string">&#39;@import &quot;@/scss/index.scss&quot;;&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置系统主题切换" tabindex="-1"><a class="header-anchor" href="#配置系统主题切换" aria-hidden="true">#</a> 配置系统主题切换</h2><h2 id="配置-gzip-压缩" tabindex="-1"><a class="header-anchor" href="#配置-gzip-压缩" aria-hidden="true">#</a> 配置 gzip 压缩</h2><ol><li>安装 <code>pnpm add vite-plugin-compression -D</code></li><li>在 vite.config.js 引入配置</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入 gzip 压缩</span>
<span class="token keyword">import</span> viteCompression <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-compression&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 打包压缩，主要是本地gzip，如果服务器配置压缩也可以</span>
    <span class="token function">viteCompression</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>配置</li></ol><h2 id="配置项目打包" tabindex="-1"><a class="header-anchor" href="#配置项目打包" aria-hidden="true">#</a> 配置项目打包</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 打包配置</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">assetsDir</span><span class="token operator">:</span> <span class="token string">&#39;./static&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 指定生成静态资源的存放路径</span>
    <span class="token literal-property property">chunkSizeWarningLimit</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token comment">// hunk 大小警告的限制（以 kbs 为单位）</span>
    <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token string">&#39;terser&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 代码混淆</span>
    <span class="token literal-property property">cssCodeSplit</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 如果设置为 false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中</span>
    <span class="token literal-property property">terserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// warnings: false,</span>
        <span class="token literal-property property">drop_console</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 打包时删除console</span>
        <span class="token literal-property property">drop_debugger</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 打包时删除 debugger</span>
        <span class="token literal-property property">pure_funcs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;console.log&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">comments</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 去掉注释内容</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">manualChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 拆分代码，这个就是分包，配置完后自动按需加载，现在还比不上webpack的splitchunk，不过也能用了。</span>
          <span class="token literal-property property">vue</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vuex&#39;</span><span class="token punctuation">]</span>
          <span class="token comment">// echarts: [&#39;echarts&#39;],</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">brotliSize</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 启用/禁用 brotli 压缩大小报告</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项目代码风格" tabindex="-1"><a class="header-anchor" href="#配置项目代码风格" aria-hidden="true">#</a> 配置项目代码风格</h2><h2 id="配置项目代码-eslintrc-验证" tabindex="-1"><a class="header-anchor" href="#配置项目代码-eslintrc-验证" aria-hidden="true">#</a> 配置项目代码 .eslintrc 验证</h2><h2 id="完整配置文件-vite-config-js" tabindex="-1"><a class="header-anchor" href="#完整配置文件-vite-config-js" aria-hidden="true">#</a> 完整配置文件 vite.config.js</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token comment">// 引入 gzip 压缩</span>
<span class="token keyword">import</span> viteCompression <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-compression&#39;</span>
<span class="token comment">// 引入 eslint 插件</span>
<span class="token keyword">import</span> eslintPlugin <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-eslint&#39;</span>
<span class="token comment">// 引入 ant design vue 按需加载</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AntDesignVueResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span>
<span class="token comment">// 基于less、sass的 web 应用在线动态主题切换插件</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> themePreprocessorPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@zougt/vite-plugin-theme-preprocessor&#39;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 打包配置</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">assetsDir</span><span class="token operator">:</span> <span class="token string">&#39;./static&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 指定生成静态资源的存放路径</span>
    <span class="token literal-property property">chunkSizeWarningLimit</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token comment">// hunk 大小警告的限制（以 kbs 为单位）</span>
    <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token string">&#39;terser&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 代码混淆</span>
    <span class="token literal-property property">cssCodeSplit</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 如果设置为 false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中</span>
    <span class="token literal-property property">terserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// warnings: false,</span>
        <span class="token literal-property property">drop_console</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 打包时删除console</span>
        <span class="token literal-property property">drop_debugger</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 打包时删除 debugger</span>
        <span class="token literal-property property">pure_funcs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;console.log&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">comments</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 去掉注释内容</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">manualChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 拆分代码，这个就是分包，配置完后自动按需加载，现在还比不上webpack的splitchunk，不过也能用了。</span>
          <span class="token literal-property property">vue</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vuex&#39;</span><span class="token punctuation">]</span>
          <span class="token comment">// echarts: [&#39;echarts&#39;],</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">brotliSize</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 启用/禁用 brotli 压缩大小报告</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.scss&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optimizeDeps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 【注意】 排除 import { toggleTheme } from &quot;@zougt/vite-plugin-theme-preprocessor/dist/browser-utils&quot;; 在vite的缓存依赖</span>
    <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@zougt/vite-plugin-theme-preprocessor/dist/browser-utils&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 打包压缩，主要是本地gzip，如果服务器配置压缩也可以</span>
    <span class="token function">viteCompression</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// eslint 检查文件</span>
    <span class="token function">eslintPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;src/**/*.vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src/**/*.js&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// ant design vue 按需加载</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">AntDesignVueResolver</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">importStyle</span><span class="token operator">:</span> <span class="token string">&#39;less&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 基于less、sass的 web 应用在线动态主题切换插件</span>
    <span class="token function">themePreprocessorPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">scss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 是否启用任意主题色模式，这里不启用</span>
        <span class="token literal-property property">arbitraryMode</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">// 提供多组变量文件</span>
        <span class="token literal-property property">multipleScopeVars</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token comment">// 必需</span>
            <span class="token literal-property property">scopeName</span><span class="token operator">:</span> <span class="token string">&#39;theme-default&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/scss/theme/theme-default.scss&#39;</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">scopeName</span><span class="token operator">:</span> <span class="token string">&#39;theme-dark&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/scss/theme/theme-dark.scss&#39;</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 【注意】 css中不是由主题色变量生成的颜色，也让它抽取到主题css内，可以提高权重</span>
        <span class="token literal-property property">includeStyleWithColors</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 在生产模式是否抽取独立的主题css文件，extract为true以下属性有效</span>
        <span class="token literal-property property">extract</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 配置 scss 预处理</span>
    <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">scss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token string">&#39;@import &quot;@/scss/index.scss&quot;;&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 自定义 ant desing vue 主题样式</span>
      <span class="token literal-property property">less</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">modifyVars</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;@primary-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&#39;@border-radius-base&#39;</span><span class="token operator">:</span> <span class="token string">&#39;0px&#39;</span> <span class="token comment">// 组件/浮层圆角</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">javascriptEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// open: true, // 自动在浏览器中打开</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;0.0.0.0&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 监听所有地址，包括局域网和公网地址</span>
    <span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否开启https</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3030</span><span class="token punctuation">,</span> <span class="token comment">// 端口</span>
    <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 开启 websocket 支持</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3950&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考连接" tabindex="-1"><a class="header-anchor" href="#参考连接" aria-hidden="true">#</a> 参考连接</h2>`,22),v={href:"https://github.com/antfu/unplugin-vue-components",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.joynop.com/p/454.html",target:"_blank",rel:"noopener noreferrer"};function b(y,g){const a=i("ExternalLinkIcon");return t(),o("div",null,[r,u,n("p",null,[n("a",d,[s("pnpm 官网地址"),p(a)]),s(" 本质上他是一个包管理工具，和 npm/yarn 没有区别，主要优势在于")]),k,n("ul",null,[n("li",null,[n("a",v,[s("Vite + ant design vue 按需加载"),p(a)])]),n("li",null,[n("a",m,[s("基于 Vite + vue3 + ant design 的定制主题使用方式"),p(a)])])])])}const f=e(c,[["render",b],["__file","Vite项目初始化配(Vue3).html.vue"]]);export{f as default};
