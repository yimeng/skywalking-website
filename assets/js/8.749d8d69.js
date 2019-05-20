(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{173:function(t,e,n){t.exports=n.p+"assets/img/demo-spring.2b408214.png"},174:function(t,e,n){t.exports=n.p+"assets/img/span-error.09c87780.png"},175:function(t,e,n){t.exports=n.p+"assets/img/span-error-2.73f6001a.png"},176:function(t,e,n){t.exports=n.p+"assets/img/top5-span.2f5d6b17.png"},177:function(t,e,n){t.exports=n.p+"assets/img/top5-not-clear.581b4b7c.png"},178:function(t,e,n){t.exports=n.p+"assets/img/too-many-child.94932e1f.png"},179:function(t,e,n){t.exports=n.p+"assets/img/database-long-duration.6ace1dec.png"},180:function(t,e,n){t.exports=n.p+"assets/img/deep-trace-1.f4f0ae36.png"},286:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("跟踪数据支持两个众所周知的分析特性："),n("code",[t._v("指标")]),t._v("和"),n("code",[t._v("拓扑图")]),n("br"),t._v(" "),n("code",[t._v("指标")]),t._v(": 每个service, service instance, endpoint的指标都是从跟踪中的入口span派生的。指标代表响应时间的性能。所以可以有一个平均响应时间，99%的响应时间，成功率等。它们按service, service instance, endpoint进行分解。"),n("br"),t._v(" "),n("code",[t._v("拓扑图")]),t._v(": 拓扑表示服务之间的链接，是分布式跟踪最有吸引力的特性。拓扑结构允许所有用户理解分布式服务关系和依赖关系，即使它们是不同的或复杂的。这一点很重要，因为它为所有相关方提供了一个单一的视图，无论他们是开发人员、设计者还是操作者。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:n(173),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("ol",[e("li",[this._v("TreeMode: 第一次提供,帮助您更容易识别问题。")])])]),this._v(" "),e("li",[e("ol",{attrs:{start:"2"}},[e("li",[this._v("ListMode: 常规的时间线视图，通常也出现在其他跟踪系统中，如Zipkin。")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在trace视图，最简单的部分是定位错误，可能是由代码异常或网络故障引起的。通过span详情提供的细节，ListMode和TreeMode都能够找到错误\n"),e("img",{attrs:{src:n(174),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:n(175),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("一个高优先级的特性是识别跟踪中最慢的span。这将使用应用程序代理捕获的执行持续时间。在旧的ListMode跟踪视图中，由于嵌套，父span几乎总是包括子span的持续时间。换句话说，一个缓慢的span通常会导致它的父节点也变慢，在Skywalking 6中，我们提供了 "),e("code",[this._v("最慢的前5个span")]),this._v(" 过滤器来帮助你您直接定位span。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:n(176),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在某些情况下，个别持续时间很快，但跟踪速度仍然很慢，如：\n"),e("img",{attrs:{src:n(177),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在这个截图中，有一个包含13个子项的span，这些子项都是数据库访问。另外，当您看到跟踪的概述时，这个2000ms跟踪的数据库花费了1380ms。\n"),e("img",{attrs:{src:n(179),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("跟踪深度也与延迟有关。像"),e("a",{attrs:{href:"#%E5%A4%AA%E5%A4%9A%E5%AD%90span"}},[this._v("太多子span")]),this._v("的场景一样，每个span延迟看起来不错，但整个链路追踪的过程很慢。\n"),e("img",{attrs:{src:n(180),alt:""}})])}],s=n(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"更容易理解将要到来的分布式链路追踪-6-0ga-翻译"}},[t._v("更容易理解将要到来的分布式链路追踪 6.0GA (翻译)")]),t._v(" "),r("ul",[r("li",[t._v("作者: Wu Sheng, tetrate, SkyWalking original creator")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/wu-sheng",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://twitter.com/wusheng1108",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twitter"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://www.linkedin.com/in/wusheng1108",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linkedin"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("翻译: jjlu521016")])]),t._v(" "),r("h1",{attrs:{id:"背景"}},[t._v("背景")]),t._v(" "),r("p",[t._v("在当前的微服务架构中分布式链路追踪是很有必要的一部分，但是对于一些用户来说如何去理解和使用分布式链路追踪的相关数据是不清楚的。\n这个博客概述了典型的分布式跟踪用例，以及Skywalking的V6版本中新的可视化功能。我们希望新的用户通过这些示例来更好的理解。")]),t._v(" "),r("h2",{attrs:{id:"指标和拓扑图"}},[t._v("指标和拓扑图")]),t._v(" "),t._m(0),t._v(" "),r("p",[t._v("这里有一个拓扑图的例子包含了4个项目，包括kafka和两个外部依赖。")]),t._v(" "),t._m(1),r("p",{attrs:{align:"center"}},[t._v("-在skywalking的可选择UI0RocketBot的拓扑图-")]),r("p"),t._v(" "),r("h1",{attrs:{id:"trace"}},[t._v("Trace")]),t._v(" "),r("p",[t._v("在分布式链路追踪系统中，我们花费大量资源（CPU、内存、磁盘和网络）来生成、传输和持久跟踪数据。让我们试着回答为什么要这样做？我们可以用跟踪数据回答哪些典型的诊断和系统性能问题？")]),t._v(" "),r("p",[t._v("Skywalking v6包含两种追踪视图:")]),t._v(" "),t._m(2),t._v(" "),r("h1",{attrs:{id:"发生错误"}},[t._v("发生错误")]),t._v(" "),t._m(3),r("p",{attrs:{align:"center"}},[t._v("-ListMode 错误span-")]),r("p"),t._v(" "),t._m(4),r("p",{attrs:{align:"center"}},[t._v("-TreeMode 错误span-")]),r("p"),t._v(" "),r("h1",{attrs:{id:"慢span"}},[t._v("慢span")]),t._v(" "),t._m(5),t._v(" "),t._m(6),r("p",{attrs:{align:"center"}},[t._v("-最慢的前5个span-")]),r("p"),t._v(" "),r("h1",{attrs:{id:"太多子span"}},[t._v("太多子span")]),t._v(" "),t._m(7),r("p",{attrs:{align:"center"}},[t._v("-没有慢span的追踪-")]),t._v("\n如果要了解根问题是否与太多操作相关，请使用子范围号的"),r("code",[t._v("Top 5 of children span number")]),t._v(",筛选器显示每个span的子级数量，突出显示前5个。\n"),r("img",{attrs:{src:n(178),alt:""}}),t._v(" "),r("p",{attrs:{align:"center"}},[t._v("-13个数据库访问相关的span-")]),r("p"),t._v(" "),t._m(8),r("p",{attrs:{align:"center"}},[t._v("-1380ms花费在数据库访问-")]),t._v("\n在本例中，根本原因是数据库访问太多。这在其他场景中也很常见，比如太多的RPC或缓存访问。"),r("p"),t._v(" "),r("h1",{attrs:{id:"链路深度"}},[t._v("链路深度")]),t._v(" "),t._m(9),r("p",{attrs:{align:"center"}},[t._v("-链路深度-")]),t._v("\n上图所示,最慢的span小鱼500ms,对于2000毫秒的跟踪来说，速度并不太慢。当您看到第一行时，有四种不同的颜色表示这个分布式跟踪中涉及的四个services。每一个都需要100~400ms，这四个都需要近2000ms，从这里我们知道这个缓慢的跟踪是由一个序列中的3个RPC造成的。"),r("p"),t._v(" "),r("h2",{attrs:{id:"结束语"}},[t._v("结束语")]),t._v(" "),r("p",[t._v("分布式链路追踪和APM 工具帮助我们确定造成问题的根源，允许开发和操作团队进行相应的优化。我们希望您喜欢这一点，并且喜欢Apache Skywalking和我们的新链路追踪可视化界面。如果你喜欢的话，在"),r("a",{attrs:{href:"https://github.com/apache/incubator-skywalking",target:"_blank",rel:"noopener noreferrer"}},[t._v("github上面给我们加start来鼓励我们"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Skywakling 6计划在2019年的1月底完成release。您可以通过以下渠道联系项目团队成员")]),t._v(" "),r("ul",[r("li",[t._v("关注 "),r("a",{attrs:{href:"https://twitter.com/ASFSkyWalking",target:"_blank",rel:"noopener noreferrer"}},[t._v("skywalking推特"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("订阅邮件:dev@skywalking.apache.org。发送邮件到 dev-subscribe@kywalking.apache.org 来订阅.")]),t._v(" "),r("li",[t._v("加入"),r("a",{attrs:{href:"https://gitter.im/OpenSkywalking/Lobby",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitter"),r("OutboundLink")],1),t._v("聊天室")])])])},r,!1,null,null,null);e.default=a.exports}}]);