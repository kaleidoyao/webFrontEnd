<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <div class="body">
    <div class="container">
      <div class="container-box" ref="container-box">
        <div class="register-box hidden" ref="register-box">
          <h1>REGISTER</h1>
          <input v-model="regisName" type="text" placeholder="Username">
          <input v-model="regisPass" type="password" placeholder="Your Password">
          <input v-model="regisVerPass" type="password" placeholder="Verify Password">
          <button id="button" v-on:click="registerBT"><span>Register</span></button>
        </div>
        <div class="login-box" ref="login-box">
          <h1>LOGIN</h1>
          <input v-model="logName" type="text" placeholder="Username">
          <input v-model="logPass" type="password" placeholder="Your Password">
          <button id="button" v-on:click="loginBT"><span>Login</span></button>
        </div>
      </div>
      <div class="under-box left">
        <h3 class="title">Welcome To Wasteland</h3>
        <img src="../assets/imgs/Login_Lighthouse.svg" width="200">
        <p style="color: #808080; font-size: 0.9rem;">已有账号</p>
        <button ref="login">Go To Login</button>
      </div>
      <div class="under-box right">
        <h3 class="title">Welcome To Wasteland</h3>
        <img src="../assets/imgs/Login_Boat.gif" width="200">
        <p style="color: #808080; font-size: 0.9rem;">暂无账号</p>
        <button ref="register">Go To Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router/index";
import {ElMessageBox} from 'element-plus';
export default {
  data(){
    return{
      regisName:"",
      regisPass:"",
      regisVerPass:"",
      logName:"",
      logPass:"",
      userid:-1,
    }
  },
  mounted() {
    this.$refs.login.addEventListener('click', this.displayRegister);
    this.$refs.register.addEventListener('click', this.displayLogin);
  },
  methods: {
    registerBT(){
      let _this=this
      let result = true;
      if(_this.regisPass !== _this.regisVerPass){
        ElMessageBox.confirm('两次输入密码不同，请重新输入！','提示',{
          confirmButtonText: '确定', //确定按钮的文本内容
          showCancelButton: false, //是否可通过点击遮罩关闭
          type: 'warning', //消息类型，用于显示图标
        }).then(() => {

        }).catch(() => {

        });
      }else{
        axios.get("http://localhost:8088/register",{
          params: {
            name: _this.regisName,
            password: _this.regisPass,
          }
        }).then((response)=>{
          result = response.data;
          console.log(result)
          if(result >= 0){
            ElMessageBox.confirm('注册成功','提示',{
              confirmButtonText: '确定', //确定按钮的文本内容
              showCancelButton: false, //是否可通过点击遮罩关闭
              type: 'success', //消息类型，用于显示图标
            }).then(() => {
              _this.userid = result
              console.log(_this.userid)
              // console.log(getCurrentInstance().appContext.config.globalProperties.$usrname)
              router.push({
                name:"blogPage",query:{id:_this.userid}
              })
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
    loginBT(){
      let _this=this
      let result = -1
      axios.get("http://localhost:8088/login",{
        params: {
          logName:_this.logName,
          logPass:_this.logPass,
        }
      }).then((response)=>{
        result = response.data
        console.log(result)
        if(result >= 0){
          ElMessageBox.confirm('登录成功','提示',{
            confirmButtonText: '确定', //确定按钮的文本内容
            showCancelButton: false, //是否可通过点击遮罩关闭
            type: 'success', //消息类型，用于显示图标
          }).then(() => {
            _this.userid = result
            console.log(_this.userid)
            router.push({
              name:"blogPage",query:{id:_this.userid}
            })
          }).catch(() => {

          });
        }else if(result === -1){
          console.log("user doesn't exist")
          ElMessageBox.confirm('用户不存在，请先注册','提示',{
            confirmButtonText: '确定', //确定按钮的文本内容
            showCancelButton: false, //是否可通过点击遮罩关闭
            type: 'warning', //消息类型，用于显示图标
          }).then(() => {

          }).catch(() => {

          });
        }else if(result === -2){
          console.log("wrong password")
          ElMessageBox.confirm('密码错误，请重新输入','提示',{
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
    },
    displayRegister(){
      this.$refs["container-box"].style.transform = 'translateX(0%)';
      this.$refs["register-box"].classList.add('hidden');
      this.$refs["login-box"].classList.remove('hidden');
    },
    displayLogin(){
      this.$refs["container-box"].style.transform = 'translateX(80%)';
      this.$refs["login-box"].classList.add('hidden');
      this.$refs["register-box"].classList.remove('hidden');
    }
  }
}
</script>


<style scoped>
.body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  position: relative;
  width: 50vw;
  height: 70vh;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 5px 5px #f3f1f1;
}
.container-box {
  position: absolute;
  top: -7%;
  left: 5%;
  width: 25vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7CB9E8;
  border-radius: 5px;
  z-index: 2;
  transition: 0.5s ease-in-out;
}
.container-box p {
  font-family: 'Poppins', sans-serif;
  font-size: 0.6em;
  color: black;
  text-decoration: underline;
  padding-top: 2vh;
  cursor: pointer;
}
.register-box, .login-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.container-box button {
  width: 50%;
  height: 6vh;
  border: 0;
  border-radius: 100px;
  display: inline-block;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  margin-top: 10vh;
  font: 600 14px 'Poppins';
  text-align: center;
  transition: all 0.5s;
  cursor: pointer;
}
.container-box button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.container-box button span:after {
  content: '»';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -3vh;
  transition: 0.5s;
}
.container-box button:hover span {
  padding-right: 4vh;
}
.container-box button:hover span:after {
  opacity: 1;
  right: 0;
}
.hidden {
  display: none;
}
h1 {
  text-align: center;
  margin-bottom: 6vh;
  color: #ffffff;
  letter-spacing: 5px;
}
input {
  width: 65%;
  line-height: 6vh;
  border-radius: 15px;
  background-color: rgba(240, 248, 255, 0.9);
  padding: 0 20px;
  margin-bottom: 2vh;
  font-size: 14px;
  border: 0;
  outline: 0;
}
input::placeholder {
  font: 300 14px 'Poppins';
}
.under-box {
  position: absolute;
  top: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
}
.under-box.left {
  left: -2%;
}
.under-box.right {
  right: -2%;
}
.under-box button {
  position: relative;
  display: inline-block;
  overflow: hidden;
  color: #000;
  margin: 3vh 0;
  padding: 1vh 3vh;
  border-radius: 36px;
  font: 600 15px 'Poppins';
  letter-spacing: 1px;
}
.title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.2em;
  margin-bottom: 6vh;
}
</style>