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