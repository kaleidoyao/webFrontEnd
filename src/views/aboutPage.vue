<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <header-tag :usrid=userid></header-tag>
  <back-ground></back-ground>
  <div class="logoLand">About WasteLand</div>
  <div class="titleLand">What is a blog?</div>
  <div class="text">First, let's go over a brief history -- in 1994, Swarthmore College student Justin Hall is credited with the creation of the first blog, Links.net. At the time, however, it wasn't considered a blog … just a personal homepage.</div>
  <div class="text">In 1997, Jorn Barger, blogger for Robot Wisdom, coined the term "weblog", which was meant to describe his process for "logging the web" as he surfed the internet. The term "weblog" was shortened to "blog" in 1999, by programmer Peter Merholz.</div>
  <div class="text">In the early stages, a blog was a personal web log or journal in which someone could share information or their opinion on a variety of topics. The information was posted reverse chronologically, so the most recent post would appear first.</div>
  <div class="text">Nowadays, a blog is a regularly updated website or web page, and can either be used for personal use or to fulfill a business need.</div>
  <div class="titleLand">What is a blog post?</div>
  <div class="text">A blog post is an individual web page on your website that dives into a particular sub-topic of your blog.</div>
  <div class="text">Blog posts allow you to rank on search engines for a variety of keywords. In the above example, your blog post could enable your business to rank on Google for "fall shoes". When someone searches for fall shoes and comes across your blog post, they have access to the rest of your company's website. They might click "Products" after they read your post, and take a look at the clothing items your company sells.</div>
</template>

<script>
import HeaderTag from "@/components/headerTag";
import BackGround from "@/components/backGround";
import router from "@/router";

export default {
  name: "aboutPage",
  components:{HeaderTag,BackGround},
  mounted() {
    this.userid = router.currentRoute.value.query.id;
    console.log(this.userid);
  },
  data(){
    return{
      userid:-1
    }
  }
}
</script>

<style scoped>
.logoLand {
  margin-top: 2em;
  margin-left: 1.6em;
  color: black;
  font: 1000 30px 'Poppins';
  font-size: 3.5em;
  text-decoration: none;
}
.titleLand {
  margin-top: 1em;
  margin-left: 2.8em;
  color: black;
  font: 1000 30px 'Poppins';
  font-size: 2em;
  text-decoration: none;
}
.text {
  margin-top: 1em;
  margin-left: 5.5em;
  margin-right: 37em;
  color: black;
  font: 1000 30px 'Poppins';
  font-size: 1em;
  text-decoration: none;
}
</style>