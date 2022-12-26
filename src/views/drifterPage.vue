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
          <open-envelop :content="drifter.content"></open-envelop>
        </div>
        <div ref="writeDrifter" class="writeDrifter">
          <div class="title" style="text-align: center;">
            <input type="text" placeholder="在此输入标题..." class="input1" v-model="title">
          </div>
          <div class="mainText" style="text-align: center;">
            <textarea class="input2" placeholder="在此输入正文..." v-model="content"></textarea>
          </div>
          <div style="text-align: center;">
            <button id="throwButton" v-on:click="throwBT"><span>throw</span></button>
          </div>
        </div>
      </span>
      <span class="throwAndCatch">
        <h4 style="font-weight: 500; padding-left: 3vh; margin-top: 2vh; margin-bottom: 2vh;">来自漂流瓶的信</h4>
        <div style="height: 1px; background-color: black; width: 90%; margin-right: auto; margin-left: auto;"></div>
        <div>
          <ul id="cardList" class="cards">
            <li v-for="drifter in myDrifter" :key="drifter.id">
              <div style="text-align: right; padding-right: 1vh;"><img src="../assets/icons/exit.png" style="width: 2vh; cursor: pointer;" alt="" @click="deleteBT(drifter.id)" /></div>
              <card-item :drifter="{title:drifter.title,content:drifter.content,time:drifter.time,owner:drifter.ownerid,drifterid:drifter.id}" :userid="userid"></card-item>
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
import {ElMessageBox} from "element-plus";
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
  data(){
    return{
      title:"",
      content:"",
      userid:-1,
      drifter:Drifter,
      myDrifter:[],
      currentDrifterID:-1,
    }
  },

  methods:{
    getdate() {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      return year + seperator1 + month + seperator1 + strDate;
    },
    throwBT() {
      let _this=this
      let result = -1;
      axios.get("http://localhost:8088/writeDrifter",{
        params: {
          ownerid:this.userid,
          title:_this.title,
          content:_this.content,
          time:_this.getdate()
        }
      }).then((response)=>{
        result = response.data;
        console.log(result)
        _this.title=""
        _this.content=""
        ElMessageBox.confirm('成功扔出漂流瓶！','提示',{
          confirmButtonText: '确定', //确定按钮的文本内容
          showCancelButton: false, //是否可通过点击遮罩关闭
          type: 'success', //消息类型，用于显示图标
        }).then(() => {

        }).catch(() => {
        })
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
        if(result!==""){
            _this.drifter=result
            ElMessageBox.confirm('成功捞到一个漂流瓶！','提示',{
              confirmButtonText: '确定', //确定按钮的文本内容
              showCancelButton: false, //是否可通过点击遮罩关闭
              type: 'success', //消息类型，用于显示图标
            }).then(() => {
              this.$refs["writeDrifter"].classList.add('hidden');
              this.$refs["showDetail"].classList.remove('hidden');
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
            }).catch(() => {
          })
        }
        else {
          ElMessageBox.confirm('漂流瓶已经被捞完啦！过几天再来吧！','提示',{
            confirmButtonText: '确定', //确定按钮的文本内容
            showCancelButton: true,
            cancelButtonText:'取消',
            type: 'warning', //消息类型，用于显示图标
          }).then(() => {
          }).catch(() => {
          })
        }
      }).catch((error)=>{
        console.log(error)
      });
    },

    deleteBT(id) {
      let result=null;
      ElMessageBox.confirm('确定要删除这个漂流瓶吗？','提示',{
        confirmButtonText: '确定', //确定按钮的文本内容
        showCancelButton: true,
        cancelButtonText:'取消',
        type: 'warning', //消息类型，用于显示图标
      }).then(() => {
        axios.get("http://localhost:8088/deleteDrifter",{
          params:{
            id:id
          }
        }).then((response)=>{
          result=response.data
          console.log(result)
        })
        router.go(0)
      }).catch(() => {
      })
    },
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
  height: 700px;
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
.delete-button {
  border: 0.1rem solid #575757;
  border-radius: 10px;
  background-color: white;
  color: #575757;
  cursor: pointer;
}

input {
  height: 5vh;
  width: 70%;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 3vh;
  border: 0;
  outline: 0;
  margin-top: 5vh;
}
input::-webkit-input-placeholder {
  font-family: 'Poppins', sans-serif;
  font-size: 3vh;
}
textarea {
  height: 40vh;
  width: 70%;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  font-size: 1em;
  border: 0;
  outline: 0;
}
textarea::-webkit-input-placeholder {
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
}
input, textarea {
  font-family: 'Poppins', sans-serif;
}
input:focus, textarea:focus {
  box-shadow: 0 0 2px #63a4e0;
}
#throwButton {
  color: #000;
  padding: 1vh 10vh;
  margin-top: 2vh;
  border-radius: 36px;
  font: 600 2vh 'Poppins';
  letter-spacing: 1px;
  cursor: pointer;
}
</style>