import { Link, Head } from "@inertiajs/react";
import Whatsapp from "./LandingPage/buttons/WhatsApp/Whatsapp";
import Layout from "./LandingPage/Layout";
import BackToTopSection from "./LandingPage/sections/BackToTopSection";
import Binawa from "./LandingPage/sections/Binawa";

export default function Landing({
    auth,
    laravelVersion,
    phpVersion,
    user,
    harga,
    atlet,
    pelatih,
    event,
}) {
    // console.log(event);
    return (
        <>
            <Head title="PB Binawa" />
            <Layout user={user}>
                <Whatsapp />
                <Binawa
                    harga={harga}
                    atlet={atlet}
                    pelatih={pelatih}
                    event={event}
                />
                <BackToTopSection />
            </Layout>
        </>
    );
}
