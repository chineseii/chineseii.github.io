import { Translate, Ani, Opicity, Anima, Animate, } from '../../accets/js/Anio';

// var ani = new Ani({
//     el: document.querySelector('.big-left_two'),
//     model: new Translate()
// })
// var b = new Ani({
//     el: document.querySelector('.right-big'),
//     model: new Opicity()
// })


// var anima = new Anima({
//     el: document.querySelector('.big-left_three'),
//     type: 'translate'
//         // type: 'opicity'

// })
// anima.load()

// 第三题
// Animate.create({
//     type: 'translate',
// }).mount(document.querySelector('.big-left_four'))

// 作业四：
//  use方法中应该接收一个 Translate.install的静态方法；如果没有静态方法，那么直接执行这个方法；
//  注意：是直接执行这个方法，而不是 new一个构造函数；
// Animate.create().use(Translate).mount(document.querySelector('.big-left_two'))


//第五题

Animate.create().use(Translate).mount(document.querySelector('.big-left_two'));