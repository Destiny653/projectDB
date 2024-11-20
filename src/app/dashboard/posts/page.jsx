import Link from 'next/link'
import React from 'react';
import { TfiHome } from "react-icons/tfi";
import { IoCreateOutline } from "react-icons/io5";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
import { MdOutlineAddchart } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
import { GoSignOut } from "react-icons/go";
import Image from 'next/image';

export default function POage() {


    return (
        <div className='w-full flex justify-evenly box-border py-[2%] bg-[#9e7f193b] h-[80vh] text-[#000]'>
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
            <div className='w-[80%] flex flex-col gap-[20px]'>
                <section className=' flex justify-evenly items-center gap-[40px] bg-[#eeeeee] px-[30px] py-[9px]'>
                    <div className='w-[60px] h-[50px] bg-[white]'>
                        <Image className='h-full w-full' src={'/image/prem6.png'} alt='image' width={300} height={300} />
                    </div>
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, dolorem magni voluptas delectus consequuntu.</h1>
                    <Link href={'/dashboard/create'}> 
                    <button className='bg-[red] text-white py-[8px] px-[20px]'>Delete</button>
                    </Link>
                    <Link href={'/dashboard/create'}>
                    <button className='bg-[#362b9e] text-white py-[8px] px-[20px]'>Update</button>
                    </Link>
                </section>
                <section className=' flex justify-evenly items-center gap-[40px] bg-[#eeeeee] px-[30px] py-[9px]'>
                    <div className='w-[60px] h-[50px] bg-[white]'>
                        <Image className='h-full w-full' src={'/image/prem6.png'} alt='image' width={300} height={300} />
                    </div>
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, dolorem magni voluptas delectus consequuntu.</h1>
                    <Link href={'/dashboard/create'}> 
                    <button className='bg-[red] text-white py-[8px] px-[20px]'>Delete</button>
                    </Link>
                    <Link href={'/dashboard/create'}>
                    <button className='bg-[#362b9e] text-white py-[8px] px-[20px]'>Update</button>
                    </Link>
                </section>
                <section className=' flex justify-evenly items-center gap-[40px] bg-[#eeeeee] px-[30px] py-[9px]'>
                    <div className='w-[60px] h-[50px] bg-[white]'>
                        <Image className='h-full w-full' src={'/image/prem6.png'} alt='image' width={300} height={300} />
                    </div>
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, dolorem magni voluptas delectus consequuntu.</h1>
                    <Link href={'/dashboard/create'}> 
                    <button className='bg-[red] text-white py-[8px] px-[20px]'>Delete</button>
                    </Link>
                    <Link href={'/dashboard/create'}>
                    <button className='bg-[#362b9e] text-white py-[8px] px-[20px]'>Update</button>
                    </Link>
                </section>
                <section className=' flex justify-evenly items-center gap-[40px] bg-[#eeeeee] px-[30px] py-[9px]'>
                    <div className='w-[60px] h-[50px] bg-[white]'>
                        <Image className='h-full w-full' src={'/image/prem6.png'} alt='image' width={300} height={300} />
                    </div>
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, dolorem magni voluptas delectus consequuntu.</h1>
                    <Link href={'/dashboard/create'}> 
                    <button className='bg-[red] text-white py-[8px] px-[20px]'>Delete</button>
                    </Link>
                    <Link href={'/dashboard/create'}>
                    <button className='bg-[#362b9e] text-white py-[8px] px-[20px]'>Update</button>
                    </Link>
                </section>
                <section className=' flex justify-evenly items-center gap-[40px] bg-[#eeeeee] px-[30px] py-[9px]'>
                    <div className='w-[60px] h-[50px] bg-[white]'>
                        <Image className='h-full w-full' src={'/image/prem6.png'} alt='image' width={300} height={300} />
                    </div>
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, dolorem magni voluptas delectus consequuntu.</h1>
                    <Link href={'/dashboard/create'}> 
                    <button className='bg-[red] text-white py-[8px] px-[20px]'>Delete</button>
                    </Link>
                    <Link href={'/dashboard/create'}>
                    <button className='bg-[#362b9e] text-white py-[8px] px-[20px]'>Update</button>
                    </Link>
                </section>
            </div>
        </div>
    )
}
