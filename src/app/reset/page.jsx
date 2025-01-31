'use client'
import Link from 'next/link'; 
import React, { useState } from 'react'

export default function page() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res =  await fetch(`http://localhost:3000/api/client/login`,{
                method: 'POST',
                headers: { 'Content-Type': 'apllication/json'},
                body: JSON.stringify(formData)
            })
            const req = await res.json()
            if(!res.ok){
                alert(req.message)
            }
            alert(req.message)
        } catch (error) {
            alert('Error: '+ error.message)
        }
    }

    const handleInputChange = (e)=>{
        const {name, value} = e.tartget
        setFormData(()=>({...formData, [name]:value}))
    }

    return (
        <div className={`flex justify-center items-center`}>
            <div className={`` }>
                <h1 className='top-[20px] right-[40px] absolute font-[600]` text-[#59c7e9] text-[40px]'>Sign In</h1>
                <h1 className='top-[20px] left-[20px] z-[4] absolute font-[700] text-[40px]'>Geni-I</h1>
                <section className={``} >
                    <h1 className='font-[700] text-[40px]'>Welcome!</h1>
                    <p className='font-[600] text-[20px]'>Sign in to secure your purchase all services are redirected to you.</p>
                </section>
                <form className={` `}>
                    <label htmlFor="email">
                        <span>Email</span>
                        <input type="email" name="email" id="" value={formData.name} onChange={handleInputChange} />
                    </label>
                    <label htmlFor="password">
                        <span>Password</span>
                        <input type="password" name="password" id="" placeholder='**********' value={formData.name} onChange={handleInputChange} />
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
