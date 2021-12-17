import React from 'react';
import './GiftVoucher.css'

const GiftVoucher = () => {
    return (
        <div className='gift-container my-36'>
            <div className='container mx-auto'>
                <div className='py-20'>
                    <p className='text-lg text-white'>SCUBA ONLINE SCUBA DIVING LESSONS</p>
                    <h2 className='text-6xl text-white font-bold w-1/2'>Give a gift that makes a difference</h2>
                    <button className='bg-cyan-800 hover:bg-cyan-900 ease-in-out duration-300 font-semibold text-white py-4 px-12 my-8 rounded-full item-left tracking-wide'>GIFT NOW</button>
                </div>
            </div>
        </div>
    );
};

export default GiftVoucher;