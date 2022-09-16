import Navbar from "../../HomePage/Navbar";
import FooterLinks from "../../HomePage/FooterLinks";
import GuestTutorPage from "@/Pages/ProfilePage/TutorPage/view/GuestTutorPage";
import UserTutorPage from "@/Pages/ProfilePage/TutorPage/view/UserTutorPage";
const TutorPage = (props) => {
  return (
    <>
        {props.auth.user
            ? <UserTutorPage user={props.auth.user} />
            : <GuestTutorPage />
        }
      <FooterLinks />
    </>
  );
};

export default TutorPage;
