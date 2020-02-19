Vue.component('initcomponent',{
    template: `<div v-on:mouseover = "changename()" v-on:mouseout="originalname();">
                <h1>Custom component created by
                    <span id="name">{{name}}</span>
                </h1>
              </div>`,

    data: function(){
        return {
            name: "Niomic"
        }
    },

    method:{
        changename: function(){
            this.name = "Satria";
        },
        originalname: function(){
            this.name = "Rahmat";
        }
    }
});

var vm = new Vue({
    el: '#component1'
});

var vm1 = new Vue({
    el: '#component2'
});