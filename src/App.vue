<template>
  <div>
    <input @keyup.enter="addUser" type="text" v-model="inputValue" placeholder="add user">
    <button @click="array.length = 0">Click</button>
    <div v-for="(user, index) in array" :key="index">
      <p @click="deleteUser(index)"> {{ user }}</p>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
export default {
  setup () {
    let inputValue = ref('')
    let array = ref(['asad', 'jasur'])
    let sorted = ref([])

    const addUser = () => {
      array.value.push(inputValue.value)
      console.log(array.value)
      inputValue.value = ''
    }

    const watchChanges = watch(array.value, () => {
      console.log('watch')
    })

    const deleteUser = (index) => {
      console.log('delete')
      return array.value.splice(index, 1)
    }

    // const search = computed(() => {
    //   return array.value.filter((element) => element.includes(inputValue.value))
    // })

    return { addUser, inputValue, array, watchChanges, watch, computed, deleteUser, sorted }
  }
}
</script>