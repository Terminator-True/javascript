const app = Vue.createApp({
    data() {
        return {
            text: "",
            another_text: ""
        }
    },
    methods: {
        alerta: function(){
            alert("Hola")
        },
        keydown: function(event){
            this.text=event.target.value
        },
        enter: function(event){
            this.another_text=event.target.value
        }
    }
});
app.mount("#tasca")