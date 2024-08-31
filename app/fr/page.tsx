import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from 'next/image'

export default function home() {
  return (
    <div className="min-h-screen flex flex-col">
        <div style={{position: 'absolute', zIndex: '2'}}>
          <Navbar />
        </div>
        <main className="flex-grow">
          <Image
            src="/Collaboration.jpeg"
            width={2208}
            height={1130}
            alt="Collaboration"
            style={{marginTop: '-150px', filter: 'brightness(0.6)', zIndex: '1', position: 'relative'}}
          />
          <div style={{position: 'relative', marginLeft: '100px', zIndex: '2', color: 'white'}}>
            <h1 style={{marginTop: '-30%'}}>
              Favoriser le changement
            </h1>
            <h3>
              Créer un meilleur avenir
            </h3>
          </div>
        </main>
        <section>
          <h2 style={{position: 'relative', marginTop: '290px'}} className="relative flex-grow flex items-center justify-center">
            À suivre
          </h2>
        </section>
        <Footer />
    </div>
  )
}