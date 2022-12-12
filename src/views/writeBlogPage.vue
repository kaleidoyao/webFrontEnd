<template>
  <back-ground></back-ground>
  <header-tag ref="header"></header-tag>
  <div class="content" ref="content">
    <div class="title">
      <input type="text" placeholder="在此输入标题..." class="input1" @blur="inputTitle($event)">
    </div>
    <div class="mainText">
      <textarea class="input2" placeholder="在此输入正文..." @blur="inputContent($event)"></textarea>
    </div>
    <button class="button" v-on:click="postBT">点击发布</button>
  </div>
</template>

<script>
import HeaderTag from "@/components/headerTag";
import BackGround from "@/components/backGround";
import router from "@/router";
import axios from "axios";
import {ElMessageBox} from "element-plus";
export default {
  name: "writeBlogPage",
  components: {BackGround, HeaderTag},
  mounted() {
    let height = this.$refs.header.$el.offsetHeight;
    this.$refs["content"].style.marginTop = height + 'px';
    this.userid = router.currentRoute.value.query.id;
    console.log(this.userid);
  },
  methods: {
    getdate() {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    },
    inputTitle(event) {
      let _this = this;
      _this.blogTitle = event.target.value;
      console.log(_this.blogTitle)
    },
    inputContent(event) {
      let _this = this;
      _this.blogContent = event.target.value;
      console.log(_this.blogContent)
    },
    postBT() {
      let _this = this;
      let result = -1;
      axios.get("http://localhost:8088/writeBlog", {
        params: {
          userid: _this.userid,
          title: _this.blogTitle,
          content: _this.blogContent,
          date: this.getdate()
        }
      }).then((response) => {
        result = response.data;
        console.log(result)
        ElMessageBox.confirm('发表成功','提示',{
          confirmButtonText: '确定', //确定按钮的文本内容
          showCancelButton: false, //是否可通过点击遮罩关闭
          type: 'success', //消息类型，用于显示图标
        }).then(() => {
          console.log(_this.userid)
          router.push({
            name:"blogPage",query:{id:_this.userid}
          })
        }).catch(() => {

        });
      })
    }
  },
  data() {
    return {
      blogTitle: "",
      blogContent: "",
      userid: 0,
      date: ""
    }
  }
}
</script>

<style scoped>
.content {
  /*display: inline-block;*/
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  border-left: 2px solid rgba(255, 255, 255, 0.7);
  border-top: 2px solid rgba(255, 255, 255, 0.7);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  min-height: 100vh;
  text-align: center;
  /*vertical-align: bottom;*/
  padding-top: 5%;
  /*overflow-x:hidden;*/
}

text {
  margin-right: 10px;
  line-height: 40px;
  font-size: 25px;
}

input {
  height: 50px;
  width: 60%;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 35px;
  border: 0;
  outline: 0;
}

input::-webkit-input-placeholder {
  font-family: 'Poppins', sans-serif;
}

textarea {
  height: 60vh;
  width: 60%;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  font-size: 20px;
  border: 0;
  outline: 0;
}

textarea::-webkit-input-placeholder {
  font-family: 'Poppins', sans-serif;
}

.button {
  margin-top: 10px;
  border-radius: 20px;
  border: none;
  background: #14a9d0;
  color: white;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-size: 13px;
  width: 10em;
  padding: 0.8em;
}
</style>