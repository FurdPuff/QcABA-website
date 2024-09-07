import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from 'next/image'

export default function home() {
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Image
            src="/Collaboration.jpeg"
            width={2208}
            height={1130}
            alt="Collaboration"
            className="lg:static lg:top-0 top-24"
            style={{filter: 'brightness(0.6)', zIndex: '1', position: 'relative'}}
          />
          <div style={{position: 'relative', marginLeft: '10%', zIndex: '2', color: 'white'}}>
            <h2 style={{marginTop: '-30%'}} className="lg:text-7xl">
              Empowering Change
            </h2>
            <h4 className="lg:text-2xl font-bold">
              Creating a better tomorrow
            </h4>
          </div>
        </main>
        <section>
          <h2 style={{position: 'relative', marginTop: '25%'}} className="relative flex-grow flex items-center justify-center">
            Coming Up Next
          </h2>
        </section>
        <Footer />
    </div>
  )
}