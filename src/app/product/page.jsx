'use client'
import React, { useState } from 'react';
import './product.css'
import Image from 'next/image';
import { CiShoppingBasket } from "react-icons/ci";
import { Cloths, Valies, Shoes, Diaper, Nightware, Bath, Feeding } from '../components/Content/Content';

export default function Page() {
    const [contentV, setContentV] = useState(<Bath/>)
    const [bugC, setBugC] = useState(false)


    const imgCollection = [
        {
            img: "/image/geni1-removebg-preview.png"
        },
        {
            img: "/image/geni2-removebg-preview.png"
        },
        {
            img: "/image/geni7.png"
        },
        {
            img: "/image/geni4.png"
        },
        // {
        //     img: "https://i.pinimg.com/236x/51/49/77/514977b47170524aa96d3e4dc765e590.jpg"
        // },
        {
            img: "/image/geni8.png"
        },
        {
            img: "/image/geni6.png"
        },
        {
            img: "/image/geni7.png"
        }
    ]
    return (
        <div className='box-border flex flex-col gap-[40px] pt-[20px] pb-[140px]'>
            <div className='product-hero'>
                <h1 className='text-[40px]'>Our Products</h1>
                <p>Discover our diverse range of products at our store.</p>
            </div>
            <ul className={`box-border flex items-center gap-[10px] px-[30px] font-[500]  list-options ${!bugC && 'list-option-hide'}`}>
                < section className={`bug-category-p ${bugC && 'active-bug'}`} onClick={()=>{ !bugC ? setBugC(true) : setBugC(false)}}>
                    <div className='bug1'></div>
                    <div className='bug2'></div>
                    <div className='bug3'></div>
                </section>
                <label htmlFor="item1">
                    <input type="radio" name="options" id="item1" />
                    <li onClick={() => setContentV(<Cloths/>)} >
                        Cloths
                    </li>
                </label>
                <label htmlFor="item2">
                    <input type="radio" name="options" id="item2" />
                    <li onClick={() => setContentV(<Diaper/>)} >
                        Diaper
                    </li>
                </label>
                <label htmlFor="item3">
                    <input type="radio" name="options" id="item3" />
                    <li onClick={() => setContentV(<Bath/>)}>
                        Bath
                    </li>
                </label>
                <label htmlFor="item4">
                    <input type="radio" name="options" id="item4" />
                    <li onClick={() => setContentV(<Valies/>)} >
                        Valies
                    </li>
                </label>
                <label htmlFor="item5">
                    <input type="radio" name="options" id="item5" />
                    <li onClick={() => setContentV(<Feeding/>)} >
                        Feeding
                    </li>
                </label>
            </ul>
            <section className="product-content-display">
                <div className='top-0 left-0 sticky flex flex-col gap-[8px]'>
                    <div className='w-[80%]'>
                        <Image className='h-full' src={'/image/valies/v1.png'} alt='valies image' width={600} height={600} />
                    </div>
                    <div className='w-[100%]'>
                        <section className=''>
                            <h1 className='font-[500] text-[16px]' >Premium Valies</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum reprehenderit expedita illo adipisci dolore error, aliquid hic magni voluptat</p>
                            <p className='font-[500]'>$600</p>
                        </section>
                    </div>
                    <section className='feed-cart'>
                        <div className='border w-fit feed-cart-btn'>
                            <button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-r font-[600]'>-</button><span className='bg-[#80808048] px-[14px] py-[5px]'>2</span><button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-l font-[600]'>+</button>
                        </div>
                        <div className='flex justify-center items-center bg-[#66666633] feed-cart-i'><CiShoppingBasket className='text-[#6e6e6ed5]' size={"30"} /></div>
                    </section>
                </div>
                <div>
                    {contentV}
                </div>
            </section>
        </div>
    )
}
