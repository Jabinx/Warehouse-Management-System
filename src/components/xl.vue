<template>
  <div class="in">
    <neibu
      :chuaning="xianglian"
    ></neibu>
  </div>
</template>

<script>
export default {
    name:"xl",
    props:{
    chuanshujuku:{
      required: true,
    }
  },
  data() {
    return {
      xianglian:this.chuanshujuku.xianglian
      
    };
  },
}
</script>

<style>

</style>