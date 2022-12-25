<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <div class="body">
    <div class="container">
      <div class="container-box" ref="container-box">
        <div class="register-box hidden" ref="register-box">
          <h1>REGISTER</h1>
          <input type="text" placeholder="Username" @blur="inputRegisName($event)">
          <input type="password" placeholder="Your Password" v-on:input="inputRegisPass">
          <input type="password" placeholder="Verify Password" v-on:input="inputRegisVerPass">
          <button id="button" v-on:click="registerBT"><span>Register</span></button>
        </div>
        <div class="login-box" ref="login-box">
          <h1>LOGIN</h1>
          <input type="text" placeholder="Username" @blur="inputLogName($event)">
          <input type="password" placeholder="Your Password" v-on:input="inputLogPass">
          <button id="button" v-on:click="loginBT"><span>Login</span></button>
        </div>
      </div>
      <div class="under-box left">
        <h2>Welcome To</h2>
        <img src="../assets/imgs/Login_Lighthouse.svg" width="200">
        <p>已有账号</p>
        <button ref="login">Go To Login</button>
      </div>
      <div class="under-box right">
        <h2>Welcome To</h2>
        <img src="../assets/imgs/Login_Boat.gif" width="200">
        <p>暂无账号</p>
        <button ref="register">Go To Register</button>
      </div>
    </div>
    <div class="modify-wrapper">
      <div class="modify">
        <div class="modify-main">
          <h2 class="form-title">Modification</h2>
          <div class="form-holder">
            <input type="text" class="input" placeholder="Username" @blur="inputModifyName($event)" />
            <input type="email" class="input" placeholder="Your Password" v-on:input="inputModifyPass" />
            <input type="password" class="input" placeholder="Verify Password" v-on:input="inputModifyVerPass"/>
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
    inputRegisName(event){
      let _this=this;
      _this.regisName=event.target.value;
      console.log(_this.regisName)
    },
    inputRegisPass(val){
      let _this=this;
      let regisPass=_this.regisPass;
      let len=regisPass.length;
      if(val.data!=null) regisPass=regisPass+val.data;
      else regisPass=regisPass.substring(0,len-1);
      _this.regisPass=regisPass
    },
    inputRegisVerPass(val){
      let _this=this;
      let regisVerPass=_this.regisVerPass;
      let len=regisVerPass.length;
      if(val.data!=null) regisVerPass=regisVerPass+val.data;
      else regisVerPass=regisVerPass.substring(0,len-1);
      _this.regisVerPass=regisVerPass
    },
    inputLogName(event){
      let _this=this;
      _this.logName=event.target.value;
    },
    inputLogPass(val){
      let _this=this;
      let logPass=_this.logPass;
      let len=logPass.length;
      if(val.data!=null) logPass=logPass+val.data;
      else logPass=logPass.substring(0,len-1);
      _this.logPass=logPass
    },
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
            // console.log(getCurrentInstance().appContext.config.globalProperties.$usrname)
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
  },
  unmounted() {
    // this.$refs['login'].removeEventListener('click',this.displayRegister);
    // this.$refs['register'].removeEventListener('click', this.displayLogin);
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
  width: 650px;
  height: 415px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 5px #f3f1f1;
}
.container-box {
  position: absolute;
  top: -10%;
  left: 5%;
  width: 320px;
  height: 500px;
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
  height: 35px;
  border: 0;
  border-radius: 100px;
  display: inline-block;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  margin-top: 50px;
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
  right: -20px;
  transition: 0.5s;
}
.container-box button:hover span {
  padding-right: 25px;
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
  margin-bottom: 35px;
  color: #ffffff;
  letter-spacing: 5px;
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
  margin: 50px 0;
  padding: 10px 30px;
  border-radius: 36px;
  font: 600 15px 'Poppins';
  letter-spacing: 1px;
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
</style>