<template>
  
  <div><br>
  <Card :obj="datas[id]"/>
    <br><br>    
  </div>
</template>

<script>
import Card from "@/components/card.vue";
export default {
  components: {Card},
  props:['id'],
data() {
  return {
          datas : [
              {id:"0",name: "Asif Mahmud", university : "Khulna university",email:"mhamudasif2@gmail.com",skills:['html','css','vue']},
               {id:"1",name: "Naim Imteaz", university : "Ruet",email:"imteazahamed710@gmail.com",skills:['Interior Design','Plan Design','Building Construction',"3D model"]},
                {name: "Manosh kumar Barman", university : "NSU",email:"mhamudasif2@gmail.com",skills:['html','css','vue']},

          ]
  }
},
}
</script>

<style scoped>
div{
  width: 100%;
  height: 100%;
  background: rgba(194, 194, 245, 0.966);
}
</style>