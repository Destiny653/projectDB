'use client'
import Link from 'next/link';
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
        <div className='bg-[#d4b95f3b] flex justify-center items-center box-content py-[10%]'>
            <section className='w-[80%] flex justify-center items-center  bg-[#ffffff] rounded-[15px] box-border py-[20px]'>
                <form className='flex flex-col w-[70%]' onSubmit={handleSubmit}>
                    <div className='g-[red] w-full box-border py-[3%] '>
                        <h1 className='text-[27px] font-bold text-[#000000]'>Sing in request</h1>
                        <p className='font-[300]'>Validate some personal Information. Your info will never be publicly available.</p>
                    </div>
                    <label htmlFor="email" className='flex flex-col gap-[4px] w-[50%] py-[2%]'>
                        <span className=''>Email address</span>
                        <input value={email} onChange={e => setEmail(e.target.value)} className=' outline-[0] border-[1px] border-[#6d471648] w-[100%] py-[6px] px-[20px]' type="text" id="email" name="email" placeholder="email@gmail.com" required />
                    </label>
                    <label htmlFor="password" className='flex flex-col gap-[4px] w-[50%]'>
                        <span className=''>Password</span>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className=' outline-[0] border-[1px] border-[#6d471648] rounded-[20px] w-[100%] py-[6px] px-[20px]' type="password" id="password" name="password" placeholder="*********" required />
                    </label>
                    <div className='flex items-center gap-[2%]'>
                        <button type='submit' className='bg-[#000] py-[9px] px-[30px] text-[#fff] w-fit rounded-[12px] my-[10px]'>Submit</button>
                        <span className='text-[14px] hover:text-[#0000ffc7] cursor-pointer'> Don't have an account?
                            <Link href={'/signup'}>
                                <strong> sign up.</strong>
                            </Link>
                        </span>
                    </div>
                </form>
            </section>
        </div>
    )
}
