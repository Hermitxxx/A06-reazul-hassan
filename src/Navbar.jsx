import React from 'react';
import { ShoppingCart } from 'lucide-react';


const Navbar = ({ setPage }) => {
    const handlePage = (nextPage) => {
        setPage(nextPage)
    }
    return (
        <>
            <section className='border-b border-base-300 pb-1'>
                <div className="navbar bg-base-100 container mx-auto px-3 md:px-0">
                    <div className="navbar-start gap-3">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-5 font-semibold">
                                <li><button onClick={() => handlePage('products')}>Products</button></li>
                                <li><button onClick={() => handlePage('features')}>Features</button></li>
                                <li><button onClick={() => handlePage('pricing')}>Pricing</button></li>
                                <li><button onClick={() => handlePage('testimonials')}>Testimonials</button></li>
                                <li><button onClick={() => handlePage('faq')}>FAQ</button></li>
                            </ul>
                        </div>
                        <a>
                            <span className='text-2xl font-extrabold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</span>
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-2 font-semibold">
                            <li><button onClick={() => handlePage('products')}>Products</button></li>
                            <li><button onClick={() => handlePage('features')}>Features</button></li>
                            <li><button onClick={() => handlePage('pricing')}>Pricing</button></li>
                            <li><button onClick={() => handlePage('testimonials')}>Testimonials</button></li>
                            <li><button onClick={() => handlePage('faq')}>FAQ</button></li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-1 md:gap-2">
                        <a href=""><ShoppingCart /></a>
                        <button className="btn btn-ghost rounded-full hidden sm:inline-flex">Login</button>
                        <button className="btn btn-sm md:btn-md rounded-full bg-brand-gradient text-white">Get Started</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navbar;