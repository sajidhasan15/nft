import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
function Footer() {
    return (
        <div>
            <div className='py-20 md:px-20 px-7'>
                <div className="footer-2 pt-6 md:pt-12">
                    <div className="container px-4 mx-auto">

                        <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">

                            <div className="footer-info lg:w-1/3 md:px-4">
                                <h1 className='uppercase font-bold text-3xl'>nfters</h1>
                                <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quibusdam!</p>
                                <div className='flex py-5'>
                                    <div className='px-3'>
                                        <BsFacebook size={30} className="text-blue-700" />
                                    </div>
                                    <div className='px-3'>
                                        <AiFillTwitterCircle size={32} className="text-sky-500" />
                                    </div>
                                    <div className='px-3'>
                                        <BsLinkedin size={30} className="text-sky-800 rounded-full" />
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
                                <div className="sm:flex">
                                    <div className="sm:flex-1">
                                        <h6 className="text-base font-medium  uppercase mb-2">Market Place</h6>
                                        <div>
                                            <a href="#" className=" py-1 block hover:underline">All Nfts</a>
                                            <a href="#" className=" py-1 block hover:underline">New</a>
                                            <a href="#" className=" py-1 block hover:underline">Art</a>
                                            <a href="#" className=" py-1 block hover:underline">Sports</a>
                                            <a href="#" className=" py-1 block hover:underline">Utility</a>
                                            <a href="#" className=" py-1 block hover:underline">Music</a>
                                            <a href="#" className=" py-1 block hover:underline">Domain Name</a>
                                        </div>
                                    </div>
                                    <div className="sm:flex-1 mt-4 sm:mt-0">
                                        <h6 className="text-base font-medium  uppercase mb-2">My Account</h6>
                                        <div>
                                            <a href="#" className=" py-1 block hover:underline">Profile</a>
                                            <a href="#" className=" py-1 block hover:underline">Favourite</a>
                                            <a href="#" className=" py-1 block hover:underline">My collections</a>
                                            <a href="#" className=" py-1 block hover:underline">Settings</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
                                <h5 className="text-lg text-left  font-medium mb-4">Stay in the loop</h5>
                                <p className='text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam!</p>
                                <div className='py-5'>
                                    <div className='flex py-2 ring-1 ring-gray-200 rounded-full p-2 justify-between'>
                                        <div className='text-sm px-2 py-2'>
                                            Enter your email address
                                        </div>
                                        <div className=''>
                                            <button className="bg-indigo-600 text-white rounded-full hover:bg-indigo-700 py-2 px-3 transition-colors duration-300">Subscribe now</button>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                        <hr />
                        <div className='text-center pt-3 text-gray-400'>
                            <p>Copyright &copy; 2022 Sajid Hasan</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer