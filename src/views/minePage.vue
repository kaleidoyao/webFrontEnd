<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <link rel="stylesheet" href="https://fonts.font.im/css?family=Lobster">
  <back-ground></back-ground>
 <div class="body">
   <header-tag ref="header" :usrid=userid></header-tag>
   <div class="content" ref="content">
     <span class="userContent">
       <div class="userCard">
         <personal-info :username="userName"></personal-info>
       </div>
       <div class="gotoButton">
         <div ref="toWrite"><goto-button msg="write blogs"></goto-button></div>
         <div ref="toDrifter"><goto-button msg="drifter bottle" ref="toDrifter"></goto-button></div>
         <div ref="toCapsule"><goto-button msg="time capsule"></goto-button></div>
       </div>
     </span>
     <span class="blogContent">
       <div class="blogList">
         <div class="blogItem">
           <span class="dot"></span>
           <div class="blogTime">2022/11/20
             <button>Delete</button>
           </div>
           <div class="blogDetail">
             <small-blog-item></small-blog-item>
           </div>
         </div>
         <div class="blogItem">
           <span class="dot"></span>
           <div class="blogTime">2022/11/21</div>
           <div class="blogDetail">
             <small-blog-item></small-blog-item>
           </div>
         </div>
         <div class="blogItem">
           <span class="dot"></span>
           <div class="blogTime">2022/11/22</div>
           <div class="blogDetail">
             <small-blog-item></small-blog-item>
           </div>
         </div>
       </div>
     </span>
   </div>
 </div>
</template>

<script>
import BackGround from "@/components/backGround";
import HeaderTag from "@/components/headerTag";
import router from "@/router/index";
import PersonalInfo from "@/components/personalInfo";
import GotoButton from "@/components/gotoButton";
import SmallBlogItem from "@/components/smallBlogItem";
import axios from "axios";
export default {
  name: "minePage",
  components: {SmallBlogItem, GotoButton, PersonalInfo, HeaderTag, BackGround},
  mounted() {
    this.$refs.toWrite.addEventListener('click',this.toWritePage);
    this.$refs.toDrifter.addEventListener('click',this.toDrifterPage);
    this.$refs.toCapsule.addEventListener('click',this.toCapsulePage);
    let height= this.$refs.header.$el.offsetHeight;
    this.$refs["content"].style.marginTop = height + 'px';
    this.userid = router.currentRoute.value.query.id;
    console.log(this.userid);
    axios.get("http://localhost:8088/getUserName",{
      params:{
        userid:this.userid
      }
    }).then((response)=>{
      console.log(response.data);
      this.userName = response.data;
      console.log(this.userName);
    })
  },
  data(){
    return{
      userid:0,
      userName:""
    }
  },
  methods:{
    toWritePage(){
      router.push({
        name:"writeBlogPage",query:{id:this.userid}
      })
    },
    toDrifterPage(){
      router.push({
        name:"drifterPage",query:{id:this.userid}
      })
    },
    toCapsulePage(){
      router.push({
        name:"capsulePage",query:{id:this.userid}
      })
    }
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
  min-height: 85vh;
  vertical-align: top;
  margin: 5px;
}
.userCard {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20%;
}
.gotoButton {
  margin-top: 20%;
}
.blogContent {
  background-color: rgba(255,255,255,0.3);
  border-radius: 15px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  width: 70%;
  min-height: 85vh;
  display: inline-block;
  vertical-align: top;
  margin: 5px;
}
.blogList {
  width: 90%;
  margin-left: auto;
  margin-bottom: 10px;
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
.blogTime button {
  margin-left: 75%;
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
</style>