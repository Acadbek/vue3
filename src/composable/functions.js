import axios from "axios";
import { ref } from "vue";

const functions = () => {
  let users = ref([]);

  const getData = async () => {
    let res = await axios.get("http://localhost:3000/users");
    users.value = res.data;
  };

  const addUser = async (name, username) => {
    // eslint-disable-next-line no-unused-vars
    let addUser = await axios.post("http://localhost:3000/users", {
      id: users.value.length + 1,
      name: name,
      username: username
    });
    await getData();
  };

  return { users, getData, addUser };
};

export default functions;
