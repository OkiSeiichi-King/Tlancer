import ParentNav from "../../../Components/ParentNav";
import ParentLoggedHero from "./ParentLoggedHero";
import Divider from "../../HomePage/Divider";
import TlancerCommunity from "../../../Components/TlancerCommunity";
import FooterLinks from "../../HomePage/FooterLinks";
import NewCourses from "../../../Components/NewCourses/NewCourses";
import AssesmentCourse from "../../../Components/AssesmentCourses/AssesmentCourse";
const ParentLoggedPage = () => {
  return (
    <>
      <ParentNav />
      <ParentLoggedHero />
      <Divider />

      <AssesmentCourse heading="Assesments" />

      <NewCourses heading="Courses we recommend for Payal" />
      <Divider />
      <TlancerCommunity />
      <Divider />
      <FooterLinks />
    </>
  );
};
export default ParentLoggedPage;
