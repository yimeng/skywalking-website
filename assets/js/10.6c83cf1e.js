(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{188:function(e,t,a){e.exports=a.p+"assets/img/dashboard.4ff6f912.png"},189:function(e,t,a){e.exports=a.p+"assets/img/topology_map.d7e51016.png"},190:function(e,t,a){e.exports=a.p+"assets/img/application.599e2179.png"},191:function(e,t,a){e.exports=a.p+"assets/img/trace.738cad8e.png"},192:function(e,t,a){e.exports=a.p+"assets/img/trace_details.b29f71c1.png"},290:function(e,t,a){"use strict";a.r(t);var n=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("git clone https://github.com/OpenSkywalking/skywalking-netcore.git\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("cd skywalking-netcore\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("dotnet restore\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("dotnet run -p sample/SkyWalking.Sample.Backend\ndotnet run -p sample/SkyWalking.Sample.Frontend\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Dashboard视图\n"),t("img",{attrs:{src:a(188),alt:"dashboard"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("TopologyMap视图\n"),t("img",{attrs:{src:a(189),alt:"topology_map"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Application视图\n"),t("img",{attrs:{src:a(190),alt:"application"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Trace视图\n"),t("img",{attrs:{src:a(191),alt:"trace.png"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("TraceDetails视图\n"),t("img",{attrs:{src:a(192),alt:"trace_details.png"}})])}],r=a(0),o=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"apache-skywalking-为-net-core带来开箱即用的分布式追踪和应用性能监控"}},[e._v("Apache SkyWalking 为.NET Core带来开箱即用的分布式追踪和应用性能监控")]),e._v(" "),a("p",[e._v("作者： SkyWalking .NET Core 探针维护者，刘浩扬")]),e._v(" "),a("p",[e._v("在大型网站系统设计中，随着分布式架构，特别是微服务架构的流行，我们将系统解耦成更小的单元，通过不断的添加新的、小的模块或者重用已经有的模块来构建复杂的系统。随着模块的不断增多，一次请求可能会涉及到十几个甚至几十个服务的协同处理，那么如何准确快速的定位到线上故障和性能瓶颈，便成为我们不得不面对的棘手问题。")]),e._v(" "),a("p",[e._v("为解决分布式架构中复杂的服务定位和性能问题，Google在论文"),a("a",{attrs:{href:"http://research.google.com/pubs/pub36356.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("《Dapper, a Large-Scale Distributed Systems Tracing Infrastructure》"),a("OutboundLink")],1),e._v("中提出了分布式跟踪系统的设计和构建思路。在这样的背景下，"),a("a",{attrs:{href:"https://github.com/apache/incubator-skywalking",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache SkyWalking"),a("OutboundLink")],1),e._v("创建于2015年，参考Dapper论文实现分布式追踪功能，并逐渐进化为一个完整功能的"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Application_performance_management",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application Performance Management"),a("OutboundLink")],1),e._v("系统，用于追踪、监控和诊断大型分布式系统，尤其是容器和云原生下的微服务系统。")]),e._v(" "),a("p",[e._v("今年初我在尝试使用.NET Core构建分布式追踪系统"),a("a",{attrs:{href:"https://github.com/liuhaoyang/butterfly",target:"_blank",rel:"noopener noreferrer"}},[e._v("Butterfly"),a("OutboundLink")],1),e._v("时接触到SkyWalking团队，开始和SkyWalking团队合作探索SkyWalking对.NET Core的支持，并于4月发布SkyWalking .NET Core探针的"),a("a",{attrs:{href:"https://www.oschina.net/news/95324/apache-skywalking-apm-support-dot-net-core",target:"_blank",rel:"noopener noreferrer"}},[e._v("第一个版本"),a("OutboundLink")],1),e._v("，同时我也有幸加入SkyWalking团队共同进行SkyWalking在多语言生态的推动。在.NET Core探针v0.1版本发布之后，得到了一些同学的"),a("a",{attrs:{href:"https://www.jianshu.com/p/3ddd986c7581",target:"_blank",rel:"noopener noreferrer"}},[e._v("尝鲜使用"),a("OutboundLink")],1),e._v("，也得到诸多改进的建议。经过几周的迭代，SkyWalking .NET Core探针于今天发布v0.2 release，在v0.1的基础上增加了\b稳定性和HttpClient及数据库驱动的追踪支持。")]),e._v(" "),a("p",[e._v("在使用SkyWalking对.NET Core应用追踪之前，我们需要先部署SkyWalking Collector收集分析Trace和Elasticsearch作为Trace数据存储。SkyWalking支持5.x的ES，所以我们需要下载安装对应版本的ES，并配置ES的"),a("code",[e._v("cluster.name")]),e._v("为"),a("code",[e._v("CollectorDBCluster")]),e._v("。然后部署SkyWalking 5.0 beta或更高版本(下载地址:"),a("a",{attrs:{href:"http://skywalking.apache.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://skywalking.apache.org/downloads/"),a("OutboundLink")],1),e._v(")。更详细的Collector部署文档，请参考"),a("a",{attrs:{href:"https://github.com/apache/incubator-skywalking/blob/master/docs/en/Deploy-backend-in-standalone-mode.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deploy-backend-in-standalone-mode"),a("OutboundLink")],1),e._v("和"),a("a",{attrs:{href:"https://github.com/apache/incubator-skywalking/blob/master/docs/en/Deploy-backend-in-cluster-mode.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deploy-backend-in-cluster-mode"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("p",[e._v("最后我们使用示例项目来演示在.NET Core应用中使用SkyWalking进行追踪和监控，克隆SkyWalking-NetCore项目到本地")]),e._v(" "),e._m(0),a("p",[e._v("进入skywalking-netcore目录")]),e._v(" "),e._m(1),a("p",[e._v("还原nuget package:")]),e._v(" "),e._m(2),a("p",[e._v("启动示例项目:")]),e._v(" "),e._m(3),a("p",[e._v("访问示例应用 "),a("a",{attrs:{href:"http://localhost:5001/apivalues",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:5001/api/values"),a("OutboundLink")],1),a("br"),e._v("\n打开SkyWalking WebUI即可看到我们的应用监控面板 "),a("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8080"),a("OutboundLink")],1)]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),a("h5",{attrs:{id:"github"}},[e._v("Github")]),e._v(" "),a("ol",[a("li",[e._v("SkyWalking Github Repo: "),a("a",{attrs:{href:"https://github.com/apache/incubator-skywalking/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/apache/incubator-skywalking"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("SkyWalking-NetCore Github Repo: "),a("a",{attrs:{href:"https://github.com/OpenSkywalking/skywalking-netcore",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/OpenSkywalking/skywalking-netcore"),a("OutboundLink")],1)])])])},n,!1,null,null,null);t.default=o.exports}}]);