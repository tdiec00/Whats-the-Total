import {api} from "./apiConfig"

export const getOneShoppingCart = async (user_id, cart_id) => {
  const resp = await api.get(`/users/${user_id}/${cart_id}`)
  return resp.data
}

export const createShoppingCart = async (user_id) => {
  const resp = await api.post(`/users/${user_id}/shopping_carts`)
  return resp.data
}

export const updateShoppingCart = async (user_id, cart_id, cartData) => {
  const resp = await api.put(`/users/${user_id}/shopping_carts/${cart_id}`, {shopping_cart: cartData})
  return resp.data
}

export const deleteShoppingCart = async (user_id, cart_id) => {
  const resp = await api.delete(`/users/${user_id}/${cart_id}`)
  return resp.data
}
