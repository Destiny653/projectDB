import React, { useContext, useEffect, useState } from 'react';
import styles from './validator.module.css'
import { ThemeContext } from '../../../../context/ThemeContext';
import Link from 'next/link';

export function ValidatorMail() {
  const { validMail, setValidMail, validNum, setValidNum } = useContext(ThemeContext)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = document.getElementById('email').value
    try {
      const res = await fetch(`http://localhost:3000/api/client/email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      const req = await res.json()
      if (!res.ok) {
        alert(req.message)
        return;
      }
      setValidMail(true)
      localStorage.setItem('otpEmail', email)
      alert(req.message)
      return;
    } catch (error) {
      alert('Error: ' + error.message)
    }
  }

  return (
    <div className={`${styles.validatorParent}`}>
      <button className='top-[40px] left-[40px] absolute bg-[#000] px-[12px] py-[6px] rounded-[5px] text-[#fff]' onClick={() => { setValidMail(true) }} >Verify OTP</button>
      <div className={`${styles.validEmail} ${!validMail && styles.setMail} `}>
        <form action="" className='flex flex-col justify-center items-center gap-[10px]' onSubmit={handleSubmit}>
          <label htmlFor="email" className='flex flex-col gap-[7px] w-full'>
            <span>Email</span>
            <input type="email" name="email" id="email" />
          </label>
          <input type="submit" value="Submit" className='bg-[#000] text-[#fff]' />
          <h1 className='font-[500] text-[20px] text-left'>Verify Email</h1>
          <p className='text-[17px]'>We ensure that your account belongs to you an cannot be used by an intruder.</p>
        </form>
      </div>
    </div>
  )
}

export function ValidatorOTP() {
  const { setVerification, validMail, authorize, setAuthorize, setValidMail, validNum, setValidNum } = useContext(ThemeContext)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const otp = document.getElementById('otp').value
      const email = localStorage.getItem('otpEmail')
      if (email == 'undefined' || email == " " || !email) {
        alert("Please submit email.")
        setValidMail(false)
        return;
      }
      const res = await fetch(`http://localhost:3000/api/client/otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp, email })
      })
      const req = await res.json()
      if (!req.success) {
        alert(req.message)
        return;
      } else {
        localStorage.setItem('otp', otp)
        alert(req.message)
        // setVerification(false)
        setAuthorize(true)
        return
      }
    } catch (error) {
      alert('Error: ' + error.message)
    }
  }

  useEffect(() => {
    let otp = localStorage.getItem('otp')
    const handleAuthorize = async () => {
      const allowed = await fetch(`http://localhost:3000/api/client/authorized/${otp}`)
      const req = await allowed.json()
      if (req.success) {
        setAuthorize(true)
      } else {
        setAuthorize(false)
      }
    }
    handleAuthorize()
  }, [authorize])

  return (
    <div>
      <button className='top-[40px] left-[40px] absolute bg-[#000] px-[12px] py-[6px] rounded-[5px] text-[#fff]' onClick={() => { setValidMail(false) }} >Verify Email</button>
      <div className={`${styles.validEmail} ${validMail && styles.setMail}`}>
        <form action="" className='flex flex-col justify-center items-center gap-[10px]' onSubmit={handleSubmit}>
          <label htmlFor="email" className='flex flex-col gap-[7px] w-full'>
            <span>OTP</span>
            <input type="text" name="otp" id="otp" />
          </label>
          <input type="submit" value="Submit" className='bg-[#000] text-[#fff]' />
          <h1 className='font-[500] text-[20px] text-left'>Verify OTP</h1>
          <p className='text-[17px]'>Check Your OTP in your mail and fill in the field above.</p>
        </form>
      </div>
    </div>
  )
}

export function Reset() {

  const { setVerification, validMail, setValidMail } = useContext(ThemeContext)
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  })
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const email = localStorage.getItem('otpEmail')
      formData.email = email

      const res = await fetch(`http://localhost:3000/api/client/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const req = await res.json()
      if (!req.success) {
        alert(req.message)
        return;
      } else {
        alert(req.message)
        setVerification(false)
        return
      }
    } catch (error) {
      alert('Error: ' + error.message)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(() => ({ ...formData, [name]: value }))
  }
  return (
    <div>
      <button className='top-[40px] left-[40px] absolute bg-[#000] px-[12px] py-[6px] rounded-[5px] text-[#fff]' onClick={() => { setValidMail(false) }} >Verify Email</button>
      <div className={`${styles.validEmail} ${validMail && styles.setMail}`}>
        <form action="" className='flex flex-col justify-center items-center gap-[10px]' onSubmit={handleSubmit}>
          <label htmlFor="password" className='flex flex-col gap-[7px] w-full'>
            <span>Password</span>
            <input type="password" name="password" id="password" value={formData.name} onChange={handleInputChange} />
          </label>
          <label htmlFor="confirm-password" className='flex flex-col gap-[7px] w-full'>
            <span>Confirm Password</span>
            <input type="password" name="confirmPassword" id="confirmPassword" value={formData.name} onChange={handleInputChange} />
          </label>
          <input type="submit" value="Submit" className='bg-[#000] mt-[10px] text-[#fff]' />
          <h1 className='font-[500] text-[20px] text-left'>Reset Password</h1>
          <p className='text-[17px]'>Fill in your new password and continue to your shoping.</p>
        </form>
      </div>
    </div>
  )
}
