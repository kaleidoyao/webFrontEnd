<template>
  <header-tag ref="header" :usrid=userid></header-tag>
  <back-ground></back-ground>
  <div ref="content">
    <blog-item></blog-item>
    <blog-item></blog-item>
  </div>
</template>

<script>
import BlogItem from "@/components/blogItem";
import HeaderTag from "@/components/headerTag";
import BackGround from "@/components/backGround";
import router from "@/router";
export default {
  name: "blogPage",
  components: {BackGround, HeaderTag, BlogItem},
  mounted() {
    let height= this.$refs.header.$el.offsetHeight;
    this.$refs["content"].style.marginTop = height + 'px';
    this.userid = router.currentRoute.value.query.id;
    console.log(this.userid);
  },
  data(){
    return{
      userid:0
    }
  }
}
</script>

<style scoped>

</style>