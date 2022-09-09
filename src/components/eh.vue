<template>
  <div class="in">
    <neibu
      :chuaning="erhuan"
    ></neibu>
  </div>
</template>

<script>
export default {
    name:"eh",
    props:{
    chuanshujuku:{
      required: true,
    }
  },
  data() {
    return {
      erhuan:this.chuanshujuku.erhuan
      
    };
  },
}
</script>

<style>

</style>