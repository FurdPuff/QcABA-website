import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import Image from 'next/image'

export default function aba() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="w-full absolute top-20 bg-[rgb(255,230,255)] dark:bg-[rgb(34,54,85)]" style={{textAlign: 'center', position: 'relative'}}>
                <h2 style={{marginTop: '90px', marginBottom: '40px'}}>
                    What is Behavior Analysis?
                </h2>
                <h4 style={{marginLeft: '18%', marginRight: '18%', marginBottom: '100px'}}>
                Behavior analysis is a scientific approach to understanding behavior and how it is influenced by the environment. It is based on the principles of learning theory, which emphasize the relationship between behavior and the environment. Behavior analysts study the interactions between individuals and their environment to identify patterns of behavior and develop effective interventions to address a wide range of issues.
                </h4>
            </main>
            <div style={{marginBottom: '200px'}}></div>
            <main>
                <section style={{marginLeft: '250px', marginBottom: '100px'}}>
                    <h2 style={{color: 'rgb(100,100,250)', fontSize: '90px'}}>
                        01
                    </h2>
                    <div style={{marginLeft: '50px', marginRight: '600px'}}>
                        <h3>
                            Behavior is Observable and Measurable
                        </h3>
                        <h5>
                            Behavior analysis focuses on observable behaviors that can be objectively measured. By quantifying behavior, analysts can track changes over time and assess the effectiveness of interventions.
                        </h5>
                    </div>
                </section>
                <section style={{marginLeft: '625px', marginBottom: '100px'}}>
                    <h2 style={{color: 'rgb(100,100,250)', fontSize: '90px'}}>
                        02
                    </h2>
                    <div style={{marginLeft: '50px', marginRight: '225px'}}>
                        <h3>
                            Behavior is Influenced by the Environment
                        </h3>
                        <h5>
                            Behavior is shaped by the environment through a process of reinforcement and punishment. By altering environmental variables, behavior analysts can modify behavior and promote positive outcomes.
                        </h5>
                    </div>
                </section>
                <section style={{marginLeft: '400px', marginBottom: '100px'}}>
                    <h2 style={{color: 'rgb(100,100,250)', fontSize: '90px'}}>
                        03
                    </h2>
                    <div style={{marginLeft: '50px', marginRight: '450px'}}>
                        <h3>
                            Behavior Can Be Analyzed Scientifically
                        </h3>
                        <h5>
                            Behavior analysis is rooted in the scientific method, employing systematic observation, experimentation, and data analysis to understand behavior and develop evidence-based interventions.
                        </h5>
                    </div>
                </section>
                <section style={{marginLeft: '250px', marginBottom: '100px'}}>
                    <h2 style={{color: 'rgb(100,100,250)', fontSize: '90px'}}>
                        04
                    </h2>
                    <div style={{marginLeft: '50px', marginRight: '600px'}}>
                        <h3>
                            Focus on Function
                        </h3>
                        <h5>
                            Behavior analysts seek to understand the function or purpose of behavior. By identifying the underlying reasons for behavior, analysts can design interventions that address the root cause rather than just treating the symptoms.
                        </h5>
                    </div>
                </section>
                <section style={{marginLeft: '625px', marginBottom: '100px'}}>
                    <h2 style={{color: 'rgb(100,100,250)', fontSize: '90px'}}>
                        05
                    </h2>
                    <div style={{marginLeft: '50px', marginRight: '225px'}}>
                        <h3>
                            Applied Approach
                        </h3>
                        <h5>
                            Behavior analysis emphasizes the practical application of its principles to real-world problems. Whether addressing behavioral issues in individuals with developmental disabilities, improving organizational performance, or enhancing classroom management strategies, behavior analysts strive to make meaningful improvements in people's lives.
                        </h5>
                    </div>
                </section>
            </main>
            <section className="w-full bg-[rgb(255,250,240)] dark:bg-[rgb(80,80,100)]" style={{minHeight: '1000px'}}>
                <h2 style={{marginTop: '80px', marginLeft: '130px', fontSize: '45px'}}>
                    Applications of Behavior Analysis
                </h2>
                <Image
                src="/family.jpg"
                alt="family"
                width={404}
                height={540}
                style={{zIndex: '9000', marginLeft: '-200px', marginTop: '60px'}}
                />
                <h3>
                    Clinical Behavior Analysis
                </h3>
            </section>
            <Footer />
        </div>
    )
}