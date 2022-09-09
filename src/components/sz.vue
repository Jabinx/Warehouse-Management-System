<template>
  <div class="in">
    <neibu
      :chuaning="shouzuo"
    ></neibu>
  </div>
</template>

<script>
export default {
    name:"sz",
    props:{
    chuanshujuku:{
      required: true,
    }
  },
  data() {
    return {
      shouzuo:this.chuanshujuku.shouzuo
      
    };
  },
}
</script>

<style>

</style>