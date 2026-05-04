
import React from 'react';
import logo from '../../image/tiles_gallery_logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Contactus from '../Contactform';

const Footer = () => {
    return (
        <footer className='bg-gradient-to-br from-black via-[#111827] to-black py-12 text-white border-t border-white/10 mt-8'>
            
            <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12'>

                <div className='flex flex-col gap-6'>
                    <Image alt='logo' width={140} height={140} src={logo} className="brightness-110" />
                    <p className='text-gray-300 text-base leading-relaxed'>
                        We provide premium tile collections for modern architecture and aesthetic interior designs.
                    </p>
                
                    <div className='flex gap-4'>
                        <Link href="" className='w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300'>
                            <FaFacebookF size={18} />
                        </Link>
                        <Link href="" className='w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300'>
                            <FaTwitter size={18} />
                        </Link>
                        <Link href="" className='w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300'>
                            <FaInstagram size={18} />
                        </Link>
                        <Link href="" className='w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all duration-300'>
                            <FaLinkedinIn size={18} />
                        </Link>
                    </div>
                </div>

                <div className='md:justify-self-center'>
                    <h3 className='text-white font-bold uppercase tracking-wider text-sm mb-6 border-b-2 border-blue-500 w-fit pb-1'>
                        Explore Links
                    </h3>
                    <ul className='grid gap-4 text-gray-400 text-base font-medium'>
                        <li><Link href="/" className='hover:text-blue-500 transition-colors'>Home</Link></li>
                        <li><Link href="/alltiles" className='hover:text-blue-500 transition-colors'>All Tiles Collection</Link></li>
                        <li><Link href="/about" className='hover:text-blue-500 transition-colors'>About Our Company</Link></li>
                    </ul>
                </div>
                <div className='grid gap-6 content-start'>
                    <h3 className='text-white font-bold uppercase tracking-wider text-sm mb-2 border-b-2 border-blue-500 w-fit pb-1'>
                        Contact Info
                    </h3>
                    <div className='grid gap-4 text-base text-gray-300'>
                        <div className='flex items-center gap-4 group'>
                            <FaMapMarkerAlt size={20} className="text-blue-500 group-hover:scale-110 transition-transform" />
                            <span>Gulshan-2, Dhaka, Bangladesh</span>
                        </div>
                        <div className='flex items-center gap-4 group'>
                            <FaEnvelope size={20} className="text-blue-500 group-hover:scale-110 transition-transform" />
                            <span>atik13672@gmail.com</span>
                        </div>
                        <div className='flex items-center gap-4 group'>
                            <FaPhoneAlt size={20} className="text-blue-500 group-hover:scale-110 transition-transform" />
                            <span>+880 1234 567890</span>
                        </div>
                        <div>
                            <Contactus></Contactus>
                        </div>
                    </div>
                </div>

            </div>
            <div className='mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 gap-4'>
                <p className='text-gray-500 text-sm'>
                    &copy; {new Date().getFullYear()} <span className="font-bold text-gray-300">TILES GALLERY</span>. All rights reserved.
                </p>
                <div className='flex gap-8 text-sm font-medium text-gray-500'>
                    <Link href="/privacy" className='hover:text-white transition-colors'>Privacy Policy</Link>
                    <Link href="/terms" className='hover:text-white transition-colors'>Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;