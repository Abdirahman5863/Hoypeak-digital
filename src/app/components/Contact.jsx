"use client"
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


const contact = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs.sendForm( process.env.NEXT_PUBLIC_SERVICE_ID,
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
    <div>
    <h1>Contact Us</h1>
    <form onSubmit={sendEmail}
    ref={form} >
        <div>
            <label htmlFor="fullName">Full Name *</label>
            <input type="text" id="fullName" name="full_name" required />
        </div>
        <div>
            <label htmlFor="website">Website *</label>
            <input type="url" id="website" name="website" required />
        </div>
        <div>
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email"  required />
        </div>
        <div>
            <label htmlFor="phone">Phone *</label>
            <input type="tel" id="phone" name="phone" required />
        </div>
        <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" ></textarea>
        </div>
        <div>
            <button type="submit">Submit</button>
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
  )
};

export default contact