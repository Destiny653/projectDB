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
      return <Image src={URL.createObjectURL(image)} alt="product image" width={600} height={600} className='rounded-[10px] w-[100%] h-[100%]' />
    } else {
      return <Image src="https://via.placeholder.com/200" alt="product image" width={600} height={600} className='rounded-[10px] w-[100%] h-[100%]' />
    }
  }

  return (
    <div className='box-border flex justify-evenly bg-[#9e7f193b] py-[2%] w-full h-[80vh] text-[#000]'>
      <section className='relative bg-[#ffffff] rounded-[15px] w-[16%]'>
        <ul className='box-border flex flex-col p-[6%]'>
          <Link className='flex items-center gap-2 my-[4%] text-[15px]' href={'/'}>
            <TfiHome size={20} className='text-[#000000]' />
            <li>Home</li>
          </Link>
          <Link className='flex items-center gap-2 my-[4%] text-[15px]' href={'/dashboard/create'}>
            <IoCreateOutline size={20} className='text-[#000000]' />
            <li>Create post</li>
          </Link>
          <Link className='flex items-center gap-2 my-[4%] text-[15px]' href={'#'}>
            <VscGitPullRequestGoToChanges size={20} className='text-[#000000]' />
            <li>Orders</li>
          </Link>
          <Link className='flex items-center gap-2 my-[4%] text-[15px]' href={'/dashboard/posts'}>
            <MdOutlineAddchart size={20} className='text-[#000000]' />
            <li>Posts</li>
          </Link>
          <Link className='flex items-center gap-2 my-[4%] text-[15px]' href={'#'}>
            <CiUser size={22} className='text-[#000000]' />
            <li>Clients</li>
          </Link>
          <Link className='flex items-center gap-2 my-[4%] text-[15px]' href={'/signup'}>
            <IoIosLogIn size={22} className='text-[#000000]' />
            <li>Login</li>
          </Link>
          <li className='bottom-[5%] left-[4%] absolute w-[50%] h-[7%]'>
            <button className='flex justify-center items-center bg-[#000000] rounded-[10px] w-[100%] h-[100%] text-[#ffffff] text-[15px]'>
              <GoSignOut size={20} className='text-[#ffffff]' />
              Logout
            </button>
          </li>
        </ul>
      </section>
      <section className='flex justify-evenly items-center bg-[#ffffff] rounded-[15px] w-[80%]'>
        <form className='flex flex-col w-[50%]' onSubmit={handleSubmit}>
          <section className='flex gap-2 my-[2%]'>
            <label htmlFor="name" className='flex flex-col gap-[4px] w-[50%]'>
              <span className=''>Product title</span>
              <input value={title} onChange={(e) => setTitle(e.target.value)} className='border-[#6d471648] border-[1px] px-[20px] py-[6px] rounded-[20px] w-[100%] outline-[0]' type="text" id="name" name="name" placeholder="Enter product name" required />
            </label>
            <label htmlFor="rate" className='flex flex-col gap-[4px] w-[50%]'>
              <span className=''>Product rating</span>
              <input value={rate} onChange={(e) => setRate(e.target.value)} className='border-[#6d471648] border-[1px] px-[20px] py-[6px] rounded-[20px] w-[100%] outline-[0]' type="number" id="rate" name="rate" placeholder="Enter product rating" min="1" max="5" required />
            </label>
          </section>
          <section className='flex gap-2'>
            <label htmlFor="price" className='flex flex-col gap-[4px] w-[50%]'>
              <span className=''>Product price</span>
              <input value={price} onChange={e => setPrice(e.target.value)} className='border-[#6d471648] border-[1px] px-[20px] py-[6px] w-[100%] outline-[0]' type="number" id="price" name="price" placeholder="Enter product price" required />
            </label>
            <label htmlFor="image" className='flex flex-col gap-[4px] w-[50%]'>
              <span className=''>Product image</span>
              <input onChange={e => setImage(e.target.files[0])} className='border-[#6d471648] border-[1px] bg-[#ac7e1c57] px-[20px] py-[3px] rounded[20px] w-[100%] outline-[0]' type="file" id="image" name="image" accept="image/*" required />
            </label>
          </section>
          <label htmlFor="description " className='flex flex-col my-[2%]'>
            <span className=''>Product description</span>
            <textarea value={description} onChange={e => setDescription(e.target.value)} className='px-[20px] py-[1%] border outline-[0]' id="description" name="description" rows={5} placeholder="Enter product description" required></textarea>
          </label>
          <button type='submit' className='bg-[#000] px-[30px] py-[9px] rounded-[12px] w-fit text-[#fff]'>Submit</button>
        </form>
        <div className='flex flex-col gap-[10px] w-[40%] h-[80%]'>
          <input className='border-[#ac7e1c57] border-[1px] px-[20px] py-[6px] rounded-[20px] w-[100%] outline-[0]' type='url' id="url" name="url" placeholder="Enter image URL"

          />
          <section className='border-[#ac7e1c57] border-[1px] rounded-[10px] w-[100%] h-[80%]'>
            {<SelectedImg />}
          </section>
        </div>
      </section>
    </div>
  )
}
