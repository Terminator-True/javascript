const app = Vue.createApp({
    data() {
        return {
            nom: "Joel Farell",
            edat: 20,
            rand: Math.floor(Math.random() * 10),
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
            value: "tasca_01"
        }
    }
});
app.mount("#tasca_01")