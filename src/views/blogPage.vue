<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <link rel="stylesheet" href="https://fonts.font.im/css?family=Lobster">
  <back-ground></back-ground>
 <div class="body">
   <div class="header">
     <a href="/#" class="logoLand">WasteLand</a>
     <ul>
       <li><a href="/#/blog">Blog</a></li>
       <li><a href="/#/drifter">Drifter</a></li>
       <li><a href="/#/capsule">Capsule</a></li>
       <li><a href="/#/login">LOGIN</a></li>
     </ul>
   </div>
   <div class="content">
     <span class="userContent"></span>
     <span class="blogContent">
       <div class="blogList">
         <div class="blogItem">
           <span class="dot"></span>
           <div class="blogTime">2022/11/20</div>
           <div class="blogDetail">
             <h4>标题</h4>
           </div>
         </div>
         <div class="blogItem">
           <span class="dot"></span>
           <div class="blogTime">2022/11/21</div>
           <div class="blogDetail"></div>
         </div>
       </div>
     </span>
   </div>
 </div>
</template>

<script>
import BackGround from "@/components/backGround";
export default {
  name: "blogPage",
  components: {BackGround}
}
</script>

<style scoped>
.body {
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  position: fixed;
  top: 0;
  margin: 0;
  padding: 0;
}

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
  margin-left: 50%;
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

.content {
  display: flex;
  justify-content: center;
}
.userContent {
  background-color: rgba(255,255,255,0.3);
  border-radius: 15px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  width: 25%;
  height: 500px;
  display: inline-block;
  vertical-align: top;
  margin: 5px;
}
.blogContent {
  background-color: rgba(255,255,255,0.3);
  border-radius: 15px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  width: 70%;
  height: 500px;
  display: inline-block;
  vertical-align: top;
  margin: 5px;
}
.blogList {
  width: 90%;
  margin-left: auto;
  border-left: 3px solid black;
}
.blogItem {
  margin-top: 10px;
  position: relative;
}
.blogTime {
  font: 600 15px 'Poppins';
  margin-left: 20px;
  margin-bottom: 5px;
}
.dot {
  width: 10px;
  height: 10px;
  background-color: white;
  display: block;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  left: -8px;
  top: 50%;
}
.blogDetail {
  background-color: rgba(255,255,255,0.7);
  border-radius: 15px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  height: 100px;
  width: 75%;
  margin-left: 10%;
}
.blogDetail h4 {
  margin-top: 5px;
  margin-left: 10px;
}
</style>