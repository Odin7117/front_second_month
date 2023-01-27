
class Component {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }
    red() {
        this.$element.style.background = 'red'
    }
    yellow() {
        this.$element.style.background = 'yellow'
    }
    green() {
        this.$element.style.background = 'green'
    }
}

class Block extends Component {
    constructor(options) {
        super(options.selector);

        this.$element.style.width = this.$element.style.height = options.razmer + 'px'
        this.$element.style.background = options.cvet
    }
}


class Circle extends Block {
    constructor(options) {
        super(options);
        this.$element.style.borderRadius = '50%'
    }
}

const circle3 = new Circle({
    selector: '.krug3',
    razmer: 150,
    cvet: 'black'
})

const circle1 = new Circle({
    selector: '.krug1',
    razmer: 150,
    cvet: 'black'
})


const circle2 = new Circle({
    selector: '.krug2',
    razmer: 150,
    cvet: 'black'
})

let color = prompt()

if(color === 'red') {
    circle1.red()
}else if(color === 'yellow') {
    circle2.yellow()
}else if(color === 'green') {
    circle3.green()
}