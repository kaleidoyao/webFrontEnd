<template>
  <div>
<!--    <menu-button></menu-button>-->
    <like-button></like-button>
  </div>
</template>

<script>
import MenuButton from "@/components/menuButton";
import LikeButton from "@/components/likeButton";
export default {
  name: "testPage",
  // eslint-disable-next-line vue/no-unused-components
  components: {LikeButton, MenuButton}
}
</script>

<style scoped>

</style>