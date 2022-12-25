<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <header-tag ref="header" :usrid=userid></header-tag>
  <back-ground></back-ground>
  <div class="container" ref="container">
    <div class="sidebar">
      <a class="logo-expand" href="#">BLOGGING</a>
      <div class="divider"></div>
      <div class="side-wrapper">
        <div class="side-title">MENU</div>
        <div class="side-menu">
          <a class="sidebar-link discover is-active">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.135 20.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 00-3.949.072L3.467 7.965A2.474 2.474 0 002.5 9.867v8.702C2.5 20.464 4.047 22 5.956 22h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z" /></svg>
            Discover
          </a>
          <a class="sidebar-link trending">
            <svg viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.835 12.007l.002.354c.012 1.404.096 2.657.242 3.451 0 .015.16.802.261 1.064.16.38.447.701.809.905a2 2 0 00.91.219c.249-.012.66-.137.954-.242l.244-.094c1.617-.642 4.707-2.74 5.891-4.024l.087-.09.39-.42c.245-.322.375-.715.375-1.138 0-.379-.116-.758-.347-1.064-.07-.099-.18-.226-.28-.334l-.379-.397c-1.305-1.321-4.129-3.175-5.593-3.79 0-.013-.91-.393-1.343-.407h-.057c-.665 0-1.286.379-1.603.991-.087.168-.17.496-.233.784l-.114.544c-.13.874-.216 2.216-.216 3.688zm-6.332-1.525C3.673 10.482 3 11.162 3 12a1.51 1.51 0 001.503 1.518l3.7-.328c.65 0 1.179-.532 1.179-1.19 0-.658-.528-1.191-1.18-1.191l-3.699-.327z" /></svg>
            Trending
          </a>
          <a class="sidebar-link collection">
            <svg viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.769 8.382H22C22 4.985 19.964 3 16.516 3H7.484C4.036 3 2 4.985 2 8.338v7.324C2 19.015 4.036 21 7.484 21h9.032C19.964 21 22 19.015 22 15.662v-.313h-4.231c-1.964 0-3.556-1.552-3.556-3.466 0-1.915 1.592-3.467 3.556-3.467v-.034zm0 1.49h3.484c.413 0 .747.326.747.728v2.531a.746.746 0 01-.747.728H17.85c-.994.013-1.864-.65-2.089-1.595a1.982 1.982 0 01.433-1.652 2.091 2.091 0 011.576-.74zm.151 2.661h.329a.755.755 0 00.764-.745.755.755 0 00-.764-.746h-.329a.766.766 0 00-.54.213.727.727 0 00-.224.524c0 .413.34.75.764.754zM6.738 8.382h5.644a.755.755 0 00.765-.746.755.755 0 00-.765-.745H6.738a.755.755 0 00-.765.737c0 .413.341.75.765.754z" /></svg>
            Collection
          </a>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div id="discover">
        <div class="main-header anim" style="--delay: 0s">Discover</div>
        <div class="anim" style="--delay: 0.1s; margin-bottom: 2vh;" v-for="blog in blogs" :key="blog.id">
          <blog-item :blog="{title:blog.title,content:blog.content,date:blog.date,authorid:blog.userid,blogid:blog.blogid}" :userid="userid"></blog-item>
        </div>
      </div>
      <div class="hidden" id="trending">
        <div class="main-header anim" style="--delay: 0s">Trending</div>
        <div class="anim" style="--delay: 0.1s; margin-bottom: 2vh;" v-for="blog in blogs" :key="blog.id">
          <blog-item :blog="{title:blog.title,content:blog.content,date:blog.date,authorid:blog.userid,blogid:blog.blogid}" :userid="userid"></blog-item>
        </div>
      </div>
      <div class="hidden" id="collection">
        <div class="main-header anim" style="--delay: 0s">Collection</div>
        <div class="anim" style="--delay: 0.1s; margin-bottom: 2vh;" v-for="blog in collections" :key="blog.id">
          <blog-item :blog="{title:blog.title,content:blog.content,date:blog.date,authorid:blog.userid,blogid:blog.blogid}" :userid="userid"></blog-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogItem from "@/components/blogItem";
import HeaderTag from "@/components/headerTag";
import BackGround from "@/components/backGround";
import router from "@/router";
import axios from "axios";
export default {
  name: "blogPage",
  components: {BackGround, HeaderTag, BlogItem},
  data(){
    return{
      userid:-1,
      blogs:[],
      collections:[]
    }
  },
  mounted() {
    let height = this.$refs.header.$el.offsetHeight + 5;
    this.$refs["container"].style.marginTop = height + 'px';
    this.userid = router.currentRoute.value.query.id;
    document.querySelector(".discover").addEventListener('click', this.clickDiscover);
    document.querySelector(".trending").addEventListener('click', this.clickTrending);
    document.querySelector(".collection").addEventListener('click', this.clickCollection);
    axios.get("http://localhost:8088/allBlog",{
      params:{
        n:10
      }
    }).then((response)=>{
      this.blogs = response.data
    })
    axios.get("http://localhost:8088/allCollect",{
      params:{
        userid:this.userid
      }
    }).then((response)=>{
      this.collections=response.data
    })
  },
  methods: {
    clickDiscover() {
      document.querySelector(".discover").classList.add('is-active');
      document.querySelector(".trending").classList.remove('is-active');
      document.querySelector(".collection").classList.remove('is-active');
      document.getElementById('discover').classList.remove('hidden');
      document.getElementById('trending').classList.add('hidden');
      document.getElementById('collection').classList.add('hidden');
    },
    clickTrending() {
      document.querySelector(".discover").classList.remove('is-active');
      document.querySelector(".trending").classList.add('is-active');
      document.querySelector(".collection").classList.remove('is-active');
      document.getElementById('discover').classList.add('hidden');
      document.getElementById('trending').classList.remove('hidden');
      document.getElementById('collection').classList.add('hidden');
    },
    clickCollection() {
      document.querySelector(".discover").classList.remove('is-active');
      document.querySelector(".trending").classList.remove('is-active');
      document.querySelector(".collection").classList.add('is-active');
      document.getElementById('discover').classList.add('hidden');
      document.getElementById('trending').classList.add('hidden');
      document.getElementById('collection').classList.remove('hidden');
    }
  }
}
</script>

<style scoped>
.container {
  background-color: rgba(255,255,255,0.3);
  border-radius: 15px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  width: 95vw;
  min-height: 95vh;
  display: flex;
  font-size: 15px;
  font-weight: 500;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}
.sidebar {
  background-color: rgba(255,255,255,0.3);
  border-radius: 15px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  margin: 2vh;
  padding: 5vh;
  width: 15vw;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition-duration: 0.2s;
}
.sidebar .logo-expand {
  text-decoration: none;
  color: black;
  font-family: 'Poppins', sans-serif;
  font-size: 19px;
  font-weight: 600;
  line-height: 34px;
  position: sticky;
  top: 0;
}
.sidebar .divider {
  height: 0.05vh;
  width: 90%;
  margin-top: 1vh;
  background-color: black;
}
.side-wrapper {
  border-bottom: none;
  padding: 8vh 0;
}
.side-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 0.07em;
  margin-bottom: 3vh;
}
.side-menu {
  display: flex;
  flex-direction: column;
}
.side-menu a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 2.5vh;
}
.side-menu a + a {
  margin-top: 3.5vh;
}
.side-menu svg {
  width: 5vh;
  padding: 1vh;
  margin-right: 3vh;
  border-radius: 10px;
  flex-shrink: 0;
}
.sidebar-link {
  font-family: 'Poppins', sans-serif;
}
.sidebar-link.is-active {
  color: #63a4e0;
}
.sidebar-link:hover, .sidebar-link.is-active {
  font-weight: bolder;
}
.sidebar-link:hover svg {
  color: white;
  background: black;
}
.sidebar-link.is-active svg {
  color: white;
  background: #63a4e0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 2vh;
  background-color: rgba(255,255,255,0.3);
  border-radius: 15px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
}

.hidden {
  display: none;
}
.anim {
  -webkit-animation: bottom 0.8s var(--delay) both;
  animation: bottom 0.8s var(--delay) both;
}
@-webkit-keyframes bottom {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes bottom {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.main-header {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 2em;
  color: black;
  padding-left: 5vh;
  margin-top: 2vh;
}
</style>