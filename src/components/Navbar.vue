<template>
  <div class="navbar">
    <nav class="nav-extended indigo draken-2">
      <div class="nav-content">
        <router-link :to="{ name : 'Index' }">
          <span class="nav-title">Jui Smoothies</span>
        </router-link>
        <a href class="btn-floating btn-large halfway-fab pink">
          <router-link :to="{ name: 'AddSmoothie' }">
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>



