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

            </div>
        </div>
        )}
        </div>
    );
};

export default Cart;