<template>
  <div>
    <component :is="a"></component>
  </div>
</template>

<script>
import item1 from './item/item1.vue'
export default {
  data () {
    return {
      a: 'a1'
    }
  },
  components: {
    a1: item1
  }
}
</script>

<style>
.item {
  width: 14.5rem;
  height: 14.5rem;
  background: url('../../assets/images/2-1.png') no-repeat center/cover;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 5rem;
}

.banner span {
  width: .85rem;
  height: .85rem;
  display: inline-block;
  border-radius: 50%;
  border: 1px solid #eee;
  font-size: .6rem;
  text-align: center;
  line-height: .85rem;
}

.next {
  width: 5.5rem;
  height: 2.5rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 16rem;
}

ul {
  list-style: none;
}

.banner li {
  font-size: .8rem;
  margin-top: .5rem;
}

.banner {
  position: absolute;
  top: 2.9rem;
  left: 2.5rem;
  font-size: .76rem;
  color: #eee;
}

.banner .active {
  background-color: #ff0;
  color: #333;
}
</style>
