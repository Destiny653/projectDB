'use client'
import React, { useEffect } from 'react';
import './hero.css';
import Image from 'next/image';
import Geolocation from '../Geolocation/Geolocation';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiShoppingBasket } from "react-icons/ci";

export default function Hero() {

  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    // centerPadding: '60px',
    // centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const slideSettings2 = {
    // dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

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

  const premium = [
    {
      img: "/image/prem1.png"
    },
    {
      img: "/image/prem2.png"
    },
    {
      img: "/image/prem5.png"
    },
    {
      img: "/image/prem6.png"
    },
    {
      img: "/image/prem3.png"
    },
    {
      img: "/image/prem7.png"
    },
    {
      img: "/image/prem8.png"
    },
    {
      img: "/image/prem9.png"
    },
    {
      img: "/image/prem10.png"
    },
  ]



  return (
    <div className='flex flex-col gap-[100px]'>
      <section className='hero-p w-full h-[90vh]  mt-[4px] flex flex-col justify-center items-center box-border px-[15%]'>
        <h1 className='text-center '>
          Welcome to Geni-I By-your gateway to the future of parenting. Discover cutting-edge baby gadgets designed to make your little one’s world smarter,
          safer, and more connected. Geni-I By-where the future of baby care begins.
        </h1>
        <button onClick={e => { console.log(e); }} className='mt-[10px] px-[23px] py-[10px] bg-[#805c0e] rounded-md text-white'>Shop Now</button>
      </section>
      {/* <div>
        <Geolocation/>
      </div> */}
      <section className=' box-border px-[2%]'>
        <h1 className=' text-center text-[35px] font-[600] pb-[3%] text-[#ca9546d2]'>Popular Categories</h1>
        {/* add carousel here */}
        <Slider {...sliderSettings} className='category-con flex gap-3'>
          {
            premium.map((item, index) => (
              <section className="category-i" key={index}>
                <Image className='w-[100%] h-full' src={item.img} alt='premium' width={500} height={500} />
              </section>
            ))
          }
        </Slider>
      </section>
      <section>
        <h1 className=' text-center text-[35px] font-[600] mb-[50px]'>Body care for your little one.</h1>
        <div className='body-care-p'>
          <section className='circle-d-p'>
            <div className='circle-d ' >
              <section className="circle-formation ">
                <Image className='w-[100%] h-full rounded-full' src='https://i.pinimg.com/564x/ec/79/05/ec7905de7e26beda74e706120789bd4a.jpg' alt='body care' width={500} height={500} />
              </section>
              <span className=' '>Get the original dettol antibacterial bathing soap-instant cool 105g X 6 online at shed 240 Food Market</span>
            </div>
            <div className='circle-d  '>
              <section className="circle-formation  ">
                <Image className='w-[100%] h-full rounded-full' src='https://i.pinimg.com/564x/75/b0/9a/75b09a01e4672507d688764311c6cc02.jpg' alt='body care' width={500} height={500} />
              </section>
              <span className=' '>Discover the magic of freshness with amzing Baby Powder for sensitive skin, absorbent powder is your go-to for a gentle and smooth touch.</span>
            </div>
          </section>

          <section className='circle-img-c bg-[#8d5f0b56]'>
            <Image className='w-[100%] h-full rounded-full' src='https://i.pinimg.com/564x/30/84/99/308499f70f0485de4bc51d36d78b99ac.jpg' alt='body care' width={500} height={500} />
          </section>

          <section className='circle-d-p '>
            <div className='circle-d '>
              <section className="circle-formation ">
                <Image className='w-[100%] h-full rounded-full' src='https://i.pinimg.com/564x/a1/c4/1c/a1c41c00f4a15c782735a2084e35a27a.jpg' alt='body care' width={500} height={500} />
              </section>
              <span className=' '>Vasline protects and locks in moisture to help dru skin heal 100% pure petroleum jelly. Triple-purified.</span>
            </div>
            <div className='circle-d   '>
              <section className="circle-formation  ">
                <Image className='w-[100%] h-full rounded-full' src='https://i.pinimg.com/564x/e6/a0/17/e6a0175f502af4b4f53335d55dbed8a5.jpg' alt='body care' width={500} height={500} />
              </section>
              <span className=' '>Made with 100% cotton, these cotton buds have a supple paper shat that avoids using plastic.</span>
            </div>
          </section> 
        </div>
      </section>
      <section>
        <h1 className='text-center text-[35px] font-[600] py-[8px] text-[#ca9546d2]'>Top Product</h1>
        <div className='top-pro-c box-border mx-[10px] my-[20px]'>
          {
            imgCollection.map((item, index) => (
              <section className='top-pro-i relative' key={index}>
                <div className='box-border top-pro-ic overflow-hidden'>
                  <div className='h-[300px] box-border p-[16px] px-[30px] '>
                    <Image className='w-[90%] h-full' src={item.img} alt='product' width={800} height={800} />
                  </div>
                  <div className='grid gap-2 box-border p-[6px]'>
                    <h1 className='font-[500] text-[#c07d18d2]'>Fashion Wear</h1>
                    <p className=' '>Discover latest fashion trends and for your little one.</p>
                    <p className='font-[500] text-[#32c971]'>$650</p>
                  </div>
                  <section className='flex'>
                    <div className='cart-btn border w-fit'>
                      <button className='border-r font-[600] px-[15px] py-[6px] hover:bg-[#e99f16f6]'>-</button><span className='px-[15px] py-[9px] bg-[#80808048]'>2</span><button className='border-l font-[600] px-[15px] py-[6px]  hover:bg-[#e99f16f6]'>+</button>
                    </div>
                    <div className='cart-i bg-[#66666633] flex justify-center items-center'><CiShoppingBasket className='text-[#6e6e6ed5]' size={"30"} /></div>
                  </section>
                </div>
              </section>
            ))
          }

        </div>
      </section>
      <section className='category-sec'>
        <div className='category-sec1'>
          <Image className='cate1-img ' src={'https://i.pinimg.com/736x/6a/79/d4/6a79d4f6f8da46dc66d7836eb6e54ebf.jpg'} alt='diapar park' width={500} height={500} />
        </div>
        <div className='category-sec2'>
          <section className='cate-sec-child'>
            <div className='cate-img-box'>
              <Image className='w-[100%] h-full rounded-[20px]' src={'https://i.pinimg.com/564x/7a/3c/35/7a3c3565172dd1ee2847a1e98295bd4a.jpg'} alt='diaper' width={500} height={500} />
            </div>
            <span>What keeps baby's skin healthy? A diaper that doesn't leave skin wet. That's why pampers swddlers are made to provide up to 100% leakproof skin protection.</span>
          </section>
          <section className='cate-sec-child'>
            <div className='cate-img-box'>
              <Image className=' w-full h-full' src={'https://i.pinimg.com/736x/6a/79/d4/6a79d4f6f8da46dc66d7836eb6e54ebf.jpg'} alt='diaper' width={500} height={500} />
            </div>
            <span>Pampers is the first line of defense for your baby's skin. It's a blend of creams, lotions, and body wash that helps maintain healthy skin, reduces irritation, and protects your baby's skin from sun, UV rays, and chemicals.</span>
          </section>
        </div>
      </section>
      <section className='bottom-slide'>
        <p className='font-[500] text-center py-[12px]  pt-[30px] text-[30px] pb-[3%] text-[#ca9546d2]'>Discover the latest outfit ideas, fashion tips, and inspiration for your little one.</p>
        <Slider {...slideSettings2} className='outfit-c'>
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
        </Slider>
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
        <div className='w-full h-[350px] bg-[#0080006e]'>
          <Image src={'https://media.istockphoto.com/id/1133350536/photo/water-drop-impact.jpg?s=612x612&w=0&k=20&c=r1-DbY1-uzuP8ChpmQCqiUFeopGsyBTqAkauaTQT3WQ='} alt='beautiful background image' width={600} height={600} className='w-full h-full' />
        </div>
      </section>
      <section className='comments'>
        <div>
          <p className='text-[27px] font-[900]'>Here's what our happy clients our saying!</p>
        </div>
        <div>
          <section className='flex items-center gap-2'>
            <div className='w-[100px] h-[100px] rounded-full bg-[#80808044]'>
              <Image className='h-full w-full rounded-full' src={"https://i.pinimg.com/236x/2c/ee/44/2cee4471b0215c3d69ecbec45249d727.jpg"} alt='woman' width={400} height={400} />
            </div>
            <h1>Jeremy Dabrie</h1>
          </section>
          <p>
            "Geni-I By-where the future of baby care begins. I have been using Geni-I for about 6 months now and I am absolutely thrilled with the results. The baby is growing so fast and I can't wait to see what else they will discover."
          </p>
        </div>
        <div>
          <section className='flex items-center gap-2'>
            <div className='w-[100px] h-[100px] rounded-full bg-[#80808044]'>
              <Image className='h-full w-full rounded-full' src={"https://i.pinimg.com/236x/56/17/9b/56179baaa4af59c5c78d6f87d0658e01.jpg"} alt='woman' width={400} height={400} />
            </div>
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
