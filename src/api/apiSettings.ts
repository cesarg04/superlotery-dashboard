import axios from "axios"

const url = import.meta.env.VITE_HOST

const token = sessionStorage.getItem('token')

export const baseApi = axios.create({
    baseURL: url,
    headers: { Authorization: `Bearer ${token}` }
})

