<template>
  <div>
    <ul style="text-align: center">
      <li v-for="(item, i) in users" :key="i">
       <h1>
        {{ item.name }}
       </h1>
       <h3> {{item.username}} </h3>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
  setup() {
    let users = ref([])
    
    const getData = async () => {
      let res = await axios.get('http://localhost:3000/users')
      console.log(res.data)
      users.value = await res.data
    }
    getData()
    return { users }
  }
}
</script>