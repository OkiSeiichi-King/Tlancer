import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import FooterLinks from "@/Pages/HomePage/FooterLinks";
import Divider from "@/Pages/HomePage/Divider";
import TutorCourseAssessment from "@/Pages/ProfilePage/TutorPage/TutorCourseView/TutorCourseAssessment";
import TutorNav from "@/Pages/Components/TutorNav";
import TutorCourseGlance from "@/Pages/ProfilePage/TutorPage/TutorCourseView/TutorCourseGlance";

export default function MyCourse(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <TutorNav />
            <Divider />
            <TutorCourseGlance />
            <Divider />
            <TutorCourseAssessment />
            <Divider />
            <FooterLinks />
        </Authenticated>
    );
}


