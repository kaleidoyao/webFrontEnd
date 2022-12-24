<template>
  <div class="div">
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
p {
  font-size: 60px;
}

.div {
  height: 6vh;
  width: 150px;
  margin: 0 auto;
  background: white;
  border-radius: 80px;
  border: 4px solid black;
}

.div div {
  width: 50%;
  height: 100%;
  border-radius: 80px;
}

.div div:hover {
  background: red;
}

.right {
  float: right;
  border-left: 2px solid #000;
  margin-right: -2px;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
.right:hover {
  background: #ffffff;
}
.left {
  float: left;
  border-right: 2px solid #000;
  margin-right: -2px;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.left:hover {
  background: #ffffff;
}

</style>