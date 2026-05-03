// import React from 'react';
// import logo from '../../image/tiles_gallery_logo.png';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ContactUs } from '@/ui/Contactform';
// // Gravity UI এর বদলে React Icons (Font Awesome) ব্যবহার করা হয়েছে
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const Footer = () => {
//     return (
//         <footer className='bg-black py-16 text-white border-t border-slate-900'>
//             <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-around gap-12'>

//                 <div className='flex flex-col gap-6 max-w-xs'>
//                     <Image alt='logo' width={180} height={180} src={logo} className="mb-2" />
//                     <p className='text-slate-400 text-sm leading-relaxed'>
//                         We are by your side with a premium collection of tiles featuring modern architecture and aesthetic designs.
//                     </p>

//                     <div className='flex gap-5 text-slate-500'>
//                         <Link href="#"><FaFacebookF className="hover:text-blue-500 transition-colors" /></Link>
//                         <Link href="#"><FaTwitter className="hover:text-blue-500 transition-colors" /></Link>
//                         <Link href="#"><FaInstagram className="hover:text-blue-500 transition-colors" /></Link>
//                         <Link href="#"><FaLinkedinIn className="hover:text-blue-500 transition-colors" /></Link>
//                     </div>
//                     <div className='hidden lg:block'>
//                     <h3 className='text-blue-600 font-bold uppercase tracking-widest text-sm mb-6'>Quick Links</h3>
//                     <ul className='space-y-4 text-slate-400 text-sm'>
//                         <li><Link href="/" className='hover:text-white transition-colors'>Home</Link></li>
//                         <li><Link href="/alltiles" className='hover:text-white transition-colors'>All Tiles</Link></li>
//                         <li><Link href="/about" className='hover:text-white transition-colors'>About Us</Link></li>
//                     </ul>
//                 </div>
//                 </div>
//                 <div className='flex flex-col'>
//                     <h3 className='text-blue-600 font-bold uppercase tracking-widest text-sm mb-6'>Contact us</h3>
//                     <ContactUs />
//                 </div>
//             </div>
//             <div className='mt-16 pt-8 border-t border-slate-900 text-center'>
//                 <p className='text-slate-500 text-xs tracking-[0.2em] uppercase'>
//                     &copy; {new Date().getFullYear()} TILES GALLERY. All rights reserved.
//                 </p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

import React from 'react';
import logo from '../../image/tiles_gallery_logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { ContactUs } from '@/ui/Contactform';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        /* ১. মেইন ফুটার ব্যাকগ্রাউন্ডকে ডার্ক গ্লাস লুক দেওয়া হয়েছে */
        <footer className='relative bg-slate-950/60 backdrop-blur-xl py-12 text-white border-t border-white/10 overflow-hidden'>

            {/* উপরে একটি সূক্ষ্ম গ্লোয়িং লাইন */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

            <div className='relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>

                {/* Brand & Social Section */}
                <div className='flex flex-col gap-6'>
                    <Image alt='logo' width={140} height={140} src={logo} className="opacity-90" />
                    <p className='text-slate-400 text-sm leading-relaxed font-light'>
                        We are by your side with a premium collection of tiles featuring modern architecture and aesthetic designs.
                    </p>

                    {/* ২. সোশ্যাল আইকন গ্লাস ইফেক্ট */}
                    <div className='flex gap-4'>
                        {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                            <Link key={index} href="#"
                                className='w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 backdrop-blur-md hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-blue-500 transition-all duration-300'>
                                <Icon size={16} />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className='flex flex-col lg:items-center'>
                    <div>
                        <h3 className='text-blue-500 font-bold uppercase tracking-widest text-xs mb-6 border-b border-blue-500/20 pb-2 w-fit'>
                            Quick Links
                        </h3>
                        <ul className='space-y-3 text-slate-400 text-sm'>
                            <li><Link href="/" className='hover:text-white hover:pl-1 transition-all'>Home</Link></li>
                            <li><Link href="/alltiles" className='hover:text-white hover:pl-1 transition-all'>All Tiles</Link></li>
                            <li><Link href="/about" className='hover:text-white hover:pl-1 transition-all'>About Us</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Contact Us Form Section */}
                <div className='flex flex-col'>
                    <h3 className='text-blue-500 font-bold uppercase tracking-widest text-xs mb-6 border-b border-blue-500/20 pb-2 w-fit'>
                        Contact Us
                    </h3>

                    {/* ৩. ফর্ম ফিল্ডে গ্লাস ইফেক্ট পেতে হলে আপনার ContactUs কম্পোনেন্টের ভেতরে 
                        input এবং textarea-তে নিচের ক্লাসগুলো যোগ করতে হবে:
                        "bg-white/5 border border-white/10 backdrop-blur-md focus:bg-white/10 focus:border-blue-500/50 outline-none"
                    */}
                    <div className="glass-form-wrapper">
                        <ContactUs />
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className='relative z-10 mt-12 pt-6 border-t border-white/5 text-center px-4'>
                <p className='text-slate-500 text-[10px] tracking-[0.3em] uppercase font-light'>
                    &copy; {new Date().getFullYear()} TILES GALLERY. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
