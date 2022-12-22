<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <div class="wrapper">
    <div ref="book" :class="status">
      <div class="book__cover">
        <span class="header-image"><div class="overlay"></div></span>
        <span class="title-wrap">
<!--          <h1 class="article-title">{{blog.title}}</h1>-->
          <p class="book__cover-exerpt">

          </p>
        </span>
      </div>
      <div class="book__content">
<!--        <p><span class="drop-cap">O</span>{{blog.content}}</p>-->
        <div class="summary">
          <div class="summary-item">
            <h5 class="item-title">Reading Time</h5>
            <p class="item-text"><span class="item-data">6</span> Mins</p>
          </div>
          <div class="summary-item">
            <h5 class="item-title">Author</h5>
            <p class="item-text"><span class="item-data">Gagaga</span></p>
          </div>
          <div class="summary-item">
            <h5 class="item-title">Publish Time</h5>
            <p class="item-text"><span class="item-data">6</span> Mins</p>
          </div>
        </div>
        <p><span class="drop-cap">O</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias est incidunt odit ea adipisci animi nihil voluptates iure beatae explicabo asperiores enim ex placeat itaque minus error temporibus voluptate corporis suscipit commodi voluptatibus praesentium molestiae, perspiciatis nulla. Accusantium harum nisi maiores, velit perferendis, nesciunt ad, porro sequi aliquid maxime molestias!</p>
        <p>	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nobis fuga delectus tempore. Odio ipsa voluptate ex nobis ratione consequatur dignissimos dolorum culpa, ipsam sit dolorem itaque excepturi, natus sed deleniti incidunt ipsum asperiores! Molestiae cumque quam nulla, nam inventore. Necessitatibus blanditiis cumque laboriosam, id, ad unde quo ipsum nulla.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum accusantium velit expedita, minima sapiente unde magnam dicta. Consequuntur cumque numquam sed deserunt, quidem officia illo blanditiis ipsum, commodi distinctio quam molestias dolore, doloremque corporis? Rem ad recusandae delectus accusamus, harum quisquam perferendis dolor aut consectetur nesciunt atque laborum ab dolores.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, neque, magnam. Impedit deleniti ad alias, unde vero quis mollitia, tenetur minima porro, officia iusto quae harum labore nostrum aliquid aut maxime, architecto in reprehenderit. Doloribus pariatur quam fuga sed modi veniam, vel corporis magnam quis eius cumque voluptate, dolore repellendus labore nobis, voluptatibus dicta sapiente doloremque! Enim dicta totam debitis cumque similique, natus, consequatur quidem cum incidunt, sint quos. Ea.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident voluptatum possimus dolores nesciunt natus quaerat quas quo quam obcaecati ducimus totam quia sint, et nobis nisi tenetur id aspernatur quibusdam molestiae reprehenderit sed incidunt. Voluptas error necessitatibus sed inventore, quasi facilis, est. Asperiores atque laboriosam inventore quis eos nulla. Fuga neque odit maiores facilis voluptas nemo numquam, eos amet molestias.</p>
        <div class="buttons">
          <span><like-button></like-button></span>
          <span><collect-button></collect-button></span>
        </div>
        <div>
          <span><h1 class="comment-title">Comments</h1></span>
          <span style="margin-left: 28vw"><button class="add-comment">add comment</button></span>
        </div>
        <div class="comment-divider"></div>
        <comment-area></comment-area>
      </div>
    </div>
  </div>
</template>

<script>
import LikeButton from "@/components/likeButton";
import CommentArea from "@/components/commentArea";
import CollectButton from "@/components/collectButton";
export default {
  name: "smallBlogItem",
  props:{
    blog: {
      title: String,
      content: String,
      date: String,
      authorid:Number
    }
  },
  // eslint-disable-next-line vue/no-unused-components
  components: {CollectButton, CommentArea, LikeButton},
  data() {
    return {
      status: 'book',
      wrapperHeight: '30vh',
      wrapperMarginTop: '5vh',
    }
  },
  mounted() {
    // let _this=this
    // let result=null
    this.$refs['book'].addEventListener('click', this.changeStatus);
    window.addEventListener("scroll", this.scrollToTop);
    // axios.get("http://localhost:8088/myBlog",{
    //   params:{
    //     userid:_this.userid,
    //     n:100
    //   }
    // }).then((response)=>{
    //   result=response.data
    //   _this.blogs=result
    //   console.log(_this.blogs)
    // })



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

.book {
  overflow: hidden;
  background: white;
  height: 30vh;
  width: 55vw;
  box-shadow: 0 20px 30px -10px #ccc;
  border-radius: 20px;
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
.wrapper {
  height: v-bind(wrapperHeight);
  margin-top: v-bind(wrapperMarginTop);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  max-height: 100vh;
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
  transform: translate(7vw, 15vh);
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
</style>