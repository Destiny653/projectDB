'use client'
import React, { useContext } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { ThemeContext } from '../../../../context/ThemeContext';

export default function Theme() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <ul className='theme-panel cursor-pointer absolute bg-[#313131] text-[#fff] w-[140px] flex flex-col gap-[5px] rounded-[8px]'>
      <li className=' flex gap-[8px] items-center justify-center' onClick={() => {
        toggleTheme();
        typeof window !== 'undefined' && window.localStorage.setItem('theme', 'light');
      }}>
        <IoSunnyOutline className='font-[600]' color='gold' />
        <span className='inline pr-[10px]'>
          Light
        </span>
      </li>
      <li className='flex gap-[8px] items-center justify-center' onClick={() => {
        toggleTheme();
        typeof window !== 'undefined' && window.localStorage.setItem('theme', 'dark');
      }}>
        <IoMdMoon className='font-[600]' color='gold' />
        <span className='inline pr-[10px]'>
          Dark
        </span>
      </li>
    </ul>
  )
}
