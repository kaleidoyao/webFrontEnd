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
  width: 45%;
  height: 10vh;
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
}
.day {
  color: white;
}
</style>