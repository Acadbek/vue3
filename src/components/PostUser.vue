<template>
  <div>
    <input type="text" v-model="name" />
    <input type="text" v-model="username" />
    <button @click="post">add user</button>
    <div v-if="error">
      <h1 style="color: red">
        {{ error }}
      </h1>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    let name = ref("");
    let username = ref("");
    let error = ref("");

    const post = async () => {
      if (name.value == "" || username.value == "") {
        error.value = "inputlarni toldir";
      } else {
        await axios.post("http://localhost:3000/users", {
          name: name.value,
          username: username.value,
        });
        error.value = "";
      }
      name.value = "";
      username.value = "";
    };
    return { name, username, post, error };
  },
};
</script>
