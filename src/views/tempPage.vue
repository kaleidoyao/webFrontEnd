<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <header-tag ref="header" :usrid=userid></header-tag>
  <back-ground></back-ground>
  <div ref="content">
    <blog-item v-for="blog in blogs" :key="blog.id" :blog="{title:blog.title,content:blog.content,date:blog.date,authorid:blog.userid}"></blog-item>
  </div>
</template>

<script>
import BlogItem from "@/components/blogItem";
import HeaderTag from "@/components/headerTag";
import BackGround from "@/components/backGround";
import router from "@/router";
import axios from "axios";
// import {ElMessageBox} from "element-plus";
// class Blog{
//   title
//   content
//   date
//   author
// }
export default {
  name: "blogPage",
  // eslint-disable-next-line vue/no-unused-components
  components: {BackGround, HeaderTag, BlogItem},
  mounted() {
    let height= this.$refs.header.$el.offsetHeight;
    //let result;
    this.$refs["content"].style.marginTop = height + 'px';
    this.userid = router.currentRoute.value.query.id;
    axios.get("http://localhost:8088/allBlog", {
      params: {
        n:10
      }
    }).then((response) => {
      let result = response.data;
      this.blogs=response.data;
      console.log(result);
      console.log(this.blogs)
    })
    console.log(this.userid);
  },
  data(){
    return{
      userid:0,
      blogs:[]
    }
  }
}
</script>

<style scoped>

</style>