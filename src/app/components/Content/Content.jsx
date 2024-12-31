import React from 'react';
import './content.css';
import { CiShoppingBasket } from "react-icons/ci";
import Image from 'next/image';


const num = [1, 2, 3, 4, 5, 6, 7, 8]

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
const valies = [
  '/image/valies/v1.png',
  '/image/valies/v2.png',
  '/image/valies/v3.png',
  '/image/valies/v4.png',
  '/image/valies/v5.png',
  '/image/valies/v6.png',
  '/image/valies/v7.png',
  '/image/valies/v8.png',
  '/image/valies/v8.png',
]
const Cloths = () => {
  return (

    <div className='box-border mx-[10px] my-[20px] cloths-c'>
      {
        imgCollection.map((item, index) => (
          <section className='relative cloths-i' key={index}>
            <div className='box-border overflow-hidden cloths-ic'>
              <div className='box-border px-[30px] p-[16px] h-[270px]'>
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
const Valies = () => {
  return (
    <div className='relative cart-valies-p'>
      <section className='top-0 left-0 sticky cart-valies-detail'>
        <div className='w-[100%] h-[500px]'>
          <Image className='h-full' src={'/image/valies/v1.png'} alt='valies image' width={600} height={600} />
        </div>
        <div className='w-[100%] h-[190px]'>
          <section className='text-center'>
            <h1 className='font-[500] text-[16px]' >Premium Valies</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum reprehenderit expedita illo adipisci dolore error, aliquid hic magni voluptat</p>
            <p className='font-[500]'>$600</p>
          </section>
        </div>
      </section>
      <section className='cart-valies-con'>
        {
          valies.map((item, i) => (
            <div key={i}>
              <h1 className="cart-val-price">$500</h1>
              <Image className='h-full' src={item} alt='valies image' width={600} height={600} />
              <section className="cart-val-detail">
                <p className='font-[12px]'>Lorem consectetur adipisicing elit. Non architecto recusandae</p>
                <h3 className='font-[500]'>price: $500</h3>
                <h1 className='font-[500]'>Premeium Quality</h1>
                <section className='flex justify-between items-center'>
                  <div className='border w-fit val-cart-btn'>
                    <button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-r font-[600]'>-</button><span className='bg-[#80808048] px-[14px] py-[5px]'>2</span><button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-l font-[600]'>+</button>
                  </div>
                  <div className='flex justify-center items-center bg-[#66666633] val-cart-i'><CiShoppingBasket className='text-[#6e6e6ed5]' size={"30"} /></div>
                </section>
              </section>
            </div>
          ))
        }
      </section>
    </div>
  )
}
const Shoes = () => {
  return (
    <div>Content</div>
  )
}
const Feeding = () => {
  return (
    <div>
      <h1 className='py-[20px] text-[20px] text-center'>Find all your feeding gadgets on this list!</h1>
      <section className='feed-cart-list'>
        <ul >
          <li>
            <div>
              <div className='bottom-[10px] absolute flex flex-col justify-center gap-[5px]'>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, suscipit?</p>
                  <h1 className='font-[500]' >$300</h1>
                <section className='feed-cart'>
                  <div className='border w-fit feed-cart-btn'>
                    <button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-r font-[600]'>-</button><span className='bg-[#80808048] px-[14px] py-[5px]'>2</span><button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-l font-[600]'>+</button>
                  </div>
                  <div className='flex justify-center items-center bg-[#66666633] feed-cart-i'><CiShoppingBasket className='text-[#6e6e6ed5]' size={"30"} /></div>
                </section>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div className='bottom-[10px] absolute flex flex-col justify-center gap-[5px]'>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, suscipit?</p>
                  <h1 className='font-[500]' >$300</h1>
                <section className='feed-cart'>
                  <div className='border w-fit feed-cart-btn'>
                    <button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-r font-[600]'>-</button><span className='bg-[#80808048] px-[14px] py-[5px]'>2</span><button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-l font-[600]'>+</button>
                  </div>
                  <div className='flex justify-center items-center bg-[#66666633] feed-cart-i'><CiShoppingBasket className='text-[#6e6e6ed5]' size={"30"} /></div>
                </section>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div className='bottom-[10px] absolute flex flex-col justify-center gap-[5px]'>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, suscipit?</p>
                  <h1 className='font-[500]' >$300</h1>
                <section className='feed-cart'>
                  <div className='border w-fit feed-cart-btn'>
                    <button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-r font-[600]'>-</button><span className='bg-[#80808048] px-[14px] py-[5px]'>2</span><button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-l font-[600]'>+</button>
                  </div>
                  <div className='flex justify-center items-center bg-[#66666633] feed-cart-i'><CiShoppingBasket className='text-[#6e6e6ed5]' size={"30"} /></div>
                </section>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div className='bottom-[10px] absolute flex flex-col justify-center gap-[5px]'>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, suscipit?</p>
                  <h1 className='font-[500]' >$300</h1>
                <section className='feed-cart'>
                  <div className='border w-fit feed-cart-btn'>
                    <button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-r font-[600]'>-</button><span className='bg-[#80808048] px-[14px] py-[5px]'>2</span><button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-l font-[600]'>+</button>
                  </div>
                  <div className='flex justify-center items-center bg-[#66666633] feed-cart-i'><CiShoppingBasket className='text-[#6e6e6ed5]' size={"30"} /></div>
                </section>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div className='bottom-[10px] absolute flex flex-col justify-center gap-[5px]'>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, suscipit?</p>
                  <h1 className='font-[500]' >$300</h1>
                <section className='feed-cart'>
                  <div className='border w-fit feed-cart-btn'>
                    <button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-r font-[600]'>-</button><span className='bg-[#80808048] px-[14px] py-[5px]'>2</span><button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-l font-[600]'>+</button>
                  </div>
                  <div className='flex justify-center items-center bg-[#66666633] feed-cart-i'><CiShoppingBasket className='text-[#6e6e6ed5]' size={"30"} /></div>
                </section>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div className='bottom-[10px] absolute flex flex-col justify-center gap-[5px]'>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, suscipit?</p>
                  <h1 className='font-[500]' >$300</h1>
                <section className='feed-cart'>
                  <div className='border w-fit feed-cart-btn'>
                    <button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-r font-[600]'>-</button><span className='bg-[#80808048] px-[14px] py-[5px]'>2</span><button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-l font-[600]'>+</button>
                  </div>
                  <div className='flex justify-center items-center bg-[#66666633] feed-cart-i'><CiShoppingBasket className='text-[#6e6e6ed5]' size={"30"} /></div>
                </section>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div className='bottom-[10px] absolute flex flex-col justify-center gap-[5px]'>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, suscipit?</p>
                  <h1 className='font-[500]' >$300</h1>
                <section className='feed-cart'>
                  <div className='border w-fit feed-cart-btn'>
                    <button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-r font-[600]'>-</button><span className='bg-[#80808048] px-[14px] py-[5px]'>2</span><button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-l font-[600]'>+</button>
                  </div>
                  <div className='flex justify-center items-center bg-[#66666633] feed-cart-i'><CiShoppingBasket className='text-[#6e6e6ed5]' size={"30"} /></div>
                </section>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div className='bottom-[10px] absolute flex flex-col justify-center gap-[5px]'>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, suscipit?</p>
                  <h1 className='font-[500]' >$300</h1>
                <section className='feed-cart'>
                  <div className='border w-fit feed-cart-btn'>
                    <button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-r font-[600]'>-</button><span className='bg-[#80808048] px-[14px] py-[5px]'>2</span><button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-l font-[600]'>+</button>
                  </div>
                  <div className='flex justify-center items-center bg-[#66666633] feed-cart-i'><CiShoppingBasket className='text-[#6e6e6ed5]' size={"30"} /></div>
                </section>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div className='bottom-[10px] absolute flex flex-col justify-center gap-[5px]'>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, suscipit?</p>
                  <h1 className='font-[500]' >$300</h1>
                <section className='feed-cart'>
                  <div className='border w-fit feed-cart-btn'>
                    <button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-r font-[600]'>-</button><span className='bg-[#80808048] px-[14px] py-[5px]'>2</span><button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-l font-[600]'>+</button>
                  </div>
                  <div className='flex justify-center items-center bg-[#66666633] feed-cart-i'><CiShoppingBasket className='text-[#6e6e6ed5]' size={"30"} /></div>
                </section>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div className='bottom-[10px] absolute flex flex-col justify-center gap-[5px]'>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, suscipit?</p>
                  <h1 className='font-[500]' >$300</h1>
                <section className='feed-cart'>
                  <div className='border w-fit feed-cart-btn'>
                    <button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-r font-[600]'>-</button><span className='bg-[#80808048] px-[14px] py-[5px]'>2</span><button className='hover:bg-[#e99f16f6] px-[14px] py-[5px] border-l font-[600]'>+</button>
                  </div>
                  <div className='flex justify-center items-center bg-[#66666633] feed-cart-i'><CiShoppingBasket className='text-[#6e6e6ed5]' size={"30"} /></div>
                </section>
              </div>
            </div>
          </li>
        </ul>
        <div className='feed-cart-detail'></div>
      </section>
    </div>
  )
}

const Diaper = () => {
  return (
    <div>Content</div>
  )
}

const NightWare = () => {
  return (
    <div>Content</div>
  )
}

const Bath = () => {
  return (
    <div className='cart-bath'>
      {
        num.map(((item, i) => (
          <section key={i} className={`bath-item-${i}`}>{item}</section>
        )))
      }
    </div>
  )
}

module.exports = { Cloths, Valies, Shoes, Diaper, NightWare, Bath, Feeding }
