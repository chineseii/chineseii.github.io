// import Ani from '../../accets/js/Ani';

//这种导出是导出 export default的哪一个
// import { add, a, b } from '../../accets/js/util'

// import util from '../../accets/js/util'
// console.log(util);

// console.log(add);
// console.log(a);
// console.log(b);


// const ani = new Ani({
//     targets: [{
//         el: document.querySelector('div'),
//         animationClassName: 'change'
//     }, ],
//     count: 3,
//     reverse: [2]
// })

import webpackConfig from "../../config/webpack.config";


// class Webpack {
//     constructor(pop) {
//         this.pop = pop;
//         this.toString();
//     }
//     toString() {
//         let { entry, output } = this.pop;
//         let { filename, path } = output;
//         let [dir, file] = filename.split('/');
//         console.log(`将${ entry }中的代码打包到${ path }/${dir}文件名是${ file }`);
//     }
// }

// let webpack = new Webpack(webpackConfig);


// webpack.compile();

//作业一:页面输出：
// 将./src/home/index.js中的代码打包到/docs/home/文件夹中，文件名称叫index.js



let config = {
        entry: {
            home: './src/home/home.js',
            index: './src/index/index.js',
        },
        output: {
            filename: '[name].[contenthash].js',
            path: '/docs'
        }
    }
    //作业二：
    // 将./src/home/home.js中的代码打包到/docs/home/文件夹中，
    //文件名称叫home.jfkasldfjklas.js

// class Pack {
//     constructor(config) {
//         this.prop = prop;
//         console.log(prop);
//     }
// }
function Pack(config) {
    this.config = config;
}

Pack.prototype.compile = function() {
    let { entry, output } = this.config;
    if (typeof entry == 'object') {
        for (const key in entry) {
            var random = parseInt(Math.random() * 899999 + 100000);
            console.log(`将${entry[key]}中的代码打包到${key}文件夹中，文件名称叫${key}.${random}.js`);
        }
    }

    // let { filename, path } = output;
    // let { home, index } = entry;
    // console.log(`将${home}中的代码打包到${path}文件夹中，文件名称叫`);
}
const pack = new Pack(config);
pack.compile();