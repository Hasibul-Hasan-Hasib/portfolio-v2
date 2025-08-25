import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        emailjs
            .send(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                {
                    from_name: formState.name,
                    from_email: formState.email,
                    to_name: "Hasibul Hasan",
                    message: formState.message,
                },
                import.meta.env.VITE_EMAIL_PUBLIC_KEY
            )
            .then(
                () => {
                    setStatus("✅ Message sent successfully!");
                    setFormState({ name: "", email: "", message: "" });
                },
                (error) => {
                    console.error("FAILED...", error);
                    setStatus("❌ Failed to send message. Try again!");
                }
            )
            .finally(() => setLoading(false));
    };

    // Build the code string for SyntaxHighlighter
    const codeString = `
/**
 * Contact Information:
 * 📞 Phone: +880 1533 679 970
 * 💬 WhatsApp: +880 1766 848 008
 * 🐙 GitHub: https://github.com/Hasibul-Hasan-Hasib
 * 💼 LinkedIn: linkedin.com/in/your-profile
 * 📘 Facebook: facebook.com/your.username
 * 📷 Instagram: instagram.com/your.username
 **/

const message = {
  name: "${formState.name || "Your name"}",
  email: "${formState.email || "your.email@example.com"}",
  message: "${formState.message || "Your message here..."}"
};

export default message;
`;

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
                    required
                />

                <label htmlFor="email" className="text-slate-400 font-mono">_email:</label>
                <motion.input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter your email"
                    className="p-3 border border-gray-600 bg-transparent focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded w-full shadow-md"
                    value={formState.email}
                    required
                />

                <label htmlFor="message" className="text-slate-400 font-mono">_message:</label>
                <motion.textarea
                    name="message"
                    onChange={handleChange}
                    placeholder="Enter your message"
                    className="p-3 border border-gray-600 bg-transparent focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded w-full shadow-md h-32"
                    value={formState.message}
                    required
                />

                <motion.button
                    type="submit"
                    className="bg-teal-600 text-white w-fit py-2 px-8 rounded shadow-lg hover:bg-teal-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send Message"}
                </motion.button>

                {status && <p className="text-sm mt-2">{status}</p>}
            </motion.form>

            {/* Live Preview Section */}
            <motion.div
                className="md:col-span-1 border-t md:border-t-0 md:border-l border-slate-700"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <SyntaxHighlighter
                    language="javascript"
                    style={nightOwl}
                    wrapLines
                    showLineNumbers
                    customStyle={{
                            margin: 0,
                            padding: "1rem",
                            background: "transparent",
                        }}
                >
                    {codeString}
                </SyntaxHighlighter>
            </motion.div>
        </section>
    );
};

export default Contact;
