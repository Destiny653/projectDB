'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { TfiHome } from "react-icons/tfi";
import { IoCreateOutline } from "react-icons/io5";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
import { MdOutlineAddchart } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
import { GoSignOut } from "react-icons/go";
export default function Page() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [url, setUrl] = useState("");
  const [rate, setRate] = useState(0)
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null)


  useEffect(() => {
    console.log(image);

  }, [image])


  const handleSubmit = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.readAsDataURL(image)
    reader.onloadend = () => {
      console.log(reader.result);
      return;
    }
    // Add your code here to save the product to the database or API

  }

  const SelectedImg = () => {
    if (image) {
      return <Image src={URL.createObjectURL(image)} alt="product image" width={600} height={600} className='w-[100%] h-[100%] rounded-[10px]' />
    } else {
      return <Image src="https://via.placeholder.com/200" alt="product image" width={600} height={600} className='w-[100%] h-[100%] rounded-[10px]' />
    }
  }

  return (
    <div className='w-full flex justify-evenly box-border py-[1%] bg-[#d4b95f3b] h-[80vh] text-[#000]'>
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
          <Link className='flex gap-2 items-center my-[4%] text-[15px]' href={'/signup'}>
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
      <section className='w-[80%] flex justify-evenly items-center bg-[#ffffff] rounded-[15px]'>
        <form className='flex flex-col w-[50%]' onSubmit={handleSubmit}>
          <section className='flex gap-2 my-[2%]'>
            <label htmlFor="name" className='flex flex-col gap-[4px] w-[50%] '>
              <span className=''>Product title</span>
              <input value={title} onChange={(e) => setTitle(e.target.value)} className=' outline-[0] border-[1px] border-[#6d471648] rounded-[20px] w-[100%] py-[6px] px-[20px]' type="text" id="name" name="name" placeholder="Enter product name" required />
            </label>
            <label htmlFor="rate" className='flex flex-col gap-[4px] w-[50%]'>
              <span className=''>Product rating</span>
              <input value={rate} onChange={(e) => setRate(e.target.value)} className=' outline-[0] border-[1px] border-[#6d471648] rounded-[20px] w-[100%] py-[6px] px-[20px]' type="number" id="rate" name="rate" placeholder="Enter product rating" min="1" max="5" required />
            </label>
          </section>
          <section className='flex gap-2'>
            <label htmlFor="price" className='flex flex-col gap-[4px] w-[50%]'>
              <span className=''>Product price</span>
              <input value={price} onChange={e => setPrice(e.target.value)} className=' outline-[0] border-[1px] border-[#6d471648] w-[100%] py-[6px] px-[20px]' type="number" id="price" name="price" placeholder="Enter product price" required />
            </label>
            <label htmlFor="image" className='flex flex-col gap-[4px] w-[50%]'>
              <span className=''>Product image</span>
              <input onChange={e => setImage(e.target.files[0])} className=' outline-[0] border-[1px] border-[#6d471648] rounded[20px] bg-[#ac7e1c57] w-[100%] py-[3px] px-[20px]' type="file" id="image" name="image" accept="image/*" required />
            </label>
          </section>
          <label htmlFor="description " className='flex flex-col my-[2%]'>
            <span className=''>Product description</span>
            <textarea value={description} onChange={e => setDescription(e.target.value)} className=' outline-[0] border py-[1%] px-[20px] ' id="description" name="description" rows={5} placeholder="Enter product description" required></textarea>
          </label>
          <button type='submit' className='bg-[#000] py-[9px] px-[30px] text-[#fff] w-fit rounded-[12px]'>Submit</button>
        </form>
        <div className='w-[40%] h-[80%] flex flex-col gap-[10px]'>
          <input className=' outline-[0] border-[1px] border-[#ac7e1c57] w-[100%] py-[6px] px-[20px] rounded-[20px]' type='url' id="url" name="url" placeholder="Enter image URL"

          />
          <section className='w-[100%] h-[80%] border-[1px] border-[#ac7e1c57] rounded-[10px]'>
            {<SelectedImg />}
          </section>
        </div>
      </section>
    </div>
  )
}
