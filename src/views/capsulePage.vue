<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <menu-button></menu-button>
  <back-ground></back-ground>
  <div class="body">
    <header-tag ref="header" :usrid=userid></header-tag>
    <div class="content" ref="content">
      <span class="section1">
        <button id="writeButton" v-on:click="writeBT"><span>写一个</span></button>
        <button id="myCapsuleButton" v-on:click="myCapsuleBT"><span>我的胶囊</span></button>
        <button id="openButton" v-on:click="openBT"><span>打开</span></button>
        <div class="userCard">
          <personal-info></personal-info>
        </div>
        <div class="capsules">
          <time-capsule></time-capsule>
          <time-capsule></time-capsule>
        </div>
      </span>
      <span class="section2">
        <div class="write-capsule anim hidden">
          <div class="title" style="text-align: center;">
            <input type="text" placeholder="在此输入标题..." class="input1" @blur="inputTitle($event)">
          </div>
          <div class="mainText" style="text-align: center;">
            <textarea class="input2" placeholder="在此输入正文..." @blur="inputContent($event)"></textarea>
          </div>
          <div style="text-align: center;">
            <button id="throwButton" v-on:click="throwBT"><span>throw</span></button>
          </div>
        </div>
        <div class="show-capsule anim">
          <open-capsule></open-capsule>
          <capsule-card></capsule-card>
        </div>
      </span>
      <span class="section3">
        <el-calendar  />
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

class Capsule{
  capsuleid;
  userid;
  title;
  content;
  writetime;
  opentime;
  isopened;
}
import BackGround from "@/components/backGround";
import HeaderTag from "@/components/headerTag";
import TimeCapsule from "@/components/timeCapsule";
import PersonalInfo from "@/components/personalInfo";
import MenuButton from "@/components/menuButton";
import router from "@/router";
import OpenCapsule from "@/components/openCapsule";
import CapsuleCard from "@/components/capsuleCard";
export default {
  name: "capsulePage",
  components: {CapsuleCard, OpenCapsule, MenuButton,PersonalInfo, TimeCapsule, HeaderTag, BackGround},
  mounted() {
    let height = this.$refs.header.$el.offsetHeight;
    this.$refs["content"].style.marginTop = height + 'px';
    this.userid = router.currentRoute.value.query.id;
    console.log(this.userid);
  },

  data(){
    return{
      title:"",
      content:"",
      userid:-1,
      capsule:Capsule,
      myCapsule:null,
      openCapsule:null,
      capsuleid:-1,
      opentime:null,
    }
  },

  methods:{
    writeBT() {
      document.querySelector(".write-capsule").classList.remove("hidden");
      document.querySelector(".show-capsule").classList.add("hidden");
      let _this=this
      let result = -1;
      axios.get("http://localhost:8088/makeCapsule",{
        params: {
          userid: _this.userid,
          title:_this.title,
          content:_this.content,
          opentime:_this.opentime
        }
      }).then((response)=>{
        result = response.data;
        console.log(result)
      }).catch((error)=>{
        console.log(error)
      });
    },
    myCapsuleBT(){
      let _this=this
      let result=null;
      axios.get("http://localhost:8088/getMyCapsule",{
        params: {
          userid:_this.userid
        }
      }).then((response)=>{
        result = response.data;
        _this.myCapsule=result
        console.log(_this.myCapsule)
      }).catch((error)=>{
        console.log(error)
      });
    },
    openBT() {
      document.querySelector(".write-capsule").classList.add("hidden");
      document.querySelector(".show-capsule").classList.remove("hidden");
      let _this=this
      let result=null;
      axios.get("http://localhost:8088/openCapsule",{
        params: {
          capsuleid:_this.capsuleid
        }
      }).then((response)=>{
        result = response.data;
        _this.openCapsule=result
        if(result===""){
          console.log("还未到开启时间")
        }
        else console.log(_this.openCapsule)
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
  height: 700px;
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
  height: 550px;
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
  height: 600px;
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
</style>