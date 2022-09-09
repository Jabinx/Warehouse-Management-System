<template>
  <div class="in">
    <neibu
      :chuaning="chuanzhu"
    ></neibu>
  </div>
</template>

<script>
export default {
    name:"zz",
    props:{
    chuanshujuku:{
      required: true,
    }
  },
  data() {
    return {
      chuanzhu:this.chuanshujuku.chuanzhu
      
    };
  },
}
</script>

<style>

</style>