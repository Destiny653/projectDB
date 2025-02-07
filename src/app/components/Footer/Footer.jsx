'use client'
import React, { useState } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { URL } from '../URL/URL';

const Footer = () => {
    const config = URL
    const [formData, setFormData] = useState({
        title: '',
        email: '',
        message: ''
    })
    const [btnLoader, setBtnLoader] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setBtnLoader(true)
        try {
            const res = await fetch(`${config}/api/client/message`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const req = await res.json()
            if (!res.ok) {
                setBtnLoader(false)
                alert(req.message)
                e.target.reset();

                return
            }
            setBtnLoader(false)
            alert(req.message)
            e.target.reset();
            return;
        } catch (error) {
            console.log('Error: ', error);
            setBtnLoader(false)
            alert('Error: ' + error)
            return;
        }
    }
    const handleInputChange = async (e) => {
        const { name, value } = e.target
        setFormData(() => ({ ...formData, [name]: value }))
    }

    return (
        <footer className="relative z-10 bg-gray-900 text-white">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
                <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div>
                        <h3 className="mb-4 font-bold text-xl">BabyBliss</h3>
                        <p className="text-gray-400">Your one-stop shop for all baby essentials</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Twitter className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 font-semibold text-lg">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Size Guide</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="mb-4 font-semibold text-lg">Customer Service</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Shipping Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Returns</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Order Status</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Payment Methods</a></li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <h4 className="mb-4 font-semibold text-lg">Contact Us</h4>
                        <form className="space-y-4"
                        onSubmit={handleSubmit}
                        >
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    name="email"
                                    onChange={handleInputChange}
                                    className="border-gray-700 focus:border-purple-500 bg-gray-800 px-4 py-2 border rounded-md w-full text-white placeholder-gray-400 focus:outline-none"
                                />
                            </div>
                            <div>
                                <select className="border-gray-700 focus:border-purple-500 bg-gray-800 px-4 py-2 border rounded-md w-full text-white focus:outline-none"
                                name="title"
                                onChange={handleInputChange}
                                >
                                    <option value="">Select Title</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="suggestion">Suggestion</option>
                                    <option value="question">Question</option>
                                    <option value="complaint">Complaint</option>
                                </select>
                            </div>
                            <div>
                                <textarea
                                    placeholder="Your Message"
                                    name="message"
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="border-gray-700 focus:border-purple-500 bg-gray-800 px-4 py-2 border rounded-md w-full text-white placeholder-gray-400 focus:outline-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md w-full text-white transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-gray-800 mt-12 pt-8 border-t text-center text-gray-400">
                    <p>&copy; 2024 BabyBliss. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;