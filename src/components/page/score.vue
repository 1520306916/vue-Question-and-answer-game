<template>
  <div class="score">
    <div class="end_banner">
    <h1>{{vs()}}</h1><h1 class="h1">分 !</h1>
    <p class="score_p">1231</p>
    </div>
    <img src="@/assets/images/4-3.png" class="end_fen">
    <span>关注葡萄之家，获取答案。</span>
    <img src="@/assets/images/4-4.png" class="end_er">
    <router-view/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: mapState([
      'answerid',
      'daan'
    ]),
    methods: {
      vs() {
        var x = 100/this.answerid.length;
        var z = 0;
        this.answerid.forEach(function(element,index) {
          if(element == this.daan[index]){
            z++
          }
        }, this);
        return Math.floor(z*x);
      }
    }
  }
</script>

<style>
  .score {
    width: 100%;
    height: 100%;
    background: url('../../assets/images/4-1.jpg') no-repeat center/cover;
    position: relative;
    /*text-align: center;*/
  }
  .end_banner {
    width: 12.8rem;
    height: 12rem;
    background: url('../../assets/images/4-2.png') no-repeat center/cover;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 2rem;
  }
  .end_fen {
    width: 8rem;
    position: absolute;
    left: 50%;
    transform: translateX(-45%);
    top:15rem;
  }
  .score span {  
    font-size: .6rem;
    color:#333;
    position: absolute;
    top: 20rem; 
    left: 50%;
    transform: translateX(-45%);
  }
  .end_er{
    width: 6.5rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 22rem;
  }
  h1{
    font-size: 2.1rem;
    color: #900;
    position: absolute;;
    left: 50%;
    transform: translateX(-90%);
    top: 6rem;
  }
  .h1 {
    transform: translateX(10%);
    font-size: 2rem;
  }
 .score_p{
    color: #900;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 9.3rem;
    font-size: .8rem;
    font-weight: 200;
  }
</style>

