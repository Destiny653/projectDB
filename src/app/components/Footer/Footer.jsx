import React from 'react';
import './footer.css'

export default function Footer() {
    return (
        <div className='mt-[30px] px-[2%] border-t box-border pt-[50px] bg-[#8d5f0b56]'>
            <section className='flex justify-between items-cente h-[300px]'>
                <ul className='footer-links-p flex justify-evenly gap-[9px]'>
                    <li className='font-[600] text-[#8d600bb9]'>Information
                        <ul className=' font-[400] text-black text-[14px] pt-3'>
                            <li className='my-[10%]'>
                                <a href='#'>About Us</a>
                            </li>
                            <li>
                                <a href='#'>Press</a>
                            </li>
                            <li className='my-[10%]'>
                                <a href='#'>Contact Us</a>
                            </li>
                        </ul>
                    </li>
                    <li className='font-[600] text-[#8d600bb9]'>My Account
                        <ul className=' font-[400] text-[14px] text-black pt-3'>
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
                    <li className='font-[600] text-[#8d600bb9]'>Categories
                        <ul className=' font-[400] text-[14px] text-black pt-3'>
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
                    <h1 className='text-[27px] text-[#8d600bb9]'>GENI~I</h1>
                    <p className='font-[400] text-[14px] my-[6%]'>+880 1234 567890</p>
                    <p className='font-[400] text-[14px] my-[6%] text-[#8d600bb9]'>geni-i@gmail.com</p>
                    <p className='font-[400] text-[14px] my-[6%]'>Tuesday - Saturday: 8:00am - 5:00pm</p>
                </div>
            </section>
            <footer className='border-t box-border py-[15px]'>
                <p className='font-[300] text-[14px]'>Copyright 2024. All rights reserved.</p>
            </footer>
        </div>
    )
}
