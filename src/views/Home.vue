<template>
  <div class="main">
    <v-container fluid>
      <v-layout row wrap >
        <v-flex xs12 md6 lg6 sm6 justify-center >
          <div class="headtitle" >
            <span style="font-size:30px"
              text-uppercase class="grey--text text-lg-subtitle-1"
              >WELCOME</span
            ><br />
            <h1  style="color:#555"   class="grey--text">
              TO WINGS THREE</h1 >
          </div>
         
        </v-flex>

        <v-flex xs12 lg4 md6 sm6>
          <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_avt7utpz.json"
            background="#FFFFFF"
            speed=".9"
            style="width: 100%;"
            loop
            autoplay
          ></lottie-player>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- 
          
                                        Key -feature                        
        
         -->
    <br />
    <section class="service">
      <div class="con">
        <div
          class="one"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-offset="200"
        >
          <i class="fas fa-cogs"></i>
          <h3>Responsive</h3>
        </div>
        <div
          class="one"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-offset="200"
        >
          <i class="fab fa-artstation"></i>

          <h3>Responsive</h3>
        </div>
        <div
          class="one"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-offset="200"
        >
          <i class="fas fa-brain"></i>

          <h3>Responsive</h3>
        </div>
        <div
          class="one"
          data-aos="zoom-in"
          data-aos-duration="1300"
          data-aos-offset="200"
        >
          <i class="fas fa-home"></i>

          <h3>Responsive</h3>
        </div>
      </div>
    </section>
    <br /><br /><br />
    <!-- 
          
                                        slider                       
        
         -->

              <!-- frst flex
        
 -->
    <v-container class="my-15" mx-auto>
    <v-row >
       
       
        <v-col  cols="12" md="4" order-md="2" order-sm="1" order-xs="1">
          <div style="height:100%;width:100%">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1 ml-3" >
                  ABOUT US
                </v-list-item-title>
                <v-list-item-subtitle class="ml-3"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem nulla quas impedit autem aliquam, accusamus,
                  error harum odio velit atque aliquid sapiente asperiores
                  eveniet voluptatum quisquam mollitia maxime praesentium.
                  Minima iure soluta consequatur! Incidunt repellat ab sapiente
                  nesciunt, sunt dignissimos laboriosam cumque illum soluta
                  nulla porro voluptas, praesentium exercitationem
                  aliquid!</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="#ff6584"
              ></v-list-item-avatar>
            </v-list-item>
          </div>
        </v-col>

         <v-col  cols="12" md="7" order-md="1" order-sm="2"  order-xs="2" class="mb-3">
          <div class="imga">
            <img src="../assets/undraw1.png" alt="" style="width:100%" />
          </div>
        </v-col>

        </v-row>
        <!-- 

                                            -->

              <!-- SECOND
        
 -->

        
      <br /><br />
  
     
      <v-row  >
        <v-col  cols="12" md="6" >
          <div style="height:100%">
            <v-list-item three-line>
              <v-list-item-avatar
                tile
                size="80"
                color="#00897b"
              ></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline ml-3">
                  ARCHITECTURE
                </v-list-item-title>
                <v-list-item-subtitle  class="ml-3"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem nulla quas impedit autem aliquam, accusamus,
                  error harum odio velit atque aliquid sapiente asperiores
                  eveniet voluptatum quisquam mollitia maxime praesentium.
                  Minima iure soluta consequatur! Incidunt repellat ab sapiente
                  nesciunt, sunt dignissimos laboriosam cumque illum soluta
                  nulla porro voluptas, praesentium exercitationem
                  aliquid!</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="mb-3" >
          <div data-aos="fade-left">
            <img src="../assets/undraw3.png" alt="" style="width:100%" />
          </div>
        </v-col>

      
      </v-row> 
      <br /><br />

       
        <!-- third flex

 -->

          <v-row>
        <v-col md="6" cols="12" order-md="2" order-sm="1">
          <div style="height:100% ;">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1  ml-3">
                  WEB DEVLOPMENT
                </v-list-item-title>
                <v-list-item-subtitle class="ml-3"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem nulla quas impedit autem aliquam, accusamus,
                  error harum odio velit atque aliquid sapiente asperiores
                  eveniet voluptatum quisquam mollitia maxime praesentium.
                  Minima iure soluta consequatur! Incidunt repellat ab sapiente
                  nesciunt, sunt dignissimos laboriosam cumque illum soluta
                  nulla porro voluptas, praesentium exercitationem
                  aliquid!</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="red"
              ></v-list-item-avatar>
            </v-list-item>
          </div>
        </v-col>
        <v-col  class="mb-12 mb-3" md="6" cols="12"  order-md="1" order-sm="2" >
            <div data-aos="fade-right" data-aos-offset="560">
              <img src="../assets/undraw2.png" style="width:100%" />
            </div>
        </v-col>
       
       
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Fotter from "@/components/footer.vue";

export default {
  components: { Fotter },
  data() {
    return {
      url: "../assets/undraw1.png",

      items: [
        { head: "Top western road tripsW", sub: "1,000 miles of wonder" },
        { head: "asdsad", sub: "1,000 miles of wonder" },
        { head: "asdsad", sub: "1,000 miles of wonder" },
      ],
    };
  },
  async mounted() {
    const AOS = await import("aos");
    AOS.init({
      duration: 1500,
      offset: 550,
    });
  },
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.headtitle{
    position: absolute;
    top: 7%;
    left: 17%;
    text-align: center;
}


.main {
  background: rgb(255, 255, 255);
  height: 100%;
}

.service {
  margin-top: 40px;
  width: 100%;
}
.con {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.one {
  height: 170px;
  background-color: #ffffff;
  color: rgba(0, 0, 0, 0.87);
  flex: 1 1 200px;
  text-align: center;
  box-shadow: 0px 0px 1px 0px black;
  margin: 10px;
}
</style>
