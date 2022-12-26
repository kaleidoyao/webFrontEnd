<template>
  <div class="card transform" :class="isExpand" @click="expandCard">
    <div class="bottle"></div>
    <div class="title">
      <h2>the title</h2>
    </div>
    <div class="card-content">
      <p>hahahahaha</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardItem",
  data() {
    return {
      isExpand: '',
    }
  },
  methods: {
    expandCard() {
      if(this.isExpand === '') this.isExpand = 'transform-active';
      else this.isExpand = '';
    }
  }
}
</script>

<style scoped>
.card {
  height: 12vh;
  width: 100%;
  margin-bottom: 1.5vh;
  cursor: pointer;
  overflow-y: hidden;
  background-color: rgba(255,255,255,0.6);
  border-radius: 10px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
}
.bottle {
  display: inline-block;
  vertical-align: top;
  margin-top: 0.5vh;
  width: 10vh;
  height: 10vh;
  background: url("../assets/imgs/bottle.png") no-repeat center;
  background-size: 250%;
}
.title {
  display: inline-block;
  width: 30vh;
  height: 10vh;
  margin-top: 0.5vh;
  margin-left: 1vw;
  font-family: 'Poppins', sans-serif;
  color: #404040;
}
.card p {
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  font-family: 'Poppins', sans-serif;
  word-wrap: break-word;
  word-break: break-all;
}
.transform-active {
  background-color: rgba(255,255,255,0.9);
  height: 200px;
  width: 100%;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.2);
}
.transform {
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
</style>