<template>
  <back-ground></back-ground>
  <header-tag ref="header"></header-tag>
  <div ref="content">
      <span class="messageAndAbstract">
          <span><a href=#><img src="picture5png"></a></span>
          <span><a href=#>名字</a></span>
          <ul>
              <li>博客缩略</li>
              <li>博客缩略</li>
              <li>博客缩略</li>
              <li>博客缩略</li>
              <li>博客缩略</li>
          </ul>
      </span>
    <span class="content">
          <p>标题</p>
          <p style="text-align: right">发表于...</p>
          <p>正文...</p>
      </span>
    <span class="likeAndComments">
          <div><img src="picture7.png"> ??? likes</div>
          <div><img src="picture8.png"> comments</div>
          <ul>
              <li>
                  <span><img src="picture9.png"> 名字</span>
                  <p>内容</p>
              </li>
              <li>
                  <span><img src="picture9.png"> 名字</span>
                  <p>内容</p>
              </li>
              <li>
                  <span><img src="picture9.png"> 名字</span>
                  <p>内容</p>
              </li>
              <li>
                  <span><img src="picture9.png"> 名字</span>
                  <p>内容</p>
              </li>
          </ul>
      </span>
  </div>
</template>

<script>
import HeaderTag from "@/components/headerTag";
import BackGround from "@/components/backGround";
export default {
  name: "blogDetail",
  components: {BackGround, HeaderTag},
  mounted() {
    let height= this.$refs.header.$el.offsetHeight;
    this.$refs["content"].style.marginTop = height + 'px';
  }
}
</script>

<style scoped>
.messageAndAbstract {
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
.content {
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
.likeAndComments {
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