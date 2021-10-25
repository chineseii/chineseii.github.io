import '../css/Ani.css'


// export class Translate {
//     constructor() {}
//     exec(e) {
//         e.classList.add('change')
//     }
//     static install() {
//         return new Translate();
//     }
// }

// export class Ani {
//     constructor(pop) {
//         this.targets = pop;
//         this.el = pop.el;
//         this.exec()
//     }
//     exec() {
//         this.targets.model.exec(this.el);
//     }
// }

// export class Opicity {
//     constructor() {}
//     exec(e) {
//         e.classList.add('gai')
//     }
// }


// export class Anima {
//     constructor(pop) {
//         this.target = pop;
//         this.el = pop.el;
//         this.type = pop.type;
//     }
//     load() {
//         if (this.type == 'translate') {
//             this.model = new Translate();
//             this.model.exec(this.el)
//         } else if (this.type == 'option') {
//             this.model = new Option();
//             this.model.exec(this.el)
//         }
//     }
//     exec() {
//         this.targets.model.exec(this.el);
//     }
// }


// export class Animate {
//     constructor(props) {
//         this.type = props.type;
//         console.log(this.type);
//     }
//     static create(e) {
//         return new Animate(e);
//     }
//     mount(el) {
//         this.el = el;
//         this.load();
//     }
//     load() {
//         console.log(this.el);
//         if (this.type == 'translate') {
//             this.model = new Translate();
//             this.model.exec(this.el)
//         } else if (this.type == 'option') {
//             this.model = new Option();
//             this.model.exec(this.el)
//         }
//     }
// }

//第四题
export class Animate {
    constructor(oop) {
        this.el = Animate.el;
    }
    static create() {
        return new Animate();
    }
    static el;
    use(Translate) {
        try {
            this.model = Translate.install;
        } catch (error) {
            Translate();
        }
        return this;
    }
    mount(el) {
        Animate.el = el;
        this.model().exec();
    }
}

//作业五：
export class Translate extends Animate {
    constructor() {
        super()
    }
    exec() {
        this.el.classList.add('change');
    }
    static install() {
        return new Translate();
    }
}