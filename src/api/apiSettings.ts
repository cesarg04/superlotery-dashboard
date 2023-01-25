import axios from "axios"

const url = import.meta.env.VITE_HOST

// const token = sessionStorage.getItem('token')

// console.log(token)

export const baseApI = ( token?: string ) => {

    const baseURL = axios.create({
        baseURL: url,
        headers: { 
            Authorization: `Bearer ${token}`,  
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    })


    return {
        baseURL
    }
}


