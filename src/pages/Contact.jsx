import React, { useState } from 'react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., send the data to a server
        console.log('Form submitted:', formState);
        setFormState({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <section className='h-[calc(100vh-10rem)] md:h-[calc(100vh-11.35rem)] flex-grow-1 grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-400'>
            {/* email input section */}
            <form onSubmit={handleSubmit} className="md:col-span-1 flex flex-col w-full max-w-2xl mx-auto p-4 space-y-4">
                <label htmlFor="name" className="text-slate-400 my-1">_name:</label>
                <input
                    name="name"
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your name"
                    className="p-2 border bg-transparent border-gray-300 rounded-md w-full max-w-md"
                    value={formState.name}
                />
                <label htmlFor="name" className="text-slate-400 my-1">_email:</label>
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter your email"
                    className="p-2 border border-gray-300 rounded-md w-full max-w-md"
                    value={formState.email}
                />
                <label htmlFor="name" className="text-slate-400 my-1">_message:</label>
                <textarea
                    name="message"
                    onChange={handleChange}
                    placeholder="Enter your message"
                    className="p-2 border border-gray-300 rounded-md w-full max-w-md h-32"
                    value={formState.message}
                ></textarea>
                <button
                    type="submit"
                    className="bg-orange-800 text-slate-300 p-2 w-fit px-8 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Send Message
                </button>
            </form>
            <div className='md:col-span-1 flex flex-col items-center justify-center border-l border-slate-500'>
                <p className="text-gray-500 mt-4">{[formState.name, formState.email, formState.message]}</p>
            </div>
        </section>
    );
};

export default Contact;
