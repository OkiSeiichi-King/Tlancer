import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function TutorHome(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    tutor-home
                </h2>
            }
        >

            <div className="py-12">
                aaaa
            </div>
        </Authenticated>
    );
}
