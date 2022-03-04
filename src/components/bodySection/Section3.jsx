import React from 'react';
import Img from '../../assets/images/section-3.png';
import Img01 from '../../assets/images/section-3.0.png';
import Img02 from '../../assets/images/section-3.1.png';
import Img03 from '../../assets/images/section-3.2.png';
import Pic01 from '../../assets/images/1.png';
import Pic02 from '../../assets/images/2.png';
import Pic03 from '../../assets/images/3.png';
import Pic04 from '../../assets/images/4.png';
import Pic05 from '../../assets/images/5.png';
import { FcBusinessman } from 'react-icons/fc';
import { FaEthereum } from 'react-icons/fa';


function Section3() {
    return (
        <div className='px-16 py-20 '>
            <div className='flex justify-between'>
                <div>
                    <img src={Img} alt="" className='w-96' />
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <div>
                                <FcBusinessman className='rounded-full' size={50} />
                            </div>
                            <div>
                                <h1 className='font-bold'>The Futr Abstr</h1>
                                <p>10 in the stock</p>
                            </div>
                        </div>

                        <div>
                            <p className=''>Hight Bit</p>
                            <div className='flex'>
                                <div className='pt-1'><FaEthereum /></div>
                                <div className='font-bold'>0.25 ETH</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pl-2 border-r-2 border-gray-100'>
                    <div className='flex'>
                        <div>
                            <img src={Img01} alt="" className='w-44 pt-2 px-2' />
                        </div>
                        <div className='flex-row pt-2'>
                            <div>
                                <h1 className='font-bold'>The Futr Abstr</h1>
                            </div>
                            <div>
                                <div className='flex pt-4'>
                                    <div><FcBusinessman className='rounded-full' size={50} /></div>
                                    <div className='flex ring-offset-2 ring-1 ring-green-600 p-3 rounded'>
                                        <div className='pt-1'><FaEthereum color='green' size={20} /></div>
                                        <div> <p className='text-green-600'>0.25 ETH</p></div>
                                    </div>
                                    <div className='p-3'>1 of 8</div>
                                </div>
                            </div>
                            <div className='pt-4'>
                                <button className='bg-indigo-600 text-white font-[Poppins] py-2 p-4 hover:bg-indigo-400 duration-500 rounded-full'>Place a bid</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <img src={Img02} alt="" className='w-44 pt-2 px-2' />
                        </div>
                        <div className='flex-row pt-2'>
                            <div>
                                <h1 className='font-bold'>The Futr Abstr</h1>
                            </div>
                            <div>
                                <div className='flex pt-4'>
                                    <div><FcBusinessman className='rounded-full' size={50} /></div>
                                    <div className='flex ring-offset-2 ring-1 ring-green-600 p-3 rounded'>
                                        <div className='pt-1'><FaEthereum color='green' size={20} /></div>
                                        <div> <p className='text-green-600'>0.25 ETH</p></div>
                                    </div>
                                    <div className='p-3'>1 of 8</div>
                                </div>
                            </div>
                            <div className='pt-4'>
                                <button className='text-indigo-600 font-[Poppins] py-2 p-4 ring-2 ring-indigo-600 rounded-full'>Place a bid</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <img src={Img03} alt="" className='w-44 pt-2 px-2' />
                        </div>
                        <div className='flex-row pt-2'>
                            <div>
                                <h1 className='font-bold'>The Futr Abstr</h1>
                            </div>
                            <div>
                                <div className='flex pt-4'>
                                    <div><FcBusinessman className='rounded-full' size={50} /></div>
                                    <div className='flex ring-offset-2 ring-1 ring-green-600 p-3 rounded'>
                                        <div className='pt-1'><FaEthereum color='green' size={20} /></div>
                                        <div> <p className='text-green-600'>0.25 ETH</p></div>
                                    </div>
                                    <div className='p-3'>1 of 8</div>
                                </div>
                            </div>
                            <div className='pt-4'>
                                <button className='text-indigo-600 font-[Poppins] py-2 p-4 ring-2 ring-indigo-600 rounded-full'>Place a bid</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=''>
                        <h1 className='font-bold uppercase text-3xl'>TOP COLLECTIONS OVER</h1>
                        <p className='font-bold text-indigo-600 text-xl'>Last 7 days</p>
                    </div>
                    <div className='flex py-3 border-b-2 border-gray-100'>
                        <div className='px-4 py-3 font-bold text-xl'>1</div>
                        <div><img src={Pic01} alt="" className='w-14' /></div>
                        <div className='flex-row px-3 '>
                            <div className='font-semibold text-lg'>CryptoFun</div>
                            <div className='flex'>
                                <div className='py-2'><FaEthereum /></div>
                                <div className='font-semibold text-lg'>19,565.45 </div>
                            </div>
                        </div>
                        <div className='flex-row px-3 text-cyan-500 font-bold py-4 text-2xl'>
                            +26.52%
                        </div>
                    </div>
                    <div className='flex py-3 border-b-2 border-gray-100'>
                        <div className='px-4 py-3 font-bold text-xl'>2</div>
                        <div><img src={Pic02} alt="" className='w-14' /></div>
                        <div className='flex-row px-3 '>
                            <div className='font-semibold text-lg'>Cryp</div>
                            <div className='flex'>
                                <div className='py-2'><FaEthereum /></div>
                                <div className='font-semibold text-lg'>26,254.45 </div>
                            </div>
                        </div>
                        <div className='flex-row px-3 text-cyan-500 font-bold py-4 text-2xl'>
                            +10.12%
                        </div>
                    </div>
                    <div className='flex py-3 border-b-2 border-gray-100'>
                        <div className='px-4 py-3 font-bold text-xl'>3</div>
                        <div><img src={Pic03} alt="" className='w-14' /></div>
                        <div className='flex-row px-3 '>
                            <div className='font-semibold text-lg'>Roahdhsa</div>
                            <div className='flex'>
                                <div className='py-2'><FaEthereum /></div>
                                <div className='font-semibold text-lg'>36,565.45 </div>
                            </div>
                        </div>
                        <div className='flex-row px-3 text-red-500 font-bold py-4 text-2xl'>
                            +4.36%
                        </div>
                    </div>
                    <div className='flex py-3 border-b-2 border-gray-100'>
                        <div className='px-4 py-3 font-bold text-xl'>4</div>
                        <div><img src={Pic04} alt="" className='w-14' /></div>
                        <div className='flex-row px-3 '>
                            <div className='font-semibold text-lg'>Fkehrirsdr</div>
                            <div className='flex'>
                                <div className='py-2'><FaEthereum /></div>
                                <div className='font-semibold text-lg'>36,465.23 </div>
                            </div>
                        </div>
                        <div className='flex-row px-3 text-cyan-500 font-bold py-4 text-2xl'>
                            +15.12%
                        </div>
                    </div>
                    <div className='flex py-3 border-b-2 border-gray-100'>
                        <div className='px-4 py-3 font-bold text-xl'>5</div>
                        <div><img src={Pic05} alt="" className='w-14' /></div>
                        <div className='flex-row px-3 '>
                            <div className='font-semibold text-lg'>Art Crypto</div>
                            <div className='flex'>
                                <div className='py-2'><FaEthereum /></div>
                                <div className='font-semibold text-lg'>10,362.33 </div>
                            </div>
                        </div>
                        <div className='flex-row px-3 text-red-500 font-bold py-4 text-2xl'>
                            +2.78%
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Section3