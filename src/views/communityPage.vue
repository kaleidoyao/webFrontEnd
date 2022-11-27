<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <link rel="stylesheet" href="https://fonts.font.im/css?family=Lobster">
  <div class="body">
    <div id="header">
      <a href="/#" class="logoLand">WasteLand</a>
      <ul>
        <li><a href="/#/blog">Blog</a></li>
        <li><a href="/#/drifter">Drifter</a></li>
        <li><a href="/#/capsule">Capsule</a></li>
        <li><a href="/#/login">LOGIN</a></li>
      </ul>
    </div>
    <div class="section">
      <h2 id="text"><span>It's time for</span><br>Blogging</h2>
      <img src="../assets/imgs/bird.png" id="bird">
      <img src="../assets/imgs/mountain.png" id="mountain">
      <img src="../assets/imgs/river.png" id="river">
      <img src="../assets/imgs/tree.png" id="tree">
      <a href="/#/login" id="button">Explore</a>
    </div>
    <div class="community">
      <h2>WasteLand Intro</h2>
      <p>
        Welcome to WasteLand!<br>
        在这里分享你的奇思妙想！分享知识、经验，分享情感、人生体验，开垦这片无人荒原！<br>
        在漂流瓶里埋下心事，随波逐流，流向远方……<br>
        在时间胶囊里写下对未来自己的祝福，进行一场穿越时空的对话…… <br>
        <br>
        点击LOGIN，开启你的开荒之旅吧！
      </p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.move);
  },
  methods:{
    move() {
      let text = document.getElementById('text');
      let button = document.getElementById('button');
      let bird = document.getElementById('bird');
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      text.style.top = 20+top*0.1 + '%';
      button.style.top = 50+top*0.1 + '%';
      bird.style.right = top + 'px';
    }
  },
  unmounted() {
    window.removeEventListener('scroll', this.move);
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.body {
  overflow-x: hidden;
  background: white;
}
#header {
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 100px;
  display: flex;
  align-items: center;
  z-index: 2;
}
#header .logoLand {
  color: black;
  font: 1000 30px 'Poppins';
  font-size: 2em;
  text-decoration: none;
}
#header ul {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 100%;
}
#header ul li {
  list-style: none;
  margin-left: 20px;
}
#header ul li a {
  text-decoration: none;
  padding: 6px 15px;
  color: black;
  border-radius: 20px;
}
#header ul li a:hover,
#header ul li a.active {
  background: #036881;
  color: white;
}
.section {
  position: relative;
  display: flex;
  margin-top: 90px;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}
.section img {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.section #text {
  position: absolute;
  top: 20%;
  color: #094b65;
  font-size: 4vw;
  text-align: center;
  font-family: 'Lobster', cursive;
}
.section #text span {
  font-size: 0.5em;
  letter-spacing: 2px;
  font-weight: 800;
}
.section #button {
  position: absolute;
  top: 50%;
  text-decoration: none;
  display: inline-block;
  padding: 8px 30px;
  background: white;
  color: #094b65;
  border-radius: 40px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
}
.community {
  position: relative;
  padding: 100px;
  background: #036881;
}
</style>