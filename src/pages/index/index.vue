<template>
  <div class="index">
    <router-link to="/my">my</router-link>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this)
  },
}
</script>

<style lang="scss" scoped>
.index {
  background: red;
  font-size: 18px;
}
</style>
