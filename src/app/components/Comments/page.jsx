'use client';
import React, { useEffect, useState } from 'react';
import './comments.css';
import { AiFillMessage } from "react-icons/ai";


export default function Comments() {

    const commts = [
        {
            title: 'Feedback',
            commt: 'Hello it nice to bussiness!'
        },
        {
            title: 'Request',
            commt: 'Hello it nice to bussiness!'
        },
        {
            title: 'Question',
            commt: 'Hello it nice to bussiness!'
        },
        {
            title: 'Complain',
            commt: 'Hello it nice to bussiness!'
        },
    ]

    const [comment, setComment] = useState(true)
    const [index, setIndex] = useState(0)
    const [fade, setFade] = useState(true)
    const interval = 5000

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeout(() => {
                setFade(false)
            }, 1000);
            setFade(true)
            setIndex((item) => (item + 1) % commts.length)
        }, interval)
        return () => clearInterval(timer)
    }, [index])

    console.log('Index: ', index);



    return (
        <div className={`commentPa ${!comment && 'nullComment'}`} >
            <span className={``} style={{ display: !comment && 'none' }} onClick={() => setComment(false)} >x</span>
            <div className='h-full overflow-hidden' onClick={() => setComment(true)}>

                {
                    comment ?
                        <div className={`commentList ${fade && 'trans-in'} `}>
                            <h1>{commts[index]?.title}</h1>
                            <p>{commts[index]?.commt}</p>
                        </div>
                        :
                        <div className='flex justify-center items-center w-full h-full text-[12px] cursor-pointer' onClick={() => setComment(true)} >
                            <AiFillMessage className="inline msgBtn" size={30} />
                        </div>
                }
            </div>
        </div>
    )
}