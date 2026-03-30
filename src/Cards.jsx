
import Card from './Card'
import CartCard from './CartCard';
import { ShoppingCart } from 'lucide-react';

const Cards = ({ pricePromiseData, setCart, cart, page, setPage }) => {

    const getTotal = cart.map(item => {
        let itemPrice = item.price
        let itemQuantity = item.quantity

        return itemPrice * itemQuantity
    })

    const total = getTotal.reduce((acc, element) => acc + element, 0)
    // console.log(total);

    const handleToggle = (selected) => {
        setPage(selected)
    }

    const handleCheckout = () => {
        setCart([])
    }
    return (
        <section>
            <div className="products text-center my-10 container mx-auto">
                <h1 className='font-extrabold text-4xl mb-5'>Premium Digital Tools</h1>
                <p className='opacity-80'>Choose from our curated collection of premium digital products designed</p>
                <p className='opacity-80'>to boost your productivity and creativity.</p>
            </div>

            <div className='w-fit max-w-full mx-auto flex flex-wrap justify-center gap-1 bg-base-100 rounded-full p-1 border border-base-300'>
                <button onClick={() => handleToggle('products')} className={`${page === 'products' ? 'font-semibold cursor-pointer  py-3 px-4 rounded-full bg-brand-gradient text-white' : 'font-semibold cursor-pointer py-3 px-4  rounded-full bg-clip-text bg-brand-gradient text-transparent border-0'}`}>
                    Products
                </button>

                <button onClick={() => handleToggle('cart')} className={`${page === 'cart' ? 'font-semibold cursor-pointer py-3 px-4 rounded-full bg-brand-gradient text-white' : 'font-semibold cursor-pointer py-3 px-4 rounded-full bg-clip-text bg-brand-gradient text-transparent border-0'}`}>
                    Cart ({cart.length})
                </button>
            </div>

            <div>
                {
                    page === 'products' ?
                        <div className='pricing-cards my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 p-5 container mx-auto place-items-center items-stretch auto-rows-fr'>
                            {pricePromiseData.map(price => <Card key={price.id} cart={cart} setCart={setCart} price={price}></Card>)}
                        </div> :

                        <div className='container mx-auto min-h-96 p-4 border border-base-300 my-8 rounded-xl'>
                            {
                                cart.length === 0 ? <div className='flex items-center justify-center min-h-96'>
                                    <div>
                                        <div className='text-center space-y-3'>
                                            <ShoppingCart className="w-48 h-48 opacity-50" />
                                            <h1 className='opacity-50 font-semibold text-xl'>Your cart is empty.</h1>
                                        </div>
                                    </div>
                                </div> :

                                    <div>
                                        <div className='flex flex-col gap-2 min-h-96 container mx-auto '>
                                            <h1 className='font-semibold text-xl my-2'>Your Cart</h1>
                                            {
                                                cart.map(price => <CartCard key={price.id} cart={cart} setCart={setCart} price={price}></CartCard>)
                                            }
                                        </div>
                                        {
                                            <div className='space-y-5'>
                                                {
                                                    cart.length > 0 && <div className='flex px-2 items-center justify-between'>
                                                        <p className='opacity-80'>Total : </p>
                                                        <p className='font-bold text-2xl'>${total}</p>
                                                    </div>
                                                }
                                                {
                                                    cart.length === 0 ? '' : <button onClick={handleCheckout} className='btn w-full bg-brand-gradient rounded-full text-white py-5 md:py-6 hover:opacity-90 transition-all duration-200'>
                                                        Proceed to Checkout
                                                    </button>
                                                }
                                            </div>
                                        }
                                    </div>
                            }
                        </div>
                }
            </div>
        </section>
    );
};

export default Cards;