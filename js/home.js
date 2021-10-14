class Ani {
    constructor(e) {
        this.targets = e.targets;
        this.exec();
    }
    exec() {
        let target = this.targets.shift();
        let _this = this;
        if (!target) return;
        target.el.classList.add(target.animationClassName);
        target.el.addEventListener('animationstart', function(e) {
            _this.exec();
        })
    }
}


var ani = new Ani({
    targets: [{
        el: document.querySelector('.big-left_one'),
        animationClassName: 'change'
    }, {
        el: document.querySelector('.big-left_two'),
        animationClassName: 'change'
    }, {
        el: document.querySelector('.big-left_three'),
        animationClassName: 'change'
    }, {
        el: document.querySelector('.big-left_four'),
        animationClassName: 'change'
    }],
})