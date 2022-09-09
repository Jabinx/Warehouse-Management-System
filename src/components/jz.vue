<template>
  <div class="in">
    <neibu
      :chuaning="jiezhi"
    ></neibu>
  </div>
</template>

<script>
import {getjiezhi} from '@/api/table'
export default {
  name: "jz",
  props:{
    chuanshujuku:{
      required: true,
    }
  },
  data() {
    return {
      jiezhi:this.chuanshujuku.jiezhi
      // jiezhi:''
    };
  },
  // async created(){
  //   const getshuju = await getjiezhi()
  //   console.log(getshuju.data.data);
  //   this.jiezhi=getshuju.data.data
  // },
};
</script>

<style>
</style>