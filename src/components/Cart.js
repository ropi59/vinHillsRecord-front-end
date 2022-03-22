import React, { useState } from 'react';

const Cart = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className='cart-container'>
        {!isOpen ?
        (<button className='buttonToCart' onClick={() => setIsOpen(!isOpen)}></button>) :
        (
        <div className="cart">
            <button className='closeButton' onClick={() => setIsOpen(!isOpen)}>X

            </button>
            <div className='cartContent'>
                <p>Your cart is empty</p>

            </div>
        </div>
        )}
        </div>
    );
};

export default Cart;