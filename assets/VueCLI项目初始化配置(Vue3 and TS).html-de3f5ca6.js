import{_ as e,Q as o,S as c,U as s,a4 as n,a6 as t,a7 as p,E as l}from"./framework-ca2498c6.js";const i="/assets/images/image-20220710112809709.png",u={},r=p(`<h1 id="vuecli-项目初始化配置-vue3-ts" tabindex="-1"><a class="header-anchor" href="#vuecli-项目初始化配置-vue3-ts" aria-hidden="true">#</a> VueCLI 项目初始化配置(Vue3+TS)</h1><h2 id="全局环境" tabindex="-1"><a class="header-anchor" href="#全局环境" aria-hidden="true">#</a> 全局环境</h2><ol><li>Node.js 版本 v14.15.4</li><li>Vue CLI 版本@vue/cli 4.5.13</li><li>TypeScript 版本 Version 4.2.3</li></ol><h2 id="项目创建" tabindex="-1"><a class="header-anchor" href="#项目创建" aria-hidden="true">#</a> 项目创建</h2><ol><li>执行命令</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue create project_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.选择初始化配置项 <img src="`+i+`" alt="image-20220710112809709" loading="lazy"> 选择 vue3.x 版本</p><h2 id="总体项目结构" tabindex="-1"><a class="header-anchor" href="#总体项目结构" aria-hidden="true">#</a> 总体项目结构</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ts_project
├─ .browserslistrc
├─ .env.development // 开发环境配置文件
├─ .env.production // 生产环境配置文件
├─ .env.test // 测试环境配置文件
├─ .eslintrc.js
├─ .gitignore
├─ babel.config.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
├─ src
│  ├─ api
│  │  ├─ ajaxUrl.config.ts // 统一管理项目请求URL
│  │  ├─ login.ts // 退出和登录方法封装，目前仅封装了退出登录
│  │  └─ manage.ts // 封装请求方法
│  ├─ App.vue
│  ├─ assets
│  │  ├─ scss // 全局css样式
│  |  │  └─ index.vue
│  │  └─ logo.png
│  ├─ components
│  │  └─ NoFind.vue // 定义 404 页面
│  ├─ main.ts // 入口
│  ├─ router // 配置路由
│  │  └─ index.ts
│  ├─ shims-vue.d.ts
│  ├─ store
│  │  └─ index.ts // Vuex 存储token 和用户信息等
│  ├─ utils // 工具函数等
│  │  ├─ request.ts // 请求拦截
│  │  └─ storage.ts // 封装 sessionStorage、localStorage、cookie 存储删除等
│  └─ views
│     ├─ Home // 内容页
│     │  └─ index.vue
│     ├─ Layout // 项目 Layout 布局
│     │  └─ index.vue
│     └─ Login // 登录页
│        └─ index.vue
├─ tsconfig.json
├─ vue.config.js //可选配置项
└─ yarn.lock

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ui-库的安装和引入" tabindex="-1"><a class="header-anchor" href="#ui-库的安装和引入" aria-hidden="true">#</a> UI 库的安装和引入</h2>`,10),k=s("code",null,"yarn add ant-design-vue",-1),d={href:"https://2x.antdv.com/components/overview/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://2x.antdv.com/docs/vue/introduce",target:"_blank",rel:"noopener noreferrer"},m=s("code",null,"main.ts",-1),b=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
<span class="token comment">// 引入ant-design-vue</span>
<span class="token keyword">import</span> Antd <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;ant-design-vue/dist/antd.css&#39;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Antd<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="axios-请求封装" tabindex="-1"><a class="header-anchor" href="#axios-请求封装" aria-hidden="true">#</a> Axios 请求封装</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="请求拦截" tabindex="-1"><a class="header-anchor" href="#请求拦截" aria-hidden="true">#</a> 请求拦截</h3><p>注意：涉及到 token 的存储、vuex 存储 token 在对应的章节进行描述。<code>request.ts</code>文件只是使用 在项目<code>src</code>文件夹下创建文件夹 <code>utils</code>文件夹 ，并创建 <code>request.ts</code> 文件，文件内容如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios<span class="token punctuation">,</span> <span class="token punctuation">{</span> AxiosResponse<span class="token punctuation">,</span> AxiosRequestConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> notification <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span> <span class="token comment">// 结合 ant-design-vue 做全局提示</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;@/store&#39;</span> <span class="token comment">// 获取 token</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> localCache <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/storage&#39;</span> <span class="token comment">// 引入读取token</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> logout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/api/login&#39;</span> <span class="token comment">// 引入退出登录方法</span>
<span class="token comment">// 初始化</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_API_BASE_URL</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">120</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 请求错误</span>
<span class="token keyword">const</span> <span class="token function-variable function">err</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> string <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">response</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">status</span><span class="token operator">:</span> number <span class="token punctuation">}</span>
<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;timeout&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    notification<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;系统提示&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;请求超时&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">4</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data
    <span class="token keyword">const</span> token <span class="token operator">=</span> localCache<span class="token punctuation">.</span><span class="token function">getCache</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">403</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      notification<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;系统提示&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;请求资源失败&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">4</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">401</span> <span class="token operator">&amp;&amp;</span>
      <span class="token operator">!</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>result <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>result<span class="token punctuation">.</span>isLogin<span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      notification<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;系统提示&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;没有访问权限&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">4</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token comment">// token 存在但是没有访问权限，退出登录</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 请求</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">config</span><span class="token operator">:</span> AxiosRequestConfig</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取系统token</span>
  <span class="token keyword">const</span> <span class="token literal-property property">token</span><span class="token operator">:</span> string <span class="token operator">=</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>token
  <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;X-Access-Token&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> token <span class="token comment">// 让每个请求携带自定义 token 请根据实际情况自行修改</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 配置 get 接口默认参数携带时间戳请求</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>params <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">_t</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token operator">...</span>config<span class="token punctuation">.</span>params
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> config
<span class="token punctuation">}</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>

<span class="token comment">// 拦截成功请求</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">response</span><span class="token operator">:</span> AxiosResponse</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">config</span><span class="token operator">:</span> AxiosRequestConfig <span class="token operator">=</span> response<span class="token punctuation">.</span>config <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>
  <span class="token keyword">const</span> code <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code<span class="token punctuation">)</span>
  <span class="token comment">// code 状态根据前后端协定接口成功状态修改</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">==</span> <span class="token number">200</span> <span class="token operator">||</span> code <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;请求成功&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> response<span class="token punctuation">.</span>data
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> errorCode <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">402</span><span class="token punctuation">,</span> <span class="token number">403</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>errorCode<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      notification<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;系统提示&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;没有权限&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">4</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> instance
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),g=s("code",null,"baseURL",-1),y=s("code",null,[n("p"),s("wbr"),n("rocess.env.VUE_APP_API_BASE_URL")],-1),f=s("code",null,".env",-1),h=s("code",null,".env",-1),w=s("code",null,".env.test",-1),x=s("code",null,".env.development",-1),q=s("code",null,".env.production",-1),_=s("code",null,"vue.config.js",-1),j={href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"},S=p(`<h3 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h3><p>在项目<code>src</code>文件夹下创建文件夹 <code>api</code>文件夹 ，并创建 <code>manage.ts</code> 文件，文件内容如下:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;@/utils/request&#39;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@desc</span> post请求
 * <span class="token keyword">@param</span> <span class="token parameter">url</span> 请求路径
 * <span class="token keyword">@param</span> <span class="token parameter">parameter</span> 请求参数
 *  */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">postAction</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">url</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">parameter</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> url<span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> parameter
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@desc</span> http请求
 * <span class="token keyword">@param</span> <span class="token parameter">url</span> 请求路径
 * <span class="token keyword">@param</span> <span class="token parameter">parameter</span> 请求参数
 * <span class="token keyword">@param</span> method= <span class="token punctuation">{</span>post | put<span class="token punctuation">}</span>
 *  */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">httpAction</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">url</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">parameter</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">method</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> url<span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> method<span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> parameter
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@desc</span> put请求
 * <span class="token keyword">@param</span> <span class="token parameter">url</span> 请求路径
 * <span class="token keyword">@param</span> <span class="token parameter">parameter</span> 请求参数
 *  */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">putAction</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">url</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">parameter</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> url<span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;put&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> parameter
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@desc</span> get请求
 * <span class="token keyword">@param</span> <span class="token parameter">url</span> 请求路径
 * <span class="token keyword">@param</span> <span class="token parameter">parameter</span> 请求参数
 *  */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getAction</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">url</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">parameter</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> url<span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> parameter
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@desc</span> delete请求
 * <span class="token keyword">@param</span> <span class="token parameter">url</span> 请求路径
 * <span class="token keyword">@param</span> <span class="token parameter">parameter</span> 请求参数
 *  */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">deleteAction</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">url</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">parameter</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> url<span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;delete&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> parameter
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-config-js-配置代理" tabindex="-1"><a class="header-anchor" href="#vue-config-js-配置代理" aria-hidden="true">#</a> vue.config.js 配置代理</h3><ol><li>在项目根目录创建<code>vue.config.js</code> 配置服务器请求代理</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3082</span><span class="token punctuation">,</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/pr-api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3085&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">lintOnSave</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="统一管理项目请求-api" tabindex="-1"><a class="header-anchor" href="#统一管理项目请求-api" aria-hidden="true">#</a> 统一管理项目请求 API</h3><ol start="2"><li>在项目<code>src</code>文件夹下创建文件夹 <code>api</code>文件夹 ，并创建 <code>ajaxUrl.config.ts</code> 文件，用于统一管理项目请求 API。示例如下</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Login <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">login</span><span class="token operator">:</span> <span class="token string">&#39;/sys/login&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> Login <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="登录、退出" tabindex="-1"><a class="header-anchor" href="#登录、退出" aria-hidden="true">#</a> 登录、退出</h2><h3 id="退出登录公共方法" tabindex="-1"><a class="header-anchor" href="#退出登录公共方法" aria-hidden="true">#</a> 退出登录公共方法</h3><p>在项目<code>src</code>文件夹下创建文件夹 <code>api</code>文件夹 ，并创建 <code>login.ts</code> 文件,管理退出登录。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createVNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ExclamationCircleOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@ant-design/icons-vue&#39;</span>
<span class="token comment">// import { useRouter } from &quot;vue-router&quot;;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> postAction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/api/manage&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> cookies<span class="token punctuation">,</span> localCache <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/storage&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Modal<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span>
<span class="token comment">/*
退出
*/</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// const router = useRouter();</span>
  Modal<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;退出登录?&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token function">createVNode</span><span class="token punctuation">(</span>ExclamationCircleOutlined<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">okText</span><span class="token operator">:</span> <span class="token string">&#39;确认&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cancelText</span><span class="token operator">:</span> <span class="token string">&#39;取消&#39;</span><span class="token punctuation">,</span>
    <span class="token function">onOk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">postAction</span><span class="token punctuation">(</span><span class="token string">&#39;/sys/logout&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">res</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 清空浏览器存储的所有数据</span>
          cookies<span class="token punctuation">.</span><span class="token function">removeCookie</span><span class="token punctuation">(</span><span class="token string">&#39;vuex&#39;</span><span class="token punctuation">)</span>
          localCache<span class="token punctuation">.</span><span class="token function">clearCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token comment">// 提示退出成功</span>
          message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
          <span class="token comment">// 跳转到登录页</span>
          <span class="token comment">//  router.push({ name: &quot;Login&quot; });</span>
          <span class="token comment">// 刷新整个浏览器</span>
          <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onCancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;取消退出登录&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="缓存存储读取封装" tabindex="-1"><a class="header-anchor" href="#缓存存储读取封装" aria-hidden="true">#</a> 缓存存储读取封装</h3><p>注意：js-cookie 的安装查看<strong>vuex-persistedstate 使用步骤</strong>章节的<strong>3.安装 js-cookie</strong><br> 在项目<code>src</code>文件夹下创建文件夹 <code>utils</code>文件夹 ，并创建 <code>storage.ts</code> 文件，文件内容如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Cookies <span class="token keyword">from</span> <span class="token string">&#39;js-cookie&#39;</span>
<span class="token comment">/*
 * localStorage 封装
 */</span>
<span class="token keyword">const</span> localCache <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 设置</span>
  <span class="token function">setCache</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">key</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 获取</span>
  <span class="token function">getCache</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">key</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 清空某一个</span>
  <span class="token function">deleteCache</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">key</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 清空全部</span>
  <span class="token function">clearCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * sessionStorage 分装
 */</span>
<span class="token keyword">const</span> sessionStorage <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//存储</span>
  <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> any<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//取出数据</span>
  get<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>key<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&amp;&amp;</span> value <span class="token operator">!=</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> value <span class="token operator">!=</span> <span class="token string">&#39;null&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 删除数据</span>
  <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">key</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> cookies <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">getCookie</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">key</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">key</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">removeCookie</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">key</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Cookies<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> sessionStorage<span class="token punctuation">,</span> localCache<span class="token punctuation">,</span> cookies <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="登录" tabindex="-1"><a class="header-anchor" href="#登录" aria-hidden="true">#</a> 登录</h3><p>注意：涉及到路由、vuex 存储 token 在对应的章节进行描述。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form</span> <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>horizontal<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formState<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>账号<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formState.username<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请输入账号<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>密码<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span>
        <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formState.password<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请输入密码<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onSubmit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>登录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> UnwrapRef<span class="token punctuation">,</span> toRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span>
<span class="token comment">// 引入 封装的请求方法</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> postAction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/api/manage&#39;</span>
<span class="token comment">// 引入 URL 统一管理文件</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Login <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/api/ajaxUrl.config&#39;</span>
<span class="token comment">// 声明接口</span>
<span class="token keyword">interface</span> <span class="token class-name">FormState</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> string
  <span class="token literal-property property">password</span><span class="token operator">:</span> string <span class="token operator">|</span> number
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">formState</span><span class="token operator">:</span> UnwrapRef<span class="token operator">&lt;</span>FormState<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// Vuex</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// Vue Router</span>
    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 提交表单</span>
    <span class="token keyword">const</span> <span class="token function-variable function">onSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>formState<span class="token punctuation">)</span>
      <span class="token function">postAction</span><span class="token punctuation">(</span>Login<span class="token punctuation">.</span>login<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">res</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 将token数据设置到Vuex</span>
          store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;setToken&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>result<span class="token punctuation">.</span>token<span class="token punctuation">)</span>
          <span class="token comment">// 设置用户信息到Vuex</span>
          store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;setUserInfo&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>result<span class="token punctuation">.</span>userInfo<span class="token punctuation">)</span>
          <span class="token comment">// 登录成功</span>
          router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Layout&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      formState<span class="token punctuation">,</span>
      onSubmit
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="退出" tabindex="-1"><a class="header-anchor" href="#退出" aria-hidden="true">#</a> 退出</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>outLogin<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>退出登录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> logout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/api/login&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 退出登录</span>
    <span class="token keyword">const</span> <span class="token function-variable function">outLogin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      outLogin
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="layout-布局" tabindex="-1"><a class="header-anchor" href="#layout-布局" aria-hidden="true">#</a> Layout 布局</h2><h3 id="layout-布局-1" tabindex="-1"><a class="header-anchor" href="#layout-布局-1" aria-hidden="true">#</a> Layout 布局</h3><ol><li>修改 <code>App.vue</code> 文件</li></ol><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 设置路由出口 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>路由跳转和 <code>layout</code> 布局内容渲染</li></ol><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-layout</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 头部导航 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-layout-header</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logo<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-menu</span>
        <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>horizontal<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">v-model:</span>selectedKeys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectedKeys1<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ lineHeight: &#39;64px&#39; }<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-menu-item</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>nav 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-menu-item</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-menu</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-layout-header</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-layout</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- 左侧菜单 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-layout-sider</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">background</span><span class="token punctuation">:</span> #fff</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-menu</span>
          <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inline<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name"><span class="token namespace">v-model:</span>selectedKeys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectedKeys2<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name"><span class="token namespace">v-model:</span>openKeys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>openKeys<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ height: &#39;100%&#39;, borderRight: 0 }<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-sub-menu</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sub1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>user-outlined</span> <span class="token punctuation">/&gt;</span></span>
                用户信息
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-menu-item</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ path: &#39;home&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-menu-item</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-menu-item</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>option2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-menu-item</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-sub-menu</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-menu</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-layout-sider</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- 中心区域 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-layout</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">padding</span><span class="token punctuation">:</span> 0 24px 24px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 面包屑 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-breadcrumb</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">margin</span><span class="token punctuation">:</span> 16px 0</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-breadcrumb</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-layout-content</span>
          <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
            background: &#39;#fff&#39;,
            padding: &#39;24px&#39;,
            margin: 0,
            minHeight: &#39;280px&#39;
          }<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- 设置路由出口 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-layout-content</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-layout</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-layout</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-layout</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> UserOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@ant-design/icons-vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    UserOutlined
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">selectedKeys1</span><span class="token operator">:</span> ref<span class="token operator">&lt;</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">selectedKeys2</span><span class="token operator">:</span> ref<span class="token operator">&lt;</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">collapsed</span><span class="token operator">:</span> ref<span class="token operator">&lt;</span>boolean<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">openKeys</span><span class="token operator">:</span> ref<span class="token operator">&lt;</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;sub1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">#components-layout-demo-top-side-2 .logo</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 31px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 16px 24px 16px 0<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.ant-row-rtl #components-layout-demo-top-side-2 .logo</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 16px 0 16px 24px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.site-layout-background</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuex-共享数据" tabindex="-1"><a class="header-anchor" href="#vuex-共享数据" aria-hidden="true">#</a> VueX 共享数据</h2>`,28),C=s("code",null,"Vuex",-1),R=s("code",null,"token",-1),A=s("code",null,"sessionStorage",-1),L=s("code",null,"localStorage",-1),I=s("code",null,"cookie",-1),V=s("br",null,null,-1),U={href:"https://github.com/robinvdvleuten/vuex-persistedstate",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/js-cookie/js-cookie#json",target:"_blank",rel:"noopener noreferrer"},N=s("br",null,null,-1),T=s("strong",null,'注：ts 项目使用 js-cookie 需要安装 "js-cookie": "^3.0.1", 和 "@types/js-cookie": "^2.2.7", 两个依赖包',-1),O=p(`<h3 id="vuex-persistedstate-使用步骤" tabindex="-1"><a class="header-anchor" href="#vuex-persistedstate-使用步骤" aria-hidden="true">#</a> vuex-persistedstate 使用步骤</h3><p>1.安装插件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add vuex-persistedstate -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.使用插件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default createStore({
  getters,
  // 使用插件
  plugins: [createPersistedState()]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.安装 js-cookie</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add js-cookie@3.0.1 @types/js-cookie@2.2.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="具体使用" tabindex="-1"><a class="header-anchor" href="#具体使用" aria-hidden="true">#</a> 具体使用</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">import</span> createPersistedState <span class="token keyword">from</span> <span class="token string">&#39;vuex-persistedstate&#39;</span>
<span class="token keyword">import</span> Cookies <span class="token keyword">from</span> <span class="token string">&#39;js-cookie&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>localCache<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/storage&#39;</span>

<span class="token comment">// 定义用户状态接口</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">UserState</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> number
  <span class="token literal-property property">token</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">userInfo</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// vuex-persistedstate提供有一个reducer函数，可以自定义存储Key，或者使用paths参数，建议使用paths参数比较简单</span>
<span class="token comment">// 非Module格式：xxxx</span>
<span class="token comment">// 使用了Module的格式：ModuleName.xxxx，这里持久化的是Theme Module下面的persistData数据</span>

<span class="token keyword">const</span> <span class="token constant">PERSIST_PATHS</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;userInfo&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// 初始化Vuex</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span><span class="token operator">&lt;</span>UserState<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">userInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count <span class="token operator">++</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 设置token</span>
    <span class="token function">setToken</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> token</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>token <span class="token operator">=</span> token<span class="token punctuation">;</span>
      localCache<span class="token punctuation">.</span><span class="token function">setCache</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">,</span> token<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 设置用户信息</span>
    <span class="token function">setUserInfo</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> userInfo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>userInfo <span class="token operator">=</span> userInfo<span class="token punctuation">;</span>
      localCache<span class="token punctuation">.</span><span class="token function">setCache</span><span class="token punctuation">(</span><span class="token string">&#39;userInfo&#39;</span><span class="token punctuation">,</span> userInfo<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用Vuex 数据持久化插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">createPersistedState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">/*
    storage 默认存储到 localStorage
    存储到 sessionStorage 配置 storage: window.sessionStorage
     */</span>
    <span class="token comment">// reducer: function 返回需要储存的state对象</span>
    <span class="token comment">// reducer(val) {</span>
    <span class="token comment">//   return {</span>
    <span class="token comment">//     // 持久化存储 state 中的 token</span>
    <span class="token comment">//     token: val.token,</span>
    <span class="token comment">//     userInfo: val.userInfo</span>
    <span class="token comment">//   }</span>
    <span class="token comment">// },</span>
    <span class="token comment">/*
      paths 设置保留持久化的数据，不设置则持久化全部数据
    */</span>
    <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token constant">PERSIST_PATHS</span><span class="token punctuation">,</span>
    <span class="token literal-property property">storage</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">getItem</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.</span>
      <span class="token function-variable function">setItem</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>  Cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">expires</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">secure</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function-variable function">removeItem</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Cookies<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuerouter-使用" tabindex="-1"><a class="header-anchor" href="#vuerouter-使用" aria-hidden="true">#</a> VueRouter 使用</h2><h3 id="嵌套路由-layout-布局" tabindex="-1"><a class="header-anchor" href="#嵌套路由-layout-布局" aria-hidden="true">#</a> 嵌套路由 Layout 布局</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory<span class="token punctuation">,</span> RouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token comment">// 路由懒加载</span>
<span class="token keyword">const</span> <span class="token function-variable function">Login</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/Login/index.vue&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token literal-property property">routes</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>RouteRecordRaw<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Login&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Login
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/layout&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Layout&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/Layout/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 定义嵌套路由 实现 Layout 布局</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/Home/index.vue&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;About&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/About.vue&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// 匹配所有路径  vue2使用*   vue3使用/:pathMatch(.*)*或/:pathMatch(.*)或/:catchAll(.*)</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/:pathMatch(.*)*&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;404&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/components/NoFind.vue&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token comment">// 初始化路由</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由拦截" tabindex="-1"><a class="header-anchor" href="#路由拦截" aria-hidden="true">#</a> 路由拦截</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory<span class="token punctuation">,</span> RouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token comment">// 引入获取token 方法</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> localCache <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/storage&#39;</span>

<span class="token comment">// 路由懒加载</span>
<span class="token keyword">const</span> <span class="token function-variable function">Login</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/Login/index.vue&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 配置路由</span>
<span class="token keyword">const</span> <span class="token literal-property property">routes</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>RouteRecordRaw<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment">// 初始化路由</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 设置路由守卫</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// to表示将要访问的路径，form表示从那个页面跳转而来，next表示允许跳转到指定位置</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>path <span class="token operator">==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 当前访问为登陆页，直接进入</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取用户本地的token, 如果token不存在则跳转到登录页</span>
    <span class="token keyword">const</span> token <span class="token operator">=</span> localCache<span class="token punctuation">.</span><span class="token function">getCache</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果登录了，则直接跳转</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="整体代码" tabindex="-1"><a class="header-anchor" href="#整体代码" aria-hidden="true">#</a> 整体代码</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory<span class="token punctuation">,</span> RouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token comment">// 引入获取token 方法</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> localCache <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/storage&#39;</span>

<span class="token comment">// 路由懒加载</span>
<span class="token keyword">const</span> <span class="token function-variable function">Login</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/Login/index.vue&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token literal-property property">routes</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>RouteRecordRaw<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Login&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Login
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/layout&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Layout&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/Layout/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 定义嵌套路由 实现 Layout 布局</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/Home/index.vue&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;About&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/About.vue&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// 匹配所有路径  vue2使用*   vue3使用/:pathMatch(.*)*或/:pathMatch(.*)或/:catchAll(.*)</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/:pathMatch(.*)*&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;404&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/components/NoFind.vue&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token comment">// 初始化路由</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 设置路由守卫</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// to表示将要访问的路径，form表示从那个页面跳转而来，next表示允许跳转到指定位置</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>path <span class="token operator">==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 当前访问为登陆页，直接进入</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取用户本地的token, 如果token不存在则跳转到登录页</span>
    <span class="token keyword">const</span> token <span class="token operator">=</span> localCache<span class="token punctuation">.</span><span class="token function">getCache</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果登录了，则直接跳转</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置全局样式" tabindex="-1"><a class="header-anchor" href="#配置全局样式" aria-hidden="true">#</a> 配置全局样式</h2><p>结合 scss 和 vue.config.js 进行全局样式配置，scss 预处理在项目创建初始化配置项已经安装。 在<code>src</code>文件夹下的<code>assets</code>文件夹下建<code>scss</code>文件夹并创建<code>index.scss</code>文件,在<code>vue.config.js</code>中配置。参考项目 vue.config 配置中配置 scss</p><h2 id="项目-vue-config-配置" tabindex="-1"><a class="header-anchor" href="#项目-vue-config-配置" aria-hidden="true">#</a> 项目 vue.config 配置</h2><p>在 vue.config.js 进行配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  configureWebpack: (config) =&gt; {
    //生产环境取消 console.log
    if (p<wbr>rocess.env.NODE_ENV === &quot;production&quot;) {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    } else {
      // 开发环境
    }
  },
  // 配置 scss
  css: {
    loaderOptions: {
      scss: {
        prependData: \`@import &quot;@/assets/scss/index.scss&quot;;\`,
      },
    },
  },
  // 配置服务端代理
  devServer: {
    port: 3082,
    proxy: {
      &quot;/pr-api&quot;: {
        target: &quot;http://localhost:3085&quot;,
        ws: false,
        changeOrigin: true,
      },
    },
  },

  lintOnSave: undefined,
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function P(H,M){const a=l("ExternalLinkIcon");return o(),c("div",null,[r,s("p",null,[n("安装 "),k,n(),s("a",d,[n("ant-design-vue 官网"),t(a)]),n("提供了两种引入方式一种是"),s("a",v,[n("按需加载"),t(a)]),n("一种是全局引入，这里采用全局引入。安装完成后在"),m,n(" 文件添加如下代码")]),b,s("p",null,[n("说明：初始化里面的"),g,n("的值直接读取 "),y,n("，值的配置项来源于"),f,n("环境变量。其中"),h,n("所有环境都会被载入，"),w,n("测试环境被载入,"),x,n("开发环境被载入，"),q,n("生产环境被载入。文件的创建在项目的根目录和"),_,n("同级。具体配置项可参考"),s("a",j,[n("Vue CLI 模式和环境变量"),t(a)])]),S,s("p",null,[n("由于 "),C,n(" 需要存储全局的 "),R,n(" 和用户信息，由于 Vuex 是运行在内存中，数据也存储在内存中，用户刷新页面操作时，内存数据会重新进行初始化 通过 "),A,n(" / "),L,n(" / "),I,n(" 来进行数据的持久化存储。这里我们使用了两个插件实现 Vuex 数据的持久化。"),V,n(" Vuex 数据持久化插件"),s("a",U,[n("vuex-persistedstate"),t(a)]),n("结合"),s("a",E,[n("js-cookie"),t(a)]),n(" 进行 Vuex 状态持久化的设置获取移除。"),N,T]),O])}const B=e(u,[["render",P],["__file","VueCLI项目初始化配置(Vue3 and TS).html.vue"]]);export{B as default};
