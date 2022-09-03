import Navbar from "./Navbar";
import Hero from "./Hero";
import PopularCourses from "../../Components/PopularCourses/PopularCourses";
import Divider from "./Divider";
import ExploreCourses from "../../Components/ExploreCourses/ExploreCourses/ExploreCourses";
import Tutors from "./Tutors";
// import Tips from "./Tips/Tips";
import Testimonies from "./Testimonies";
// import Newsletter from "./Newsletter";
import FooterLinks from "./FooterLinks";
import React from "react";
import Tlancer from '@/Layouts/Tlancer';


const Home = (props) => {
    console.log("home rendered");

    return (

        <Tlancer>
            <Navbar props={props}/>
            <Hero id="Home"/>
            <Divider/>
            <PopularCourses id="PopularCourses"/>
            <Divider/>
            <ExploreCourses id="CourseLibrary"/>
            <Tutors id="Tutor"/>
            <Divider/>
            <Testimonies id="Testimonials"/>
            {/* <Divider /> */}
            {/* <Tips /> */}
            {/* <Divider /> */}
            {/* <Newsletter /> */}
            <Divider/>
        </Tlancer>


    )
}

export default Home;
