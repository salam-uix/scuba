import React from 'react';
import { Link } from 'react-router-dom';

const service = (props) => {
    const { name, img, description, price } = props.service;
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
                <img className="w-full" src={img} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 h-20">
                        {name}
                    </div>
                    <p className="text-gray-800 text-lg font-semibold">
                        Price: ${price}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-cyan-800 hover:bg-cyan-900 ease-in-out duration-300 rounded-full px-3 py-1 ttext-base font-semibold text-white mr-2 mb-2 px-8 py-3">Details</span>
                    <span className="inline-block bg-cyan-800 hover:bg-cyan-900 ease-in-out duration-300 rounded-full px-3 py-1 text-base font-semibold text-white mr-2 mb-2 px-8 py-3">Sign Up</span>
                </div>
            </div>
        </div>
    );
};

export default service;