    document.getElementsByClassName('six')[0].onclick = function() {
        document.getElementById('auto').setAttribute('class', 'box')
    }

    // document.querySelector('.one').addEventListener('animationend', function(e) {
    //     console.log(e);
    //     console.log("动画已经结束");
    // })



    var targets = [{
            el: document.querySelector('.one'),
            animationClassName: 'changeo'
        },
        {
            el: document.querySelector('.two'),
            animationClassName: 'changet'
        },
        {
            el: document.querySelector('.three'),
            animationClassName: 'changeth'
        },
        {
            el: document.querySelector('.four'),
            animationClassName: 'changef'
        },
        {
            el: document.querySelector('.five'),
            animationClassName: 'changefi'
        },
    ]

    function handleAnimation() {
        if (!targets.length) return;
        console.log(targets);
        var target = targets.shift();
        target.el.classList.add(target.animationClassName);
        target.el.addEventListener('animationend', function(e) {
            console.log("动画执行结束");
            handleAnimation()
        })
    }
    handleAnimation()