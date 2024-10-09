import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from 'react'
import Image from 'next/image'
import {} from 'react-icons/ai'

export default function about() {
    return (
        <div className="flex-grow">
            <Navbar />
            <main className="min-h-screen flex flex-col items-center justify-center" style={{marginTop: '100px', textAlign: 'center'}}>
                <h1>
                    About Us
                </h1>
                <h3>
                    Join Us in Advancing Behavior Analysis in Québec
                </h3>
                <h4 style={{marginLeft: '10%', marginRight: '10%', marginTop: '25px'}}>
                At the Québec Association of Behavior Analysis, we are committed to advancing the field of behavior analysis through education, research, and advocacy. Whether you're a seasoned behavior analyst or just starting your journey in the field, we invite you to join us in promoting evidence-based practices and making a positive impact on individuals and communities worldwide. Together, we can harness the power of behavior analysis to create a better future for all.
                </h4>
                <Image
                    src="/mountains.png"
                    alt="mountains"
                    width={1000}
                    height={200}
                    style={{marginTop: '60px', marginBottom: '100px'}}
                />
                <h1>
                    Our Story
                </h1>
                <h4 style={{marginLeft: '15%', marginRight: '15%', marginTop: '25px'}}>
                    <p style={{marginBottom: '20px'}}>At the Québec Association of Behavior Analysis (QcABA), we are dedicated to promoting the principles and practices of behavior analysis to enhance the quality of life for individuals and communities. But what exactly is behavior analysis?</p>
                    <p style={{marginBottom: '20px'}}>Behavior analysis is a scientific approach to understanding behavior and how it is influenced by the environment. It is based on the principles of learning theory, which emphasize the relationship between behavior and the environment. Behavior analysts study the interactions between individuals and their environment to identify patterns of behavior and develop effective interventions to address a wide range of issues.</p>
                    <p style={{marginBottom: '100px'}}>QcABA is a non profit organization founded in November 2010 and is an affiliate chapter of ABAI</p>
                </h4>
                <h1>
                    Meet The Team
                </h1>
                <div className="container">
                    <Image
                        src="/QCaBA-about-images/Kirsty Robertson.jpeg"
                        alt="Kirsty Robertson"
                        width={400}
                        height={400}
                        className="item item-1"
                    />
                    
                    <Image
                        src="/QCaBA-about-images/Marisa Scaglione.jpeg"
                        alt="Marisa Scaglione"
                        width={400}
                        height={400}
                        className="item item-2"
                    />

                    <Image 
                        src="/QCaBA-about-images/Celia Bocchi.jpeg"
                        alt="Celia Bocchi"
                        width={400}
                        height={400}
                        className="item item-3"
                    />
                    
                    <Image 
                        src="/QCaBA-about-images/Trevor Friesen.jpeg"
                        alt="Trevor Friesen"
                        width={400}
                        height={400}
                        className="item item-4"
                    />

                    <Image
                        src="/QCaBA-about-images/Janet Nacouzi.jpeg"
                        alt="Janet Nacouzi"
                        width={400}
                        height={400}
                        className="item item-5"
                    />

                    <Image
                        src="/QCaBA-about-images/Jaime Fernandez.jpeg"
                        alt="Jaime Fernandez"
                        width={400}
                        height={400}
                        className="item item-6"
                   />

                    <Image
                        src="/QCaBA-about-images/Aurelie Fock.jpeg"
                        alt="Aurelie Fock"
                        width={400}
                        height={400}
                        className="item item-7"
                    />

                    <Image
                        src="/QCaBA-about-images/Celina Rust.jpeg"
                        alt="Celina Rust"
                        width={400}
                        height={400}
                        className="item item-8"
                    />

                    <Image
                        src="/QCaBA-about-images/Yuliya Tkachencko.jpeg"
                        alt="Yuliya Tkachencko"
                        width={400}
                        height={400}
                        className="item item-9"
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}