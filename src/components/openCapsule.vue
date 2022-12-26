<template>
  <div class="capsule-wrapper">
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "openCapsule"
}
</script>

<style scoped>
.capsule-wrapper {
  height: 6vh;
  width: 10vw;
  margin: 0 auto;
  border-radius: 80px;
}
.capsule-wrapper div {
  width: 48%;
  height: 100%;
  border-radius: 80px;
}
.right {
  background-color: #3970C0;
  float: right;
  margin-right: -2px;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  border: 2px solid black;
  animation: moveRight 1s ease-in-out 1s forwards;
}
@keyframes moveRight {
  to {
    transform: translateX(2vh) rotate(-20deg);
  }
}
.left {
  background-color: white;
  float: left;
  margin-right: -2px;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  border: 2px solid black;
  animation: moveLeft 1s ease-in-out 1s forwards;
}
@keyframes moveLeft {
  to {
    transform: translateX(-2vh) rotate(20deg);;
  }
}
</style>