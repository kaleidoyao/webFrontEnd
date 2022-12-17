<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
  <div class="card">
    <div class="headerWrapper">
      <div class="header"></div>
    </div>
    <div class="body">
      <p class="name">Welcome: {{username}}</p>
      <p class="status">Happy Blogging</p>
      <div class="posts-info">
        <p><span>1024</span>Posts</p>
        <p><span>1024</span>Likes</p>
        <p><span>1024</span>Collects</p>
      </div>
    </div>
    <div class="social">
      <i class="fab fa-telegram"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-github"></i>
    </div>
    <div>
      <button>Follows</button>
      <button>Fans</button>
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
}
.header:hover {
  width: 22vh;
  height: 22vh;
  border: 3px solid #404040;
}
.name, .status {
  font-family: 'Poppins', sans-serif;
}
</style>