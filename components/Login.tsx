import {useState} from 'react'
import Link from 'next/link'
import { CgProfile, CgClose } from "react-icons/cg";

const Login = () => {
    const [loginOpen, setLoginOpen] = useState(false)
    
    const handleLogin = () => {
        setLoginOpen(!loginOpen)
    }
    
    return (
        <section>
            <div onClick={handleLogin} className="flex items-center ml-10 hover:text-cyan-400 transition-colors duration-400 cursor-pointer">
                <CgProfile size={25} style={{marginRight: '10px'}}/>
                <p>Log In</p>
            </div>
            <div className={
                loginOpen
                ? "fixed top-0 left-0 w-full h-full bg-white dark:bg-[rgb(50,50,60)] flex z-50"
                : "hidden"
                }
                >
                <div onClick={handleLogin} className="cursor-pointer" style={{marginTop: '60px', marginLeft: '90%'}}>
                    <CgClose size={50} />
                </div>
                <div className="flex-col py-4">
                    <Link href="">

                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Login