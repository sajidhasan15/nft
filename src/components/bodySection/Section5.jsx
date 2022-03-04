import React from 'react';
import img from '../../assets/images/section-5.png';

function Section5() {
    return (
        <div>
            <div className="py-20 md:px-20 px-7">
                <div className='flex justify-between'>
                    <img src={img} alt="" className='w-100' />
                    <div>
                        <div className='flex-row py-28 px-20'>
                            <div className='py-5'>
                                <h1 className='uppercase font-bold text-3xl'>Create And Sell your nfts</h1>
                            </div>
                            <div className='py-5'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti expedita recusandae molestiae pariatur voluptatum. Assumenda explicabo nisi quas ad optio neque itaque corrupti, perspiciatis ut nulla officia pariatur ipsam odit quam dignissimos ea tempore, excepturi autem quisquam saepe maxime omnis reiciendis sunt. Asperiores, placeat. Laborum in minima aliquam eius porro.
                            </div>
                            <div className='py-5'>
                                <button className='bg-indigo-600 text-white font-[Poppins] py-2 p-4 hover:bg-indigo-400 duration-500 rounded-full'>Sign Up Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section5