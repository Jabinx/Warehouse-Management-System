<template>
  <div class="grzx in">
    <!-- <div class="tou">
      <p class="hy">欢迎使用:)</p>
      <p class="sj">{{dateFormat(newDate)}}</p>
    </div> -->
    <div class="shenti">
      <div class="hezi">
        <img src="../assets/jinjia.png" alt="" />
        <div class="dazi">￥368<span>/克</span></div>
        <div class="xiaozi"><span>今日金价</span></div>
      </div>
      <div class="hezi">
        <img src="../assets/zjs.png" alt="" />
        <div class="dazi weitiao">{{zong.zjian}}<span>/件</span></div>
        <div class="xiaozi"><span>总共件数</span></div>
      </div>
      <div class="hezi">
        <img src="../assets/zks.png" alt="" />
        <div class="dazi weitiao2">{{zong.zke}}<span>/克</span></div>
        <div class="xiaozi"><span>总共克数</span></div>
      </div>
      <div class="d4">
        <div class="dshang" v-if="showgrzh">
          <img src="../assets/xiugai.png" alt="" @click="zhsz"/>
          <p @click="zhsz">-个人密码修改-</p>
        </div>
        <div class="grzh" @click="zhsz" v-else>
          <input 
          type="text" 
          class="shuru" 
          style="margin-top: 70px" 
          v-model="mm1"
          placeholder="请输入新的密码"
          />
          <input 
          type="password" 
          class="shuru" 
          style="margin-bottom: 70px" 
          v-model="mm2"
          placeholder="请再输入新的密码"
          />
          <button class="tijiao" @click="quedin">确定</button>
          <button class="tijiao" @click="quxiao">取消</button>
        </div>
        <div class="dxia">
          <img src="../assets/lxwm.png" alt="" />
          <div class="lx">联系我们</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getZong} from '@/api/table'
export default {
  name: "grzx",
  // props:{
  //   chuanshujuku:{
  //     required: true,
  //   }
  // },
  data() {
    return {
      newDate: new Date(),
      showgrzh: true,
      mm1:'',
      mm2:'',
      zong:''
    };
  },
  async created(){
    const getshuju = await getZong()
    console.log(getshuju.data.data);
    this.zong=getshuju.data.data
  },
  methods: {
    zhsz() {
      this.showgrzh = true;
      // console.log(this.dateFormat(this.newDate))
    },
    quedin(){
      if(this.mm1!=this.mm2){
        alert('两次密码输入不一样！')
        this.mm1=''
        this.mm2=''
        return
      }
      alert('修改成功！')
      this.$emit('mmchuan',this.mm2)
      this.mm1=''
      this.mm2=''
      this.showgrzh=true;
      return
    },
    quxiao(){
      // console.log(this.usersshou)
      this.showgrzh=true;
      // console.log(this.showgrzh)
    }
  },
  mounted() {
    let that = this;
    this.timer = setInterval(function () {
      that.newDate = new Date().toLocaleString();
    });
  },
  beforeDestroy: function () {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  // computed: {
  //   zongjian(){
  //     const zjian=this.chuanshujuku.jiezhi.zjiaing+this.chuanshujuku.xianglian.zjiaing+this.chuanshujuku.diaozui.zjiaing+this.chuanshujuku.erhuan.zjiaing+this.chuanshujuku.shouzuo.zjiaing+this.chuanshujuku.chuanzhu.zjiaing
  //     return zjian
  //   },
  //   zongke(){
  //     var zke=parseFloat(this.chuanshujuku.jiezhi.zkeing)+parseFloat(this.chuanshujuku.xianglian.zkeing)+parseFloat(this.chuanshujuku.diaozui.zkeing)+parseFloat(this.chuanshujuku.erhuan.zkeing)+parseFloat(this.chuanshujuku.shouzuo.zkeing)+parseFloat(this.chuanshujuku.chuanzhu.zkeing)
  //     zke=zke.toFixed(3)
  //     return zke
  //   }
  // },
};
</script>

<style sconped>
.grzx {
  cursor: default;
}
.tou {
  height: 50px;
  background: #fbfbfb;
  border-radius: 6px;
  margin-bottom: 26px;
  box-shadow: 6px 10px 10px #adadad;
}
.tou p {
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  font-family: "YouYuan";
}
.tou .hy {
  float: left;
  margin-left: 20px;
}
.tou .sj {
  float: right;
  margin-right: 25px;
  font-size: 15px;
}
.shenti {
  width: 1240px;
  height: 610px;
  /* margin-top: 70px; */
}
.shenti .hezi {
  float: left;
  width: 290.5px;
  height: 610px;
  margin-right: 26px;
  background: #fbfbfb;
  border-radius: 6px;
  box-shadow: 6px 10px 10px #adadad;
  text-align: center;
}
.shenti .hezi img {
  width: 180px;
  height: 200px;
  margin-top: 99px;
  margin-bottom: 50px;
}
.shenti .hezi .dazi {
  width: 200px;
  font-size: 58px;
  padding-left: 42px;
  color: #3a3a3a;
}
.shenti .hezi .dazi span {
  font-size: 15px;
  color: #7e7e7e;
}
.shenti .hezi .xiaozi {
  border-top: solid 1px #7e7e7e;
  width: 100px;
  padding-left: 40px;
  margin-left: 100px;
  padding-top: 8px;
  color: #7e7e7e;
}
.shenti .hezi .weitiao {
  padding-left: 62px;
}
.shenti .hezi .weitiao2 {
  padding-left: 50px;
  font-size: 42px;
  margin-top: 20px;
}
.shenti .hezi .xiaozi span {
  float: right;
  margin-right: 10px;
}
.shenti .d4 {
  margin-right: 0;
  float: left;
  width: 290.5px;
  height: 534px;
  /* background: pink; */
}
.d4 .dshang {
  width: 290.5px;
  height: 426px;
  background: #fbfbfb;
  border-radius: 6px;
  box-shadow: 6px 10px 10px #adadad;
  text-align: center;
  margin-bottom: 26px;
  /* cursor: pointer; */
}

.d4 .dshang img {
  width: 140px;
  height: 150px;
  margin-top: 108px;
  cursor: pointer;
}
.d4 .dshang p {
  margin-top: 20px;
  color: #7e7e7e;
  cursor: pointer;
}
.d4 .dxia {
  width: 290.5px;
  height: 158px;
  background: #fbfbfb;
  border-radius: 6px;
  box-shadow: 6px 10px 10px #adadad;
}
.d4 .dxia img {
  width: 100px;
  height: 100px;
  margin-top: 30px;
  margin-left: 30px;
  float: left;
}
.d4 .dxia .lx {
  width: 120px;
  height: 100px;
  line-height: 100px;
  margin-top: 30px;
  margin-left: 20px;
  float: left;
  color: #7e7e7e;
  font-size: 20px;
}
.d4 .grzh {
  width: 290.5px;
  height: 426px;
  background: #fbfbfb;
  border-radius: 6px;
  box-shadow: 6px 10px 10px #adadad;
  margin-bottom: 26px;
  text-align: center;
}
.d4 .grzh .shuru {
  margin-top: 20px;
  display: inline-block;
  width: 180px;
  height: 30px;
  padding-left: 10px;
  border: solid 0px;
  border-bottom: solid 2px black;
  background: #fbfbfb;
  outline:none;
}
.d4 .grzh .tijiao {
  margin-top: 20px;
  display: inline-block;
  width: 180px;
  height: 35px;
  color: black;
  border: solid 1px black;
  line-height: 30px;
  cursor: pointer;
  border-radius: 6px;
}
</style>