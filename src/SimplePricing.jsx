const SimplePricing = () => {
    const features = [
        'Access to all premium tools',
        'Unlimited templates',
        'Priority support',
        'Unlimited projects',
        'Cloud sync',
        'Advanced analytics',
    ];

    return (
        <div className='relative bg-brand-gradient rounded-3xl p-8 w-72 text-white'>

            {/* Most Popular Badge */}
            <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                <span className='bg-amber-100 text-amber-600 text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap'>
                    Most Popular
                </span>
            </div>

            {/* Plan Name */}
            <div className='mt-4'>
                <h2 className='text-2xl font-bold'>Pro</h2>
                <p className='text-white/70 text-sm'>Best for professionals</p>
            </div>

            {/* Price */}
            <div className='mt-6 flex items-end gap-1'>
                <span className='text-5xl font-bold'>$29</span>
                <span className='text-white/70 mb-1'>/Month</span>
            </div>

            {/* Features */}
            <ul className='mt-6 space-y-3'>
                {features.map((feature) => (
                    <li key={feature} className='flex items-center gap-2 text-sm'>
                        <span className='text-white font-bold'>✓</span>
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Button */}
            <button className='mt-8 w-full bg-white text-purple-600 font-semibold py-3 rounded-xl hover:bg-white/90 transition-colors'>
                Start Pro Trial
            </button>

        </div>
    );
};

export default SimplePricing;