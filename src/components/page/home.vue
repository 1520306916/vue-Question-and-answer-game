<template>
  <div>
    <img src="../../assets/images/1-2.png" class="home">
    <img src="../../assets/images/1-4.png" class="statu" @click="$goRouter(c); imterNum()">
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      c: 'item'
    }
  },
  methods: {
    ...mapActions([
      'imterNum'
    ])
  }
}
</script>

<style>
.home {
  width: 16.5rem;
  position: absolute;
  left: 50%;
  transform: translateX(-55%);
  top: 15%;
}

.statu {
  width: 5.5rem;
  height: 2.5rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 21rem;
}
</style>
