"use client";
import { useState, useEffect } from "react";

const LoginModal = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) return null;
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-white w-full max-w-xs p-4 rounded-lg shadow-2xl relative animate-in fade-in zoom-in duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2.5 right-2.5 p-0.5 rounded-full hover:bg-gray-100 transition-colors text-gray-400"
                    aria-label="Close modal"
                >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <header className="text-center mb-4">
                    <h2 className="text-base font-bold text-gray-900">
                        {isLogin ? "Welcome back" : "Create account"}
                    </h2>
                    <p className="text-gray-400 text-xs mt-0.5">
                        {isLogin ? "Enter your details to sign in" : "Join our community today"}
                    </p>
                </header>
                <form onSubmit={handleSubmit} className="space-y-2.5">
                    {!isLogin && (
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-0.5">Full Name</label>
                            <input
                                required
                                type="text"
                                placeholder="John Doe"
                                className="w-full border border-gray-200 px-2 py-1.5 text-xs rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-300"
                            />
                        </div>
                    )}
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-0.5">Email Address</label>
                        <input
                            required
                            type="email"
                            placeholder="name@company.com"
                            className="w-full border border-gray-200 px-2 py-1.5 text-xs rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-300"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-0.5">Password</label>
                        <input
                            required
                            type="password"
                            placeholder="••••••••"
                            className="w-full border border-gray-200 px-2 py-1.5 text-xs rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-1.5 rounded-md transition-colors mt-1"
                    >
                        {isLogin ? "Sign In" : "Get Started"}
                    </button>
                </form>

                <footer className="text-center mt-3 pt-3 border-t border-gray-100">
                    <p className="text-gray-500 text-xs">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <button
                            type="button"
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-blue-600 font-semibold ml-1 hover:underline underline-offset-2 text-xs"
                        >
                            {isLogin ? "Sign up" : "Log in"}
                        </button>
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default LoginModal;