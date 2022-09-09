<template>
  <div class="register">
    <div class="loginbox">
        <p class="bt">Register</p>
        <div>
            <input type="text" class="shuru" required placeholder="用户名" v-model="zzh"><br>
            <input type="password" class="shuru" required placeholder="密码" v-model="zmm">
            <button class="tijiao" @click="qdzc">确定</button>
        </div>
        <div class="zc">
            有账号了，去
            <router-link to="/login" class="dzc">登录</router-link>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    userschuan:{
      required: true
    }
  },
  data(){
    return{
      zzh:'',
      zmm:'',
      usersshou:this.userschuan,
    }
  },
  methods:{
    qdzc(){
      if(this.zzh=='' || this.zmm==''){
        alert('要输入完整的哇！')
        return
      }
      this.usersshou.forEach(i => {
        if(i.name==this.zzh){
          alert('该用户名已被注册！')
          this.zzh='';
          this.zmm='';
          return
        }
      });
      const obj={
        name:this.zzh,
        password: this.zmm,
      }
      this.$emit('zcchuan',obj)
      alert('注册成功！')
      this.zzh='';
      this.zmm='';
      this.$router.push("/login");
      return
    }
  },
  
}
</script>

<style scoped>
.register {
  background: url("../assets/beijing.png") center center;
  width: 100vw;
  height: 100vh;
  background-size: cover;
}
.loginbox {
  width: 400px;
  height: 500px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 78%;
  background: white;
  text-align: center;
  border-radius: 15px;
  box-shadow: 9px 9px 10px #adadad
}
.loginbox .bt{
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 26px;
    cursor: default;
}
.shuru{
    margin-top: 25px;
    display:inline-block;
    width: 260px;
    height: 45px;
    padding-left: 10px;
    border:solid 0px;
    border-bottom:solid 2px black;
    outline:none;
}
.tijiao{
    margin-top: 70px;
    display:inline-block;
    width: 260px;
    height: 45px;
    color: black;
    border:solid 1px black;
    line-height: 45px;
    cursor: pointer;
}
.zc{
    margin-top: 100px;
    font-size: 13px;
    cursor:default;
}
.dzc{
    color: rgb(78, 136, 245);
    text-decoration: underline;
    cursor:pointer;
}
</style>