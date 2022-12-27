<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <menu-button :usrid=userid></menu-button>
  <back-ground></back-ground>
  <div class="body">
    <header-tag ref="header" :usrid=userid></header-tag>
    <div class="content" ref="content">
      <span class="section1">
        <div class="userCard">
          <personal-info :username="this.username"></personal-info>
        </div>
        <div style="margin-left: 2vw; margin-top: 2vh; font-family: 'Poppins', sans-serif;">My Capsules</div>
        <div style="height: 1px; background-color: black; width: 90%; margin: 1vh auto;"></div>
        <div class="capsules" v-for="capsules in dividedCapsule" :key="capsules.id">
           <time-capsule v-for="capsule in capsules" :key="capsule.id" :capsule="{title:capsule.title,content:capsule.content,writetime:capsule.writetime,opentime:capsule.opentime,capsuleid:capsule.capsuleid}" :userid="userid" v-on:click="openBT(capsule.capsuleid)"></time-capsule>
        </div>
      </span>
      <span class="section2">
        <div class="write-capsule anim hidden">
          <div class="date-picker" style="text-align: center; margin-top: 3vh;">
            <el-date-picker v-model="opentime" type="date" placeholder="Pick a day" value-format="YYYY-MM-DD" />
          </div>
          <div class="title" style="text-align: center;">
            <input v-model="title" type="text" placeholder="在此输入标题..." class="input1">
          </div>
          <div class="mainText" style="text-align: center;">
            <textarea v-model="content" class="input2" placeholder="在此输入正文..."></textarea>
          </div>
          <div style="text-align: center;">
            <button id="throwButton" v-on:click="throwBT"><span>throw</span></button>
          </div>
        </div>
        <div class="show-capsule anim">
          <open-capsule></open-capsule>
          <capsule-card :writetime="openCapsule.writetime" :title="openCapsule.title" :content="openCapsule.content"></capsule-card>
        </div>
      </span>
      <span class="section3">
        <el-calendar>
          <template  #date-cell="{data}">
            <el-row>
              <el-col>
                <div class="calendar-day">{{ data.day.split('-').slice(2).join('-') }}</div>
<!--                <div class="blue budge" v-if="dealMyDate(data.day)" style="width: 10px;height: 10px;-->
<!--              border-radius: 5px;-->
<!--              background-color: blue;"></div>-->
              </el-col>
            </el-row>
          </template>
        </el-calendar>
        <div style="text-align: center; margin-top: 2vh;">
          <button id="writeButton" v-on:click="writeBT"><span>写一个</span></button>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BackGround from "@/components/backGround";
import HeaderTag from "@/components/headerTag";
import TimeCapsule from "@/components/timeCapsule";
import PersonalInfo from "@/components/personalInfo";
import MenuButton from "@/components/menuButton";
import router from "@/router";
import OpenCapsule from "@/components/openCapsule";
import CapsuleCard from "@/components/capsuleCard";
import {ElMessageBox} from "element-plus";

class Capsule {
  capsuleid;
  userid;
  title;
  content;
  writetime;
  opentime;
  isopened;
}
export default {
  name: "capsulePage",
  components: {CapsuleCard, OpenCapsule, MenuButton,PersonalInfo, TimeCapsule, HeaderTag, BackGround},
  mounted() {
    let height = this.$refs.header.$el.offsetHeight;
    this.$refs["content"].style.marginTop = height + 'px';
    this.userid = router.currentRoute.value.query.id;
    let _this=this
    let result=null;
    axios.get("http://localhost:8088/getUserName",{
      params:{
        userid:_this.userid
      }
    }).then((response)=>{
      this.username = response.data
    })
    axios.get("http://localhost:8088/getMyCapsule",{
      params: {
        userid:_this.userid
      }
    }).then((response)=>{
      result = response.data;
      _this.myCapsule=result
      // for(let cap in this.myCapsule){
      //   this.allTime.push(cap.opentime)
      // }
      let capsules=[]
      let myCapsule=_this.myCapsule
      console.log(myCapsule.length)
      for(let i=0;i<myCapsule.length;i++){
        capsules.push(myCapsule[i])
        if(capsules.length===3){
          _this.dividedCapsule.push(capsules)
          capsules=[]
        }
      }
      if(capsules.length!==0) _this.dividedCapsule.push(capsules)
    }).catch((error)=>{
      console.log(error)
    });

  },
  data() {
    return {
      title: "",
      content: "",
      userid: -1,
      capsule: Capsule,
      myCapsule: [],
      dividedCapsule:[],
      openCapsule: Capsule,
      capsuleid: -1,
      opentime: Date,
      username:"",
    }
  },
  methods: {
    // dealMyDate(v){
    //   for(let cap in this.myCapsule){
    //     console.log(cap.opentime)
    //     if(cap.opentime === v){
    //       console.log(v);
    //       return true;
    //     }
    //   }
    //   return false;
    // },
    getdate() {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      return year + seperator1 + month + seperator1 + strDate;
    },
    writeBT() {
      document.querySelector(".write-capsule").classList.remove("hidden");
      document.querySelector(".show-capsule").classList.add("hidden");
    },
    openBT(id) {
      let _this=this
      let result=null;
      axios.get("http://localhost:8088/openCapsule",{
        params: {
          capsuleid:id
        }
      }).then((response)=>{
        result = response.data;
        _this.openCapsule=result
        if(result===""){
          ElMessageBox.confirm('还未到打开时间！','提示',{
            confirmButtonText: '确定', //确定按钮的文本内容
            showCancelButton: true,
            cancelButtonText:'取消',
            type: 'warning', //消息类型，用于显示图标
          }).then(() => {
          }).catch(() => {
          })
        }
        else{
          document.querySelector(".write-capsule").classList.add("hidden");
          document.querySelector(".show-capsule").classList.remove("hidden");
        }
      }).catch((error)=>{
        console.log(error)
      });
    },
    throwBT(){
      let _this=this
      let result = -1;
      axios.get("http://localhost:8088/makeCapsule",{
        params: {
          userid: _this.userid,
          title:_this.title,
          content:_this.content,
          writetime:this.getdate(),
          opentime:_this.opentime
        }
      }).then((response)=>{
        result = response.data;
        console.log(result)
        ElMessageBox.confirm('你成功埋下一个时间胶囊！','提示',{
          confirmButtonText: '确定', //确定按钮的文本内容
          showCancelButton: false, //是否可通过点击遮罩关闭
          type: 'success', //消息类型，用于显示图标
        }).then(() => {
          router.go(0)
        }).catch(() => {

        });
      }).catch((error)=>{
        console.log(error)
      });
    }
  }
}
</script>

<style scoped>
.body {
  width: 100%;
  min-height: 100vh;
}

.content {
  display: flex;
  justify-content: center;
}
.section1 {
  background-color: rgba(255,255,255,0.3);
  border-radius: 15px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  width: 25%;
  height: 800px;
  display: inline-block;
  vertical-align: top;
  margin: 5px;
}
.userCard {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20%;
}
.capsules {
  display: flex;
  align-items: center;
  justify-content: center;
}
.section2 {
  background-color: rgba(255,255,255,0.3);
  border-radius: 15px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  width: 45%;
  height: 800px;
  display: inline-block;
  vertical-align: top;
  margin: 5px;
}
.write-capsule input {
  height: 5vh;
  width: 70%;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 3vh;
  border: 0;
  outline: 0;
  margin-top: 5vh;
}
.write-capsule input::-webkit-input-placeholder {
  font-family: 'Poppins', sans-serif;
  font-size: 3vh;
}
.write-capsule textarea {
  height: 40vh;
  width: 70%;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  font-size: 1em;
  border: 0;
  outline: 0;
}
.write-capsule textarea::-webkit-input-placeholder {
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
}
input, textarea {
  font-family: 'Poppins', sans-serif;
}
input:focus, textarea:focus {
  box-shadow: 0 0 2px #63a4e0;
}
.write-capsule #throwButton {
  color: #000;
  padding: 1vh 10vh;
  margin-top: 2vh;
  border-radius: 36px;
  font: 600 2vh 'Poppins';
  letter-spacing: 1px;
  cursor: pointer;
}
.show-capsule {
  margin-top: 2vh;
  margin-bottom: 2vh;
}
.section3 {
  background-color: rgba(255,255,255,0.3);
  border-radius: 15px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  width: 25%;
  height: 800px;
  display: inline-block;
  vertical-align: top;
  margin: 5px;
}
.hidden {
  display: none;
}
.anim {
  -webkit-animation: bottom 0.8s both;
  animation: bottom 0.8s both;
}
@-webkit-keyframes bottom {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes bottom {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
#writeButton {
  border: none;
  border-radius: 30px;
  outline: none;
  color: white;
  background-color: #569bd7;
  height: 5vh;
  padding-right: 1vw;
  padding-left: 1vw;
  font-weight: 600;
  width: 10vw;
  cursor: pointer;
}
</style>