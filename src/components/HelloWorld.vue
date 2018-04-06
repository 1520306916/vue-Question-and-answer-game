<template>
  <div class="Hello">
    <img src="../../src/assets/images/WechatIMG2.png" class="top">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Hello'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Hello {
  width: 100%;
  height: 100%;
  background: url('../assets/images/1-1.jpg') no-repeat center/cover;
  overflow: hidden;
  position: relative;
}

.top {
  width: 4.2rem;
  position: absolute;
  top: -1.2rem;
  right: 2.1rem;
}
</style>
