import React from 'react';
import './footer.css'

export default function Footer() {
    return (
        <div className='box-border px-[2%] pt-[50px] border-t text-[white] footer-p t-[30px]'>
            <section className='flex justify-between items-cente h-[300px]'>
                <ul className='flex justify-evenly gap-[9px] footer-links-p'>
                    <li className='font-[600]'><span className='footer-head'>Information</span>
                        <ul className='pt-3 font-[400] text-[14px]'>
                            <li className='my-[10%]'>
                                <a href='#'>About Us</a>
                            </li>
                            <li>
                                <a href='/comment'>comment</a>
                            </li>
                            <li className='my-[10%]'>
                                <a href='#'>Contact Us</a>
                            </li>
                        </ul>
                    </li>
                    <li className='font-[600]'><span className='footer-head'>My Account</span>
                        <ul className='pt-3 font-[400] text-[14px]'>
                            <li className='my-[10%]'>
                                <a href='#'>Orders</a>
                            </li>
                            <li className='my-[10%]'>
                                <a href='#'>Credit Cards</a>
                            </li>
                            <li className='my-[10%]'>
                                <a href='#'>Addresses</a>
                            </li>
                        </ul>
                    </li>
                    <li className='font-[600]'><span className='footer-head'>Categories</span>
                        <ul className='pt-3 font-[400] text-[14px]'>
                            <li className='my-[10%]'>
                                <a href='#'>Feeding Gadgets</a>
                            </li>
                            <li className='my-[10%]'>
                                <a href='#'>Clothing</a>
                            </li>
                            <li className='my-[10%]'>
                                <a href='#'>Mother Wear</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div>
                    <h1 className='text-[27px] footer-head'>GENI~I</h1>
                    <p className='my-[6%] font-[400] text-[14px]'>+880 1234 567890</p>
                    <p className='my-[6%] font-[400] text-[14px] footer-head'>geni-i@gmail.com</p>
                    <p className='my-[6%] font-[400] text-[14px]'>Tuesday - Saturday: 8:00am - 5:00pm</p>
                </div>
            </section>
            <footer className='box-border py-[15px] border-t'>
                <p className='font-[300] text-[14px]'>Copyright 2024. All rights reserved.</p>
            </footer>
        </div>
    )
}
