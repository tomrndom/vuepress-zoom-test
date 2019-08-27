<template>
  <div class="theme-container">
    <Content/>
    Images with modified width are zoomed with distortion
    <div class="row">
      <img class="zoom-custom-imgs img-row" src="/assets/cat.jpg" data-zoom-src="/assets/cat-hr.jpg"/>
      <img class="zoom-custom-imgs img-row" src="/assets/dog.jpg" data-zoom-src="/assets/dog-hr.jpg"/>
    </div>
    <br>
    <div class="col">
      <img class="zoom-custom-imgs" src="/assets/cat.jpg" data-zoom-src="/assets/cat-hr.jpg"/>
      <img class="zoom-custom-imgs" src="/assets/dog.jpg" data-zoom-src="/assets/dog-hr.jpg"/>
    </div>
  </div>  
</template>
<script>
export default {
  
}
</script>
<style lang="stylus">
.row
  display flex
  width 100%
  flex-direction row
  flex-wrap wrap
  .img-row
    width 50%
.col
  display flex
  width 50%
  flex-direction columns 
  flex-wrap wrap
</style>
