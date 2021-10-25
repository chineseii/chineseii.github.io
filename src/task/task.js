class Markdown {
    constructor(props) {
        this.props = props;
    }
    parseHtml() {
        let res = this.props.el.match(/(#+\s*)|\S+|\n/g).join('').split('\n');
        var htmlArr = [];
        for (let i = 0; i < res.length; i++) {
            console.log(res);
            if (res[i].length) {
                var arr = res[i].split(' ');
                console.log(arr);
                var element = document.createElement(`h` + arr[0].length);
                element.innerText = arr[1];
                htmlArr.push(element);
            }
        }
        return htmlArr;
    }
}

let md = new Markdown({
    el: document.querySelector('template').content.querySelector('article').innerText
});
let res = md.parseHtml();
res.forEach(item => {
    document.querySelector('.wrap').appendChild(item);
})





var deptData = [{
        deptName: '某某公司',
        type: 2
    },
    {
        deptName: '子公司',
        type: 4
    },
    {
        deptName: '子子部门',
        type: 5
    }
];
var a = '2->4，---5';
var resu = format(); // 某某公司->子公司，子子部门


function format() {
    let numArr = [];
    let strArr = [];
    let str = '';
    a.replace(/\d+/g, function(item) {
        numArr.push(item);
    })
    a.replace(/\D+/g, function(item) {
        strArr.push(item);
    })
    for (let i = 0; i < deptData.length; i++) {
        if (deptData[i].type == numArr[i]) {
            if (strArr[i]) {
                str += deptData[i].deptName + strArr[i];
            } else {
                str += deptData[i].deptName;
                continue;
            }
        }
    }
    return str;
}
console.log(resu);
//第三个作业;
var text = '{{ username }}';
// username是一个变量  用正则匹配到 username


// let resStr = text.replace(/[^{}\n\s]\S+/g, function(item) {
//     console.log(item);
// });


// let resStr2 = text.replace(/\w+/g, function(item) {
//         console.log(item);
//     })
//     // 方法一：
// var a = '{{ username }}'.replace(/\{\{\s*(\S+)\s*\}\}/, '$1');
// console.log(a);
// 方法二：
var a = text.match(/(?<=\{\{\s*)\S+(?=\s*\}\})/);
console.log(a);
// 方法三：
var a = /(?<=\{\{\s*)\S+(?=\s*\}\})/.exec(text)[0];
console.log(a);