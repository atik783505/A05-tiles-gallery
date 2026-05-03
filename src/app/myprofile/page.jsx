'use client'
import { useSession } from '@/lib/auth-client';
import { Avatar, Button, Card } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Profile = () => {
    const { data, isPending } = useSession()
    const user = data?.user
    if (isPending) {
        <p>loading</p>
    }
    return (
        <div className='py-10'>
            <h2>profile</h2>
            <Card className='max-w-96 mx-auto flex flex-col justify-center items-center py-5'>
                <Avatar className='w-20 h-20'>
                    <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                </Avatar>
                <h2 className='font-bold text-[30px]'>{user?.name}</h2>
                <p className='opacity-70'>{user?.email}</p>
                <Button variant="secondary">
                    <Link href='/myprofile/updateprofile'>Update Profile</Link>
                </Button>
            </Card>
        </div>
    );
};

export default Profile;