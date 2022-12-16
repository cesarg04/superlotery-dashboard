import axios from "axios"

const url = import.meta.env.VITE_HOST

export const baseApi = axios.create({
    baseURL: url
})

