import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import TutorNav from "@/Pages/ProfilePage/TutorPage/TutorCourseView/TutorNav";
import TutorNewCourse from "@/Pages/ProfilePage/TutorPage/NewTutor/TutorNewCourse";

export default function NewCourse(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}

        >
            <TutorNav />
            <TutorNewCourse />
        </Authenticated>
    );
}
