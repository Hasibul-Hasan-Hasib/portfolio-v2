import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });


    const handleChange = (e) => {
        setFormState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formState);
        setFormState({ name: "", email: "", message: "" });
    };

    return (
        <section className="h-[calc(100vh-10rem)] md:h-[calc(100vh-11.35rem)] flex-grow-1 grid grid-cols-1 md:grid-cols-2 text-slate-300 bg-gradient-to-b from-slate-900 to-slate-800 overflow-y-auto no-scrollbar">
            {/* Form Section */}
            <motion.form
                onSubmit={handleSubmit}
                className="md:col-span-1 flex flex-col justify-center w-full max-w-2xl p-6 space-y-4 mx-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <label htmlFor="name" className="text-slate-400 font-mono">_name:</label>
                <motion.input
                    name="name"
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your name"
                    className="p-3 border border-gray-600 bg-transparent focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded w-full shadow-md"
                    value={formState.name}
                    
                />

                <label htmlFor="email" className="text-slate-400 font-mono">_email:</label>
                <motion.input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter your email"
                    className="p-3 border border-gray-600 bg-transparent focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded w-full shadow-md"
                    value={formState.email}
                    
                />

                <label htmlFor="message" className="text-slate-400 font-mono">_message:</label>
                <motion.textarea
                    name="message"
                    onChange={handleChange}
                    placeholder="Enter your message"
                    className="p-3 border border-gray-600 bg-transparent focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded w-full shadow-md h-32"
                    value={formState.message}
                    
                />

                <motion.button
                    type="submit"
                    className="bg-orange-600 text-white w-fit py-2 px-8 rounded shadow-lg hover:bg-orange-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Send Message
                </motion.button>
            </motion.form>

            {/* Live Preview Section */}
            <motion.div
                className="md:col-span-1 flex flex-col border-t md:border-t-0 md:border-l border-slate-700"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="w-full h-full text-sm text-slate-300 overflow-auto p-4 leading-relaxed">
                    {[
                        <span className="text-green-400">/**</span>,
                        <span className="text-green-400"> * Contact Information:</span>,
                        <span className="text-green-400"> * 📞 Phone: {formState.phone || "+880 1533 679 970"}</span>,
                        <span className="text-green-400"> * 💬 WhatsApp: {formState.whatsapp || "+880 1766 848 008"}</span>,
                        <span className="text-green-400"> * 🐙 GitHub: https://github.com/Hasibul-Hasan-Hasib</span>,
                        <span className="text-green-400"> * 💼 LinkedIn: linkedin.com/in/your-profile</span>,
                        <span className="text-green-400"> * 📘 Facebook: facebook.com/your.username</span>,
                        <span className="text-green-400"> * 📷 Instagram: instagram.com/your.username</span>,
                        <span className="text-green-400"> */</span>,
                        <span></span>,
                        <span></span>,

                        <span className="text-pink-400">const <span className="text-purple-400">message</span> = {"{"}</span>,

                        <span className="pl-6">
                            name<span className="text-pink-400">:</span> <span className="text-amber-200">{`"${formState.name || "Your name"}"`}</span>,
                        </span>,

                        <span className="pl-6 ">
                            email<span className="text-pink-400">:</span> <span className="text-amber-200">{`"${formState.email || "your.email@example.com"}"`}</span>,
                        </span>,

                        <span className="pl-6 ">
                            message<span className="text-pink-400">:</span> <span className="text-amber-200">{`"${formState.message || "Your message here..."}"`}</span>
                        </span>,
                        <span className="text-pink-400">{"}"}</span>,
                        <span></span>,
                        <span></span>,
                        <span className="text-pink-400">
                            export default<span className="text-purple-400"> message</span>;
                        </span>,
                        <span></span>,
                        <span></span>,
                        <span></span>,

                    ].map((line, i) => (
                        <div key={i} className="flex">
                            {/* Line number */}
                            <div className="w-10 text-right pr-4 text-slate-500 select-none">
                                {i + 1}
                            </div>
                            {/* Code line */}
                            <div className="flex-1">{line}</div>
                        </div>
                    ))}
                </div>
            </motion.div>

        </section >
    );
};

export default Contact;