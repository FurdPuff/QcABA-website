import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from 'next/image'
import Events from "@/components/Events"

export default function home() {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      margin: '20px',
    },
    image: {
      borderRadius: '8px',
    },
    text: {
      fontSize: '18px',
    },
  };
  
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
          <h1 style={{position: 'relative', marginTop: '25%', marginBottom: '50px'}} className="relative flex-grow flex items-center justify-center">
            Coming Up Next
          </h1>
          <Events />
        </section>
        <h1 style={{marginLeft: '125px', marginBottom: '20px'}}>
          Our Mission
        </h1>
        <section style={styles.container}>
          <h4 style={{marginLeft: '800px',...styles.text}}>
            At the Québec Association of Behavior Analysis (QcABA), we are dedicated to promoting the principles and practices of behavior analysis to enhance the quality of life for individuals and communities. But what exactly is behavior analysis?
          </h4>
          <Image
            src="/tree.jpeg"
            width={570}
            height={405}
            alt="Trees"
            style={{marginLeft: '125px', marginBottom: '100px', marginTop: '-1000px',...styles.image}}
            id="trees"
          />
          </section>
        <Footer />
    </div>
  )
}