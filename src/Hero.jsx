import React from 'react';
import hero from './assets/banner.png'
import { Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className='hero-section mb-24'>
            <div className='container mx-auto my-10 flex flex-col-reverse gap-8 p-5 md:flex-row md:justify-center md:items-center md:p-6 md:gap-24 rounded-2xl'>

                <div className=' space-y-5 '>
                    <div className='text-sm leading-relaxed inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full'>✦ New: AI-Powered Tools Available</div>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#101727]'>Supercharge Your <span className='hidden md:inline'><br /></span> Digital Workflow</h1>
                    <p className='text-gray-500 leading-relaxed'>Access premium AI tools, design assets, templates, and productivity <span className='hidden md:inline'><br /></span>
                        software—all in one place. Start creating faster today.
                    </p>
                    <div className='flex flex-wrap gap-2 md:gap-4 items-center'>
                        <button className="font-semibold cursor-pointer px-4 py-3 btn md:p-6 rounded-full bg-brand-gradient text-white">Explore Products</button>
                        <button className='btn btn-primary btn-outline px-4 py-3 flex items-center gap-2 border md:p-6 rounded-full font-semibold'><Play size={18} /> Watch Demo</button>
                    </div>
                </div>


                <div className='rounded-2xl flex justify-center'>
                    <img src={hero} alt="Book Hero" className='rounded-2xl object-cover w-[90%] shadow-xl' />
                </div>

            </div>

            <div className='bg-brand-gradient py-5 md:py-10 my-10'>
                <div className='container mx-auto flex flex-col md:flex-row md:items-center md:justify-center gap-5 md:divide-x md:divide-white/30'>

                    <div className='flex flex-col items-center px-2 md:px-16'>
                        <span className='text-white text-lg md:text-4xl font-bold'>50K+</span>
                        <span className='text-white/70 mt-1'>Active Users</span>
                    </div>

                    <div className='flex flex-col items-center px-2  md:px-16'>
                        <span className='text-white text-lg md:text-4xl font-bold'>200+</span>
                        <span className='text-white/70 mt-1'>Premium Tools</span>
                    </div>

                    <div className='flex flex-col items-center px-2 md:px-16'>
                        <span className='text-white text-lg md:text-4xl font-bold'>4.9</span>
                        <span className='text-white/70 mt-1'>Rating</span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;