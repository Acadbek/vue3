<template>
  <div>
    <ul style="text-align: center">
      <li v-for="( item, i ) in users" :key="i">
       <h1>
        {{ item.name }}
       </h1>
       <h3> {{ item.username }} </h3>
      </li>
    </ul>
    <Homes/>
  </div>
</template>

<script>
import getUsers from './composable/getUsers'

export default {
    setup() {
        const { users, getData } = getUsers();
        getData();

        return { users, getData };
    },
    components: {  }
}
</script>