'use client'
import React, { useState } from 'react';
import './footer.css'
import Link from 'next/link';
import { BtnLoad } from '../Content/Content'

export default function Footer() {
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
            const res = await fetch(`http://localhost:3000/api/client/message`, {
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
        <div className='footer-con'>
            <div className='box-border px-[2%] pt-[50px] footer-p t-[30px]'>
                <section className='flex justify-between gap-[20px] footer-content'>
                    <ul className='footer-links-p'>
                        <details>
                            <li className='font-[600]'><span className='footer-head'>Information</span>
                                <summary>
                                    <ul className='pt-3 text-[14px]'>
                                        <li className='my-[10%]'>
                                            <Link href='#'>About Us</Link>
                                        </li>
                                        <li>
                                            <Link href='/comment'>comment</Link>
                                        </li>
                                        <li className='my-[10%]'>
                                            <Link href='/contact'>Contact Us</Link>
                                        </li>
                                    </ul>
                                </summary>
                            </li>
                        </details>
                        <details>
                            <li className='font-[600]'><span className='footer-head'>Navigate</span>
                                <summary>
                                    <ul className='pt-3 text-[14px]'>
                                        <li className='my-[10%]'>
                                            <Link href='/'>Home</Link>
                                        </li>
                                        <li className='my-[10%]'>
                                            <Link href='cart'>Cart</Link>
                                        </li>
                                        <li className='my-[10%]'>
                                            <Link href='/product'>Products</Link>
                                        </li>
                                    </ul>
                                </summary>
                            </li>
                        </details>
                        <details>
                            <li className='font-[600]'><span className='footer-head'>Categories</span>
                                <summary>
                                    <ul className='pt-3 text-[14px]'>
                                        <li className='my-[10%]'>
                                            <Link href='/'>Feeding Gadgets</Link>
                                        </li>
                                        <li className='my-[10%]'>
                                            <Link href='/'>Clothing</Link>
                                        </li>
                                        <li className='my-[10%]'>
                                            <Link href='/'>Mother Wear</Link>
                                        </li>
                                    </ul>
                                </summary>
                            </li>
                        </details>
                        <details>
                            <div>
                                <h1 className='footer-head'>Service Details</h1>
                                <summary>
                                    <p className='my-[6%] text-[14px]'>+880 1234 567890</p>
                                    <p className='my-[6%] text-[14px] footer-head'>geni-i@gmail.com</p>
                                    <p className='my-[6%] text-[14px]'>Tuesday - Saturday: 8:00am - 5:00pm</p>
                                </summary>
                            </div>
                        </details>
                    </ul>
                    <div className='form-container w-[400px] font-[400]'>
                        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-[10px] w-[100%] comment-form'>
                            <h1 className='footer-head'>Drop comments</h1>
                            <label htmlFor="email" className='flex flex-col gap-[5px]'>
                                <span className='text-[13px]'>email</span>
                                <input type="email" name='email' value={formData.name} onChange={handleInputChange} className='px-[15px] py-[6px] rounded-[5px] w-full outline-none' placeholder='client@gmail.com' />
                            </label>
                            <label htmlFor="title" className='flex flex-col gap-[5px]'>
                                <span className='text-[13px]'>Subject</span>
                                <select name="title" value={formData.name} onChange={handleInputChange} className='px-[15px] py-[7px] rounded-[5px] w-full outline-none' >
                                    <option value="">Select Title</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="suggestion">Suggestion</option>
                                    <option value="question">Question</option>
                                    <option value="complaint">Complaint</option>
                                </select>
                            </label >
                            <label htmlFor="textarea" className='flex flex-col gap-[5px]'>
                                <span className='text-[13px]'>Comment</span>
                                <textarea name="message" id="" rows="3" value={formData.name} onChange={handleInputChange} placeholder='Drop your comment here!' className='px-[15px] py-[10px] rounded-[6px] w-full font-[400] outline-none'></textarea>
                            </label>
                            <button type='submit' className='bg-[#000] px-[26px] py-[5px] rounded-[4px] w-fit text-[#fff]'>
                                {btnLoader ? <BtnLoad /> : 'Submit'}
                            </button>
                        </form>
                    </div>
                </section>
                <footer className='box-border mt-[10px] py-[15px] border-t' >
                    <p className='text-[14px]'>Copyright 2024. All rights reserved.</p>
                </footer>
            </div>
        </div>
    )
}
