import Navbar from "../../HomePage/Navbar";
import StudentHero from "./StudentHero";
import Divider from "../../HomePage/Divider";
import RecommendedCourses from "../../../Components/RecommendedCourses/RecommendedCourses";
import ExploreCourses from "../../../Components/ExploreCourses/ExploreCourses/ExploreCourses";
import NewCourses from "../../../Components/NewCourses/NewCourses";
import TlancerCommunity from "../../../Components/TlancerCommunity";
import FooterLinks from "../../HomePage/FooterLinks";
const StudentPage = () => {
  return (
    <>
      <Navbar />
      <StudentHero />
      <Divider />
      <RecommendedCourses />
      <Divider />
      <ExploreCourses />
      <NewCourses heading="New Courses" bgColor="#F3F4F6" />
      <TlancerCommunity />
      <Divider />
      <FooterLinks />
    </>
  );
};

export default StudentPage;
