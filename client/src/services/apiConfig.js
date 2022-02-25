import axios from "axios"

const baseUrl = "https://whats-the-total.herokuapp.com/"

export const api = axios.create({
  baseURL: baseUrl,
})
