import React from 'react';
import './content.css';
import { CiShoppingBasket } from "react-icons/ci";
import Image from 'next/image';




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
    {
      img: "https://i.pinimg.com/236x/51/49/77/514977b47170524aa96d3e4dc765e590.jpg"
    },
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
const  Cloths = ()=> {
  return (
 
        <div className='box-border mx-[10px] my-[20px] cloths-c'>
              {
                imgCollection.map((item, index) => (
                  <section className='relative cloths-i' key={index}>
                    <div className='box-border overflow-hidden cloths-ic'>
                      <div className='box-border px-[30px] p-[16px] h-[300px]'>
                        <Image className='w-[90%] h-full' src={item.img} alt='product' width={800} height={800} />
                      </div>
                      <div className='box-border gap-2 grid p-[6px]'>
                        <h1 className='text-[#ccb582]'>Fashion Wear</h1>
                        <p className=' '>Discover latest fashion trends and for your little one.</p>
                        <p className='text-[#ccb582]'>$650</p>
                      </div>
                      <section className='flex'>
                        <div className='border w-fit cloths-cart-btn'>
                          <button className='hover:bg-[#e99f16f6] px-[15px] py-[6px] border-r font-[600]'>-</button><span className='bg-[#80808048] px-[15px] py-[9px]'>2</span><button className='hover:bg-[#e99f16f6] px-[15px] py-[6px] border-l font-[600]'>+</button>
                        </div>
                        <div className='flex justify-center items-center bg-[#66666633] cloths-cart-i'><CiShoppingBasket className='text-[#6e6e6ed5]' size={"30"} /></div>
                      </section>
                    </div>
                  </section>
                ))
              }
    
            </div>
  )
}
const  Valies = ()=> {
  return (
    <div className='relative flex justify-center gap-[2%]'>
        <section className='top-0 left-0 sticky flex flex-col gap-[15px] bg-[gray] w-[30%] h-[600px]'>
            <div className='bg-[#00000056] w-[100%] h-[400px]'></div>
            <div className='bg-[#00000065] w-[100%] h-[190px]'></div>
        </section>
        <section className='bg-[#808080a9] w-[64%] cart-valies-p'>
            <div className='bg-[#00000067] h-[340px]'></div>
            <div className='bg-[#00000067] h-[340px]'></div>
            <div className='bg-[#00000067] h-[340px]'></div>
            <div className='bg-[#00000067] h-[340px]'></div>
            <div className='bg-[#00000067] h-[340px]'></div>
            <div className='bg-[#00000067] h-[340px]'></div>
        </section>
    </div>
  )
}
const  Shoes = ()=> {
  return (
    <div>Content</div>
  )
}

const  Diaper = ()=> {
  return (
    <div>Content</div>
  )
}

const  NightWare = ()=> {
  return (
    <div>Content</div>
  )
}

const  Bath = ()=> {
  return (
    <div>Content</div>
  )
}

module.exports = {Cloths, Valies, Shoes, Diaper, NightWare, Bath}
