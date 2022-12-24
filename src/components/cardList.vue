<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <div>
    <ul id="cardList" class="cards">
      <li>
<!--        <div class="card transform">-->
          <div class="card transform" v-for="drifter in myDrifter" :key="drifter.id">
            <div class="bottle"></div>
            <button id="deleteButton" @click="deleteBT(drifter.id)"><span>delete</span></button>
            <div class="title"><h2>{{drifter.title}}</h2></div>
            <div class="card-content">
              <p>{{drifter.content}}</p>
            </div>
          </div>
<!--        </div>-->
      </li>
      <li><div class="card transform"></div></li>
      <li><div class="card transform"></div></li>
      <li><div class="card transform"></div></li>
    </ul>
  </div>
</template>

<script>
import router from "@/router";
import axios from "axios";

export default {
  name: "cardList",
  data(){
    return{
      myDrifter:[],
      userid:-1
    }
  },
  mounted() {
    this.userid = router.currentRoute.value.query.id;
    let cards = document.querySelectorAll(".card");
    for(let card of cards) {
      card.addEventListener('click', ()=>{
        if(card.classList.contains('transform-active')) card.classList.remove('transform-active');
        else card.classList.add('transform-active');
      })
    }
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
.card {
  height: 12vh;
  width: 100%;
  margin-bottom: 1.5vh;
  cursor: pointer;
  overflow-y: hidden;
  background-color: rgba(255,255,255,0.6);
  border-radius: 10px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
}
.bottle {
  display: inline-block;
  vertical-align: top;
  margin-top: 0.5vh;
  width: 10vh;
  height: 10vh;
  background: url("../assets/imgs/bottle.png") no-repeat center;
  background-size: 250%;
}
.title {
  display: inline-block;
  width: 30vh;
  height: 10vh;
  margin-top: 0.5vh;
  margin-left: 1vw;
  font-family: 'Poppins', sans-serif;
  color: #404040;
}
.card p {
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  font-family: 'Poppins', sans-serif;
  word-wrap: break-word;
  word-break: break-all;
}
.transform-active {
  background-color: rgba(255,255,255,0.9);
  height: 200px;
  width: 100%;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.2);
}
.transform {
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
</style>