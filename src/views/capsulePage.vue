<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <back-ground></back-ground>
  <div class="body">
    <header-tag ref="header"></header-tag>
    <div class="content" ref="content">
      <span class="section1">
        <div class="userCard">
          <personal-info></personal-info>
        </div>
        <div class="capsules">
          <time-capsule></time-capsule>
          <time-capsule></time-capsule>
        </div>
      </span>
      <span class="section2"></span>
      <span class="section3">
        <calendar-item></calendar-item>
      </span>
    </div>
  </div>
</template>

<script>
import BackGround from "@/components/backGround";
import HeaderTag from "@/components/headerTag";
import TimeCapsule from "@/components/timeCapsule";
import PersonalInfo from "@/components/personalInfo";
import CalendarItem from "@/components/calendarItem";
export default {
  name: "capsulePage",
  components: {CalendarItem, PersonalInfo, TimeCapsule, HeaderTag, BackGround},
  mounted() {
    let height = this.$refs.header.$el.offsetHeight;
    this.$refs["content"].style.marginTop = height + 'px';
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
.section1 {
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
.userCard {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20%;
}
.capsules {
  display: flex;
  align-items: center;
  justify-content: center;
}
.section2 {
  background-color: rgba(255,255,255,0.3);
  border-radius: 15px;
  border-left: 2px solid rgba(255,255,255,0.7);
  border-top: 2px solid rgba(255,255,255,0.7);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  width: 45%;
  height: 550px;
  display: inline-block;
  vertical-align: top;
  margin: 5px;
}
.section3 {
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
</style>