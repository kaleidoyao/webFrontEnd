<template>
  <header-tag></header-tag>
  <div class="content"><tag-cloud></tag-cloud></div>

</template>

<script>
import HeaderTag from "@/components/headerTag";
import TagCloud from "@/components/tagCloud";
export default {
  name: "capsulePage",
  components: {TagCloud, HeaderTag}
}
</script>

<style scoped>
.content {
  margin-top: 200px;
}
</style>