'use client'
import Link from 'next/link';
import styles from './singin.module.css'
import React, { useState } from 'react'

export default function page() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.readAsDataURL(phone)
        reader.onloadend = () => {
            console.log(reader.result);
            return;
        }
        // Add your code here to save the product to the database or API

    }

    return (
        <div className={`w-full flex justify-center items-center h-[100vh]`}>
            <div className={`${styles.signParent}`} >
                <h1 className='top-[20px] right-[40px] absolute font-[600] text-[#59c7e9] text-[40px]'>Sign In</h1>
                <h1 className='top-[20px] left-[20px] z-[4] absolute font-[700] text-[40px]'>Geni-I</h1>
                <section className={` ${styles.signImgFrame}`} >
                    <h1 className='font-[700] text-[40px]'>Welcome!</h1>
                    <p className='font-[600] text-[20px]'>Sign in to secure your purchase all services are redirected to you.</p>
                </section>
                <form className={`${styles.signForm}`}>
                    <label htmlFor="email">
                        <span>Email</span>
                        <input type="email" name="email" id="" />
                    </label>
                    <label htmlFor="password">
                        <span>Password</span>
                        <input type="password" name="password" id="" placeholder='**********' />
                    </label>
                    <Link href={'/reset'}>
                        <p className='text-[13px] text-[blue] text-center'>Forgot password.</p>
                    </Link>
                    <button type='submit'>Submit</button>
                    <p className='text-[13px] text-[blue] text-center'>Don't have an account? <Link href={'/signup'} className='hover:text-[gray]'>Sign Up</Link></p>
                </form>
            </div>
        </div>
    )
}