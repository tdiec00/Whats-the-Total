import {api} from "./apiConfig"

export const createShoppingCart = async (user_id) => {
  const resp = api.post(`/users/${user_id}/shopping_carts`)
  return resp.data
}

export const updateShoppingCart = async () => {}
