import React from 'react';

const CartCard = ({ price, setCart }) => {

    const handleCart = () => {
        setCart((currentCart) => {
            const filteredCart = currentCart.filter(item => item.id !== price.id)
            return filteredCart
        })
    }

    return (
        <>
            <div>
                <div className='flex items-center justify-between rounded-xl px-4 py-4 bg-base-200'>

                    <div className='flex items-center gap-3'>
                        <div className='bg-white w-10 h-10 rounded-lg flex items-center justify-center shadow-sm'>
                            <span className='text-xl'>{price.icon}</span>
                        </div>
                        <div>
                            <p className='font-semibold text-gray-900 text-sm'>{price.name}</p>
                            <p className='text-gray-400 text-sm'>${price.price}</p>
                            <p className='text-gray-400 text-sm'>Quantity: {price.quantity}</p>
                        </div>
                    </div>

                    <button onClick={handleCart} className='text-sm font-medium text-red-400 hover:text-red-600 transition-colors'>
                        Remove
                    </button>

                </div>
            </div>
        </>

    );
};

export default CartCard;