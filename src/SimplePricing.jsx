import { Check } from 'lucide-react';



const SimplePricing = () => {
    const card1 = [
        'Access to 10 free tools',
        'Basic templates',
        'Community support',
        '1 project per month'
    ];

    const card2 = [
        'Access to all premium tools',
        'Unlimited templates',
        'Priority support',
        'Unlimited projects',
        'Cloud sync',
        'Advanced analytics',
    ];

    const card3 = [
        'Everything in Pro',
        'Team collaboration',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'Custom branding',
    ];

    return (
        <section className='p-5 md:p-10 lg:p-20 my-16'>
            <div>
                <div className='text-center space-y-4 mb-10'>
                    <h1 className='font-extrabold text-4xl'>Simple, Transparent Pricing</h1>
                    <p className='opacity-80'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center auto-rows-fr items-stretch gap-8'>

                    {/* card1 */}
                    <div className='relative rounded-3xl p-8 w-11/12 bg-base-200 border border-base-300 flex flex-col'>
                        <div className='mt-4'>
                            <h2 className='text-2xl font-bold'>Starter</h2>
                            <p className='text-sm'>Perfect for getting started</p>
                        </div>

                        <div className='mt-6 flex items-end gap-1'>
                            <span className='text-5xl font-bold'>$0</span>
                            <span className='mb-1'>/Month</span>
                        </div>

                        <ul className='mt-6 space-y-3 flex-1'>
                            {card1.map((feature) => (
                                <li key={feature} className='flex items-center gap-2 text-sm'>
                                    <span className='text-green-500'><Check></Check></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className='mt-8 w-full hover:opacity-90 transition-all duration-200 hover:scale-[1.02] bg-brand-gradient text-white font-semibold py-3 rounded-full'>
                            Start Pro Trial
                        </button>
                    </div>

                    {/* card2 */}
                    <div className='relative bg-brand-gradient rounded-3xl p-8 w-11/12 text-white flex flex-col'>
                        <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                            <span className='bg-amber-100 text-amber-600 text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap'>
                                Most Popular
                            </span>
                        </div>

                        <div className='mt-4'>
                            <h2 className='text-2xl font-bold'>Pro</h2>
                            <p className='text-white/70 text-sm'>Best for professionals</p>
                        </div>

                        <div className='mt-6 flex items-end gap-1'>
                            <span className='text-5xl font-bold'>$29</span>
                            <span className='text-white/70 mb-1'>/Month</span>
                        </div>

                        <ul className='mt-6 space-y-3 flex-1'>
                            {card2.map((feature) => (
                                <li key={feature} className='flex items-center gap-2 text-sm'>
                                    <span><Check></Check></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className='mt-8 w-full bg-white text-purple-600 font-semibold py-3 rounded-full hover:opacity-90 transition-all duration-200 hover:scale-[1.02] cursor-pointer'>
                            <span className="bg-brand-gradient text-transparent bg-clip-text">Start Pro Trial</span>
                        </button>
                    </div>

                    {/* card3 */}
                    <div className='relative rounded-3xl p-8 w-11/12 bg-base-200 border border-base-300 flex flex-col'>
                        <div className='mt-4'>
                            <h2 className='text-2xl font-bold'>Enterprise</h2>
                            <p className='text-sm'>For teams and businesses</p>
                        </div>

                        <div className='mt-6 flex items-end gap-1'>
                            <span className='text-5xl font-bold'>$99</span>
                            <span className='mb-1'>/Month</span>
                        </div>

                        <ul className='mt-6 space-y-3 flex-1'>
                            {card3.map((feature) => (
                                <li key={feature} className='flex items-center gap-2 text-sm'>
                                    <span className='text-green-500'><Check></Check></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className='mt-8 w-full cursor-pointer bg-brand-gradient text-white font-semibold py-3 rounded-full hover:opacity-90 transition-all duration-200 hover:scale-[1.02]'>
                            Start Pro Trial
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SimplePricing;