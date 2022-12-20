<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <div class="wrapper">
    <div class="static-txt">while true:&ensp;</div>
    <div class="typing-demo"> blogging;</div>
  </div>
</template>

<script>
export default {
  name: "textType"
}
</script>

<style scoped>
* {
  font-family: 'Poppins', monospace;
}
.wrapper {
  display: flex;
}
.static-txt {
  font-size: 2em;
}
.typing-demo {
  width: 8ch;
  animation: typing 3s steps(9), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-size: 2em;
}
@keyframes typing {
  from {
    width: 0
  }
}
@keyframes blink {
  50% {
    border-color: transparent
  }
}
</style>