<template>
  <v-app>
    <div class="browser">
      <search-bar />
      <router-view></router-view>
    </div>
    <post-form-modal />
  </v-app>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import { mapActions } from "vuex";
import PostFormModal from "./components/modal/PostFormModal.vue";

export default {
  name: "App",
  components: { SearchBar, PostFormModal },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["callInitApi"]),
  },
  created() {
    this.callInitApi();
  },
};
</script>
