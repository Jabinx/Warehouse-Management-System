<template>
  <div>
    <div class="left">
      <div class="top">珠宝流动详情表：</div>
      <table class="biao">
        <thead>
          <tr>
            <td style="width: 24%; border-radius: 6px 0 0 6px">时间</td>
            <td style="width: 20%">流动件数</td>
            <td style="width: 20%">流动克数</td>
            <td style="width: 20%">备注</td>
            <td style="width: 16%; border-radius: 0 6px 6px 0px">操作</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in shou" :key="item.id">
            <td>{{ item.sj }}</td>
            <td>{{ item.jian }}</td>
            <td>{{ item.ke }}</td>
            <td>{{ item.sfck | pdck }}</td>
            <td><a href="javascript:;" @click="shanchu(item.id)">删除</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="right">
      <div class="rshang">
        <img src="../assets/zjs.png" alt="" />
        <div class="rsr">
          <div class="rsrs">当前总件数:</div>
          <div class="rsrx">
            {{ this.chuaning.zjiaing }}
            <span>/件</span>
          </div>
        </div>
      </div>
      <div class="rshang">
        <img src="../assets/zks.png" alt="" />
        <div class="rsr">
          <div class="rsrs">当前总克数:</div>
          <div class="rsrx">
            {{ this.chuaning.zkeing }}
            <span>/克</span>
          </div>
        </div>
      </div>
      <div class="rxia">
        <div class="tianjiazi">添加新数据：</div>
        <div class="shurukuan">
          流动件数：<input type="number" v-model.number="shurujian" />（件）
        </div>
        <div class="shurukuan">
          流动克数：<input type="number" v-model.number="shuruke" />（克）
        </div>
        <div class="fuxuankuan">
          <input
            type="radio"
            name="kuku"
            :value="true"
            v-model="chukuzhi"
          />出库
          <input
            type="radio"
            name="kuku"
            :value="false"
            v-model="chukuzhi"
            style="margin-left: 40px"
          />入库
        </div>
        <button @click="tianjiashuju">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "neibu",
  props: {
    chuaning: {
      required: true,
    },
  },
  data() {
    return {
      shurujian: "",
      shuruke: "",
      chukuzhi: "",
      jianshou: this.chuaning.zjiaing,
      keshou: this.chuaning.zkeing,
      shou: this.chuaning.ck,
    };
  },
  filters: {
    pdck(ck) {
      if (ck) {
        return "出库";
      } else {
        return "入库";
      }
    },
  },
  methods: {
    // 时间格式化
    dateFormat() {
      var date = new Date();
      var year = date.getFullYear();
      var month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var hours =
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var minutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var seconds =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      let week = date.getDay(); // 星期
      let weekArr = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      // 拼接 时间格式处理
      return year + "/" + month + "/" + day;
    },
    shanchu(idhao) {
      this.shou.some((item, index) => {
        if (item.id == idhao) {
          if (item.sfck) {
            this.chuaning.zjiaing = this.chuaning.zjiaing + item.jian;
            this.chuaning.zkeing = this.chuaning.zkeing*10000 + item.ke*10000;
            this.chuaning.zkeing = (this.chuaning.zkeing/10000).toFixed(3);
            this.chuaning.zkeing =parseFloat(this.chuaning.zkeing)
          } else {
            this.chuaning.zjiaing = this.chuaning.zjiaing - item.jian;
            this.chuaning.zkeing = this.chuaning.zkeing*10000 - item.ke*10000;
            this.chuaning.zkeing = (this.chuaning.zkeing/10000).toFixed(3);
            this.chuaning.zkeing =parseFloat(this.chuaning.zkeing)
          }
          this.shou.splice(index, 1);
          return true;
        }
      });
    },
    tianjiashuju() {
      if (this.shurujian == "" || this.shuruke == "" || this.chukuzhi === "") {
        alert("要填写完整才可以哦！");
        return;
      }
      const nowtime = this.dateFormat(new Date());
      const obj = {
        id: this.chuaning.iding,
        sj: nowtime,
        jian: this.shurujian,
        ke: this.shuruke,
        sfck: this.chukuzhi,
      };
      this.chuaning.iding++;
      if (this.chukuzhi) {
        this.chuaning.zjiaing = this.chuaning.zjiaing - parseInt(this.shurujian);
        this.chuaning.zkeing = this.chuaning.zkeing*10000 - this.shuruke*10000;
        this.chuaning.zkeing = (this.chuaning.zkeing/10000).toFixed(3);
        this.chuaning.zkeing=parseFloat(this.chuaning.zkeing)
      } else {
        this.chuaning.zjiaing = this.chuaning.zjiaing + parseInt(this.shurujian);
        this.chuaning.zkeing = this.chuaning.zkeing*10000 + this.shuruke*10000;
        this.chuaning.zkeing = (this.chuaning.zkeing/10000).toFixed(3);
        this.chuaning.zkeing=parseFloat(this.chuaning.zkeing)
      }
      this.shou.unshift(obj);
      this.shurujian = "";
      this.shuruke = "";
      this.chukuzhi = "";
      return;
    },
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
};
</script>

<style sconped>
.left {
  width: 850px;
  height: 610px;
  background: #fbfbfb;
  border-radius: 6px;
  float: left;
  box-shadow: 6px 10px 10px #adadad;
}
.left .top {
  height: 50px;
  width: 96%;
  line-height: 55px;
  font-size: 20px;
  font-family: "YouYuan";
  padding-left: 10px;
  border-bottom: solid 1px #929292;
  margin-left: 13px;
}
.left .biao {
  width: 95%;
  margin-top: 20px;
  border: solid 1px #929292;
  border-radius: 6px;
  margin-left: 22px;
}
.left .biao thead {
  background: #929292;
}
.left .biao td {
  text-align: center;
  height: 30px;
}
.right {
  width: 350px;
  height: 610px;
  /* background: rgb(238, 235, 67); */
  float: left;
  margin-left: 40px;
}
.right .rshang {
  height: 120px;
  margin-bottom: 20px;
  background: #fbfbfb;
  border-radius: 6px;
  box-shadow: 6px 10px 10px #adadad;
}
.right .rshang img {
  width: 100px;
  height: 100px;
  margin: 10px 10px 20px 20px;
  float: left;
}
.right .rshang .rsr {
  width: 190px;
  height: 100px;
  /* background: pink; */
  margin-top: 10px;
  float: left;
}
.right .rshang .rsr .rsrs {
  height: 35px;
  line-height: 35px;
  border-bottom: solid 1px #929292;
  color: #929292;
}
.right .rshang .rsr .rsrx {
  font-size: 30px;
  float: left;
  margin-top: 10px;
  margin-left: 38px;
}
.right .rshang .rsr .rsrx span {
  font-size: 10px;
  color: #929292;
}
.right .rxia {
  height: 330px;
  background: #fbfbfb;
  border-radius: 6px;
  box-shadow: 6px 10px 10px #adadad;
}
.right .rxia .tianjiazi {
  height: 56px;
  width: 90%;
  line-height: 66px;
  font-size: 18px;
  font-family: "YouYuan";
  padding-left: 10px;
  border-bottom: solid 1px #929292;
  margin-left: 13px;
  margin-bottom: 10px;
}
.rxia .shurukuan {
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  color: #929292;
  padding-left: 40px;
  margin-bottom: 5px;
}
.rxia .shurukuan input {
  height: 30px;
  width: 88px;
  border: 0;
  border-bottom: solid 1px #929292;
  background: #fbfbfb;
  outline: none;
  padding-left: 20px;
  font-size: 15px;
}
.rxia .fuxuankuan {
  color: #7a7a7a;
  margin-left: 100px;
  margin-top: 25px;
}
.rxia button {
  width: 160px;
  height: 30px;
  margin-left: 90px;
  margin-top: 50px;
}
</style>