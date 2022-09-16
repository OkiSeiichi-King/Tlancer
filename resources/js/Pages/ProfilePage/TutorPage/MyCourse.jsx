import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import FooterLinks from "@/Pages/HomePage/FooterLinks";
import Divider from "@/Pages/HomePage/Divider";
import TutorCourseAssessment from "@/Pages/ProfilePage/TutorPage/TutorCourseView/TutorCourseAssessment";
import TutorCourseGlance from "@/Pages/ProfilePage/TutorPage/TutorCourseView/TutorCourseGlance";
import TutorDescription from "@/Pages/ProfilePage/TutorPage/TutorCourseView/TutorDescription";
import TutorAnnouncements from "@/Pages/ProfilePage/TutorPage/TutorCourseView/TutorAnnouncements";
import TutorBreadCrumbs from "@/Pages/ProfilePage/TutorPage/TutorCourseView/TutorBreadCrumbs";

export default function MyCourse(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <Divider />
            <TutorAnnouncements />
            <TutorBreadCrumbs />
            <Divider />
            <TutorCourseGlance />
            <Divider />
            <TutorCourseAssessment />
            <Divider />
            <TutorDescription />
            <Divider />
            <FooterLinks />
        </Authenticated>
    );
}


