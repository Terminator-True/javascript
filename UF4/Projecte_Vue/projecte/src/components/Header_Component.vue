<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color:#EAEAEA;" >
    <router-link class="nav-link" @click="reload()" to="/list">Home</router-link>
    <router-link class="nav-link" @click="reload()" to="/form">Nou modul</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: 'Header_Component',
  methods:{
    reload(){
      setTimeout(()=>{ this.$router.go()},100)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
