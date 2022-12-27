<template>
  <span class="capsule">
    <span class="year">{{year}}</span>
    <span class="day">{{day}}</span>
  </span>
</template>

<script>
export default {
  name: "timeCapsule",
  props:{
    capsule: {
      title: String,
      content: String,
      writetime:String,
      opentime: String,
      capsuleid:String,
    },
    userid:Number
  },
  data(){
    return {
      year: "",
      day: ""
    }
  },
  mounted() {
    this.year=this.capsule.opentime.substring(0,5)
    this.day=this.capsule.opentime.substring(5)
  }
}
</script>

<style scoped>
.capsule {
  width: 30%;
  height: 6vh;
  background-image: url("../assets/imgs/timeCapsule.svg");
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.year {
  color: #3970C0;
  font-size: 2.3vh;
}
.day {
  color: white;
  font-size: 2.3vh;
}
</style>