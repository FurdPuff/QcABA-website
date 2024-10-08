import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import Events from "@/components/Events"


export default function events() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <section style={{marginTop: '100px', textAlign: 'center'}}>
                <h1 style={{marginBottom: '40px'}}>
                    Coming Up Next
                </h1>
                <h4 style={{marginLeft: '18%', marginRight: '18%', marginBottom: '100px'}}>
                    Exclusive Benefit for Members: Enjoy discounted rates on all our upcoming events! As a valued member of QcABA, you not only gain access to a vibrant community of behavior analysis professionals but also save on enriching workshops, seminars, and webinars. Join us and take advantage of this special perk to further your professional development and network with peers in the field.
                </h4>
            </section>
            <Events />
            <Footer />
        </div>
    )
}