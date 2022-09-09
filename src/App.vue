<template>
  <div>
    <!-- 路由占位符 -->
    <router-view 
    :userschuan="users"
    @zcchuan="chuzcchuan"
    @mmhchuan="mmashou"
    ></router-view>
  </div>
</template>

<script>
export default {
  name:"app",
  data() {
    return {
      shoumm:'',
      users: [
        {
          name: 1,
          password: 1,
        },
        {
          name: 2,
          password: 2,
        },
      ],
    };
  },
  methods:{
    chuzcchuan(chuanz){
      this.users.push(chuanz)
    },
    mmashou(ashou){
      const token = localStorage.getItem('token');
      this.users.some((item,index)=>{
        if(item.name==token){
          item.password=ashou
          return true;
        }
      })
    },
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  user-select:none;
}
a{
  text-decoration: none;
}
/* html, body {
	width: 100%;
	height: 100%;
} */
ul li {
    list-style: none;
}
</style>