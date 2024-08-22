import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"

export default function home() {
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <img
              src="https://static.wixstatic.com/media/11062b_6001d4fc358f416fa7d361ccd2e20414~mv2.jpg/v1/fill/w_2208,h_1130,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/11062b_6001d4fc358f416fa7d361ccd2e20414~mv2.jpg"
              alt="Collaboration"
              w-full
            />
        </main>
        <Footer />
    </div>
)
}