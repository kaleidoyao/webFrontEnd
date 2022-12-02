<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <link rel="stylesheet" href="https://fonts.font.im/css?family=Lobster">
  <back-ground></back-ground>
 <div class="body">
   <header-tag ref="header"></header-tag>
   <div class="content" ref="content">
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
import HeaderTag from "@/components/headerTag";
export default {
  name: "blogPage",
  components: {HeaderTag, BackGround},
  mounted() {
    let height= this.$refs.header.$el.offsetHeight;
    this.$refs["content"].style.marginTop = height + 'px';
  }
}
</script>

<style scoped>
.body {
  width: 100%;
  min-height: 100vh;
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