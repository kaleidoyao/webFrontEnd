<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
  <div class="body">
  <div class="list-container">
    <button class="more-button" aria-label="Menu Button">
      <div class="menu-icon-wrapper">
        <div class="menu-icon-line half first"></div>
        <div class="menu-icon-line"></div>
        <div class="menu-icon-line half last"></div>
      </div>
    </button>
    <ul class="more-button-list">
      <li class="more-button-list-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM256 272c39.8 0 72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72s32.2 72 72 72z"/>
        </svg>
        <span>Login</span>
      </li>
      <li class="more-button-list-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z"/>
        </svg>
        <span>Mine</span>
      </li>
      <li class="more-button-list-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M393.4 9.4c12.5-12.5 32.8-12.5 45.3 0l64 64c12.5 12.5 12.5 32.8 0 45.3c-11.8 11.8-30.7 12.5-43.2 1.9l-9.5 9.5-48.8 48.8c-9.2 9.2-11.5 22.9-8.6 35.6c9.4 40.9-1.9 85.6-33.8 117.5L197.3 493.3c-25 25-65.5 25-90.5 0l-88-88c-25-25-25-65.5 0-90.5L180.2 153.3c31.9-31.9 76.6-43.1 117.5-33.8c12.6 2.9 26.4 .5 35.5-8.6l48.8-48.8 9.5-9.5c-10.6-12.6-10-31.4 1.9-43.2zM99.3 347.3l65.4 65.4c6.2 6.2 16.4 6.2 22.6 0l97.4-97.4c6.2-6.2 6.2-16.4 0-22.6l-65.4-65.4c-6.2-6.2-16.4-6.2-22.6 0L99.3 324.7c-6.2 6.2-6.2 16.4 0 22.6z"/>
        </svg>
        <span>Drifter</span>
      </li>
      <li class="more-button-list-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M64 144c0-26.5 21.5-48 48-48s48 21.5 48 48V256H64V144zM0 144V368c0 61.9 50.1 112 112 112s112-50.1 112-112V189.6c1.8 19.1 8.2 38 19.8 54.8L372.3 431.7c35.5 51.7 105.3 64.3 156 28.1s63-107.5 27.5-159.2L427.3 113.3C391.8 61.5 321.9 49 271.3 85.2c-28 20-44.3 50.8-47.3 83V144c0-61.9-50.1-112-112-112S0 82.1 0 144zm296.6 64.2c-16-23.3-10-55.3 11.9-71c21.2-15.1 50.5-10.3 66 12.2l67 97.6L361.6 303l-65-94.8zM491 407.7c-.8 .6-1.6 1.1-2.4 1.6l4-2.8c-.5 .4-1 .8-1.6 1.2z"/>
        </svg>
        <span>Capsule</span>
      </li>
      </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: "menuButton",
  mounted() {
    document.querySelector('.more-button').addEventListener('click', this.showDetail);
  },
  methods: {
    showDetail() {
      if(document.querySelector('.list-container').classList.contains('active')) {
        document.querySelector('.list-container').classList.remove('active');
      }
      else document.querySelector('.list-container').classList.add('active');
    }
  }
}
</script>

<style scoped>
.body {
  position: fixed;
  bottom: 4%;
  right: 2%;
  z-index: 1;
  font-family: 'Poppins', sans-serif;
}
.list-container {
  position: relative;
}
.list-container.active .more-button-list {
  opacity: 1;
  transform: scale(1);
}
.list-container.active .more-button-list-item {
  -webkit-animation: fadeInItem 0.6s 0.2s forwards;
  animation: fadeInItem 0.6s 0.2s forwards;
}
.list-container.active .more-button-list-item:nth-child(2) {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.list-container.active .more-button-list-item:nth-child(3) {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
.list-container.active .more-button-list-item:nth-child(4) {
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}
.list-container.active .more-button {
  -webkit-animation: onePulse 0.6s forwards linear;
  animation: onePulse 0.6s forwards linear;
}
.list-container.active .menu-icon-wrapper {
  transform: rotate(-45deg);
}
.list-container.active .menu-icon-line.first {
  transform: rotate(-90deg) translateX(1px);
}
.list-container.active .menu-icon-line.last {
  transform: rotate(-90deg) translateX(-1px);
}

.more-button {
  background-color: #5c67ff;
  box-shadow: 0px 0px 0px 4px rgba(92, 103, 255, 0.3);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: 0.2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
  z-index: 2;
}
.more-button:hover, .more-button:focus {
  box-shadow: 0px 0px 0px 8px rgba(92, 103, 255, 0.3);
  background-color: #4854ff;
}
.more-button:focus {
  outline: 0;
}
.more-button-list {
  background-color: #fff;
  border-radius: 8px;
  list-style-type: none;
  width: 140px;
  height: 170px;
  box-shadow: 0px 0px 4px 4px rgba(150, 157, 249, 0.16);
  padding: 0;
  padding: 6px;
  position: absolute;
  right: 24px;
  bottom: 0;
  opacity: 0;
  transform: scale(0);
  transform-origin: bottom right;
  transition: all 0.3s ease 0.1s;
}
.more-button-list li {
  opacity: 0;
}
.more-button-list-item {
  display: flex;
  align-items: center;
  color: #1c3991;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: 0.2s ease-in;
  transform: translatex(-10px);
}
.more-button-list-item:hover {
  color: #5c67ff;
}
.more-button-list-item:after {
  content: "";
  position: absolute;
  height: 1px;
  width: calc(100% - 24px);
  left: 12px;
  bottom: 0;
  background-color: rgba(132, 160, 244, 0.1);
}
.more-button-list-item:last-child:after {
  display: none;
}
.more-button-list-item svg {
  width: 18px;
  height: 18px;
}
.more-button-list-item span {
  display: inline-block;
  line-height: 20px;
  font-size: 14px;
  margin-left: 20px;
}

@-webkit-keyframes onePulse {
  0% {
    box-shadow: 0px 0px 0px 0px rgba(92, 103, 255, 0.3);
  }
  50% {
    box-shadow: 0px 0px 0px 12px rgba(92, 103, 255, 0.1);
  }
  100% {
    box-shadow: 0px 0px 0px 4px rgba(92, 103, 255, 0.3);
  }
}

@keyframes onePulse {
  0% {
    box-shadow: 0px 0px 0px 0px rgba(92, 103, 255, 0.3);
  }
  50% {
    box-shadow: 0px 0px 0px 12px rgba(92, 103, 255, 0.1);
  }
  100% {
    box-shadow: 0px 0px 0px 4px rgba(92, 103, 255, 0.3);
  }
}
@-webkit-keyframes fadeInItem {
  100% {
    transform: translatex(0px);
    opacity: 1;
  }
}
@keyframes fadeInItem {
  100% {
    transform: translatex(0px);
    opacity: 1;
  }
}

.menu-icon-wrapper {
  border-radius: 2px;
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 330ms ease-out;
}

.menu-icon-line {
  background-color: #fff;
  border-radius: 2px;
  width: 100%;
  height: 2px;
}
.menu-icon-line.half {
  width: 50%;
}
.menu-icon-line.first {
  transition: transform 300ms cubic-bezier(0.52, -0.8, 0.52, 0.52);
  transform-origin: right;
}
.menu-icon-line.last {
  align-self: flex-end;
  transition: transform 300ms cubic-bezier(0.52, -0.8, 0.52, 0.52);
  transform-origin: left;
}
</style>