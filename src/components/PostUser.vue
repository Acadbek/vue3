<template>
  <div>
    <input type="text" v-model="name" />
    <input type="text" v-model="username" />
    <button @click="post">add user</button>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    let name = ref(null);
    let username = ref(null);

    const post = async () => {
      await axios.post("http://localhost:3000/users", {
        name: name.value,
        username: username.value,
      });
      name.value = "";
      username.value = "";
    };
    return { name, username, post };
  },
};
</script>
