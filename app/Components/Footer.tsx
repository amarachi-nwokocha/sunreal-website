import React from 'react'
import { MdMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
<footer className="bg-[#083169] text-white">
  <div className=" px-6  py-10 flex flex-col md:flex-row md:justify-between gap-8">
    {/* Left Column: Contact + Socials */}
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Contact</h3>
      <p className="flex items-center gap-2 ">
        <span className="material-icons"> <MdMailOutline size={23} /></span>
       
        hello@sunrealphotography.com
      </p>
      <p className="flex items-center gap-2 ">
        <span className="material-icons">  <SlLocationPin size={23} /></span>
      
        Lagos, Nigeria
      </p>
      <div className="flex space-x-4">
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 transition"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white  hover:text-blue-600 transition"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-600 transition"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
    </div>

    {/* Right Column: Branding / Description */}
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Sunreal Photography</h3>
      <p className="text-[#FFFFFF]">
        Capturing your moments with clarity and creativity.
      </p>
      <p className=" hover:text-[#08409d] cursor-pointer">
        Terms and Conditions
      </p>
    </div>
  </div>

  {/* Bottom copyright */}
  <div className="border-t border-[#373737]  text-sm py-4 text-center">
    &copy; {new Date().getFullYear()} Sunreal Photography. All rights reserved.
  </div>
</footer>



  )
}

export default Footer