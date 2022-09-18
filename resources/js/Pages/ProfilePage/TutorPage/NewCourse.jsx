import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import TutorNav from "@/Pages/ProfilePage/TutorPage/TutorCourseView/TutorNav";
// import NewTutorCalendar from "@/Pages/ProfilePage/TutorPage/NewTutor/NewTutorCalendar";
import Footer from "@/Pages/HomePage/Footer";
// import TutorNewCoursePricing from "@/Pages/ProfilePage/TutorPage/NewTutor/TutorNewCoursePricing";
// import NewTutorCourseCalendar from "@/Pages/ProfilePage/TutorPage/NewTutor/NewTutorCourseCalendar";
// import TutorNewCoursePreviewVideo from "@/Pages/ProfilePage/TutorPage/NewTutor/TutorNewCoursePreviewVideo";
// import TutorNewCourseSyllabus from "@/Pages/ProfilePage/TutorPage/NewTutor/TutorNewCourseSyllabus";
import TutorNewCourse from "@/Pages/ProfilePage/TutorPage/NewTutor/TutorNewCourse";

export default function NewCourse(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}

        >
            <TutorNav />
            <TutorNewCourse />
            {/*<TutorNewCourseSyllabus />*/}
            {/*<TutorNewCoursePreviewVideo />*/}
            {/*<NewTutorCourseCalendar />*/}
            {/*<TutorNewCoursePricing />*/}
            {/*<NewTutorCalendar />*/}
            <Footer />
        </Authenticated>
    );
}
