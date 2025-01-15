import React from 'react';
import styles from './validator.module.css'

export function ValidatorMail() {
  return (
    <div className={`${styles.validEmail}`}>
        <form action="" className='flex flex-col justify-center items-center gap-[10px]'>
            <label htmlFor="email" className='flex flex-col gap-[10px] w-full'>
                <span>Email</span>
                <input type="email" name="email" id="" />
            </label>
            <input type="submit" value="Submit" className='bg-[#000] text-[#fff]' />
            <h1 className='font-[500] text-[20px] text-left'>Verify Email</h1>
            <p className='text-[17px]'>We ensure that your account belongs to you an cannot be used by an intruder.</p>
        </form>
    </div>
  )
}

export function ValidatorOTP() {
  return (
    <div className={`${styles.validEmail}`}>
        <form action="" className='flex flex-col justify-center items-center gap-[10px]'>
            <label htmlFor="email" className='flex flex-col gap-[10px] w-full'>
                <span>OTP</span>
                <input type="number" name="number" id="" />
            </label>
            <input type="submit" value="Submit" className='bg-[#000] text-[#fff]' />
            <h1 className='font-[500] text-[20px] text-left'>Verify OTP</h1>
            <p className='text-[17px]'>Check Your OTP in your mail and fill in the field above.</p>
        </form>
    </div>
  )
}
