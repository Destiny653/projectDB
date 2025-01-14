import React from 'react';
import './footer.css'
import Link from 'next/link';

export default function Footer() {
    return (
        <div className='footer-con'>
            <div className='box-border px-[2%] pt-[50px] text-[white] footer-p t-[30px]'>
                <section className='flex justify-between items-cente h-[200px]'>
                    <ul className='flex justify-evenly gap-[9px] footer-links-p'>
                        <li className='font-[600]'><span className='footer-head'>Information</span>
                            <ul className='pt-3 text-[14px]'>
                                <li className='my-[10%]'>
                                    <Link href='#'>About Us</Link>
                                </li>
                                <li>
                                    <Link href='/comment'>comment</Link>
                                </li>
                                <li className='my-[10%]'>
                                    <Link href='#'>Contact Us</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='font-[600]'><span className='footer-head'>Navigate</span>
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
                        </li>
                        <li className='font-[600]'><span className='footer-head'>Categories</span>
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
                        </li>
                    </ul>
                    <div>
                        <h1 className='text-[27px] footer-head'>GENI~I</h1>
                        <p className='my-[6%] text-[14px]'>+880 1234 567890</p>
                        <p className='my-[6%] text-[14px] footer-head'>geni-i@gmail.com</p>
                        <p className='my-[6%] text-[14px]'>Tuesday - Saturday: 8:00am - 5:00pm</p>
                    </div>
                </section>
                <footer className='box-border py-[15px] border-t'>
                    <p className='text-[14px]'>Copyright 2024. All rights reserved.</p>
                </footer>
            </div>
        </div>
    )
}
