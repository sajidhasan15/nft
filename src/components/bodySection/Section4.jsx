import React from 'react'
import Img from '../../assets/images/section-4.png';
import Img01 from '../../assets/images/section-3.0.png';
import Img02 from '../../assets/images/section-3.1.png';
import Img03 from '../../assets/images/section-3.2.png';
import Picture from '../../assets/images/3.png';

function Section4() {
    return (
        <div>
            <div className="bg-gray-100" >
                <div className="py-20 md:px-20 px-7">
                    <h1 className='uppercase font-bold text-3xl'>Collection Fratured nfts</h1>
                    <div className='md:flex items-center justify-between py-20'>
                        <div>
                            <div className='flex'>
                                <div>
                                    <img src={Img} alt="" className='w-96' />
                                </div>
                                <div className='flex-row py-1'>
                                    <div>
                                        <img src={Img01} alt="" className='w-28 py-2' />
                                    </div>
                                    <div>
                                        <img src={Img02} alt="" className='w-28 py-2' />
                                    </div>
                                    <div>
                                        <img src={Img03} alt="" className='w-28 py-2' />
                                    </div>
                                </div>
                            </div>
                            <h1 className='font-bold text-2xl pt-5 px-2'>Amazing Collection</h1>
                            <div className='flex justify-between'>
                                <div className='flex pt-2 px-2'>
                                    <div><img src={Picture} alt="" className='w-10' /></div>
                                    <div className='font-semibold text-lg px-2 py-2'>by Arkhan</div>
                                </div>
                                <div>
                                    <button className='ring-1 ring-indigo-600 rounded-full p-2 text-indigo-600'>Total 54 items</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex'>
                                <div>
                                    <img src={Img} alt="" className='w-96' />
                                </div>
                                <div className='flex-row py-1'>
                                    <div>
                                        <img src={Img01} alt="" className='w-28 py-2' />
                                    </div>
                                    <div>
                                        <img src={Img02} alt="" className='w-28 py-2' />
                                    </div>
                                    <div>
                                        <img src={Img03} alt="" className='w-28 py-2' />
                                    </div>
                                </div>
                            </div>
                            <h1 className='font-bold text-2xl pt-5 px-2'>Amazing Collection</h1>
                            <div className='flex justify-between'>
                                <div className='flex pt-2 px-2'>
                                    <div><img src={Picture} alt="" className='w-10' /></div>
                                    <div className='font-semibold text-lg px-2 py-2'>by Arkhan</div>
                                </div>
                                <div>
                                    <button className='ring-1 ring-indigo-600 rounded-full p-2 text-indigo-600'>Total 54 items</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex'>
                                <div>
                                    <img src={Img} alt="" className='w-96' />
                                </div>
                                <div className='flex-row py-1'>
                                    <div>
                                        <img src={Img01} alt="" className='w-28 py-2' />
                                    </div>
                                    <div>
                                        <img src={Img02} alt="" className='w-28 py-2' />
                                    </div>
                                    <div>
                                        <img src={Img03} alt="" className='w-28 py-2' />
                                    </div>
                                </div>
                            </div>
                            <h1 className='font-bold text-2xl pt-5 px-2'>Amazing Collection</h1>
                            <div className='flex justify-between'>
                                <div className='flex pt-2 px-2'>
                                    <div><img src={Picture} alt="" className='w-10' /></div>
                                    <div className='font-semibold text-lg px-2 py-2'>by Arkhan</div>
                                </div>
                                <div>
                                    <button className='ring-1 ring-indigo-600 rounded-full p-2 text-indigo-600'>Total 54 items</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4