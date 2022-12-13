<template>
  <header-tag></header-tag>
  <back-ground></back-ground>
  <div class="content"><tag-cloud></tag-cloud></div>

</template>

<script>
import HeaderTag from "@/components/headerTag";
import TagCloud from "@/components/tagCloud";
import BackGround from "@/components/backGround";
export default {
  name: "capsulePage",
  components: {BackGround, TagCloud, HeaderTag}
}
</script>

<style scoped>
.content {
  margin-top: 200px;
}
</style>