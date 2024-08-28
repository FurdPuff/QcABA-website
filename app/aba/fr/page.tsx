import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"

export default function abaFr() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="w-full absolute top-20 bg-[rgb(255,230,255)] dark:bg-[rgb(34,54,85)]" style={{textAlign: 'center', position: 'relative'}}>
                <h2 style={{marginTop: '90px', marginBottom: '40px'}}>
                    Qu’est-ce que l’analyse du comportement ?
                </h2>
                <h4 style={{marginLeft: '22%', marginRight: '22%', marginBottom: '100px'}}>
                    L'analyse du comportement est une approche scientifique pour comprendre le comportement et la manière dont il est influencé par l'environnement. Il s'appuie sur les principes de la théorie de l'apprentissage, qui mettent l'accent sur la relation entre le comportement et l'environnement. Les analystes du comportement étudient les interactions entre les individus et leur environnement pour identifier des modèles de comportement et développer des interventions efficaces pour résoudre un large éventail de problèmes.
                </h4>
            </main>
            <div style={{marginBottom: '200px'}}></div>
            <Footer />
        </div>
    )
}