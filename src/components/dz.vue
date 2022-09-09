<template>
  <div class="in">
    <neibu
      :chuaning="diaozui"
    ></neibu>
  </div>
</template>

<script>
export default {
    name:"dz",
    props:{
    chuanshujuku:{
      required: true,
    }
  },
  data() {
    return {
      diaozui:this.chuanshujuku.diaozui
      
    };
  },
}
</script>

<style>

</style>