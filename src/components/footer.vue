<template>
  <v-footer
    dark
    padless
    
  >
    <v-card
      tile
      class="red lighten-1 text-center flex"
      >
      <v-card-title class="white">
        <strong class="subheading grey--text" >Get connected with us on social networks!</strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          light
          icon
        >
          <v-icon size="30px" >
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }

</script>

<style>

</style>