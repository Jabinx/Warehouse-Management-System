<template>
  <div class="home">
    <div class="head">
      <h1>鹏大珠宝后台管理系统</h1>
      <button @click="tuichu">退出登录</button>
    </div>
    <div class="limb">
      <div class="zuo">
        <ul>
          <li
            v-for="(item, index) in liebiao"
            :key="index"
            @click="dianbian(index)"
            :class="{ active: index == currentIndex }"
          >
            <router-link :to="item.goto">
              <img :src="require('../assets/' + item.lujin + '.png')" />
              <p>{{ item.lbname }}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="you">
        <router-view @mmchuan="mmshou" :chuanshujuku="shujuku"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import {getList} from '@/api/table'
export default {
  name: "home",
  data() {
    return {
      currentIndex: 0,
      liebiao: [
        {
          goto: "/home",
          lujin: "grzx",
          lbname: "个人中心",
        },
        {
          goto: "/home/jz",
          lujin: "jz",
          lbname: "戒指",
        },
        {
          goto: "/home/xl",
          lujin: "xl",
          lbname: "项链",
        },
        {
          goto: "/home/sz",
          lujin: "sz",
          lbname: "手镯/链",
        },
        {
          goto: "/home/dz",
          lujin: "dz",
          lbname: "吊坠",
        },
        {
          goto: "/home/eh",
          lujin: "eh",
          lbname: "耳环",
        },
        {
          goto: "/home/zz",
          lujin: "zz",
          lbname: "串珠",
        },
      ],
      shujuku: ''
    };
  },
  async created(){
    const getshuju = await getList()
    // console.log(getshuju.data.data);
    this.shujuku=getshuju.data.data
  },
  methods: {
    tuichu() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
    dianbian(index) {
      this.currentIndex = index;
    },
    mmshou(mm) {
      this.$emit("mmhchuan", mm);
    },
  },
};
</script>

<style scoped>
.home {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #f0f0f1;
}
.head {
  height: 73px;
  background: url("../assets/btbj.png") center center;
  border-bottom: solid 1px #bfbfbf;
  box-shadow: 16px 0px 7px #adadad;
}
.head h1 {
  height: 73px;
  line-height: 73px;
  margin-left: 25px;
  float: left;
  font-family: "YouYuan";
  font-weight: 400;
}
.head button {
  float: right;
  width: 100px;
  height: 40px;
  margin-top: 17px;
  margin-right: 25px;
  border-radius: 6px;
  border: solid 1px #7e7e7e;
  cursor: pointer;
}
.limb {
  position: absolute;
  top: 74px;
  bottom: 0;
  width: 100%;
  display: flex;
}
.zuo {
  float: left;
  flex: 1;
  padding-top: 20px;
  border-right: solid 1px #7e7e7e;
  box-shadow: 0px 10px 10px #adadad;
  background: #fbfbfb;
}
.zuo ul li {
  height: 42px;
  line-height: 42px;
  width: 100%;
  margin-top: 3px;
  /* border-bottom: solid 1px #7e7e7e; */
}
.active {
  background: #dad8d8;
  border-left: solid 5px #4e4e4e;
}
.zuo ul li:hover {
  background: #e9e9e9;
}
.zuo ul li a {
  display: block;
  width: 186px;
  height: 42px;
  margin: 0 auto;
  padding-left: 30px;
}
.zuo ul li a img {
  margin-top: 7px;
  width: 25px;
  height: 25px;
  float: left;
  margin-right: 12px;
}
.zuo ul li a p {
  height: 42px;
  line-height: 39px;
  font-size: 19px;
  float: left;
  color: black;
  /* font-weight: bold;
  font-family:"YouYuan"; */
}
.you {
  flex: 9;
  float: left;
}
.you .in {
  width: 1240px;
  height: 610px;
  /* background: pink; */
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
}
</style>