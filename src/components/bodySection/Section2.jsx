import React from 'react'

function Section2() {
    return (
        <div className="bg-gray-100 px-10" >
            <div className="md:flex items-center justify-between py-20 md:px-10 px-7">
                <div className=''>
                    <h1 className='font-bold uppercase text-3xl'>THE AMAZING NFT ART OF THE WORLD HERE</h1>
                </div>
                <div className='lg:flex md:flex sm:flex'>
                    <div>
                        <ion-icon size="large" name="newspaper-outline"></ion-icon>
                    </div>
                    <div>
                        <h1 className='font-bold text-2xl pb-4 pl-4'>First Transection</h1>
                        <p className='pl-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, alias.</p>
                    </div>
                </div>
                <div className='lg:flex md:flex sm:flex'>
                    <div>
                        <ion-icon size="large" name="podium-outline"></ion-icon>
                    </div>
                    <div>
                        <h1 className='font-bold text-2xl pb-4 pl-4'>Growth Transection</h1>
                        <p className='pl-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, reiciendis!</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section2