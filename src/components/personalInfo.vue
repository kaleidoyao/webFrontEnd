<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <div class="card">
    <div class="headerWrapper">
      <div class="header"></div>
    </div>
    <div class="body">
      <h1 class="name">testName {{username}}</h1>
      <p class="status">Happy Blogging</p>
      <div class="divider"></div>
      <div class="info">
        <div class="one">
          <span class="text">233</span><br />
          <span class="heading">Posts</span>
        </div>
        <div class="two">
          <span class="text">233</span><br />
          <span class="heading">Likes</span>
        </div>
        <div class="three">
          <span class="text">233</span><br />
          <span class="heading">Collects</span>
        </div>
      </div>
    </div>
    <div class="social">
      <button>
        <i class="fab fa-telegram telegram"></i>
      </button>
      <button>
        <i class="fab fa-twitter twitter"></i>
      </button>
      <button>
        <i class="fab fa-github github"></i>
      </button>
    </div>
    <div class="f-button">
      <button>0 Followers</button>
      <button>0 Followees</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "personalInfo",
  props: {
    username: String
  }
}
</script>

<style scoped>
.card {
  width: 20vw;
  background-color: rgba(255,255,255,0.5);
  border-radius: 15px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  text-align: center;
}
.headerWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -20%;
}
.header {
  width: 20vh;
  height: 20vh;
  border-radius: 100%;
  border: 2px solid #404040;
  background-image: url('../assets/imgs/avatar.png');
  background-size: cover;
  background-position: center;
  transition: all 0.25s;
  box-shadow: 0 10px 15px -5px #ccc;
}
.header:hover {
  width: 22vh;
  height: 22vh;
  border: 3px solid #404040;
}
.name {
  font-family: 'Poppins', sans-serif;
  font-size: 1.4em;
  color: #2b303b;
  margin-bottom: 0;
}
.status {
  font-family: 'Poppins', sans-serif;
  color: #525252;
  margin-top: 1vh;
}
.divider {
  width: 85%;
  height: 1px;
  background: #d2d2d2;
  margin: auto;
}
.info {
  position: relative;
  margin-bottom: 13vh;
}
.one, .two, .three {
  margin-top: 2vh;
  position: absolute;
}
.one {
  left: 2vw;
}
.two {
  left: 8vw;
}
.three {
  left: 14vw;
}
.info .text {
  font-weight: 700;
  font-size: 1.5em;
  color: #525252;
}
.info .heading {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 0.8em;
  color: #999;
}
.social {
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
}
.social button {
  border: none;
  outline: none;
  background-color: transparent;
  width: 7vh;
  height: 7vh;
  border-radius: 100%;
  font-size: 1.7em;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}
.social button .telegram:hover {
  color: #569bd7;
}
.social button .twitter:hover {
  color: #569bd7;
}
.social button .github:hover {
  color: #569bd7;
}
.social i {
  color: black;
}
.f-button {
  margin: auto;
  padding-top: 2vh;
  padding-bottom: 2vh;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.f-button button {
  border: none;
  border-radius: 30px;
  outline: none;
  color: white;
  background-color: #569bd7;
  height: 5vh;
  padding-right: 1vw;
  padding-left: 1vw;
  font-family: 'Poppins', sans-serif;
}
</style>