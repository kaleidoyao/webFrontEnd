<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <button class="button" style="vertical-align: middle"><span>Pick up</span></button>
</template>

<script>
export default {
  name: "bottleButton"
}
</script>

<style scoped>
.button {
  display: inline-block;
  border-radius: 20px;
  border: none;
  background: #14a9d0;
  color: white;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-size: 13px;
  width: 10em;
  padding: 0.8em;
  transition: all 0.4s;
  cursor: pointer;
  margin-top: 2%;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.4s;
}

.button span:after {
  content: 'a bottle';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.7s;
}

.button:hover span {
  padding-right: 4.2em;
}

.button:hover span:after {
  opacity: 4;
  right: 0;
}
</style>