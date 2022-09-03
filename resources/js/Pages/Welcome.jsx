import React from 'react';
import {Link, Head} from '@inertiajs/inertia-react';
import Home from "@/Pages/HomePage/Home";
import Tlancer from '@/Layouts/Tlancer';


export default function Welcome(props) {
    return (
        <Tlancer props={props}>
            <Home/>
           {/* <div>
                <Link
                    path="/"
                    element={
                        <>
                            <Home/>
                        </>
                    }
                />

                {!props.auth.user && (
                    <Link
                        path="/login"
                        element={
                            <>
                                <Login/>
                            </>
                        }
                    />
                )}

                <Link
                    path="/account"
                    element={
                        <>
                            <ChooseAccount/>
                        </>
                    }
                />

                {!props.auth.user && (
                    <Link
                        path="/join"
                        element={
                            <>
                                <JoinEmail/>
                            </>
                        }
                    />
                )}

                <Link
                    path="/names"
                    element={
                        <>
                            <JoinName/>
                        </>
                    }
                />

                <Link
                    path="/date-of-birth"
                    element={
                        <>
                            <JoinDateOfBirth/>
                        </>
                    }
                />

                <Link
                    path="/location"
                    element={
                        <>
                            <JoinLocation/>
                        </>
                    }
                />

                <Link
                    path="/phone-number"
                    element={
                        <>
                            <JoinPhoneNumber/>
                        </>
                    }
                />

                <Link
                    path="/password"
                    element={
                        <>
                            <JoinPassword/>
                        </>
                    }
                />

                <Link
                    path="/success"
                    element={
                        <>
                            <JoinDataSent/>
                        </>
                    }
                />

                <Link
                    path="/verify-account"
                    element={
                        <>
                            <VerifyEmail/>
                        </>
                    }
                />

                <Link
                    path="/student"
                    element={
                        <>
                            <StudentPage/>
                        </>
                    }
                />

                <Link
                    path="/tutor"
                    element={
                        <>
                            <TutorPage/>
                        </>
                    }
                />

                <Link
                    path="/parent"
                    element={
                        <>
                            <ParentPage/>
                        </>
                    }
                />

                <Link
                    path="/tutor/new-tutor"
                    element={
                        <>
                            <NewTutorHome/>
                        </>
                    }
                />

                <Link
                    path="/tutor/course-details"
                    element={
                        <>
                            <TutorNav/>
                            <TutorNewCourse/>
                        </>
                    }
                />

                <Link path="/tutor/course-syllabus" element={<><TutorNav/><TutorNewCourseSyllabus/></>}/>
                <Link path="/tutor/course-preview-video" element={<><TutorNav/><TutorNewCoursePreviewVideo/></>}/>
                <Link path="/tutor/course-calendar" element={<><TutorNav/><NewTutorCourseCalendar/></>}/>
                <Link path="/tutor/course-pricing" element={<><TutorNav/><TutorNewCoursePricing/></>}/>
                <Link path="/parent/parent-logged-in" element={<><ParentNav/><ParentLoggedPage/> </>}/>
                <Link path="*" element={<><Navbar/><PageNotFound/> </>}/>
            </div>*/}
        </Tlancer>
    );
}
