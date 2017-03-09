/**
 * Created by XYSM on 2017/2/25.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import marked from 'marked';

Vue.use(Vuex);

//marked配置文件
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});


const state = {
  rawHtml: '',
  renderHtml: ''
};

const mutations = {
  "MARKDOWN_SUCCESS": function(state,arr){
    state.rawHtml = arr[0] ;
    state.renderHtml = arr[1] ;
    //console.log(state.rawHtml,state.renderHtml);
  }
};

const actions = {
  MARKDOWN_SUCCESS( { commit } , e ) {
    commit('MARKDOWN_SUCCESS', [e.target.value, marked(e.target.value)])
  }
};

const getters = {
  "getRawHtml": state => state.rawHtml,
  "getRenderHtml": state => state.renderHtml
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
