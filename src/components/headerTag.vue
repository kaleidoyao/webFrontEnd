<template>
  <div class="header">
    <a href="/#" class="logoLand">WasteLand</a>
    <ul>
      <li><a href="/#/blog">Blog</a></li>
      <li><a href="/#/drifter">Drifter</a></li>
      <li><a href="/#/capsule">Capsule</a></li>
      <li><a href="/#/login">LOGIN</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "headerTag"
}
</script>

<style scoped>
.header {
  height: 10vh;
  align-items: center;
  display: flex;
  background-color: rgba(255,255,255,0.7);
  padding: 10px 100px;
}
.header .logoLand {
  color: black;
  font: 1000 30px 'Poppins';
  font-size: 2em;
  text-decoration: none;
}
.header ul {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40%;
}
.header ul li {
  list-style: none;
  margin-left: 20px;
}
.header ul li a {
  text-decoration: none;
  padding: 6px 15px;
  color: black;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  border-radius: 20px;
}
.header ul li a:hover,
.header ul li a.active {
  background: #63a4e0;
  color: white;
}
</style>