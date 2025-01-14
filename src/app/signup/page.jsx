'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { TfiHome } from "react-icons/tfi";
import { IoCreateOutline } from "react-icons/io5";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
import { MdOutlineAddchart } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
import { GoSignOut } from "react-icons/go";

export default function Page() {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.readAsDataURL(phone)
    reader.onloadend = () => {
      console.log(reader.result);
      return;
    }
    // Add your code here to save the product to the database or API

  }

  return (
     <h1>Hello sign up</h1>
  )
}
