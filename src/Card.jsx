import React from 'react';
import { toast, Bounce } from 'react-toastify';

// {
//         "id": 1,
//         "name": "AI Writing Pro",
//         "description": "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI",
//         "price": 29,
//         "period": "monthly",
//         "tag": "Best Seller",
//         "tagType": "best-seller",
//         "features": [
//             "Unlimited AI generations",
//             "50+ writing templates",
//             "Grammar checker"
//         ],
//         "icon": "📝"
//     }


const Card = ({ price, setCart, cart }) => {

    const handleCart = () => {
        const exist = cart.find(item => item.id === price.id)

        if (!exist) {
            toast.success(`Added to cart`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                style: {
                    background: "linear-gradient(to right, #4F39F6, #9514FA)",
                },
                theme: "colored",
                transition: Bounce,
            });
        }
        else {
            toast.success(`Added to cart`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                style: {
                    background: "linear-gradient(to right, #4F39F6, #9514FA)",
                },
                theme: "colored",
                transition: Bounce,
            });
        }

        setCart(currentCart => {
            const exist = currentCart.find(item => item.id === price.id)

            if (exist) {
                const updatedCart = currentCart.map(item => {
                    return item.id === price.id ? { ...item, quantity: item.quantity + 1 } : item
                })

                return updatedCart
            }

            return [...currentCart, { ...price, quantity: 1 }]
        })
    }
    return (
        <div className='relative bg-white rounded-2xl shadow-lg p-6 border border-gray-200 w-11/12 flex flex-col'>
            <span className={`absolute 
                    top-4 
                    right-4 
                    ${price.tagType === 'best-seller' && 'bg-amber-100 text-amber-600' ||
                price.tagType === 'new' && 'bg-green-100 text-green-600' ||
                price.tagType === 'popular' && 'bg-purple-100 text-purple-600'
                }
                     text-xs 
                     font-semibold 
                     px-3 py-1 
                     rounded-full`}>
                {price.tag}
            </span>

            <div className='w-10 h-10 rounded-lg flex items-center justify-center mb-4'>
                <span className='text-xl'>{price.icon}</span>
            </div>


            <h3 className='text-lg font-bold text-gray-900'>{price.name}</h3>
            <p className='text-gray-500 text-sm mt-1'>
                {price.description}
            </p>

            <div className='mt-4'>
                <span className='text-3xl font-bold text-gray-900'>${price.price}</span>
                <span className='text-gray-400 text-sm'>/{price.period}</span>
            </div>

            <ul className='mt-4 space-y-2 flex-1'>
                {price.features.map((feature) => (
                    <li key={feature} className='flex items-center gap-2 text-sm text-gray-600'>
                        <span className='text-green-500 font-bold'>✓</span>
                        {feature}
                    </li>
                ))}
            </ul>

            <button onClick={handleCart} className='mt-6 w-full btn bg-brand-gradient hover:opacity-90 hover:scale-[1.02] transition-all duration-200 text-white font-semibold p-6 rounded-full'>
                Buy Now
            </button>
        </div>
    );
};

export default Card;