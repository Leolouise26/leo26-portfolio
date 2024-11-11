import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
    return (
        <header className="relative z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
            {/* logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold ml-5">
                    Leocchi<span className="text-accent">.</span>
                </h1>
            </Link>
            <div className="mb-8 xl:mb-0"><Socials/>
             </div>
                </div>
            </div>

           
        </header>
    )
}

export default Header;