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
        <div className={`w-full flex justify-center items-center h-[80vh]`}>
            <form className={`${styles.signForm}`}>
                <label htmlFor="email">
                    <span>Email</span>
                    <input type="email" name="email" id="" />
                </label>
                <label htmlFor="password">
                    <span>Password</span>
                    <input type="password" name="password" id="" />
                </label>
                <Link href={'/reset'}>
                    <p>Forgot password.</p>
                </Link>
                <button type='submit'>Submit</button>
                <p className='text-[12px] text-[blue]'>Don't have an account? <Link href={'/signup'} className='hover:text-[gray]'>Sign Up</Link></p>
            </form>
        </div>
    )
}