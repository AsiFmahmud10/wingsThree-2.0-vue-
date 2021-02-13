<template>
  <v-container >
   <v-row>
     <v-col v-for="i in 4" :key="i" cols="12" sm="6" >
       
       <v-img
  lazy-src="https://picsum.photos/id/11/10/6"
  max-height="400"
 
  src="https://picsum.photos/id/11/500/300"
></v-img>
         
      
       
     </v-col>
   </v-row>

 </v-container>

</template>

<script>
export default {

}
</script>

<style>

</style>