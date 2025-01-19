'use client'
import Link from 'next/link';
import styles from './singin.module.css'
import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext';
import { Reset, ValidatorMail, ValidatorOTP } from '../components/Validator/Validator';

export default function page() {

    const resets= [ValidatorMail, ValidatorOTP, Reset]

    const { verification, setVerification, validMail, authorize, setValidMail, validNum, setValidNum } = useContext(ThemeContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/api/client/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'apllication/json' },
                body: JSON.stringify(formData)
            })
            const req = await res.json()
            if (!res.ok) {
                alert(req.message)
            }
            alert(req.message)
        } catch (error) {
            alert('Error: ' + error.message)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.tartget
        setFormData(() => ({ ...formData, [name]: value }))
    }

    return (
        <>
            <div className={`top-[0] left-[0] z-[10] fixed flex justify-center items-center bg-[#ffffff80] w-full h-full`} style={{ display: verification ? "flex" : "none" }}>
                <div className={`${styles.valiBugCon}`} onClick={() => setVerification(false)} >
                    <div className={`${styles.valiBug1}`}></div>
                    <div className={`${styles.valiBug2}`}></div>
                </div>
                {
                   !authorize ? (!validMail ? <ValidatorMail /> : <ValidatorOTP /> ) : <Reset/>
                }
            </div>
            <div className={`w-full flex justify-center items-center h-[100vh]`}>
                <div className={`${styles.signParent}`} >
                    <h1 className='top-[20px] right-[40px] absolute font-[600] text-[#59c7e9] text-[40px]'>Sign In</h1>
                    <h1 className='top-[20px] left-[20px] z-[4] absolute font-[700] text-[40px]'>Geni-I</h1>
                    <section className={` ${styles.signImgFrame}`} >
                        <h1 className='font-[700] text-[40px]'>Welcome!</h1>
                        <p className='font-[600] text-[20px]'>Sign in to secure your purchase all services are redirected to you.</p>
                    </section>
                    <form className={`${styles.signForm}`} onSubmit={handleSubmit}>
                        <label htmlFor="email">
                            <span>Email</span>
                            <input type="email" name="email" id="" value={formData.name} onChange={handleInputChange} />
                        </label>
                        <label htmlFor="password">
                            <span>Password</span>
                            <input type="password" name="password" id="" placeholder='**********' value={formData.name} onChange={handleInputChange} />
                        </label>
                        <p className='text-[13px] text-[blue] text-center hover:text-[gray] cursor-pointer' onClick={() => setVerification(true)} >Forgot password.</p>
                        <button type='submit'>Submit</button>
                        <p className='text-[13px] text-[blue] text-center'>Don't have an account? <Link href={'/signup'} className='hover:text-[gray]'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}   