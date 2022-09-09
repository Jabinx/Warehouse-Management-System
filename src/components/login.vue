<template>
  <div class="login">
    <div class="loginbox">
      <p class="bt">Login</p>
      <div>
        <input
          type="text"
          class="shuru"
          required
          placeholder="用户名"
          autocomplete="off"
          v-model.trim="zh"
        /><br />
        <input
          type="password"
          class="shuru"
          required
          placeholder="密码"
          v-model.trim="mm"
        />
        <button class="tijiao" @click="quedin">确定</button>
      </div>
      <!-- <div class="zc">
        没有账号？点击
        <span class="dzc" @click="dianzc">注册</span>
      </div> -->
    </div>
  </div>
</template>

<script>
import {getuser} from '@/api/user'
export default {
  name: "login",
  props:{
    userschuan:{
      required: true
    }
  },
  data() {
    return {
      zh: "",
      mm: "",
      usersshou:this.userschuan,
    };
  },
  methods: {
    async quedin() {
      const user = await getuser()
      // console.log(user.data.data)
      var pd = false;
      this.usersshou.some((item, index) => {
        if (user.data.data.id == this.zh && user.data.data.mm == this.mm) {
          localStorage.setItem("token", item.name);
          pd=true;
          this.$router.push("/home");
          return true;
        }
      });
      if (!pd) {
        localStorage.removeItem("token");
        this.mm='';
        alert("输入有误哦！");
      }
    },
    dianzc(){
      this.$router.push("/register");
    }
  },
};
</script>

<style scoped>
.login {
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
  box-shadow: 9px 9px 10px #adadad;
}
.loginbox .bt {
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 26px;
  cursor: default;
}
.shuru {
  margin-top: 25px;
  display: inline-block;
  width: 260px;
  height: 45px;
  padding-left: 10px;
  border: solid 0px;
  border-bottom: solid 2px black;
  outline:none;
}
.tijiao {
  margin-top: 120px;
  display: inline-block;
  width: 260px;
  height: 45px;
  color: black;
  border: solid 1px black;
  border-radius: 5px;
  line-height: 45px;
  cursor: pointer;
}
.zc {
  margin-top: 100px;
  font-size: 13px;
  cursor: default;
}
.dzc {
  color: rgb(78, 136, 245);
  text-decoration: underline;
  cursor: pointer;
}
</style>