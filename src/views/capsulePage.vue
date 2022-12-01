<template>
  <header-tag></header-tag>
  <tag-cloud></tag-cloud>
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
.body {

}
</style>