import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Slider from "@/components/slideshow"
import Image from 'next/image'
import Events from "@/components/Events"

export default function home() {
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow" style={{marginBottom: '300px'}}>
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
        
        <main className="w-full absolute bg-[rgb(255,230,255)] dark:bg-[rgb(34,54,85)]" style={{textAlign: 'center', position: 'relative'}}>
          <h2 style={{marginTop: '90px', marginBottom: '40px'}}>
              What is Behavior Analysis?
          </h2>
          <h4 style={{marginLeft: '18%', marginRight: '18%', marginBottom: '100px'}}>
          Behavior analysis is a scientific approach to understanding behavior and how it is influenced by the environment. It is based on the principles of learning theory, which emphasize the relationship between behavior and the environment. Behavior analysts study the interactions between individuals and their environment to identify patterns of behavior and develop effective interventions to address a wide range of issues.
          </h4>
        </main>
        <div style={{marginBottom: '60px'}} />
        <Slider />
        
        <section>
          <h1 style={{position: 'absolute', marginTop: '70px', marginBottom: '50px', left: '50%', transform: 'translateX(-50%)'}} className="relative flex-grow flex items-center justify-center">
            Coming Up Next
          </h1>
          <Events />
        </section>
        <h1 style={{position: 'relative', marginLeft: '125px', marginBottom: '20px'}}>
          Our Mission
        </h1>
        <h4 style={{marginLeft: '800px', marginRight: '100px'}}>
          At the Québec Association of Behavior Analysis (QcABA), we are dedicated to promoting the principles and practices of behavior analysis to enhance the quality of life for individuals and communities. But what exactly is behavior analysis?
        </h4>
        <Image
          src="/tree.jpeg"
          width={570}
          height={405}
          alt="Trees"
          style={{marginLeft: '125px', marginBottom: '100px', marginTop: '-100px'}}
        />
        <Footer />
    </div>
  )
}