import React from 'react';
import {Link, Head} from '@inertiajs/inertia-react';
import Footer from "@/pages/HomePage/Footer";
import FooterLinks from "@/Pages/HomePage/FooterLinks";

export default function Tlancer({children}) {
    return (
        <>
            <Head title="Welcome"/>
            <div>
                {children}
            </div>
            <FooterLinks/>
            <Footer/>
        </>
    );
}
