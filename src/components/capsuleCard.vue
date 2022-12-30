<template>
  <div class="boundary">
    <div class="card-wrapper">
      <div class="card">
        <span v-if="!open">
        <h1>From {{nowDate}}</h1>
        <p style="font-size: 1.3rem;">在这里种下一颗时间胶囊<br />给未来的自己写封信吧！</p>
        </span>
        <span v-else>
        <h1>From {{writetime}}</h1>
        <h2>{{title}}</h2>
        <p style="white-space: pre-line;">{{content}}</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "capsuleCard",
  props:{
    writetime: Date,
    title: String,
    content: String,
  },
  data(){
    return{
      open:false,
      nowDate:""
    }
  },
  watch:{
    title:'change',
    content:'change'
  },
  mounted() {
    this.nowDate=this.getdate()
    if(this.title===undefined&&this.content===undefined) this.open=false
    else this.open=true
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
    change(){
      if(this.title===undefined&&this.content===undefined) this.open=false
      else this.open=true
    },
  }
}
</script>

<style scoped>
.boundary {
  width: 100%;
  overflow: hidden;
}
.card-wrapper {
  transform: translateY(-50vh);
  animation: showCard 1s ease-in-out 1s forwards;
}
.card {
  width: 35vw;
  margin: 6vh auto;
  padding: 2vh 4vh;
  background: white;
  position: relative;
  border-radius: 3px;
}
.card:after {
  content: '';
  background: repeating-linear-gradient(45deg, #114abc, #114abc 10px, #fff 10px, #fff 20px);
  padding: 20px;
  border-radius: 6px;
  box-shadow: 1px 2px 6px 1px rgba(76, 66, 47, 0.75);
  width: calc(100% - 24px);
  height: calc(100% - 24px);
  position: absolute;
  top: -8px;
  left: -8px;
  z-index: -1;
}
.card-wrapper h1 {
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
}
h1 {
  display: inline-block;
  margin: 2vh 0 2vh -5.5vh;
  padding: 1vh 2vh 1vh 5vh;
  background: #bf2010;
  border-width: 1px 1px 1px 0px;
  border-style: dashed;
  color: #fff;
  box-shadow: 2px 0 0 2px #bf2010, 2px 2px 0 2px #bf2010, 2px -2px 0 2px #bf2010, inset 0 0 5px 2px rgba(0, 0, 0, 0.2);
}
h2 {
  font-family: 'Poppins', sans-serif;
  text-align: center;
}
p {
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  line-height: 140%;
  margin: 4vh 0;
  text-align: center;
}
@keyframes showCard {
  to {
    transform: translateY(0vh);
  }
}
</style>