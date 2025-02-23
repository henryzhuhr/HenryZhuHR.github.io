import{_ as i,c as a,a3 as n,o as p}from"./chunks/framework.C681U02K.js";const o=JSON.parse('{"title":"Clash","description":"","frontmatter":{"outline":"deep","tags":["软件"]},"headers":[],"relativePath":"gadgets/clash/clash.md","filePath":"gadgets/clash/clash.md","lastUpdated":1739417474000}'),h={name:"gadgets/clash/clash.md"};function l(t,s,k,e,r,d){return p(),a("div",null,s[0]||(s[0]=[n(`<h1 id="clash" tabindex="-1">Clash <a class="header-anchor" href="#clash" aria-label="Permalink to &quot;Clash&quot;">​</a></h1><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sys_proxy_lip</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">192.168.1.95</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sys_proxy_port</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7890</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 开启系统代理</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">proxy_on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> proxy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sys_proxy_lip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}:\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sys_proxy_port</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # HTTP  协议代理 http://代理服务器地址:端口</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> http_proxy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${proxy}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # HTTPS 协议代理 http://代理服务器地址:端口</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> https_proxy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${proxy}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # FTP   协议代理 http://代理服务器地址:端口</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # export ftp_proxy=\${proxy}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 设置所有协议的代理，如果设置了此变量，则无需单独设置其他代理变量。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # export all_proxy=\${proxy} </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 指定不需要通过代理的主机或域名，可以使用通配符，多个值之间用逗号分隔</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> no_proxy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;localhost, 127.0.0.1, ::1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [[ $LANG </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;zh&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]] &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\\033[32m[√] 开启代理\\033[0m&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\\033[32m[√] Proxy enabled\\033[0m&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 关闭系统代理</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">proxy_off</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	unset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http_proxy</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	unset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https_proxy</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	unset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ftp_proxy</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	unset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all_proxy</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	unset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no_proxy</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	[[ $LANG </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;zh&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]] &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\\033[31m[×] 关闭代理\\033[0m&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\\033[31m[×] Proxy disabled\\033[0m&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">proxy_off</span></span></code></pre></div><p>随后，我们可以通过 <code>proxy_on</code>/<code>proxy_off</code> 命令开启/关闭代理，或者将其添加到 <code>~/.bashrc</code> 或 <code>~/.zshrc</code> 中，使其在每次启动终端时自动执行。</p>`,3)]))}const F=i(h,[["render",l]]);export{o as __pageData,F as default};
