"use client"
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            form.current,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
            () => {
                setSuccess(true);
                form.current.reset();
            },
            () => {
                setError(true);
            },
        );
    };

    return (
        <div className="relative w-full h-full overflow-hidden">
     
            <video className="absolute top-0 left-0 w-full h-full object-cover" src="/video.mp4" autoPlay muted loop />
            <div className="relative z-10 flex  flex-col items-center justify-center h-full sm:h-[800px] 
             bg-black bg-opacity-50">
            <div className="flex justify-center  items-center flex-col pb-10  sm:space-y-10   space-y-3 pt-5">
                <h1 className="font-[700] sm:text-[39px] text-[white] text-[20px] leading-6">Get 10 New Quote-Ready Leads</h1>
                <p className="font-[400] sm:text-[32px] text-[#00a8e8] leading-3">Within 30 Days, or You Don’t Pay</p>
            </div>
                <div className="max-w-lg w-[85%%]  sm:w-[100%] p-8  bg-white bg-opacity-70
                rounded shadow-lg">
                    <form onSubmit={sendEmail} ref={form} className="space-y-4">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-[#00a8e8]">Full Name *</label>
                            <input type="text" id="fullName" name="full_name" className="mt-1 block w-full p-2 border border-gray-300
                             rounded-md  shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500" required />
                        </div>
                        <div>
                            <label htmlFor="website" className="block text-sm font-medium text-[#00a8e8]">Website *</label>
                            <input type="url" id="website" name="website" className="mt-1 block w-full p-2 border
                             border-gray-300 rounded-md 
                             shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[#00a8e8]">Email *</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md  shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500" required />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-[#00a8e8]">Phone *</label>
                            <input type="tel" id="phone" name="phone" className="mt-1 block w-full p-2 border
                             border-gray-300 rounded-md  shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-[#00a8e8]">Message</label>
                            <textarea id="message" name="message" className="mt-1 block w-full p-2 border border-gray-300 rounded-md
                             shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Submit</button>
                        </div>
                        {success && (
                            <span className="text-green-600 font-semibold">
                                Your message has been sent successfully!
                            </span>
                        )}
                        {error && (
                            <span className="text-red-600 font-semibold">
                                Something went wrong!
                            </span>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;