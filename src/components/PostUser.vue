<template>
  <div>
    <input type="text" v-model="name" />
    <input type="text" v-model="username" />
    <button @click="post">add user</button>
  </div>
</template>

<script>
import functions from "../composable/functions";
import { ref } from "vue";

export default {
  setup() {
    let name = ref(null);
    let username = ref(null);

    const { addUser } = functions()

    const post = () => {
        addUser(name.value, username)
    }

    // const { getData } = functions();

    // const post = async () => {
    //   console.log(name.value, username.value);
    //   await axios
    //     .post("http://localhost:3000/users", {
    //       name: name.value,
    //       username: username.value,
    //     })
    //     .then(() => {
    //       alert("hekkki");
    //     });
    // };
    return { name, username, post };
  },
};
</script>
