import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function NewCourse(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    new-course
                </h2>
            }
        >

            <div className="py-12">
                aaaa
            </div>
        </Authenticated>
    );
}
