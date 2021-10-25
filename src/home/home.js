// import { Ani, Ellipsis } from '../../accets/js/Ani';

// var ani = new Ani({
//     targets: [{
//         el: document.querySelector('.big-left_one'),
//         animationClassName: 'change'
//     }, {
//         el: document.querySelector('.big-left_two'),
//         animationClassName: 'change'
//     }, {
//         el: document.querySelector('.big-left_three'),
//         animationClassName: 'change'
//     }, {
//         el: document.querySelector('.big-left_four'),
//         animationClassName: 'change'
//     }],
// })
import articles from '../article_route.js';

// var oDiv = document.querySelector('.big-left_one');
// var oParent = document.querySelector('.main-big_left');
// oDiv.remove();

// String.prototype.ellipsis = function(num, symbol = '...') {
//     let str = this;
//     let res;
//     if (this.length > num) {
//         res = this.substring(0, num);
//         return res + symbol;
//     }
//     return str;
// }

// articles.forEach(item => {
//     var oDivNode = oDiv.cloneNode(true);
//     oDivNode.querySelector('.main-title').innerText = item.title;
//     var size = 145;
//     oDivNode.querySelector('.article').innerHTML = item.article.ellipsis(size);
//     if (item.article.length > size) {
//         oDivNode.querySelector('.details').style.display = 'block';
//     }
//     oDivNode.querySelector('.details').onclick = function() {
//         oDivNode.querySelector('.details').style.display = 'none';
//         oDivNode.querySelector('.away').style.display = 'block';
//         oDivNode.querySelector('.article').innerHTML = item.article;
//     }
//     oDivNode.querySelector('.away').onclick = function() {
//         oDivNode.querySelector('.details').style.display = 'block';
//         oDivNode.querySelector('.away').style.display = 'none';
//         oDivNode.querySelector('.article').innerHTML = item.article.ellipsis(size);
//     }
//     oParent.append(oDivNode);
// })

// var stringify = '我看女拳的时候感觉她们不是女的';
// stringify.ellipsis();

var oDiv = document.querySelector('.big-left_one');
var oParent = document.querySelector('.main-big_left');
oDiv.remove();

articles.forEach(article => {
    var cloneNode = oDiv.cloneNode(true);
    cloneNode.querySelector('.article').innerHTML = article.article;
    oParent.appendChild(cloneNode);
})

class Ellipsis {
    constructor(props) {
        console.log(props);
        this.el = props.el;
        this.text = this.el.innerHTML;
        this.textCount = props.textCount;
        this.findAllButtonText = props.findAllButtonText || '查看全文';
        this.ellipsisButtonText = props.ellipsisButtonText || '收起';
        this.showFindAllButton = props.showFindAllButton || false;
        this.flag = true; //判断是否显示查看全部按钮的显示状态；
    }

    get buttonText() {
        return this.flag ? this.findAllButtonText : this.ellipsisButtonText;
    }

    exec() {
        if (!this.text) throw new Errow('文本内容不能为空');
        // 把文本切割成50个长度；
        this.el.innerHTML = this.format(this.text, this.textCount);
        //如果 需要展示查看全部的那个按钮
        if (this.showFindAllButton) {
            //增加a标签；
            this.addButton();
        }
    }
    addButton() {
        var a = document.createElement('a');
        a.textContent = this.findAllButtonText;
        a.style.cssText = `
        color:blue;
        cursor: pointer;
    `
        var _this = this;
        a.addEventListener('click', function() {
            _this.flag = !_this.flag;
            // true = !true //false;
            // false = !false //true;
            this.textContent = _this.buttonText;
            _this.el.childNodes[0].textContent = _this.flag ? _this.format(_this.text, _this.textCount) : _this.text;
        })
        this.el.appendChild(a, this.el.childNodes[0])
    }

    format(str, num) {
        return str.length < num ? str : (str.substring(0, num) + '...');
    }
}

let ellipsis = new Ellipsis({
    el: document.querySelectorAll('.content')[0],
    textCount: 145,
    findAllButtonText: "查看",
    showFindAllButton: true
})

ellipsis.exec();

document.querySelectorAll('.title').forEach(element => {
    element.onclick = function() {
        window.location.href = 'zhi.html?' + 'id=' + this.dataset.id;
    }
})