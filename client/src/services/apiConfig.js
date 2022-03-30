import axios from "axios"

// const baseUrl = "https://whats-the-total.herokuapp.com/"
const baseUrl = "http://localhost:3000/"

export const api = axios.create({
  baseURL: baseUrl,
})
