import Navbar from "@/components/Navbar"
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

            <div>
                <h1 style={{marginTop: '150px', marginBottom: '50px', textAlign: 'center'}}>
                    Choose your membership
                </h1>
            </div>

            <div className="flex justify-center space-x-8"
                 style={{marginBottom: '100px', textAlign: 'center', position: 'relative', color: 'black'}}>
                <div style={{width: '20%', backgroundColor: 'white', height: '700px'}}>
                    <h3 style={{marginTop: '20px', marginBottom: '40px'}}>
                        Membre étudiant/Student Member
                    </h3>
                    <h3 style={{marginLeft: '-110px', color: 'blue'}}>
                        $
                    </h3>
                    <h1 style={{marginTop: '-30px', color: 'blue', fontSize: '80px'}}>
                        20
                    </h1>
                    <h4 style={{padding: '20px'}}>
                        Ideal for aspiring behavior analysts.
                    </h4>
                    <h5>
                        Valid for 12 months
                    </h5>
                </div>
                
                <div style={{width: '20%', backgroundColor: 'white', height: '700px'}}>
                    <h3 style={{marginTop: '20px', marginBottom: '40px'}}>
                        Membre Affilié/Affiliate Member
                    </h3>
                    <h3 style={{marginLeft: '-110px', color: 'blue'}}>
                        $
                    </h3>
                    <h1 style={{marginTop: '-30px', color: 'blue', fontSize: '80px'}}>
                        20
                    </h1>
                    <h4 style={{padding: '20px'}}>
                        Perfect for those with a professional interest in behavior analysis
                    </h4>
                    <h5>
                        Valid for 12 months
                    </h5>
                </div>
                
                <div style={{width: '20%', backgroundColor: 'white', height: '700px'}}>
                    <h3 style={{marginTop: '20px', marginBottom: '40px'}}>
                        Membre régulier/Regular Member
                    </h3>
                    <h3 style={{marginLeft: '-110px', color: 'blue'}}>
                        $
                    </h3>
                    <h1 style={{marginTop: '-30px', color: 'blue', fontSize: '80px'}}>
                        30
                    </h1>
                    <h4 style={{padding: '20px'}}>
                        Perfect for dedicated behavior analysts.
                    </h4>
                    <h5>
                        Valid for 12 months
                    </h5>
                </div>
                
                <div style={{width: '20%', backgroundColor: 'white', height: '700px'}}>
                    <h3 style={{marginTop: '20px', marginBottom: '40px'}}>
                        Membre donateur/Sustaining Member
                    </h3>
                    <h3 style={{marginLeft: '-110px', color: 'blue'}}>
                        $
                    </h3>
                    <h1 style={{marginTop: '-30px', color: 'blue', fontSize: '80px'}}>
                        60
                    </h1>
                    <h4 style={{padding: '20px'}}>
                        Perfect for champions of behavior analysis.
                    </h4>
                    <h5>
                        Valid for 12 months
                    </h5>
                </div>
            </div>

            <Footer />
        </div>
    )
}