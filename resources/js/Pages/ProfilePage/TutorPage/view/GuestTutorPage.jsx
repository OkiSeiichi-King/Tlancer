import TutorHero from "@/Pages/ProfilePage/TutorPage/TutorHero";
import Divider from "@/Pages/HomePage/Divider";
import TutorDashboard from "@/Pages/ProfilePage/TutorPage/TutorDashboard";
import TutorSelfService from "@/Pages/ProfilePage/TutorPage/TutorSelfService";
import SupportSection from "@/Pages/Components/SupportSection";
import TlancerCommunity from "@/Pages/Components/TlancerCommunity";
import Navbar from "@/Pages/HomePage/Navbar";


const GuestTutorPage = ()  => {
    return (
        <>
            <Navbar />
            <TutorHero />
            <Divider />
            <TutorDashboard />
            <TutorSelfService />
            <Divider />
            <SupportSection />
            <Divider />
            <TlancerCommunity />
            <Divider />
        </>
    )
}

export default GuestTutorPage
