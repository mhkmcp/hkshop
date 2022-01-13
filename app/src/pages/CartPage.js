import React, { useEffect } from 'react'
import { Link, useParams, useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { Message } from '../components/Message'
import { addToCart } from '../redux/actions/cartActions'


function CartPage({}) {
    const { id } = useParams()
    // let history = useHistory()
    let location = useLocation()
    const quantity = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart 

    console.log('cartItems: ', cartItems)

    

    useEffect(()=>{
        if(id) {
            dispatch(addToCart(id, quantity))
        }
    }, [dispatch, id, quantity])


    return (
        <div>
            Cart
        </div>
    )
}

export default CartPage
