import axios from "axios";

const apiValorant = axios.create({
    baseURL: 'https://valorant-api.com/v1'
})

export default apiValorant

