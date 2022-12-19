<template>
  <div class="commentWrapper">
    <blockquote class="comment">"Be like the bird who, pausing in her flight awhile on boughs too slight, feels them give way beneath her, and yet sings, knowing she hath wings." &mdash; Victor Hugo</blockquote>
  </div>
</template>

<script>
export default {
  name: "commentArea"
}
</script>

<style scoped>
.commentWrapper {
  width: 90%;
  margin: auto;
}
.comment {
  position: relative;
  margin: 40px 0;
  padding: 40px;
  background-color: #f8f8f8;
  border-radius: 16px;
  font-family: 'Poppins', sans-serif;
}
.comment::before {
  content: url(https://icons.craftwork.design/static/media/QuotesFill.f65b03951f44e212816420b00909f4df.svg);
  position: absolute;
  top: -10px;
  left: -10px;
  transform: scale(2);
  opacity: 0.1;
}
.comment::after {
  content: url(https://icons.craftwork.design/static/media/QuotesFill.f65b03951f44e212816420b00909f4df.svg);
  position: absolute;
  bottom: -10px;
  right: -10px;
  transform: scale(2) rotate(180deg);
  opacity: 0.1;
}

</style>