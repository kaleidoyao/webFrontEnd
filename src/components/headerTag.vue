<template>
  <div class="header">
    <a href="/#" class="logoLand">WasteLand</a>
    <ul>
      <li><a @click="toHome">Home</a></li>
      <li><a @click="toBlog">Blog</a></li>
      <li><a @click="toMine">Mine</a></li>
      <li><a @click="toAbout">About</a></li>
    </ul>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "headerTag",
  props:{
    usrid: Number
  },
  methods:{
    toHome(){
      router.push({
        name:"homePage",query:{id:this.usrid}
      })
    },
    toBlog(){
      router.push({
        name:"blogPage",query:{id:this.usrid}
      })
    },
    toMine(){
      router.push({
        name:"minePage",query:{id:this.usrid}
      })
    },
    toAbout(){
      router.push({
        name:"aboutPage",query:{id:this.usrid}
      })
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 100px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 2;
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
  margin-left: 45%;
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