import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="w-full h-24 outline-1 outline-neutral-500 dark:outline-[#717171] outline"  style={{paddingBottom: '80px'}}>
            <div className="flex justify-between items-center h-full w-full px-[20%]" style={{paddingTop: '40px'}}>
                <Link href="/">
                    <div className="text-l sm:text-xl">QcABA</div>
                </Link>
                <div>
                    <ul className="text-xs sm:text-base">
                        <li>
                            <Link href="mailto:info@qcaba.org">
                                info@qcaba.org
                            </Link>
                        </li>
                        <li>Montréal, Québec</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer