import React, { useEffect } from 'react'
import { Link, useParams, useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../redux/actions/cartActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



function CartPage({}) {
    const { id } = useParams()
    let history = useHistory()
    let location = useLocation()
    const quantity = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart 

    useEffect(()=>{
        if(id) {
            dispatch(addToCart(id, quantity))
        }
    }, [dispatch, id, quantity])

    const removeFromCartHandler = id => {
        dispatch(removeFromCart(id))
    } 

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {
                    cartItems.length === 0 ? (
                        <Message variant='info'>
                            Your cart is empty 
                            <Link to='/'> Go Back</Link>
                        </Message>
                    ):(
                        <ListGroup variant='flush'>
                            {
                                cartItems.map(item => (
                                    <ListGroup.Item key={item.product}>
                                        <Row>
                                            <Col md={2}>
                                                <Image src={item.image} alt={item.name} fluid rounded />
                                            </Col>
                                            <Col md={3}>
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                            </Col>
                                            <Col md={2}>
                                                ${item.price}
                                            </Col>
                                            <Col md={3}>
                                                <Form.Control
                                                    as="select"
                                                    value={item.quantity}
                                                    onChange={ e => dispatch(addToCart(item.product, Number(e.target.value)))}
                                                >
                                                    {
                                                        [...Array(item.count_in_stock).keys()].map(x => 
                                                            <option key={x + 1} value={x + 1}>{x + 1}</option>)
                                                    }
                                                </Form.Control>
                                            </Col>
                                            <Col md={1}>
                                                <Button 
                                                    type='button'
                                                    variant='danger'
                                                    className='btn-sm'
                                                    onClick={()=>removeFromCartHandler(item.product)}
                                                >
                                                    <FontAwesomeIcon icon={ faTrash }/>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                    )
                }
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)}) items</h2>
                            ${cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                type='button'
                                className='btn-block w-100 text-alert'
                                disabled={cartItems.length === 0}
                                onClick={checkoutHandler}
                            >Proceed to Checkout</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    )
}

export default CartPage
