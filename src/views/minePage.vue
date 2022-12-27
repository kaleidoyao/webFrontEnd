<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <menu-button :usrid=userid></menu-button>
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
          <div ref="show"><goto-button msg="modify info"></goto-button></div>
        </div>
      </span>
      <div class="modify-wrapper anim">
        <div class="modify">
          <div class="modify-main">
            <h2 class="form-title">Modification</h2>
            <div class="form-holder">
              <input v-model="modifyName" type="text" class="input" placeholder="Username"/>
              <input v-model="modifyPass" type="password" class="input" placeholder="Your Password"/>
              <input v-model="modifyVerPass" type="password" class="input" placeholder="Verify Password"/>
            </div>
            <button class="submit-btn" v-on:click="submitBT">submit</button>
          </div>
          <div class="exit">
            <div class="center">
              <img src="../assets/icons/exit.png" alt="" style="width: 4vh; cursor: pointer;" @click="exit">
            </div>
          </div>
        </div>
      </div>
      <span class="blogContent">
        <div class="blogList">
          <div class="blogItem" v-for="blog in blogs" :key="blog.id">
            <span class="dot"></span>
            <div class="blogTime">{{blog.date}}
              <button class="delete-button" @click="deleteBT(blog.blogid)">Delete</button>
            </div>
            <div class="blogDetail">
              <small-blog-item :blog="{title:blog.title,content:blog.content,date:blog.date,authorid:blog.userid,blogid:blog.blogid}" :userid="userid"></small-blog-item>
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
import MenuButton from "@/components/menuButton";
import {ElMessageBox} from "element-plus";
export default {
  name: "minePage",
  // eslint-disable-next-line vue/no-unused-components
  components: {MenuButton, SmallBlogItem, GotoButton, PersonalInfo, HeaderTag, BackGround},
  data(){
    return{
      userid:-1,
      userName:"",
      blogs:[],
      modifyName:"",
      modifyPass:"",
      modifyVerPass:"",
      inputValue:""
    }
  },
  mounted() {
    this.$refs.toWrite.addEventListener('click',this.toWritePage);
    this.$refs.toDrifter.addEventListener('click',this.toDrifterPage);
    this.$refs.toCapsule.addEventListener('click',this.toCapsulePage);
    this.$refs.show.addEventListener('click',this.show);
    let height= this.$refs.header.$el.offsetHeight;
    this.$refs["content"].style.marginTop = height + 'px';
    this.userid = router.currentRoute.value.query.id;
    console.log(this.userid);
    if(typeof this.userid == "undefined"){
      ElMessageBox.confirm('请先登录后再查看个人页面！','提示',{
        confirmButtonText: '确定', //确定按钮的文本内容
        showCancelButton: false, //是否可通过点击遮罩关闭
        type: 'warning', //消息类型，用于显示图标
      }).then(() => {
        router.push({
          name:"loginPage"
        })
      }).catch(() => {

      });
    }else{
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
          n:10
        }
      }).then((response)=>{
        console.log(response.data);
        this.blogs = response.data;
      })
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
    deleteBT(bid){
      let result=null
      ElMessageBox.confirm('确定要删除这条博客吗？','提示',{
        confirmButtonText: '确定', //确定按钮的文本内容
        showCancelButton: true,
        cancelButtonText:'取消',
        type: 'warning', //消息类型，用于显示图标
      }).then(() => {
        axios.get("http://localhost:8088/deleteBlog",{
          params:{
            blogid:bid
          }
        }).then((response)=>{
          result=response.data
          console.log(result)
        })
        router.go(0)
      }).catch(() => {

      });
    },
    exit() {
      document.querySelector(".modify-wrapper").style.display = "none";
    },
    show() {
      document.querySelector(".modify-wrapper").style.display = "flex";
    },
    submitBT(){
      let _this=this
      let result = true;
      if(_this.modifyName===""){
        ElMessageBox.confirm('用户名不可为空！','提示',{
          confirmButtonText: '确定', //确定按钮的文本内容
          showCancelButton: false, //是否可通过点击遮罩关闭
          type: 'warning', //消息类型，用于显示图标
        })
      }
      else if(_this.modifyPass===""){
        ElMessageBox.confirm('密码不可为空！','提示',{
          confirmButtonText: '确定', //确定按钮的文本内容
          showCancelButton: false, //是否可通过点击遮罩关闭
          type: 'warning', //消息类型，用于显示图标
        })
      }
      else if(_this.modifyPass !== _this.modifyVerPass){
        ElMessageBox.confirm('两次输入密码不同，请重新输入！','提示',{
          confirmButtonText: '确定', //确定按钮的文本内容
          showCancelButton: false, //是否可通过点击遮罩关闭
          type: 'warning', //消息类型，用于显示图标
        }).then(() => {

        }).catch(() => {

        });
      }else{
        axios.get("http://localhost:8088/changeInfo",{
          params: {
            userid:_this.userid,
            name: _this.modifyName,
            passwd: _this.modifyPass,
          }
        }).then((response)=>{
          result = response.data;
          console.log(result)
          if(result){
            ElMessageBox.confirm('修改成功','提示',{
              confirmButtonText: '确定', //确定按钮的文本内容
              showCancelButton: false, //是否可通过点击遮罩关闭
              type: 'success', //消息类型，用于显示图标
            }).then(() => {
              _this.modifyName=""
              _this.modifyPass=""
              _this.modifyVerPass=""
              document.querySelector(".modify-wrapper").style.display = "none";
            }).catch(() => {

            });
          }else{
            console.log("user name already exists")
            ElMessageBox.confirm('用户名已存在，请更改用户名','提示',{
              confirmButtonText: '确定', //确定按钮的文本内容
              showCancelButton: false, //是否可通过点击遮罩关闭
              type: 'warning', //消息类型，用于显示图标
            }).then(() => {

            }).catch(() => {

            });
          }
        }).catch((error)=>{
          console.log(error)
        });
      }
    },
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
input {
  width: 65%;
  line-height: 35px;
  border-radius: 15px;
  background-color: rgba(240, 248, 255, 0.9);
  padding: 0 20px;
  margin-bottom: 10px;
  font-size: 14px;
  border: 0;
  outline: 0;
}
input::placeholder {
  font: 300 14px 'Poppins';
}
.modify-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.modify {
  background-color: white;
  border-radius: 15px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  height: 70vh;
  width: 45vw;
  position: relative;
  overflow: hidden;
}
.modify .modify-main {
  position: absolute;
  top: 45%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  width: 65%;
  z-index: 5;
  -webkit-transition: all 0.3s ease;
}
.modify .modify-main .form-title {
  color: black;
  font-family: 'Poppins', sans-serif;
  font-size: 1.7em;
  text-align: center;
  margin-top: 1vh;
}
.modify .modify-main .form-holder .input {
  display: block;
  height: 30px;
  line-height: 30px;
  padding: 8px 15px;
  border-bottom: 1px solid #eee;
  width: 100%;
}
.modify .modify-main .submit-btn {
  width: 70%;
  cursor: pointer;
  position: relative;
  display: block;
  overflow: hidden;
  color: #000;
  margin: 3vh auto;
  padding: 10px 30px;
  border-radius: 36px;
  font: 600 15px 'Poppins';
  letter-spacing: 1px;
}
.modify .exit {
  position: absolute;
  top: 90%;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
}
.modify .exit::before {
  content: "";
  position: absolute;
  left: 50%;
  top: -20px;
  -webkit-transform: translate(-50%, 0);
  background-color: #F4F4F4;
  width: 200%;
  height: 250px;
  border-radius: 50%;
  z-index: 4;
  -webkit-transition: all 0.3s ease;
}
.modify .exit .center {
  position: absolute;
  left: 50%;
  top: 10%;
  -webkit-transform: translate(-50%, 0%);
  z-index: 5;
}
.anim {
  -webkit-animation: bottom 0.8s both;
  animation: bottom 0.8s both;
}
@-webkit-keyframes bottom {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes bottom {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
</style>