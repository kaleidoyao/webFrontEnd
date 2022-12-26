<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <div>
    <ul id="cardList" class="cards">
      <li v-for="drifter in myDrifter" :key="drifter.id">
          <div class="card transform" ref="card">
            <div class="bottle"></div>
<!--            <div class="title"><h2>{{drifter.title}}</h2></div>-->
            <div class="title"><h2>222</h2></div>
            <div class="card-content">
<!--              <p>{{drifter.content}}</p>-->
              <p>hahahahaha</p>
            </div>
          </div>
      </li>
<!--      <li>-->
<!--        <div class="card transform">-->
<!--          <div class="bottle"></div>-->
<!--          <div class="title"><h2>222</h2></div>-->
<!--          <div class="card-content">-->
<!--            <p>hahahahaha</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </li>-->
      <li><div class="card transform"></div></li>
      <li><div class="card transform"></div></li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "cardList",
  // props:{
  //   drifter: {
  //     title: String,
  //     content: String,
  //     time: String,
  //     ownerid:Number,
  //     id:Number,
  //   },
  //   userid:Number
  // },
  data(){
    return{
      myDrifter:null,
      userid:-1
    }
  },
  mounted() {
    // eslint-disable-next-line vue/no-mutating-props
    this.userid = router.currentRoute.value.query.id;
    // let cards = document.querySelectorAll(".card");
    // console.log(555)
    // console.log(cards)
    // for(let card of cards) {
    //   console.log(1234)
    //   card.addEventListener('click', ()=>{
    //     console.log(123)
    //     if(card.classList.contains('transform-active')) card.classList.remove('transform-active');
    //     else card.classList.add('transform-active');
    //   })
    // }
    console.log(this.$refs['card'])

    let _this=this
    let result=null;
    axios.get("http://localhost:8088/getMyDrifter",{
      params: {
        pickerid:_this.userid
      }
    }).then((response)=>{
      result = response.data;
      _this.myDrifter=result
      console.log(_this.myDrifter)
    }).catch((error)=>{
      console.log(error)
    });
  },
  methods:{
    // showCard(id){
    //   if(card.classList.contains('transform-active')) card.classList.remove('transform-active');
    //   else card.classList.add('transform-active');
    // }
  }
}
</script>

<style scoped>
.cards {
  padding: 0;
  margin-top: 3vh;
  margin-right: auto;
  margin-left: auto;
  width: 95%;
}
.cards li {
  display: block;
  width: 100%;
  padding-bottom: 10px;
}

</style>