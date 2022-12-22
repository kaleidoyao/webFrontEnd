<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <menu-button></menu-button>
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
           <div class="blogTime">2022/11/21
            <button class="delete-button" v-on:click="deleteBT">Delete</button>
           </div>
           <div class="blogDetail">
             <small-blog-item></small-blog-item>
           </div>
         </div>
         <div class="blogItem" v-for="blog in blogs" :key="blog.id">
           <span class="dot"></span>
           <div class="blogTime">{{blog.date}}
             <button class="delete-button">Delete</button>
           </div>
           <div class="blogDetail">
             <small-blog-item :blog="{title:blog.title,content:blog.content,date:blog.date,authorid:blog.userid}"></small-blog-item>
           </div>
         </div>
       </div>
     </span>
   </div>
 </div>
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
            <div class="blogTime">2022/11/21
              <button class="delete-button">Delete</button>
            </div>
            <div class="blogDetail">
              <small-blog-item></small-blog-item>
            </div>
          </div>
          <div class="blogItem" v-for="blog in blogs" :key="blog.id">
            <span class="dot"></span>
            <div class="blogTime">{{blog.date}}
              <button class="delete-button">Delete</button>
            </div>
            <div class="blogDetail">
              <small-blog-item :blog="{title:blog.title,content:blog.content,date:blog.date,authorid:blog.userid}"></small-blog-item>
            </div>
          </div>
        </div>
      </span>
    </div>
  </div>
>>>>>>> 090be96c50edf9e0769a11159d92961a8b0c9f7b
</template>

<script>
import BackGround from "@/components/backGround";
import HeaderTag from "@/components/headerTag";
import router from "@/router/index";
import PersonalInfo from "@/components/personalInfo";
import GotoButton from "@/components/gotoButton";
import SmallBlogItem from "@/components/smallBlogItem";
import axios from "axios";
import MenuButton from "@/components/menuButton";
export default {
  name: "minePage",
  components: {MenuButton, SmallBlogItem, GotoButton, PersonalInfo, HeaderTag, BackGround},
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
    axios.get("http://localhost:8088/myBlog",{
      params:{
        userid:this.userid,
        n:2
      }
    }).then((response)=>{
      console.log(response.data);
      this.blogs = response.data;
    })
  },
  data(){
    return{
      userid:0,
      userName:"",
      blogs:[],
      blogid:0
    }
  },
  methods: {
    toWritePage() {
      router.push({
        name:"writeBlogPage",query:{id:this.userid}
      })
    },
    toDrifterPage() {
      router.push({
        name:"drifterPage",query:{id:this.userid}
      })
    },
    toCapsulePage() {
      router.push({
        name:"capsulePage",query:{id:this.userid}
      })
    },
    deleteBT(){
      let _this=this
      let result=null
      axios.get("http://localhost:8088/deleteBlog",{
        params:{
          blogid:_this.blogid//获取相应的id？
        }
      }).then((response)=>{
        result=response.data
        console.log(result)
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
  margin-top: 10%;
  margin-bottom: 10%;
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
  margin-top: 5vh;
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
.delete-button {
  border: 0.1rem solid #575757;
  border-radius: 10px;
  background-color: white;
  color: #575757;
}
</style>