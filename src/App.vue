
<template>
  <Navbar />
  <RouterView />
</template>
<script>
import Navbar from './components/layouts/Navbar.vue';
export default {
  components: {
    Navbar
  }
}
</script>

<style>
@import url('@/assets/style.css');
</style>
