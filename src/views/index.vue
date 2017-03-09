
<template>
  <div id="main">
    <raw-editor></raw-editor>
    <render-editor></render-editor>
  </div>
</template>

<script>
  import rawEditor from '../components/rawEditor'
  import renderEditor from '../components/renderEditor'

  export default {
      components: {
          rawEditor,
          renderEditor
      }
  }

</script>
<style>
  #main {
    width: 100%;
    height: 100%;
  }
</style>
