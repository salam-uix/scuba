import React from 'react';

const ContactUs = () => {
    return (
        <div className='container mx-auto py-36'>
            <div className='grid grid-cols-2 gap-4'>
                <div>
                    <h2 className='text-2xl font-normal mb-5'>HEAD OFFICE</h2>
                    <div className='flex items-center space-x-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <p>202 Helga Springs Rd, Crawford, TN 38554</p>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <p>800.275.8777</p>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                        <p>Telegram Support</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-normal mb-5'>SEND US A MESSAGE</h2>
                    <form className='flex flex-col space-y-2'>
                        <label>Your Name</label>
                        <input className='h-12 border-gray-300 border-2 outline-none rounded-lg p-4' type="text" id="name" name="name" placeholder='Your name..' />

                        <label>Your Email</label>
                        <input className='h-12 border-gray-300 border-2 outline-none rounded-lg p-4' type="text" id="email" name="email" placeholder='Your email..' />

                        <label>Subject</label>
                        <textarea className='border-gray-300 border-2 outline-none rounded-lg p-4' id="subject" name="subject" placeholder="Write your massge.." rows="8" cols="50"></textarea>

                        <button className='bg-cyan-800 hover:bg-cyan-900 ease-in-out duration-300 rounded-full px-3 py-1 text-base font-semibold text-white mr-2 mb-2 px-8 py-3 w-1/6'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;



{/* <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name..">
                    <label for="email">First Name</label>
                    <input type="email" id="email" name="email" placeholder="Your email..">



                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

                        <input type="submit" value="Submit"></input> */}