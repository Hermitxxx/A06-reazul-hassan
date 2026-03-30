import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
    return (
        <section className='bg-[#101727]'>
            <div className='container mx-auto flex items-center gap-10 justify-between py-18 md:py-24 border-b-2 border-gray-700 flex-wrap'>
                <div className='text-white space-y-5 max-sm:mx-auto max-sm:text-center'>
                    <h1 className='font-extrabold text-2xl md:text-4xl'>DigiTools</h1>
                    <p className='opacity-80 font-extralight'>
                        Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.
                    </p>
                </div>

                <div className='text-white flex items-center gap-10 md:gap-20 max-sm:mx-auto flex-wrap max-sm:justify-center'>
                    <ul className='space-y-3'>
                        <li className='font-semibold text-lg'>Product</li>
                        <li className='opacity-80 font-extralight'>Features</li>
                        <li className='opacity-80 font-extralight'>Pricing</li>
                        <li className='opacity-80 font-extralight'>Templates</li>
                        <li className='opacity-80 font-extralight'>Integrations</li>
                    </ul>

                    <ul className='space-y-3'>
                        <li className='font-semibold text-lg'>Company</li>
                        <li className='opacity-80 font-extralight'>About</li>
                        <li className='opacity-80 font-extralight'>Blog</li>
                        <li className='opacity-80 font-extralight'>Careers</li>
                        <li className='opacity-80 font-extralight'>Press</li>
                    </ul>

                    <ul className='space-y-3'>
                        <li className='font-semibold text-lg'>Resources</li>
                        <li className='opacity-80 font-extralight'>Documentation</li>
                        <li className='opacity-80 font-extralight'>Help Center</li>
                        <li className='opacity-80 font-extralight'>Community</li>
                        <li className='opacity-80 font-extralight'>Contact</li>
                    </ul>
                </div>

                <div className="socials space-y-4 max-sm:w-full">
                    <h1 className='font-semibold text-lg text-white max-sm:text-center'>Social Links</h1>
                    <div className='flex items-center gap-4 max-sm:justify-around'>
                        <div className='bg-white w-8 h-8 hover:opacity-80 hover:scale-[1.02] transition-all duration-200 rounded-full flex items-center justify-center cursor-pointer'>
                            <AiFillInstagram />
                        </div>

                        <div className='bg-white w-8 h-8 hover:opacity-80 hover:scale-[1.02] transition-all duration-200 rounded-full flex items-center justify-center cursor-pointer'>
                            <FaSquareFacebook></FaSquareFacebook>
                        </div>

                        <div className='bg-white w-8 h-8 hover:opacity-80 hover:scale-[1.02] transition-all duration-200 rounded-full flex items-center justify-center cursor-pointer'>
                            <RiTwitterXLine />
                        </div>
                    </div>
                </div>

                
            </div>

            <div className='text-gray-600 container gap-3 max-sm:flex-col mx-auto flex items-center justify-between py-5'>
                <p>© 2026 Digitools. All rights reserved.</p>
                <ul className='flex items-center gap-8'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies</li>
                </ul>
            </div>

        </section>
    );
};

export default Footer;