<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <menu-button></menu-button>
  <back-ground></back-ground>
  <div class="body">
    <header-tag ref="header"></header-tag>
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
      <span class="section2"></span>
      <span class="section3">
        <calendar-item></calendar-item>
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
import CalendarItem from "@/components/calendarItem";
import MenuButton from "@/components/menuButton";
export default {
  name: "capsulePage",
  components: {MenuButton, CalendarItem, PersonalInfo, TimeCapsule, HeaderTag, BackGround},
  mounted() {
    let height = this.$refs.header.$el.offsetHeight;
    this.$refs["content"].style.marginTop = height + 'px';
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
    writeBT(){
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
    openBT(){
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
  height: 500px;
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
.section3 {
  background-color: rgba(255,255,255,0.3);
  border-radius: 15px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  width: 25%;
  height: 500px;
  display: inline-block;
  vertical-align: top;
  margin: 5px;
}
</style>