<template>
  <div class="home">
    <Home msg="DAW"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home_Component.vue'

export default {
  name: 'HomeView',
  components: {
    Home
  }
}
</script>
