'use client'
import Link from 'next/link';
import styles from './singup.module.css';
import React, { useContext, useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { ValidatorMail, ValidatorOTP } from '../components/Validator/Validator';
import { ThemeContext } from '../../../context/ThemeContext';

export default function page() {

  const {validMail , verification, authorize, setAuthorize, setVerification, setValidMail} = useContext(ThemeContext)
 
  const [phone, setPhone ] = useState(''); 
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!authorize){
      alert("Authorization denied, verify email first!")
      setVerification(true)
      return;
    }
    formData.phone = phone
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!")
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/client/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const req = await res.json()
      if (!res.ok) {
        alert(req.message)
        return;
      }
      alert(req.message)
    } catch (error) {
      alert("Error: " + error.message)
    }
  }

  const handleInputChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    authorize && setFormData(() => ({ ...formData, [name]: value })); 
  };

  return (
    <div className={`w-full flex justify-center items-center relative box-border py-[100px]`}>
      <div className={`top-[0] left-[0] z-[10] fixed flex justify-center items-center bg-[#ffffff80] w-full h-full`} style={{ display: verification ? "flex" : "none" }}>
        <div className={`${styles.valiBugCon}`} onClick={() => setVerification(false)} >
          <div className={`${styles.valiBug1}`}></div>
          <div className={`${styles.valiBug2}`}></div>
        </div>
        {
          !validMail ? <ValidatorMail /> : <ValidatorOTP />
        }
      </div>
      <div className={`${styles.signUpParent}`} > 
        <h1 className='top-[20px] right-[20px] z-[4] absolute font-[600] text-[#59c7e9] text-[40px]'>Sign Up</h1>
        <section className={` ${styles.signUpImgFrame}`} >
          <div className='z-[2] flex flex-col gap-[10px]'>
            <h1 className='font-[700] text-[35px]'>Create Free account <br /> Get secured!</h1>
            <p className='font-[600] text-[22px]'>Your credentials are private and unavailable to the public.</p>
            <button className='bg-[#000] hover:bg-[#80808085] px-[12px] py-[5px] rounded-[5px] w-fit text-[#fff]' onClick={() =>{setVerification(true); setValidMail(false)}}>Validate Email</button>
          </div>
        </section>
        <form className={`${styles.signUpForm}`} onSubmit={handleSubmit }>
          <div className='flex gap-[10px]'>
            <label htmlFor="firstName">
              <span>First Name</span>
              <input type="text" name="firstName" id="" value={formData.name} onChange={handleInputChange} />
            </label>
            <label htmlFor="lastName">
              <span>Last Name</span>
              <input type="text" name="lastName" id="" value={formData.name} onChange={handleInputChange} />
            </label>
          </div>
          <label htmlFor="email">
            <span>Email</span>
            <input type="email" name="email" id="" placeholder='name@gmail.com' value={formData.name} onChange={handleInputChange} />
          </label>
          <label htmlFor="phone">
            <span>Phone</span>
            <PhoneInput
              inputStyle={{
                fontSize: '16px',
                // padding: '12px 45px',
                border: 'none',
                outline: 'none',
                color: '#000',
                width: '100%',
                backgroundColor: 'white',
                // borderRadius: '5px',
              }}
              country="us"
              value={phone}
              onChange={setPhone}
             />
          </label>
          <div className='flex gap-[10px]'>
            <label htmlFor="password">
              <span>Password</span>
              <input type="password" name="password" id="" placeholder='**********' value={formData.name} onChange={handleInputChange} />
            </label>
            <label htmlFor="password">
              <span>Contirm Password</span>
              <input type="password" name="confirmPassword" id="" placeholder='**********' value={formData.name} onChange={handleInputChange} />
            </label>
          </div>
          <button type='submit'>Submit</button>
          <p className='text-[13px] text-[blue] text-center'>Already have an account? <Link href={'/signin'} className='hover:text-[gray]'>Sign In</Link></p>
        </form>
      </div>
    </div>
  )
}  