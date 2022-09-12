import React, {useEffect, useState} from 'react';
import {Head, Link, useForm} from '@inertiajs/inertia-react';
import Tlancer from "@/Layouts/Tlancer";
import logo from "../../images/logo.webp";
import ChooseAccount from '../JoinPages/ChooseAccount';
import closeBtn from "../../images/Registration/blueX.svg";
import JoinEmail from "@/Pages/JoinPages/JoinEmail";
import JoinNav from "@/Pages/JoinPages/JoinNav";

export default function Register(props) {


    return (
        <>
            <Tlancer>

                <JoinNav to="welcome" button="close" />

                <JoinEmail />

                {/* <JoinEmail/> */}
                {/* <ChooseAccount /> */}
            </Tlancer>
        </>
    );
}
