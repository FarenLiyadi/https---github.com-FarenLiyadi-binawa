import { Link, Head } from "@inertiajs/react";
import Whatsapp from "./LandingPage/buttons/WhatsApp/Whatsapp";
import Layout from "./LandingPage/Layout";
import BackToTopSection from "./LandingPage/sections/BackToTopSection";
import Binawa from "./LandingPage/sections/Binawa";

export default function Landing({ auth, laravelVersion, phpVersion, user }) {
    console.log(user);
    return (
        <>
            <Head title="PB Binawa" />
            <Layout user={user}>
                <Whatsapp />
                <Binawa />
                <BackToTopSection />
            </Layout>
        </>
    );
}
