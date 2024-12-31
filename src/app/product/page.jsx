import React from 'react';
import './product.css'
import Image from 'next/image';
import { CiShoppingBasket } from "react-icons/ci";

export default function Page() {

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
        <div className='box-border flex flex-col gap-[40px] px-[60px] pt-[20px] pb-[140px]'>
            <div className='product-hero'>
                <h1>Our Products</h1>
                <p>Discover our diverse range of products at our store.</p>
            </div>
            <div className='product-sec-p'>
                <section className='product-sec1-p'>
                    <section className='product-sec1'>
                        <select name="" id="">
                            <option value="">Select your option</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <select name="" id="">
                            <option value="">select your option</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <section className='box-con'>
                            <p>Shop by preference</p>
                            <div className='product-box-p'>
                                <section className="product-box"></section>
                                <section className="product-box"></section>
                                <section className="product-box"></section>
                                <section className="product-box"></section>
                            </div>
                        </section>
                    </section>
                </section>
                <section className='product-sec2'>
                    <div className='box-border product-c'>
                        {
                            imgCollection.map((item, index) => (
                                <section className='relative product-i' key={index}>
                                    <div className='box-border overflow-hidden product-ic'>
                                        <div className='box-border px-[30px] p-[16px] h-[300px]'>
                                            <Image className='w-[90%] h-full' src={item.img} alt='product' width={800} height={800} />
                                        </div>
                                        <div className='box-border gap-2 grid p-[6px]'>
                                            <h1 className='text-[#ccb582]'>Fashion Wear</h1>
                                            <p className=' '>Discover latest fashion trends and for your little one.</p>
                                            <p className='text-[#ccb582]'>$650</p>
                                        </div>
                                        <section className='flex'>
                                            <div className='border w-fit product-cart-btn'>
                                                <button className='hover:bg-[#e99f16f6] px-[15px] py-[6px] border-r font-[600]'>-</button><span className='bg-[#80808048] px-[15px] py-[9px]'>2</span><button className='hover:bg-[#e99f16f6] px-[15px] py-[6px] border-l font-[600]'>+</button>
                                            </div>
                                            <div className='flex justify-center items-center bg-[#66666633] product-cart-i'><CiShoppingBasket className='text-[#6e6e6ed5]' size={"30"} /></div>
                                        </section>
                                    </div>
                                </section>
                            ))
                        }

                    </div>
                </section>
            </div>
        </div>
    )
}
