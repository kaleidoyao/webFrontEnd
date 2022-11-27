<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <link rel="stylesheet" href="https://fonts.font.im/css?family=Lobster">
 <div class="background">
   <div class="header">
     <text class="logoLand">WasteLand</text>
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
export default {
  name: "blogPage"
}
</script>

<style scoped>
.background {
  background-image: url("../assets/imgs/Blog_Background.jpg");
  width: 100%;
  height: 100%;
  background-size: cover;
  position: fixed;
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
  border-radius: 20px;
}
.header ul li a:hover,
.header ul li a.active {
  background: #036881;
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