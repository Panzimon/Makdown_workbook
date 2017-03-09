
<template>
  <div
       id="render-editor"
       v-html="renderHtml">
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters({
      renderHtml: 'getRenderHtml'
    })
  }

</script>

<style>
  #render-editor {
    float:right;
    width:50%;
    height:100%;
    overflow: hidden;
  }
</style>
