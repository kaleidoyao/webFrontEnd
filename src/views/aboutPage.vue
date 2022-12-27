<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,800&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300&display=swap" rel="stylesheet">
  <header-tag ref="header" :usrid=userid></header-tag>
  <menu-button></menu-button>
  <back-ground></back-ground>
  <div class="main__wrapper" ref="container">
    <main>
      <h1>The Wasteland Times</h1>
      <aside>
        <div>
          <div class="issue">Issue #1</div>
          <div class="date">Wednesday, 21 December, 2022</div>
          <div class="edition">Editor: Group 26</div>
        </div>
      </aside>
      <h2 class="title--large main-title">ABOUT Wasteland: What Is a Blog, <br /> & Why Should You Create One</h2>
      <div class="main-text multi-column">
        <p>First, let's go over a brief history -- in 1994, Swarthmore College student Justin Hall is credited with the creation of the first blog, Links.net. At the time, however, it wasn't considered a blog … just a personal homepage.</p>
        <p>In 1997, Jorn Barger, blogger for Robot Wisdom, coined the term "weblog", which was meant to describe his process for "logging the web" as he surfed the internet. The term "weblog" was shortened to "blog" in 1999, by programmer Peter Merholz.</p>
        <p>In the early stages, a blog was a personal web log or journal in which someone could share information or their opinion on a variety of topics. The information was posted reverse chronologically, so the most recent post would appear first.</p>
        <p>Nowadays, a blog is a regularly updated website or web page, and can either be used for personal use or to fulfill a business need.</p>
      </div>
      <div class="terrarium">
        <figure><img src="../assets/imgs/About1.png" alt=""/></figure>
      </div>
      <div class="item-with-image plan long--2" style="grid-column: span 3">
        <img src="../assets/imgs/About2.jpg" alt=""/>
        <h4>WHILE TRUE: BLOGGING;</h4>
        <div class="multi-column">
          <p>Even if you're not sure what a blog is, you've no doubt come across one at some point in time. Perhaps you've stumbled across a blog when you've searched "healthy dinner recipes". In fact, if you're reading this, guess what? <em>You're on a blog.</em> (Very meta, I know.)</p>
          <p>At its most basic, blogs can help you develop an online presence, prove yourself an expert in an industry, and attract more quality leads to all pages of your site.If you're contemplating creating a blog for your business, or simply want to know what one is, keep reading.</p>
        </div>
      </div>
      <div class="hogwarts" href="https://codepen.io/oliviale/full/MZZYyO" target="_blank">
        <div class="hogwarts__title">50% Off Hogwarts Express tickets</div>
        <div class="hogwarts__image">
          <span>Limited time offer</span>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/showcase-hogwarts.svg"/>
        </div>
      </div>
      <div class="social">
        <img class="social__image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/showcase-social.gif"/>
        <div class="social__subtitle">World News</div>
        <div class="social__content">Looks like Covid-19 is gonna be around for a while so here is another friendly reminder to practice social distancing. Oh, and wear a mask!</div>
      </div>
      <div class="sidebar">
        <h3 class="title--big">Wasteland Space</h3>
        <div class="codepen-item pie">
          <img class="pie__image" src="../assets/imgs/About3.jpg"/>
          <div class="pie__subtitle">Definition</div>
          <div class="pie__content">
            <h4>What is a blog post?</h4>
            <p>A blog post is an individual web page on your website that dives into a particular sub-topic of your blog.</p>
          </div>
        </div>
        <div class="sidebar-item captcha">
          <h5>What is a lifestyle blog?</h5>
          <p>A lifestyle blog is a digital compilation of an author's personal interests, daily activities, or opinions on a subject. A lifestyle blog typically covers multiple hobbies or talents of the writer, rather than focusing on one subject alone. For instance, a lifestyle blog might include a section for fashion, health and wellness, travel, and relationships.</p>
          <h5>What is the difference between a wiki and a blog?</h5>
          <p>A wiki is a collaborative space where anyone who visits the site can edit, share, or publish content -- Wikipedia is one of the most popular examples of this. On the other hand, there is typically only one person, or a team of people, with admin permissions to edit, share, or publish to a blog. Website visitors who come across the blog can potentially leave comments at the bottom of the blog post, but they cannot publish to the site or edit the posted material.</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderTag from "@/components/headerTag";
import BackGround from "@/components/backGround";
import router from "@/router";
import MenuButton from "@/components/menuButton";

export default {
  name: "aboutPage",
  components:{MenuButton, HeaderTag,BackGround},
  mounted() {
    let height = this.$refs.header.$el.offsetHeight;
    this.$refs["container"].style.marginTop = height + 'px';
    this.userid = router.currentRoute.value.query.id;
  },
  data(){
    return {
      userid: -1,
      font: '"EB Garamond", serif',
      font_title: '"Playfair Display", serif',
      font_sans_serif: '"Manrope", sans-serif',
      black: '#1c1f33',
      black_acc: '#222',
      gray: '#eee',
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
}
.main__wrapper {
  max-width: 100vw;
  padding: 5vw;
  margin: auto;
  background-color: rgba(255,255,255,0.7);
  border-radius: 15px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
}

h1 {
  font: 50px/1 "Playfair Display SC";
  text-align: center;
}
h3 {
  font: italic 20px v-bind(font_title);
  margin-bottom: 1rem;
}
h4 {
  font: 20px/1.2 v-bind(font_title);
}
h5 {
  font: 700 20px/1 v-bind(font_title);
  transition: 0.3s ease;
}

p {
  line-height: 1.3;
  font-size: 2.5vh;
  text-align: justify;
}
p a {
  display: inline;
}
em {
  font-style: italic;
}

.title--large {
  font-family: 'Playfair Display', serif;
  font-size: 2.7em;
  font-style: italic;
  text-align: left;
  margin: 0;
}

@media (min-width: 700px) {
  main {
    display: grid;
    grid-template-columns: repeat(4, 1fr) 23%;
    grid-template-rows: repeat(5, auto);
    grid-gap: 1.2rem;
  }
}

main h1, main aside {
  grid-column: 1/-1;
}
main .main-title {
  grid-column: 1/-2;
}
main .terrarium {
  grid-column: 3/span 2;
}
main .main-text {
  grid-column: span 2;
}
main .sidebar {
  grid-row: 3/9;
  grid-column: 5/6;
}
main .hogwarts {
  grid-column: 4;
  grid-row: span 2;
}
main .social {
  grid-column: 1/-2;
  grid-row: 8/9;
  margin-bottom: 5vh;
}

@media (min-width: 700px) and (max-width: 1024px) {
  main .plan {
    grid-column: span 4;
  }
}

.long--2 {
  grid-row: span 2;
}

img {
  width: 100%;
  filter: grayscale(95%);
  margin-bottom: 0.5rem;
  border: 1px solid v-bind(black);
  transition: 0.3s ease;
}

aside {
  text-align: center;
  padding: 3px 0;
  border: solid v-bind(black);
  border-width: 2px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 1.5rem 0;
}
aside > div {
  display: flex;
  align-items: center;
  border: solid v-bind(black);
  border-width: 1px 0;
}
aside > div > div {
  flex: 1;
  padding: 8px;
  font-family: v-bind(font);
}

@media (min-width: 700px) {
  .multi-column {
    column-count: 2;
    column-gap: 1.3rem;
    margin-top: 0.75rem;
  }
}
.sidebar {
  margin-top: 3rem;
}
@media (min-width: 700px) and (max-width: 1024px) {
  .sidebar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0;
  }
  .sidebar h3 {
    width: 100%;
    text-align: center;
  }
  .sidebar > a {
    flex: 0 1 48%;
    margin: 1.5rem 0;
    padding: 0;
  }
  .sidebar .pie {
    order: 3;
  }
}
@media (min-width: 1024px) {
  .sidebar {
    display: block;
    border-left: 1px solid;
    padding-left: 1.2rem;
    margin: 0;
  }
}

.main-text.multi-column {
  margin: 0;
}
.main-text.multi-column p {
  margin-bottom: 0.8rem;
}

.hogwarts {
  text-align: center;
  height: 100%;
  border: 2px solid transparent;
  outline: 3px solid v-bind(black);
  box-shadow: inset 0 0 0 1px v-bind(black);
  width: calc(100% - 4px);
  margin: 0;
  overflow: hidden;
}
.hogwarts__title {
  font: 800 24px/1 v-bind(font_sans_serif);
  text-transform: uppercase;
  background: v-bind(black);
  color: white;
  padding: 0.8rem 0.8rem 0.9rem;
  transition: 0.2s ease;
}
.hogwarts__image {
  height: 100%;
  position: relative;
}
.hogwarts__image img {
  transform: rotate(60deg);
  height: 150%;
  position: absolute;
  border: 0;
  width: 250%;
  left: -70%;
  bottom: -35%;
}
.hogwarts__image span {
  font-style: italic;
  max-width: 110px;
  position: absolute;
  top: 7%;
  left: 18%;
  font-size: 22px;
  line-height: 0.9;
  transform: rotate(-5deg);
}

.terrarium {
  margin-bottom: 2em;
}
.terrarium figure {
  height: 100%;
  margin: 1em;
}
.terrarium img {
  height: 100%;
  object-fit: cover;
  object-position: right;
}

.pie {
  line-height: 0;
  color: v-bind(gray);
  text-align: left;
}
.pie__image {
  margin: 0;
  border: 0;
  height: 15rem;
  object-fit: cover;
}
.pie__subtitle {
  background: #999;
  text-transform: uppercase;
  line-height: 1;
  padding: 0.4rem 1rem;
  font: 14px v-bind(font_sans_serif);
  color: v-bind(gray);
}
.pie__content {
  background: #666;
  padding: 1rem 1rem 1.2rem;
  color: v-bind(gray);
}
.pie__content p {
  margin-top: 0.5rem;
}

.sidebar-item {
  margin: 2rem 0;
  padding: 2rem 0 0;
}
.sidebar-item h5 {
  text-align: center;
  width: 100%;
  padding: 0.5rem;
  margin: auto;
}
.sidebar-item p {
  margin-top: 1rem;
}
.sidebar-item:hover h5 {
  transition: 0.3s ease;
  background: v-bind(black);
  color: #fff;
}

.item-with-image {
  margin-top: 1.5rem;
}
.item-with-image h4 {
  font-size: 24px;
  text-align: left;
  margin-bottom: 0.5rem;
  transition: 0.2s ease;
}
@media (min-width: 700px) {
  .item-with-image {
    margin: 0;
  }
}

@media (min-width: 1024px) {
  .captcha {
    margin-top: 0;
  }
}

.social {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: max-content auto;
  color: v-bind(gray);
  text-align: left;
}
.social__image {
  margin: 0;
  border: 0;
  grid-row: span 2;
  height: 100%;
  object-fit: cover;
}
.social__subtitle {
  background: #999;
  text-transform: uppercase;
  line-height: 1;
  padding: 0.4rem 1rem;
  color: v-bind(gray);
  font: 14px v-bind(font_sans_serif);
}
.social__content {
  background: #666;
  padding: 1rem;
  color: v-bind(gray);
  grid-column: 2;
}

.plan {
  padding-bottom: 1rem;
}
@media (min-width: 700px) and (max-width: 1024px) {
  .plan {
    grid-column: span 3;
    margin: 0 0 1.5rem;
  }
}
@media (min-width: 1024px) {
  .plan {
    border-bottom: 1px solid;
  }
}

.pie:hover img,
.social:hover img,
.menu:hover img,
.terrarium:hover img,
.plan:hover img {
  filter: grayscale(0);
}
</style>