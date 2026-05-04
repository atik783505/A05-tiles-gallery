import Footer from '@/component/shared/Footer';
import Navbar from '@/component/shared/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
           <main>{children}</main>
           <Footer></Footer>
        </div>
    );
};

export default layout;