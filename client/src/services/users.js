import {api} from "./apiConfig"

export const loginUser = async (loginData) => {
  const resp = await api.post(`auth/login`, {authentication: loginData})
  localStorage.setItem("authToken", resp.data.token)
  localStorage.setItem("id", resp.data.user.id)
  localStorage.setItem("state", resp.data.user.state)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post("users", {user: registerData})
  localStorage.setItem("authToken", resp.data.token)
  localStorage.setItem("id", resp.data.user.id)
  localStorage.setItem("state", resp.data.user.state)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken")
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get("auth/verify")
    return resp.data
  }
  return false
}

export const getOneUser = async (user_id) => {
  const resp = await api.get(`users/${user_id}`)
  return resp.data
}

export const addToCart = async (user_id, product_id) => {
  const resp = await api.post(`/users/${user_id}/${product_id}`)
  return resp.data
}

export const getUserProducts = async (user_id) => {
  const resp = await api.get(`/users/${user_id}/products`)
  return resp.data
}

export const deleteFromCart = async (user_id, product_id) => {
  const resp = await api.delete(`/users/${user_id}/${product_id}`)
  return resp.data
}

export const decrementCount = async (user_id, product_id) => {
  const resp = await api.delete(`/users/${user_id}/${product_id}/1`)
  return resp.data
}

export const checkoutCart = async (user_id) => {
  const resp = await api.put(`/users/${user_id}/products`)
  return resp.data
}

export const updateCartCount = async (user_id, product_id, productCount) => {
  console.log(productCount)
  const resp = await api.put(`/users/${user_id}/products/${product_id}`, productCount)
  return resp.data
}
