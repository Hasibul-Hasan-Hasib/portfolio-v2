import React from 'react';

const GlitchImage = () => {
    return (
        <div className="col-span-5 p-8 hidden md:block">
            <div className="group relative w-64 h-64 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden animate-float
                before:absolute before:inset-0 before:rounded-full before:p-[2px]
                before:bg-gradient-to-r before:from-pink-500 before:to-blue-500 before:animate-pulse before:blur-lg border-2 border-slate-500">

                {/* Red glitch */}
                <div
                    className="absolute inset-0 bg-cover bg-center mix-blend-multiply grayscale bg-slate-700
                        animate-glitch-shake animate-glitch-flash pause-on-hover"
                    style={{ backgroundImage: "url('/ChatGPT Image Aug 18, 2025, 01_30_44 AM.png')" }}
                ></div>

                {/* Blue glitch */}
                <div
                    className="absolute inset-0 bg-cover bg-center mix-blend-multiply grayscale bg-pink-700
                        animate-glitch-shake-slow animate-glitch-flash pause-on-hover"
                    style={{ backgroundImage: "url('/ChatGPT Image Aug 18, 2025, 01_30_44 AM.png')" }}
                ></div>

                {/* Green glitch */}
                <div
                    className="absolute inset-0 bg-cover bg-center mix-blend-multiply grayscale bg-green-700
                        animate-glitch-shake-fast animate-glitch-flash pause-on-hover"
                    style={{ backgroundImage: "url('/ChatGPT Image Aug 18, 2025, 01_30_44 AM.png')" }}
                ></div>
            </div>
        </div>
    );
};

export default GlitchImage;