import pack from './assets/package.png'
import user from './assets/user.png'
import rocket from './assets/rocket.png'

const GetStarted = () => {
    return (
        <section className='bg-base-200 p-5 md:p-10 lg:p-20 my-16'>
            <div>
                <div className='text-center space-y-4 mb-10'>
                    <h1 className='font-extrabold text-4xl'>Get Started in 3 Steps</h1>
                    <p className='opacity-80'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center auto-rows-fr items-stretch gap-5'>
                    <div className="relative bg-white rounded-3xl p-10 w-10/12 text-center shadow-sm border border-gray-100">

                        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center text-white font-semibold text-sm shadow-md">
                            01
                        </div>

                        <div className="w-24 h-24 rounded-full bg-violet-50 flex items-center justify-center mx-auto mb-6">
                            <img src={user} alt="" />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Create Account</h2>

                        <p className="text-gray-500 text-base leading-relaxed">Sign up for free in seconds. No credit card required to get started.</p>
                    </div>

                    <div className="relative bg-white rounded-3xl p-10 w-10/12 text-center shadow-sm border border-gray-100">

                        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center text-white font-semibold text-sm shadow-md">
                            02
                        </div>

                        <div className="w-24 h-24 rounded-full bg-violet-50 flex items-center justify-center mx-auto mb-6">
                            <img src={pack} alt="" />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Choose Products</h2>

                        <p className="text-gray-500 text-base leading-relaxed">Browse our catalog and select the tools that fit your needs.</p>
                    </div>

                    <div className="relative bg-white rounded-3xl p-10 w-10/12 text-center shadow-sm border border-gray-100">

                        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center text-white font-semibold text-sm shadow-md">
                            03
                        </div>

                        <div className="w-24 h-24 rounded-full bg-violet-50 flex items-center justify-center mx-auto mb-6">
                            <img src={rocket} alt="" />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Start Creating</h2>

                        <p className="text-gray-500 text-base leading-relaxed">Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;