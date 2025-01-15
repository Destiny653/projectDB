'use client'
import React, { useContext } from 'react';
import './navbar.css';
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { SlHeart } from "react-icons/sl";
import { VscSearch } from "react-icons/vsc";
import Theme from '../Theme/Theme';
import { ThemeContext } from '../../../../context/ThemeContext';
import Link from 'next/link';

export default function Navbar() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className='nav-con'>
            <div className='box-border nav-p'>
                <section className='box-border w-full b-[#40abdd4d] nav-menu'>
                    <section className='flex gap-[8px]'>
                        <div className='box-border flex flex-col justify-evenly items-center py-[3px] w-[46px] h-[42px] nav-i'>
                            <section className='bg-black rounded-xl w-[32px] h-[3px]' ></section>
                            <section className='bg-black rounded-xl w-[28px] h-[3px]' ></section>
                            <section className='bg-black rounded-xl w-[32px] h-[3px]' ></section>
                        </div>
                        <h1 className='font-[600] text-[27px]'>GENI~I</h1>
                    </section>
                    <section className='relative box-border flex justify-center'>
                        <input style={theme == 'black' ? { color: 'black' } : { color: 'black' }} className='px-[35px] py-[12px] rounded-[6px] w-[80%] placeholder:text-[14px] outline-none' type="search" placeholder='Search products...' />
                        <VscSearch className='top-[20%] left-[11%] box-border absolute p-[4px] rounded-full w-[25px] h-[25px] text-[#000] text-[30px] nav-i' />
                    </section>
                    <section className='flex justify-between'>
                        <div className='flex justify-center items-center gap-[4px]'>
                            <section className='flex justify-center items-center w-12 h-12 nav-i'>
                                <CiUser className='w-[60%] h-[60%]' color="#000" />
                            </section>
                            <section>
                                <ul className='text-[14px]'>
                                    <li>Hello...</li>
                                    <li>Sign in or Register</li>
                                </ul>
                            </section>
                        </div>
                        <div className='relative flex justify-center items-center w-12 h-12 nav-i'>
                            <span className='top-[-15%] left-[60%] absolute flex justify-center items-center bg-[#7bce5bf6] rounded-full w-[45%] h-[47%] text-[#fff] text-[13px]'>15</span>
                            <CiShoppingCart className='w-[60%] h-[60%]' color="#000" />
                        </div>
                        <div className='relative flex justify-center items-center w-12 h-12 nav-i'>
                            <span className='top-[-15%] left-[60%] absolute flex justify-center items-center bg-[red] rounded-full w-[45%] h-[47%] text-[#fff] text-[13px]'>10</span>
                            <SlHeart className='w-[47%] h-[47%]' color="#000" />
                        </div>
                    </section>
                </section>
                <section className='nav-link-b'>
                    <nav className='w-full nav-link-c'>
                        <ul className='box-border flex items-center gap-[10px] py-[10px] nav-link-p'>
                            <button className='px-[20px] py-[12px] font-[500] nav-i'>All Categories</button>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/product">Product</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/cart">Cart</Link></li>
                            <li><Link href="/signin">Login</Link></li>
                            <li className='relative theme-panel-p'>Theme
                                <Theme />
                            </li>
                        </ul>
                        <p>+237-675-456-389</p>
                    </nav>
                </section>

            </div>
        </div>
    )
}
