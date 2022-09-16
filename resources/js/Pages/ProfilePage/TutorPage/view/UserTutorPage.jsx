import NewTutorHero from "@/Pages/ProfilePage/TutorPage/NewTutor/NewTutorHero";
import TutorNav from "@/Pages/Components/TutorNav";
import TutorNoCourses from "@/Pages/ProfilePage/TutorPage/NewTutor/TutorNoCourses";
import NewTutorCalendar from "@/Pages/ProfilePage/TutorPage/NewTutor/NewTutorCalendar";
import Divider from "@/Pages/HomePage/Divider";
import SupportSection from "@/Pages/Components/SupportSection";



const UserTutorPage = (props) => {
    return (
        <>
            <TutorNav />
            <NewTutorHero userName={props.user.name} />
            <Divider />
            <TutorNoCourses />
            <Divider />
            <NewTutorCalendar />
            <Divider />
            <SupportSection />
            <Divider />
        </>
    )
}

export default UserTutorPage
