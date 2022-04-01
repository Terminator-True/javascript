const app = Vue.createApp({
    data() {
        return {
            result: 0,
            state:"encara no"
        }
    },
    methods: {
        add: function(param){
            this.result+=param
            var that=this
            setTimeout(function(){ that.result=0 },5000 );
        },

    },
    watch: {
        result(value){
            value<=37 ? this.state="encara no":this.state="t'has passat"
        }
    }
});
app.mount("#assignment")