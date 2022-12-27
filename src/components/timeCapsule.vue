<template>
  <span class="capsule">
    <span class="year">2022/</span>
    <span class="day">12/13</span>
  </span>
</template>

<script>
export default {
  name: "timeCapsule"
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