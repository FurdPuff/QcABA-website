import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"

export default function aba() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="w-full absolute top-20 bg-[rgb(255,230,255)] dark:bg-[rgb(34,54,85)]" style={{textAlign: 'center', position: 'relative'}}>
                <h2 style={{marginTop: '90px', marginBottom: '40px'}}>
                    What is Behavior Analysis?
                </h2>
                <h4 style={{marginLeft: '22%', marginRight: '22%', marginBottom: '90px'}}>
                Behavior analysis is a scientific approach to understanding behavior and how it is influenced by the environment. It is based on the principles of learning theory, which emphasize the relationship between behavior and the environment. Behavior analysts study the interactions between individuals and their environment to identify patterns of behavior and develop effective interventions to address a wide range of issues.
                </h4>
            </main>
            <Footer />
        </div>
    )
}