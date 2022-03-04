import React from 'react';
import IMG from '../assets/images/header.png';

function Header() {
    return (
        <div className='px-10'>
            <div className="md:flex items-center justify-between bg-white py-20 md:px-10 px-7 sm:flex lg:flex sm:px-4">
                <div className="">
                    <h1 className='font-bold uppercase text-5xl'>Discover and collect, Digital art nfts</h1>
                    <p className='text-gray-700 w-1/2 text-lg py-5'>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
                    <button className='bg-indigo-600 text-white font-[Poppins] py-2 p-4 hover:bg-indigo-400 duration-500 rounded-full'>Explore Now</button>
                    <div className='lg:flex md:flex sm:flex py-2'>
                        <div>
                            <h1 className='font-bold uppercase text-5xl'>98K+</h1>
                            <p className='text-gray-700'>Artwork</p>
                        </div>
                        <div>
                            <h1 className='font-bold uppercase text-5xl'>12K+</h1>
                            <p className='text-gray-700 pl-2'>Aution</p>
                        </div>
                        <div className='text-left'>
                            <h1 className='font-bold uppercase text-5xl'>15K+</h1>
                            <p className='text-gray-700 pl-2'>Artist</p>
                        </div>
                    </div>
                    {/* <h6 className='font-bold'>Artwork Aution Artist</h6> */}
                </div>
                <div>
                    <img src={IMG} alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default Header