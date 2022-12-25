<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <div class="wrapper">
    <span class="circle" @click.stop="handleClick" :class="isUp?'check':''">
      <div class="box" :class="isUp?'box-check':''">
        <img v-if="isUp" src="../assets/icons/collect1.svg"  alt=""/>
        <img v-else src="../assets/icons/collect2.svg"  alt=""/>
      </div>
    </span>
    <span class="number">Collect</span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "collectButton",
  props:{
    userid:Number,
    blogid:Number
  },
  data() {
    return {
      isUp: false,
      like: 0,
      borderColor: '#000000',
    }
  },
  mounted() {
    axios.get("http://localhost:8088/isCollected",{
      params:{
        blogid:this.blogid,
        userid:this.userid
      }
    }).then((response)=>{
      let result = response.data
      if(result === true){
        this.isUp = true;
      }
    })
  },
  methods: {
    handleClick() {
      if(this.isUp === false) {
        this.like = this.like+1;
        this.borderColor = '#efb336';
        axios.get("http://localhost:8088/collect",{
          params:{
            userid:this.userid,
            blogid:this.blogid
          }
        }).then((response)=>{
          console.log(response.data)
        })
      }
      else {
        this.like = this.like-1;
        this.borderColor = '#000000';
        axios.get("http://localhost:8088/cancelCollect",{
          params:{
            userid:this.userid,
            blogid:this.blogid
          }
        }).then((response)=>{
          console.log(response.data)
        })
      }
      this.isUp = !this.isUp;
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 9vw;
  border: 1px solid v-bind(borderColor);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.circle {
  display: inline-block;
  width: 2vw;
  height: 2vw;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0px 0px 0px 0px rgba(239, 179, 54, 0.5)
}
.check {
  -webkit-transition: box-shadow 0.5s;
  -moz-transition: box-shadow 0.5s;
  -o-transition: box-shadow 0.5s;
  transition: box-shadow 0.5s;
  box-shadow: 0px 0px 0px 1em rgba(226, 32, 44, 0);
}
.box {
  display: inline-block;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none; /* 防止快速点击图片被选中 */
}
.box-check {
  animation: anm 0.5s;
  -moz-animation: anm 0.5s;
  -webkit-animation: anm 0.5s;
  -o-animation: anm 0.5s;
}
.circle img {
  width: 2vw;
}
.number {
  font-family: 'Poppins', sans-serif;
  color: v-bind(borderColor);
  vertical-align: middle;
  margin-left: 1vh;
}
@keyframes anm {
  0% {
    transform: scale(0);
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
  }
  50% {
    transform: scale(1.3);
    -webkit-transform: scale(1.3);
    -moz-transform: scale(1.3);
  }
  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
  }
}
</style>