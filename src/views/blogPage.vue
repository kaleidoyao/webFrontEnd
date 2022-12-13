<template>
  <header-tag ref="header" usrid={{this.userid.valueOf()}}></header-tag>
  <back-ground></back-ground>
  <div ref="content">
    <blog-item title="hskjdhfs"></blog-item>
    <blog-item v-for="blog in blogs" title="{{blog.title}}" content="{{blog.content}}}"></blog-item>
    <blog-item v-for="blog in blogs" :key="index" :title="blog.title" :content="blog.content"></blog-item>
    <blog-item v-for="blog in blogs" v-bind="blog"></blog-item>
    <div v-for="blog in blogs" key="blog.date">{{blog.title}}</div>
<!--    <li key="blog.title" v-for="blog in blogs">-->
<!--      <blog-item title="{{blog.title}}" content="{{blog.content}}"></blog-item>-->
<!--    </li>-->
  </div>
</template>

<script>
import BlogItem from "@/components/blogItem";
import HeaderTag from "@/components/headerTag";
import BackGround from "@/components/backGround";
import router from "@/router";
import axios from "axios";
//import {ElMessageBox} from "element-plus";
export default {
  name: "communityPage",
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