<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <div class="body">
  <div class="container">
    <div class="container-box" ref="container-box">
      <div class="register-box hidden" ref="register-box">
        <h1>REGISTER</h1>
        <input type="text" placeholder="Username">
        <input type="password" placeholder="Your Password">
        <input type="password" placeholder="Verify Password">
        <button id="button"><span>Register</span></button>
      </div>
      <div class="login-box" ref="login-box">
        <h1>LOGIN</h1>
        <input type="text" placeholder="Username">
        <input type="password" placeholder="Your Password">
        <button id="button"><span>Login</span></button>
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
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.login.addEventListener('click', this.displayRegister);
    this.$refs.register.addEventListener('click', this.displayLogin);
  },
  methods:{
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
    this.$refs.login.removeEventListener('click',this.displayRegister);
    this.$refs.register.removeEventListener('click', this.displayLogin);
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
  padding: 0px 20px;
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
</style>