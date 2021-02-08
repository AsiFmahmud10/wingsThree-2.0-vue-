<template>
  <v-card
    class="mx-auto my-12  main  orange--text lighten-2 text-overline font-weight-medium d-flex justify-space-around align-center"
    width="70%"
    height="570px"
    min-width="400px "
  >
    <div class="fl hidden-md-and-down ">
      <lottie-player
        src="https://assets4.lottiefiles.com/packages/lf20_8ywcoffy.json"
        background="transparent"
        speed="1"
        style="width: 500px;"
        loop
        autoplay
      ></lottie-player>
    </div>

    <div class="font-weight-bold " style="color:#e69b09">
      <p>name : {{ obj.name }}</p>
      <p>University : {{ obj.university }}</p>
      <p>Email : {{ obj.email }}</p>
      <div class="d-flex justify-center flex-wrap"  >
<v-btn width="167px" class="mr-2 mt-3 orange lighten-2 "  elevation="1" small x-small  justify="center" v-for="skill in obj.skills" :key="skill">{{ skill }}</v-btn>

</div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["obj"],
  data() {

  },
   mounted() {
    
    },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

.theme--light.v-chip:not(.v-chip--active) {
  background: #bebbba;
  color: rgb(15, 30, 240);
}
.v-chip.v-size--default {
  font-weight: lighter;
  margin-right: 5px;
  border-radius: 9px;
}
.main {
  background: #ffffff;
}
</style>
