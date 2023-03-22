import React, { useContext } from 'react'
import{ ShopContext } from '../../context/shop-context'


export const Product = (props) => {
    const{id, productName,price,productImage}= props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const CartItemAmount = cartItems[id]
  return (
    <div className='product'>
        <img src={productImage} alt=''/>
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
            <button className='addToCartBttn' onClick={() => addToCart(id)}>
                Add To Cart {CartItemAmount > 0 && <> ({CartItemAmount}) </>}
                </button>
        </div>
    </div>
  )
}
