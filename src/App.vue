<template>
  <div>
    <PostUser />
    <ul style="text-align: center">
      <li style="list-style-type: none" v-for="(item, i) in users" :key="i">
        <h1>
          {{ item.name }}
        </h1>
        <h3>{{ item.username }}</h3>
      </li>
    </ul>
    <Homes />
  </div>
</template>

<script>
import functions from "./composable/functions";
import PostUser from "./components/PostUser.vue";
import { ref } from "vue";
export default {
  setup() {
    let name = ref(null);
    let username = ref(null);

    const { users, getData } = functions();
    getData();

    return { users, getData, name, username };
  },
  components: { PostUser },
};
</script>
