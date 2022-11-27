<template>
  <button id="button">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
    <span class="button-text">Explore</span>
  </button>
</template>

<script>
export default {
  name: "ToDoList"
}
</script>

<style scoped>
.section #button {
  position: absolute;
  top: 50%;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  font-family: 'Poppins', sans-serif;
}
#button .circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: #282936;
  border-radius: 1.625rem;
}
#button .circle .icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
}
#button .circle .icon.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
}
</style>