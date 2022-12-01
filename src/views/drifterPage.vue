<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <back-ground></back-ground>
  <div class="body">
    <header-tag></header-tag>
    <div class="content">
      <span class="driftBottleAndArrest">
        <drifter-bottle class="bottle"></drifter-bottle>
        <div>
          <a href=# class="arrest">点击捕获</a>
        </div>
      </span>
      <span class="blogContent">
        <p>标题</p>
        <br />
        <p>
          正文
        </p>
      </span>
      <span class="throwAndCatch">
        <ul>
          <li>
            <a href=#> 扔一个 </a>
          </li>
          <li>
            <p>收到的漂流瓶缩略</p>
            <a href=#>销毁</a>
          </li>
          <li>
            <p>收到的漂流瓶缩略</p>
            <a href=#>销毁</a>
          </li>
        </ul>
      </span>
    </div>
  </div>
</template>

<script>
import BackGround from "@/components/backGround";
import HeaderTag from "@/components/headerTag";
import DrifterBottle from "@/components/drifterBottle";
export default {
  components: {DrifterBottle, HeaderTag, BackGround}
}
</script>


<style scoped>
.body {
  width: 100%;
  min-height: 100vh;
}

.driftBottleAndArrest {
  background-color: rgba(255,255,255,0.3);
  border-radius: 15px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  width: 25%;
  height: 500px;
  display: inline-block;
  vertical-align: top;
  margin: 5px;
}
.bottle {
  margin-top: 3%;
}
.arrest {
  position: relative;
  margin-top: 20px;
}

.blogContent {
  background-color: rgba(255,255,255,0.3);
  border-radius: 15px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  width: 45%;
  height: 550px;
  display: inline-block;
  vertical-align: top;
  margin: 5px;
}
.throwAndCatch {
  background-color: rgba(255,255,255,0.3);
  border-radius: 15px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  width: 25%;
  height: 500px;
  display: inline-block;
  vertical-align: top;
  margin: 5px;
}
</style>