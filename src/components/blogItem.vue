<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <div class="wrapper">
    <div ref="book" :class="status">
      <div class="book__cover">
        <span class="header-image"><div class="overlay"></div></span>
        <span class="title-wrap">
          <h1 class="article-title">{{ blog.title }}</h1>
          <p class="book__cover-exerpt">{{ blog.date }}</p>
        </span>
      </div>
      <div class="book__content">
        <p>{{ blog.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// class Blog {
//   title
//   content
// }
// import axios from "axios";

export default {
  name: "blogItem",
  props: {
     blog: {
       title: String,
       content: String,
       date: String,
       authorid:Number
     }
  },
  data() {
    return {
      status: 'book',
      wrapperHeight: '30vh',
      wrapperMarginTop: '5vh',
      authorName:"",
    }
  },
  mounted() {
    this.$refs['book'].addEventListener('click', this.changeStatus);
    window.addEventListener("scroll", this.scrollToTop);
  },
  methods: {
    changeStatus(){
      if(this.status === 'book') {
        this.status = 'book--expanded';
        this.wrapperHeight = '100vh';
        this.wrapperMarginTop = '0vh'
      }
      else {
        this.$refs.book.scrollTop = 0;
        this.status = "book";
        this.wrapperHeight = '30vh';
        this.wrapperMarginTop = '5vh';
      }
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  background: #f3f4f4;
  font-family: 'Roboto Condensed', sans-serif;
  overflow: hidden;
}

.wrapper {
  height: v-bind(wrapperHeight);
  margin-top: v-bind(wrapperMarginTop);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.book {
  overflow: hidden;
  background: white;
  height: 30vh;
  width: 65vw;
  border-radius: 20px;
  box-shadow: 0 20px 30px -10px #ccc;
  transition: all 0.5s ease-in-out;
}
.book:hover {
  box-shadow: 0 6px 50px 10px #cfcfcf;
}
.book__cover {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}
.header-image {
  display: inline-block;
  width: 30%;
  height: 25vh;
  background-image: url('../assets/imgs/blogCover.svg');
  background-size: 75%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  transition: all 0.45s ease-in-out;
}
.overlay {
  transition: all 0.3s ease-in-out;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.title-wrap {
  height: 25vh;
  display: inline-block;
  justify-content: center;
  transform: translateY(0);
  transition: transform 0.45s ease-in;
}
.article-title {
  font-size: 2.5rem;
  line-height: 1;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  letter-spacing: 0.025em;
  transition: font-size 0.45s ease-in-out, color 0.3s ease-out;
}
.book__cover-exerpt {
  color: #6a6a6a;
  max-width: 45vw;
  max-height: 15vh;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 1rem 1.5rem;
  text-align: center;
  opacity: 1;
  display: block;
  transition: all 0.25s ease-in-out;
}
.drop-cap {
  font-size: 55px;
  line-height: 28px;
}

.book__content {
  text-align: justify;
  word-wrap: break-word;
  font-size: 1.1rem;
  opacity: 0;
  transition: all 1.5s ease-in-out;
  max-width: 750px;
  margin: 0 auto 6rem;
  padding: 0 2rem;
}
.book__content p {
  line-height: 1.8;
  color: #3a3a3a;
  margin-bottom: 2.5rem;
}

.book--expanded {
  height: 100%;
  width: 100%;
  background: white;
  overflow-y: scroll;
}
.book--expanded .book__cover {
  height: 60vh;
  display: inline-block;
}
.book--expanded .overlay {
  opacity: 0.95;
}
.book--expanded .title-wrap {
  transform: translate(25vw, 15vh);
  color: white;
}
.book--expanded .article-title {
  color: black;
  font-size: 64px;
  letter-spacing: 0.05em;
}
.book--expanded .book__cover-exerpt {
  opacity: 0;
}
.book--expanded .book__content {
  opacity: 1;
}
.book--expanded .header-image {
  height: 100%;
  width: 100%;
}
</style>