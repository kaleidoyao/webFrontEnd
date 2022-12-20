<template>
  <div>
<!--    <menu-button></menu-button>-->
<!--    <like-button></like-button>-->
    <text-type></text-type>
  </div>
</template>

<script>
import MenuButton from "@/components/menuButton";
import LikeButton from "@/components/likeButton";
import TextType from "@/components/textType";
export default {
  name: "testPage",
  // eslint-disable-next-line vue/no-unused-components
  components: {TextType, LikeButton, MenuButton}
}
</script>

<style scoped>

</style>