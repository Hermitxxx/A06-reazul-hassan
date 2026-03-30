import React from 'react';

const Workflow = () => {
    return (
        <section className='bg-brand-gradient p-5 md:p-10 lg:p-20 mt-16'>
            <div className='text-center max-sm:py-8'>
                <div className='space-y-4'>
                    <h1 className='text-4xl font-extrabold text-white'>Ready to Transform Your Workflow?</h1>
                    <p className='opacity-80 leading-relaxed text-white font-light'>
                        Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.
                    </p>
                </div>

                <div className='mt-8 space-y-3'>
                    <div className="buttons flex items-center justify-center gap-2">
                        <button className='cursor-pointer bg-white font-semibold py-3 px-4 rounded-full hover:opacity-90 transition-all duration-200 hover:scale-[1.02]'>
                            <span className='bg-brand-gradient text-transparent bg-clip-text'>Explore Products</span>
                        </button>

                        <button className='cursor-pointer text-white font-semibold py-3 px-4 rounded-full hover:opacity-90 transition-all duration-200 hover:scale-[1.02] bg-transparent border border-white'>
                            View Pricing
                        </button>
                    </div>
                    <p className='opacity-80 leading-relaxed text-white font-light'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>
        </section>
    );
};

export default Workflow;