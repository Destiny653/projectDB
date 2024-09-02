'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { TfiHome } from "react-icons/tfi";
import { IoCreateOutline } from "react-icons/io5";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
import { MdOutlineAddchart } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
import { GoSignOut } from "react-icons/go";

export default function Page() {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [password, setPassword] = useState("")
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("")

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
    <div className='flex justify-evenly h-[80vh] box-border py-[1%] bg-[#d4b95f3b]'>
      <section className='w-[16%] relative bg-[#ffffff] rounded-[15px]'>
        <ul className='flex flex-col box-border p-[6%]'>
          <Link className='flex gap-2 items-center my-[4%] text-[15px]' href={'/'}>
            <TfiHome size={20} className='text-[#000000]' />
            <li>Home</li>
          </Link>
          <Link className='flex gap-2 items-center my-[4%] text-[15px]' href={'/dashboard/create'}>
            <IoCreateOutline size={20} className='text-[#000000]' />
            <li>Create post</li>
          </Link>
          <Link className='flex gap-2 items-center my-[4%] text-[15px]' href={'#'}>
            <VscGitPullRequestGoToChanges size={20} className='text-[#000000]' />
            <li>Orders</li>
          </Link>
          <Link className='flex gap-2 items-center my-[4%] text-[15px]' href={'/dashboard/posts'}>
            <MdOutlineAddchart size={20} className='text-[#000000]' />
            <li>Posts</li>
          </Link>
          <Link className='flex gap-2 items-center my-[4%] text-[15px]' href={'#'}>
            <CiUser size={22} className='text-[#000000]' />
            <li>Clients</li>
          </Link>
          <Link className='flex gap-2 items-center my-[4%] text-[15px]' href={'#'}>
            <IoIosLogIn size={22} className='text-[#000000]' />
            <li>Login</li>
          </Link>
          <li className='absolute bottom-[5%] left-[4%] w-[50%] h-[7%]'>
            <button className='flex items-center justify-center text-[15px] w-[100%] h-[100%] text-[#ffffff] rounded-[10px] bg-[#000000]'>
              <GoSignOut size={20} className='text-[#ffffff]' />
              Logout
            </button>
          </li>
        </ul>
      </section>
      <section className='w-[80%] flex flex-col justify-around items-center bg-[#ffffff] rounded-[15px]'>
        <div className='g-[red] w-full box-border px-[8%]'>
          <h1 className='text-[27px] font-bold text-[#000000]'>Basic Information</h1>
          <p className='font-[300]'>Update some personal Information. Your address will never be publicly available.</p>
        </div>
        <form className='flex flex-col w-[70%]' onSubmit={handleSubmit}>
          <section className='flex gap-3 my-[2%]'>
            <label htmlFor="name" className='flex flex-col gap-[4px] w-[50%] '>
              <span className=''>Full name</span>
              <input value={fullname} onChange={(e) => setFullname(e.target.value)} className=' outline-[0] border-[1px] border-[#6d471648] rounded-[20px] w-[100%] py-[6px] px-[20px]' type="text" id="name" name="name" placeholder="Full name" required />
            </label>
            <label htmlFor="email" className='flex flex-col gap-[4px] w-[50%]'>
              <span className=''>Email address</span>
              <input value={email} onChange={e => setEmail(e.target.value)} className=' outline-[0] border-[1px] border-[#6d471648] w-[100%] py-[6px] px-[20px]' type="text" id="email" name="email" placeholder="email@gmail.com" required />
            </label>
          </section>
          <section className='flex gap-3'>
            <label htmlFor="password" className='flex flex-col gap-[4px] w-[50%]'>
              <span className=''>Password</span>
              <input value={password} onChange={(e) => setPassword(e.target.value)} className=' outline-[0] border-[1px] border-[#6d471648] rounded-[20px] w-[100%] py-[6px] px-[20px]' type="password" id="password" name="password" placeholder="*********" required />
            </label>
            <label htmlFor="phone" className='flex flex-col gap-[4px] w-[50%]'>
              <span className=''>Phone number</span>
              <input value={phone} onChange={e => setPhone(e.target.value)} className=' outline-[0] border-[1px] border-[#6d471648] rounded[20px] w-[100%] py-[6px] px-[20px]' type="text" id="phone" name="phone" placeholder='Enter phone number' required />
            </label>
          </section>

          <button type='submit' className='bg-[#000] py-[9px] px-[30px] text-[#fff] w-fit rounded-[12px] my-[10px]'>Submit</button>
        </form>
      </section>
    </div>
  )
}
