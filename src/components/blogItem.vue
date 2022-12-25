<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <div class="wrapper">
    <div ref="book" :class="status">
      <div class="book__cover">
        <span class="header-image"><div class="overlay"></div></span>
        <div>
          <span class="title-wrap">
            <h1 class="article-title">{{blog.title}}</h1>
            <p class="book__cover-exerpt">
              {{blog.content.substring(0,200)}}
            </p>
          </span>
        </div>
      </div>
      <div class="book__content">
        <div class="summary">
          <div class="summary-item">
            <h5 class="item-title">Reading Time</h5>
            <p class="item-text"><span class="item-data">6</span> Mins</p>
          </div>
          <div class="summary-item">
            <h5 class="item-title">Author</h5>
            <p class="item-text"><span class="item-data">{{authorName}}</span></p>
          </div>
          <div class="summary-item">
            <h5 class="item-title">Publish Time</h5>
            <p class="item-text"><span class="item-data">6</span> Mins</p>
          </div>
        </div>
        <p>{{blog.content}}</p>
        <div class="buttons">
          <span><like-button :userid="userid" :blogid="blog.blogid"></like-button></span>
          <span><collect-button :userid="userid" :blogid="blog.blogid"></collect-button></span>
        </div>
        <div>
          <span><h1 class="comment-title">Comments</h1></span>
          <span style="margin-left: 39vw"><button class="add-comment" @click.stop="addComment">add comment</button></span>
        </div>
        <div class="comment-divider"></div>
        <div class="comments" v-for="comment in comments" :key="comment.id">
          <comment-area :comment="{content:comment.content,author:comment.username,date:comment.date}"></comment-area>
        </div>
      </div>
    </div>
    <div class="comment-input anim hidden">
      <div class="commentWrapper">
        <div style="text-align: right; margin-top: 2vh;"><img src="../assets/icons/exit.png" alt="" style="width: 3vh; cursor: pointer;" @click="exitComment"></div>
        <div class="comment">
          <div><textarea v-model="commentContent" /></div>
        </div>
        <div style="display: flex; justify-content: center; margin-bottom: 2vh"><button class="submit-button" @click="submitComment">submit</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import LikeButton from "@/components/likeButton";
import CollectButton from "@/components/collectButton";
import CommentArea from "@/components/commentArea";
import axios from "axios";
import router from "@/router";
export default {
  name: "blogItem",
  components: {CommentArea, CollectButton, LikeButton},
  props:{
    blog: {
      title: String,
      content: String,
      date: String,
      authorid: Number,
      blogid: Number,
    },
    userid: Number
  },
  data() {
    return {
      status: 'book',
      wrapperHeight: '30vh',
      wrapperMarginTop: '5vh',
      authorName: "",
      comments:[],
      commentContent:""
    }
  },
  mounted() {
    this.$refs['book'].addEventListener('click', this.changeStatus);
    window.addEventListener("scroll", this.scrollToTop);
    axios.get("http://localhost:8088/getUserName",{
      params:{
        userid:this.blog.authorid
      }
    }).then((response)=>{
      console.log(response.data);
      this.authorName = response.data;
      console.log(this.authorName);
    })
    axios.get("http://localhost:8088/getComment",{
      params:{
        blogid:this.blog.blogid
      }
    }).then((response)=>{
      this.comments = response.data;
    })
  },
  methods: {
    changeStatus() {
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
    },
    addComment() {
      document.querySelector(".comment-input").classList.remove("hidden");
    },
    exitComment() {
      document.querySelector(".comment-input").classList.add("hidden");
    },
    getdate() {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    },
    submitComment(){
      axios.get("http://localhost:8088/writeComment",{
        params:{
          userid:this.userid,
          blogid:this.blog.blogid,
          content:this.commentContent,
          date:this.getdate()
        }
      }).then((response)=>{
        console.log(response.data)
        this.exitComment()
        router.go(0)
      })
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
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
  text-align: left;
  letter-spacing: 0.025em;
  transition: font-size 0.45s ease-in-out, color 0.3s ease-out;
}
.book__cover-exerpt {
  color: #6a6a6a;
  width: 45vw;
  word-wrap:break-word;
  word-break:break-all;
  max-height: 15vh;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
  padding: 1rem 0;
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
  max-width: 75vw;
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
  display: block;
  margin-top: 5vh;
  margin-right: auto;
  margin-left: auto;
  color: white;
}
.book--expanded .article-title {
  text-align: center;
  color: black;
  font-size: 64px;
  letter-spacing: 0.05em;
}
.book--expanded .book__cover-exerpt {
  opacity: 0;
  height: 0;
  padding: 0;
  margin: 0;
}
.book--expanded .book__content {
  opacity: 1;
  margin-top: 5%;
}
.book--expanded .header-image {
  height: 100%;
  width: 100%;
}

.summary {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5vh;
  padding: 30px 50px;
  border-radius: 16px;
  box-shadow: 0 0 0 1px #f2f2f2;
}
.summary .summary-item {
  padding-right: 20px;
}
.summary .summary-item .item-title {
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  color: #999;
}
.summary .summary-item .item-text {
  margin-top: 12px;
  margin-bottom: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
}
.comment-title {
  margin-top: 2vh;
  margin-bottom: 2vh;
  margin-left: 1vw;
  font-family: 'Poppins', sans-serif;
  display: inline-block;
}
.add-comment {
  display: inline-block;
  border: 1px solid #000000;
  border-radius: 25px;
  padding-right: 2vh;
  padding-left: 2vh;
  height: 4vh;
  background-color: white;
  cursor: pointer;
}
.comment-divider {
  width: 96%;
  height: 1px;
  background: #d2d2d2;
  margin: auto;
}
.buttons {
  text-align: right;
}
.buttons span {
  display: inline-block;
  margin-left: 2vw;
}
.hidden {
 display: none;
}
.comment-input {
  position: absolute;
  top: 50%;
  width: 60%;
  background-color: rgba(255,255,255);
  border-radius: 15px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
}
.commentWrapper {
  width: 90%;
  margin: auto;
}
.comment {
  position: relative;
  margin: 2vh 0;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
}
.comment::before {
  content: url(https://icons.craftwork.design/static/media/QuotesFill.f65b03951f44e212816420b00909f4df.svg);
  position: absolute;
  top: -5px;
  left: -5px;
  transform: scale(2);
  opacity: 0.5;
}
.comment::after {
  content: url(https://icons.craftwork.design/static/media/QuotesFill.f65b03951f44e212816420b00909f4df.svg);
  position: absolute;
  bottom: -5px;
  right: -5px;
  transform: scale(2) rotate(180deg);
  opacity: 0.5;
}
textarea {
  width: 33vw;
  height: 20vh;
  line-height: 35px;
  border-radius: 15px;
  background-color: #f8f8f8;
  padding: 0 20px;
  font-size: 1.5em;
  border: 0;
  outline: 0;
}
.submit-button {
  color: #000;
  padding: 1vh 10vh;
  border-radius: 36px;
  font: 600 2vh 'Poppins';
  letter-spacing: 1px;
}
.anim {
  -webkit-animation: bottom 0.8s both;
  animation: bottom 0.8s both;
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
</style>