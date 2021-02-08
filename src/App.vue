<template>
<v-app>
    <Nav/>
<v-main  class="grey lighten-4">
   <router-view></router-view>
 
</v-main>
   <Fotter />
</v-app>   
</template>

<script>

import Nav from '@/components/nav.vue'
import Fotter from '@/components/footer.vue'


export default {
  name: "App",
  components: {
    Nav,Fotter
   
  },
  data() {
    return {
     
    };
  },
};
</script>

