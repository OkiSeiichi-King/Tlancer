import React, {useEffect} from 'react';
import {Head, Link, useForm} from '@inertiajs/inertia-react';
import Tlancer from "@/Layouts/Tlancer";
import Navbar from "@/Pages/HomePage/Navbar";

export default function Register(props) {
    console.log(props);
    const {data, setData, post, processing, errors, reset} = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <>
        <Navbar props={props}/>
        <Tlancer>

            <Head title="join"/>

            <form onSubmit={submit}>
                <div className="form-group mt-5">
                    awdawdawd
                </div>
            </form>
        </Tlancer>
        </>
    );
}
