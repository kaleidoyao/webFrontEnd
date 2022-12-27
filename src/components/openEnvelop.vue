<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <div class="container">
    <div class="back">
      <div class="paper">
        <h1>{{this.title}}</h1>
        <p>{{this.content}}</p>
      </div>
      <div class="cover">
      </div>
      <div class="bottom">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "openEnvelop",
  props:{
    title:String,
    content:String
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto 0 auto;
  padding: 5em 1em 1em 1em;
  width: 30em;
  height: 20em;
  position: relative;
  display: block;
  z-index: 0;
  transition: all 2.5s ease-in-out;
}
.back {
  display: block;
  position: relative;
  background: #bbbbbb;
  top: 0;
  width: 30em;
  height: 17em;
  content: "";
  -webkit-transition: 2.5s ease-in-out;
  -moz-transition: 2.5s ease-in-out;
  transition: all 2.5s ease-in-out;
  box-shadow: 0 0 1em rgba(68, 68, 136, 0.15);
  z-index: 0;
}
.paper {
  width: 25em;
  height: 15em;
  position: absolute;
  display: block;
  top: 2em;
  left: 2.5em;
  background: #fff;
  -webkit-transition: 2.5s ease-in-out;
  -moz-transition: 2.5s ease-in-out;
  transition: all 2.5s ease-in-out;
  z-index: 1;
  text-align: center;
  padding: 1em;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
h1 {
  color: #666;
  position: relative;
  z-index: 1;
  transition: all 2.5s ease-in-out;
}
p {
  color: #666;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  transition: all 2.5s ease-in-out;
}
.container .cover {
  position: absolute;
  top: 0;
  left: 50%;
  height: 1em;
  display: block;
  -moz-transform: translate(-50%, 0%) scaleY(1);
  -webkit-transform: translate(-50%, 0%) scaleY(1);
  transform: translate(-50%, 0%) scaleY(1);
  -webkit-transform-origin: 0% 50%;
  -ms-transform-origin: 0% 50%;
  transform-origin: 0% 50%;
  margin: 0 auto;
  border: 15em solid transparent;
  border-top: 10em solid white;
  -webkit-transition: all 2.5s ease-in-out;
  -moz-transition: all 2.5s ease-in-out;
  transition: z-index 2.5s ease-in-out, transform 2s ease-in-out, border-top 2s ease-in-out;
  transition-delay: 1.5s;
  z-index: 30;
}
.container:hover .back {
  top: 10em;
  z-index: 0;
}
.container:hover .back .paper {
  top: -15em;
  z-index: 45;
  height: 30em;
  transition: z-index 2.5s ease-in-out, top 2.5s ease-in-out, height 2.5s ease-in-out;
  transition-delay: 1.5s;
}
.container:hover .cover {
  border-top: 10em solid #eee;
  -moz-transform: translate(-50%, -100%) scaleY(-1);
  -webkit-transform: translate(-50%, -100%) scaleY(-1);
  transform: translate(-50%, -100%) scaleY(-1);
  z-index: 0;
  transition-delay: 0s;
}
.container .bottom {
  width: 0;
  margin: 0 auto;
  position: relative;
  top: 0;
  display: block;
  border-left: 15em solid #eee;
  border-right: 15em solid #eee;
  border-bottom: 7em solid #eee;
  border-top: 10em solid transparent;
  -webkit-transition: 2.5s ease-in-out;
  -moz-transition: 2.5s ease-in-out;
  transition: 2.5s ease-in-out;
  z-index: 100;
}
</style>