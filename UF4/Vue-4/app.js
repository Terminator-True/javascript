const app = Vue.createApp({
    data() {
        return {
            clase: "",
            clicked: false     
        }
    },
    methods: {
        enter: function(event){
            this.clase=event.target.value
        },
        toggle: function(){
            this.clicked= this.clicked ? false:true
        }
    }
}); 
app.mount("#assignment")