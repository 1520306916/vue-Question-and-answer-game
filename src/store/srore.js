import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  subject: [{
    topic_name: '题目一',
    topic_answer: [{
      topic_answer_id: 'A',
      answer_name: '答案A'
    }, {
      topic_answer_id: 'B',
      answer_name: '答案B'
    }, {
      topic_answer_id: 'C',
      answer_name: '答案C'
    }, {
      topic_answer_id: 'D',
      answer_name: '答案D'
    }]
  }, {
    topic_name: '题目二',
    topic_answer: [{
      topic_answer_id: 'A',
      answer_name: '答案A'
    }, {
      topic_answer_id: 'B',
      answer_name: '答案B'
    }, {
      topic_answer_id: 'C',
      answer_name: '答案C'
    }, {
      topic_answer_id: 'D',
      answer_name: '答案D'
    }]
  }, {
    topic_name: '题目三',
    topic_answer: [{
      topic_answer_id: 'A',
      answer_name: '答案A'
    }, {
      topic_answer_id: 'B',
      answer_name: '答案B'
    }, {
      topic_answer_id: 'C',
      answer_name: '答案C'
    }, {
      topic_answer_id: 'D',
      answer_name: '答案D'
    }]
  }],
  itemNum: 1, // 第几题
  answerid: [], // 结果
  daan:['A','A','A']
}

const mutations = {
  pushNum (state, id) {
    state.answerid.push(id)
  },
  add (state, num) {
    state.itemNum += num
  },
  inter (state) {
    state.itemNum = 1
    state.answerid = []
  }
}

const actions = {
  addNum ({ commit, state }, id) {
    commit('pushNum', id)
    if (state.itemNum < state.subject.length) {
      commit('add', 1)
    }
    console.log(state.answerid)
  },
  imterNum ({ commit }) {
    commit('inter')
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
