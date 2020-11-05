<template>
  <div class="loader">Loading...</div>
</template>

<script>
export default {
  name: 'PageLoader',
};
</script>

<style lang="scss" scoped>
.loader,
.loader:after {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -99999px;
  border-top: 11px solid rgba($BurntOrange, 0.2);
  border-right: 11px solid rgba($BurntOrange, 0.2);
  border-bottom: 11px solid rgba($BurntOrange, 0.2);
  border-left: 11px solid $BurntOrange;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
