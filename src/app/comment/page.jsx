'use client'
import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import Image from 'next/image';
import './comment.css'

export default function age() {

    const { theme } = useContext(ThemeContext)

    return (
        <>
            <section className='comments' >
                <div className='comment-nar'>
                    <p className='font-[900] text-[27px]'>Client comments!</p>
                </div>
                <div className='comment-1 comment-child'
                //  style={theme == 'dark' ? { backgroundColor: '#fff', color: '#000' } : { backgroundColor: '#000', color: '#fff' }}
                 >
                    <section className='comment-img-p'>
                        <div className='comment-img-c'>
                            <Image className='' src={"https://i.pinimg.com/236x/2c/ee/44/2cee4471b0215c3d69ecbec45249d727.jpg"} alt='woman' width={1000} height={1000} />
                        </div>
                    </section>
                    <h1>Jeremy Dabrie</h1>
                    <p>
                        "Geni-I By-where the future of baby care begins. I have been using Geni-I for about 6 months now and I am absolutely thrilled with the results. The baby is growing so fast and I can't wait to see what else they will discover."
                    </p>
                </div>
                <div className='comment-2 comment-child' 
                // style={theme == 'dark' ? { backgroundColor: '#fff', color: '#000' } : { backgroundColor: '#000', color: '#fff' }}
                >
                    <p>
                        "I have been using Geni-I for about 3 months now and I am absolutely thrilled with the results. The baby is growing so fast and I can't wait to see what else they will discover. I highly recommend Geni-I to anyone looking to improve their baby's well-being."
                    </p>
                    <h1>Stacy Bright</h1>
                    <section className='comment-img-p'>
                        <div className='comment-img-c'>
                            <Image className='' src={"https://i.pinimg.com/236x/56/17/9b/56179baaa4af59c5c78d6f87d0658e01.jpg"} alt='woman' width={1000} height={1000} />
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}
