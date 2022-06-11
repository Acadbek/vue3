import axios from "axios"
import { ref } from "vue"

const getUsers = () => {
    let users = ref([])
    let names = ref([])
    const getData = async () => {
        let res = await axios.get('http://localhost:3000/users')
        users.value = res.data
        for(let name = 0; name < res.data.length; name++) {
            names.value = res.data[name].name
        }
    }

    return { users, getData }
}

export default getUsers