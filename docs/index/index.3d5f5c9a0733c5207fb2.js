(()=>{"use strict";(()=>{function e(e){this.config=e}e.prototype.compile=function(){let{entry:e,output:o}=this.config;if("object"==typeof e)for(const o in e){var t=parseInt(899999*Math.random()+1e5);console.log(`将${e[o]}中的代码打包到${o}文件夹中，文件名称叫${o}.${t}.js`)}},new e({entry:{home:"./src/home/home.js",index:"./src/index/index.js"},output:{filename:"[name].[contenthash].js",path:"/docs"}}).compile()})()})();