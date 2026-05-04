'use client'
import Link from "next/link";
import { Bars, Xmark } from "@gravity-ui/icons";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import logo from '../../image/tiles_gallery_logo.png'
import { signOut, useSession } from "@/lib/auth-client";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
    const { data, isPending } = useSession()

    const user = data?.user
    if (isPending) {
        <p>loging...</p>
    }
    const links = <>
        <Link href="/" className="text-sm font-medium text-gray-500 hover:text-slate-900">
            Home
        </Link>
        <Link href="/alltiles" className="text-sm font-medium text-gray-500 hover:text-slate-900">
            All Tiles
        </Link>
        <Link href="/myprofile" className="text-sm font-medium text-gray-500 hover:text-slate-900">
            My Profile
        </Link>

    </>
    const buttons = <>
        {
            user ?
                <div className="flex flex-wrap items-center gap-3">
                    <Avatar>
                        <Avatar.Image alt="John Doe" src={user.image} referrerPolicy="no-referrer" />
                        <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                    </Avatar>
                    <div>
                        <Button variant="danger" size="sm" onClick={() => signOut()}>Sign out<FaSignOutAlt></FaSignOutAlt></Button>
                    </div>
                </div>
                :
                <>
                    <Button> <Link href="/login" className="text-sm font-medium flex gap-2 items-center">
                        Login<FaSignInAlt></FaSignInAlt>
                    </Link></Button>
                    <Link href="/signup" className=" text-black px-4 py-2 rounded-md text-sm font-medium">
                        Signup
                    </Link>
                </>
        }
    </>
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/30 backdrop-blur-md">
            <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" >
                            <Image alt="logo" width={200} height={200} src={logo}></Image>
                        </Link>
                    </div>


                    <div className="hidden md:flex items-center space-x-8">
                        {links}

                    </div>

                    <div className="md:hidden flex items-center">
                        <label htmlFor="menu-toggle" className="cursor-pointer text-slate-600">
                            <input type="checkbox" id="menu-toggle" className="peer hidden" />


                            <div className="peer-checked:hidden">
                                <Bars width={24} height={24} />
                            </div>

                            <div className="hidden peer-checked:block">
                                <Xmark width={24} height={24} />
                            </div>

                            <div className="hidden peer-checked:block absolute top-16 right-0 w-5/12 bg-white border-b border-slate-200 py-4 px-4 space-y-2 shadow-lg   ">
                                <div className="flex flex-col gap-3">
                                    {links}
                                    {buttons}

                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="hidden md:flex">
                        {buttons}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;