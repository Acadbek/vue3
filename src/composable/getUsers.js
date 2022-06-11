import axios from "axios"
import { ref } from "vue"

const getUsers = () => {
    let users = ref([])
    const getData = async () => {
        let res = await axios.get('http://localhost:3000/users')
        users.value = res.data
        console.log(res)
    }

    return { users, getData }
}

export default getUsers