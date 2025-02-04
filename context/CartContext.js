'use client'
import { URL } from "@/app/components/URL/URL";
import { createContext, useEffect, useReducer, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [token, setToken] = useState(false)
    const [fetchData, setFetchData] = useState([])
    const config = URL

    const verifyToken = async () => {
        const token = localStorage.getItem('token')
        try {
            const req = await fetch(`${config}/api/client/token/${token}`)
            if (req.tokenVerify.success) {
                setToken(true)
            }
        }
        catch (error) {
            console.log(error.message)
        }
    }

    const fetchProducts = async () => {
        const res = await fetch(`${config}/api/category`)
        const req = await res.json()
        if (!res.ok) {
            alert(req.message)
        }
        setFetchData(req)
    }
    useEffect(() => {
        fetchProducts()
        return;
    }, [])

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0)
    const handleAddToCart = (currentItem, qty, index) => {
        verifyToken()
        if (!token) {
            return;
        }
        forceUpdate()
        let cart = cartItems ?? [];
        let productID = currentItem?._id;
        let price = currentItem?.price;
        let title = currentItem?.title;
        let productModel = currentItem?.productModel;
        let img = currentItem?.img
        let position = cart?.findIndex(value => value.product_id === productID);
        let quantity = qty ? cartItems[position]?.quantity - 1 : (position < 0 ? 1 : cartItems[position]?.quantity + 1)

        if (index || index === 0) {
            cart.splice(position, 1)
        } else {
            if (quantity <= 0) {
                cart.splice(position, 1)
            } else if (position === -1) {
                cart.push({ product_id: productID, price: price, title: title, img: img, productModel: productModel, quantity: 1 })
            } else {
                cart[position].quantity = quantity
            }
        }
        if (typeof window !== 'undefined') {
            localStorage.setItem('cartItems', JSON.stringify(cart));
        }
        setCartItems(cart)
        //add item to cart or update quantity

    }

    const emptyCart = () => {
        localStorage.removeItem('cartItems');
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCartItems(JSON.parse(localStorage.getItem('cartItems')))
            forceUpdate(cartItems)
        }
    }, []) 


    return (
        <CartContext.Provider value={{ cartItems, token, fetchData, setToken, handleAddToCart, emptyCart }}>
            {children}
        </CartContext.Provider>
    )
};