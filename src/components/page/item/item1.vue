<template>
  <div class="item">
    <div class="banner">
      <header>{{subject[itemNum-1].topic_name}}</header>
      <ul>
        <li v-for='item in subject[itemNum-1].topic_answer' @click='choosed(item.topic_answer_id)'>
          <span :class="{active : item.topic_answer_id==itemId}">{{item.topic_answer_id}}</span>
          {{item.answer_name}}
        </li>
      </ul>
    </div>
    <img src="../../../assets/images/3-1.png" class="next" @click="nextItem(); $goRouter(end)">
    <img src="../../../assets/images/2-2.png" class="next" @click="nextItem" v-if="itemNum < subject.length">
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      itemId: null,
      end: 'score'
    }
  },
  computed: mapState([
    'itemNum',
    'subject',
    'answerid'
  ]),
  methods: {
    ...mapActions([
      'addNum'
    ]),
    choosed (id) {
      this.itemId = id
    },
    nextItem () {
      if (this.itemId !== null) {
        this.addNum(this.itemId)
        this.itemId = null
      } else {
        alert('您还没有选择答案哦')
      }
    },
    www () {
      console.log(123)
    }
  }
}
</script>
