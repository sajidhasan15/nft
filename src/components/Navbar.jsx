import React, { useState } from 'react'
// import Button from './Button';

const Navbar = () => {
    let Links = [
        { name: "Marketplace", link: "/" },
        { name: "Resource", link: "/" },
        { name: "About", link: "/" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0 px-10'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-indigo-600'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        {/* <ion-icon name="logo-ionic"></ion-icon> */}
                    </span>
                    NFTERS
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 px-4'>
                                <a href={link.link} className='text-black-800 hover:text-gray-400 duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                    <div type="search" className='rounded-full border-2 border-gray-100 items-end w-60 text-right px-1'>
                        <ion-icon name="search-outline"></ion-icon>
                    </div>
                    <div>
                        <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-8 md:ml-8 hover:bg-indigo-400 duration-500 rounded-full'>
                            Upload
                        </button>
                        <button className='text-indigo-600 font-[Poppins] py-2 px-6 md:ml-8 hover:bg-indigo-200 duration-500 rounded-full border-2 border-indigo-600'>
                            Connect Wallet
                        </button>
                    </div>
                </ul>
            </div>
        </div>
    )
}
// const Button = (props) => {
//     return (
//       <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
//       duration-500'>
//         {props.children}
//       </button>
//     )
//   }

export default Navbar