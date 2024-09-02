 'use client'
 import React from 'react';
import './hero.css';
import Image from 'next/image';
import Geolocation from '../Geolocation/Geolocation';

export default function Hero() {
  
  return (
    <div className='flex flex-col gap-3'>
      <section className='hero-p w-full h-[90vh] bg-[#c9811552] mt-[4px] flex flex-col justify-center items-center box-border px-[15%]'>
        <h1 className='text-center text-[30px] font-[600] edu_au_vic_wa_nt_handregular'>
          Welcome to Geni-I By-your gateway to the future of parenting. Discover cutting-edge baby gadgets designed to make your little one’s world smarter,
          safer, and more connected. Geni-I By-where the future of baby care begins.
        </h1>
        <button onClick={e=>{console.log(e);}} className='mt-[10px] px-[23px] py-[10px] bg-[#805c0e] rounded-md text-white'>Shop Now</button>
      </section>
      <div>
        <Geolocation/>
      </div>
      <section className=' box-border px-[2%]'>
        <h1 className=' text-center text-[25px] font-[600] py-[8px]'>Popular Categories</h1>
        <div className='category-con'>
          <section className="category-i"></section>
          <section className="category-i"></section>
          <section className="category-i"></section>
          <section className="category-i"></section>
          <section className="category-i"></section>
          <section className="category-i"></section>
          <section className="category-i"></section>
          <section className="category-i"></section>
          <section className="category-i"></section>
          <section className="category-i"></section>
          <section className="category-i"></section>
          <section className="category-i"></section>
          <section className="category-i"></section>
          <section className="category-i"></section>
          <section className="category-i"></section>
          <section className="category-i"></section>
          <section className="category-i"></section>
          <section className="category-i"></section>
          <section className="category-i"></section>
          <section className="category-i"></section>
        </div>
      </section>
      <section>
        <h1 className='text-center text-[25px] font-[600] py-[8px]'>Top Product</h1>
        <div className='top-pro-c'>
          <section className="top-pro-i"><div className='top-pro-ic'></div></section>
          <section className="top-pro-i"><div className='top-pro-ic'></div></section>
          <section className="top-pro-i"><div className='top-pro-ic'></div></section>
          <section className="top-pro-i"><div className='top-pro-ic'></div></section>
          <section className="top-pro-i"><div className='top-pro-ic'></div></section>
          <section className="top-pro-i"><div className='top-pro-ic'></div></section>
          <section className="top-pro-i"><div className='top-pro-ic'></div></section>
          <section className="top-pro-i"><div className='top-pro-ic'></div></section>
        </div>
      </section>
      <section>
        <p className='font-[500] text-center py-[12px] pt-[30px]'>Discover the latest outfit ideas, fashion tips, and inspiration for your little one.</p>
        <div className='outfit-c'>
          <section className="outfit-i">
            <Image src={"https://www.shutterstock.com/image-photo/basket-baby-stuff-accessories-newborn-260nw-2303894967.jpg"} alt="baby and mom" width={5000} height={5000} className=' w-full h-full' />
          </section>
          <section className="outfit-i">
            <Image src={"https://www.shutterstock.com/shutterstock/photos/1259678854/display_1500/stock-photo-wish-list-or-shopping-overview-for-pregnancy-and-baby-shower-view-from-above-white-wooden-older-1259678854.jpg"} alt="baby and mom" width={1000} height={1000} className=' w-full h-full' />
          </section>
          <section className="outfit-i">
            <Image src={"https://www.shutterstock.com/shutterstock/photos/1981341200/display_1500/stock-photo-gift-basket-with-gender-neutral-baby-garment-and-accessories-care-box-of-organic-newborn-cotton-1981341200.jpg"} alt="baby and mom" width={1000} height={1000} className=' w-full h-full' />
          </section>
          <section className="outfit-i">
            <Image src={"https://www.shutterstock.com/shutterstock/photos/734402929/display_1500/stock-photo-wicker-basket-with-baby-shower-gifts-indoors-734402929.jpg"} alt="baby and mom" width={1000} height={1000} className=' w-full h-full' />
          </section>
          <section className="outfit-i">
            <Image src={"https://www.shutterstock.com/shutterstock/photos/726703393/display_1500/stock-photo-wicker-basket-with-baby-shower-gifts-on-table-against-color-background-726703393.jpg"} alt="baby and mom" width={1000} height={1000} className=' w-full h-full' />
          </section>
          <section className="outfit-i">
            <Image src={"https://www.shutterstock.com/shutterstock/photos/284458796/display_1500/stock-photo-baby-accessories-on-table-on-light-background-284458796.jpg"} alt="baby and mom" width={1000} height={1000} className=' w-full h-full' />
          </section>
          <section className="outfit-i">
            <Image src={"https://www.shutterstock.com/shutterstock/photos/2374521263/display_1500/stock-photo-flat-lay-with-reusable-cloth-baby-diaper-toys-and-accessories-eco-friendly-nappy-on-blue-pastel-2374521263.jpg"} alt="baby and mom" width={1000} height={1000} className=' w-full h-full' />
          </section>
          <section className="outfit-i">
            <Image src={"https://www.shutterstock.com/shutterstock/photos/2410350613/display_1500/stock-photo-set-of-baby-girl-dress-bodysuit-with-knitted-hat-and-boots-top-view-kids-clothing-flat-lay-2410350613.jpg"} alt="baby and mom" width={1000} height={1000} className=' w-full h-full' />
          </section>
          <section className="outfit-i">
            <Image src={"https://www.shutterstock.com/shutterstock/photos/1573236859/display_1500/stock-photo-colorful-baby-shoes-on-bright-yellow-background-in-child-s-room-1573236859.jpg"} alt="baby and mom" width={1000} height={1000} className=' w-full h-full' />
          </section>
        </div>
      </section>
      <section className='customer-tips flex justify-between items-center box-border px-[15%]'>
        <ul className='flex flex-col gap-10'>
          <li>
            <h1>Durability</h1>
            <p>High efficiency and long lasting.</p>
          </li>
          <li>
            <h1>Quality</h1>
            <p>Available to your satisfactory rating.</p>
          </li>
          <li>
            <h1>Efficiency</h1>
            <p>Powerful and efficient features.</p>
          </li>
        </ul>
        <ul className='flex flex-col gap-10'>
          <li>
            <h1>Safety</h1>
            <p>Safe and secure accessories.</p>
          </li>
          <li>
            <h1>Convenience</h1>
            <p>Easy to use and convenient.</p>
          </li>
          <li>
            <h1>Customer Support</h1>
            <p>24/7 customer support.</p>
          </li>
        </ul>
      </section>
      <section>
        <div className='w-full h-[300px] bg-[#0080006e]'></div>
      </section>
      <section className='comments'>
        <div>
          <p className='text-[27px] font-[900]'>Here's what our happy clients our saying</p>
        </div>
        <div>
          <section className='flex items-center gap-2'>
            <div className='w-[100px] h-[100px] rounded-full bg-[#80808044]'></div>
            <h1>Jeremy Dabrie</h1>
          </section>
          <p>
            "Geni-I By-where the future of baby care begins. I have been using Geni-I for about 6 months now and I am absolutely thrilled with the results. The baby is growing so fast and I can't wait to see what else they will discover."
          </p>
        </div>
        <div>
          <section className='flex items-center gap-2'>
            <div className='w-[100px] h-[100px] rounded-full bg-[#80808044]'></div>
            <h1>Stacy Bright</h1>
          </section>
          <p>
            "I have been using Geni-I for about 3 months now and I am absolutely thrilled with the results. The baby is growing so fast and I can't wait to see what else they will discover. I highly recommend Geni-I to anyone looking to improve their baby's well-being."
          </p>
        </div>
      </section>
    </div>
  )
}
