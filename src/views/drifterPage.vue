<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <menu-button></menu-button>
  <back-ground></back-ground>
  <div class="body">
    <header-tag ref="header" :usrid=userid></header-tag>
    <div class="content" ref="content">
      <span class="driftBottleAndArrest">
        <drifter-bottle class="bottle"></drifter-bottle>
        <div ref="pick" class="pick">
          <bottle-button button-name="pick up"></bottle-button>
        </div>
        <div ref="throw" class="throw">
          <bottle-button button-name="throw"></bottle-button>
        </div>
      </span>
      <span class="blogContent" ref="drifterContent">
        <div ref="showDetail" class="detail hidden">
          <h1>Letters From Afar</h1>
          <open-envelop></open-envelop>
        </div>
        <div ref="writeDrifter" class="writeDrifter">
          <div class="title">
            <input type="text" placeholder="在此输入标题..." class="input1" @blur="inputTitle($event)">
          </div>
          <div class="mainText">
            <textarea class="input2" placeholder="在此输入正文..." @blur="inputContent($event)"></textarea>
          </div>
        </div>
      </span>
      <span class="throwAndCatch">
        <button id="throwButton" v-on:click="throwBT"><span>throw</span></button>
        <button id="myDrifterButton" v-on:click="myDrifterBT"><span>我的漂流瓶</span></button>
        <div>
          <ul id="cardList" class="cards">
            <li>
              <card-item></card-item>
              <card-item></card-item>
            </li>
          </ul>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import OpenEnvelop from "@/components/openEnvelop";
import BackGround from "@/components/backGround";
import HeaderTag from "@/components/headerTag";
import DrifterBottle from "@/components/drifterBottle";
import BottleButton from "@/components/bottleButton";
import axios from "axios";
import MenuButton from "@/components/menuButton";
import router from "@/router";
import CardItem from "@/components/cardItem";
class Drifter {
  id;
  ownerid;
  time;
  title;
  content;
  pickerid;
  ispicked;
}
export default {
  components: {CardItem, MenuButton, OpenEnvelop, BottleButton, DrifterBottle, HeaderTag, BackGround},
  mounted() {
    this.$refs.pick.addEventListener('click',this.pickBT);
    this.$refs.throw.addEventListener('click',this.displayWriteDrifter);
    let height= this.$refs.header.$el.offsetHeight;
    this.$refs["content"].style.marginTop = height + 'px';
    this.userid = router.currentRoute.value.query.id;
    console.log(this.userid);

    // let _this=this
    // let result=null;
    // axios.get("http://localhost:8088/getMyDrifter",{
    //   params: {
    //     pickerid:_this.userid
    //   }
    // }).then((response)=>{
    //   result = response.data;
    //   _this.myDrifter=result
    //   console.log(_this.myDrifter)
    // }).catch((error)=>{
    //   console.log(error)
    // });
  },
  data(){
    return{
      title:"",
      content:"",
      userid:-1,
      drifter:Drifter,
      myDrifter:null,
      currentDrifterID:-1,
    }
  },

  methods:{
    throwBT(){
      let _this=this
      let result = -1;
      axios.get("http://localhost:8088/writeDrifter",{
        params: {
          ownerid: _this.userid,
          title:_this.title,
          content:_this.content
        }
      }).then((response)=>{
        result = response.data;
        console.log(result)
      }).catch((error)=>{
        console.log(error)
      });
      this.$refs["writeDrifter"].classList.add('hidden');
      this.$refs["showDetail"].classList.remove('hidden');
    },

    pickBT(){
      let _this=this
      let result=null;
      axios.get("http://localhost:8088/getDrifter",{
        params: {
          pickerid:_this.userid
        }
      }).then((response)=>{
        result = response.data;
        _this.drifter=result
        console.log(_this.drifter)
      }).catch((error)=>{
        console.log(error)
      });
    },

    myDrifterBT(){
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

    deleteBT(id){
      let result=null;
      axios.get("http://localhost:8088/deleteDrifter",{
        params: {
          id:id
        }
      }).then((response)=>{
        result = response.data;
        console.log(result)
      }).catch((error)=>{
        console.log(error)
      });
    },
    // inputTitle(event){
    //
    // },
    // inputContent(event){
    //
    // },
    displayWriteDrifter(){
      this.$refs["showDetail"].classList.add('hidden');
      this.$refs["writeDrifter"].classList.remove('hidden');
    }
}
}
</script>

<style scoped>
.body {
  width: 100%;
  min-height: 100vh;
}

.content {
  display: flex;
  justify-content: center;
}
.driftBottleAndArrest {
  background-color: rgba(255,255,255,0.3);
  border-radius: 15px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  width: 25%;
  height: 500px;
  display: inline-block;
  vertical-align: top;
  margin: 5px;
  text-align: center;
}
.throw{
  margin-top: 10px;
}
.bottle {
  margin-top: 3%;
}
.pick {
  display: flex;
  align-items: center;
  justify-content: center;
}

.blogContent {
  background-color: rgba(255,255,255,0.3);
  border-radius: 15px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  width: 45%;
  height: 650px;
  display: inline-block;
  vertical-align: top;
  margin: 5px;
}
.blogContent h1 {
  color: #404040;
  font-family: 'Poppins', sans-serif;
  margin-left: 5%;
}
.throwAndCatch {
  background-color: rgba(255,255,255,0.3);
  border-radius: 15px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  width: 25%;
  height: 500px;
  display: inline-block;
  vertical-align: top;
  margin: 5px;
}
.hidden {
  display: none;
}

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