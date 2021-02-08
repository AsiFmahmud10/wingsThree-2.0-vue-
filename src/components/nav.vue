<template>
  <nav>
    <v-toolbar class="text-uppercase grey--text" app fixed dense >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="font-weight-bold " style="color:rgb(239 83 80 / 89%)"  >WiNGS</span> THREE
      </v-toolbar-title>
      <v-spacer></v-spacer>
       <v-btn text class="hidden-md-and-down " v-for="i in 3" :key="i" ><router-link :to="{name:'Architecture' , params:{id:i-1}}" >{{items[i-1].title}}</router-link></v-btn>
       
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer">
       <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Branches
          </v-list-item-title>

          <v-list-item-subtitle>
            we know what we do
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title route :to='item.route'>{{
              item.title
            }}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Architecture", icon: "", route: "/architecture" },
        { title: "Graphics Design", icon: "", route: "/graphics" },
        { title: "Web Development", icon: "", route: "/web" },
      ],
      drawer: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
a {
  text-decoration: none;
  padding: 5px;
  display: block;
}
.router-link-exact-active {
  color:crimson;
}
</style>
