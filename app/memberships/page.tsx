import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"

export default function memberships() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="w-full absolute top-20 bg-[rgb(255,230,255)] dark:bg-[rgb(34,54,85)]" style={{textAlign: 'center', position: 'relative'}}>
                <h2 style={{marginTop: '90px', marginBottom: '40px'}}>
                    What is Behavior Analysis?
                </h2>
                <h4 style={{marginLeft: '18%', marginRight: '18%', marginBottom: '100px'}}>
                    At QcABA, we offer various types of memberships tailored to meet the diverse needs and interests of our members. Whether you're a seasoned behavior analyst, a student aspiring to enter the field, or you are committed to promoting behavior analysis, we have a membership option for you.
                </h4>
            </main>
            <div style={{marginBottom: '300px'}}>
            </div>
            <Footer />
        </div>
    )
}