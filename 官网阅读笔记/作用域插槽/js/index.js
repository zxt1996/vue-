Vue.component('Mouse',{
    data() {
        return { x: 0, y: 0 };
    },
    methods: {
        handleMouseMove(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
    },
    template:`
        <div>
            <div @mousemove="handleMouseMove">
                <slot :x="x" :y="y">
                    I'm some default content,
                    but I can show you mouse position anyways {{x}},{{y}}
                </slot>
            </div>
        </div>
    `
})

let app = new Vue({
    el:'#myapp'
})