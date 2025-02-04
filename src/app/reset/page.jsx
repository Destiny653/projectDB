'use client'
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext';
import { Reset, ValidatorMail, ValidatorOTP } from '../components/Validator/Validator';
import styles from './reset.module.css'
import { useRouter } from 'next/navigation';
import { URL } from '../components/URL/URL';

export default function page() {
    const config =  URL
    const { verification, setVerification, validMail, authorize, setValidMail, validNum, setValidNum } = useContext(ThemeContext)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigation = useRouter()
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = localStorage.getItem('otpEmail')
        formData.email = email
        try {
            const res = await fetch(`${config}/api/client/reset-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            const req = await res.json()
            if (!res.ok) {
                alert(req.message)
                e.target.reset();
                return;
            }
            alert(req.message)
            e.target.reset();
            navigation.push('/signin')
            return;
        } catch (error) {
            alert('Error: ' + error.message)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(() => ({ ...formData, [name]: value }))
    }
    useEffect(() => {
        setVerification(false)
    }, [])

    return (
        <>
            <div className={`top-[0] left-[0] z-[10] fixed flex justify-center items-center bg-[#ffffff80] w-full h-full`} style={{ display: verification && "none" }}>
                <Link href={'/signin'}>
                    <button className='top-[40px] right-[40px] absolute bg-[#000] px-[12px] py-[6px] rounded-[5px] text-[#fff]'>Sign in</button>
                </Link>
                {
                    !validMail ? <ValidatorMail /> : <ValidatorOTP />
                }
            </div>
            <div className={`w-full flex justify-center items-center  box-border py-[100px]`}>
                <div className={`${styles.signParent}`} >
                    <h1 className='top-[20px] right-[40px] absolute font-[600] text-[#59c7e9] text-[27px]'>Reset password</h1>
                    <h1 className='top-[20px] left-[20px] z-[4] absolute font-[700] text-[27px]'>Geni-I</h1>
                    <section className={` ${styles.signImgFrame}`} >
                        <h1 className='font-[700] text-[40px]'>Welcome!</h1>
                        <p className='font-[600] text-[20px]'>Renew your password and secure your transactions.</p>
                    </section>
                    <form className={`${styles.signForm}`} onSubmit={handleSubmit}>
                        <label htmlFor="password">
                            <span>Password</span>
                            <input type="password" name="password" id="" value={formData.name} placeholder='**********' onChange={handleInputChange} />
                        </label>
                        <label htmlFor="password">
                            <span>Confirm password</span>
                            <input type="password" name="confirmPassword" id="" placeholder='**********' value={formData.name} onChange={handleInputChange} />
                        </label>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
