import axios from 'axios'
import { CARD_ADD_ITEM } from '../../constants/cartConstatns'

export const addToCart = (id, quantity) => async (dispatch, getState) => {

    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: CARD_ADD_ITEM,
        payload: {
            product: data.id,
            name: data.name,
            image: data.image,
            price: data.price,
            count_in_stock: data.count_in_stock,
            quantity
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}