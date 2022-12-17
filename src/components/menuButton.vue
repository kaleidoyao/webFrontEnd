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
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"/>
        </svg>
        <span>Login</span>
      </li>
      <li class="more-button-list-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
        </svg>
        <span>Mine</span>
      </li>
      <li class="more-button-list-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share">
          <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />
        </svg>
        <span>Drifter</span>
      </li>
      <li class="more-button-list-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
<!--          <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />-->
          <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"/>

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
  margin-left: 8px;
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