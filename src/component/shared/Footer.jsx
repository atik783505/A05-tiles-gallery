import React from 'react';
import logo from '../../image/tiles_gallery_logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { ContactUs } from '@/ui/Contactform';
// Gravity UI এর বদলে React Icons (Font Awesome) ব্যবহার করা হয়েছে
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-black py-16 text-white border-t border-slate-900'>
            <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-around gap-12'>
                
                <div className='flex flex-col gap-6 max-w-xs'>
                    <Image alt='logo' width={180} height={180} src={logo} className="mb-2" />
                    <p className='text-slate-400 text-sm leading-relaxed'>
                        We are by your side with a premium collection of tiles featuring modern architecture and aesthetic designs.
                    </p>
                    
                    <div className='flex gap-5 text-slate-500'>
                        <Link href="#"><FaFacebookF className="hover:text-blue-500 transition-colors" /></Link>
                        <Link href="#"><FaTwitter className="hover:text-blue-500 transition-colors" /></Link>
                        <Link href="#"><FaInstagram className="hover:text-blue-500 transition-colors" /></Link>
                        <Link href="#"><FaLinkedinIn className="hover:text-blue-500 transition-colors" /></Link>
                    </div>
                    <div className='hidden lg:block'>
                    <h3 className='text-blue-600 font-bold uppercase tracking-widest text-sm mb-6'>Quick Links</h3>
                    <ul className='space-y-4 text-slate-400 text-sm'>
                        <li><Link href="/" className='hover:text-white transition-colors'>Home</Link></li>
                        <li><Link href="/alltiles" className='hover:text-white transition-colors'>All Tiles</Link></li>
                        <li><Link href="/about" className='hover:text-white transition-colors'>About Us</Link></li>
                    </ul>
                </div>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-blue-600 font-bold uppercase tracking-widest text-sm mb-6'>Contact us</h3>
                    <ContactUs />
                </div>
            </div>
            <div className='mt-16 pt-8 border-t border-slate-900 text-center'>
                <p className='text-slate-500 text-xs tracking-[0.2em] uppercase'>
                    &copy; {new Date().getFullYear()} TILES GALLERY. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;