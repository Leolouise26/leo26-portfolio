import Link from "next/link"

import {RiInstagramLine, RiFacebookLine, RiTwitterLine, RiTiktokLine, RiGithubLine} from "react-icons/ri"

const Socials = () => {
    return(
        <div className="flex items-center gap-x-5 text-lg">
            <Link href={'https://www.facebook.com/hiddenbladesueeeee/'} aria-label="Facebook" target="_blank" className="hover:text-accent transition all duration-300">
            <RiFacebookLine /></Link>
            <Link href={'https://www.instagram.com/leeeeeeeyoooww/'} aria-label="Instagram" target="_blank" className="hover:text-accent transition all duration-300">
            <RiInstagramLine /></Link>
            <Link href={'https://x.com/leolouise261'} aria-label="Twitter" target="_blank" className="hover:text-accent transition all duration-300">
            <RiTwitterLine /></Link>
            <Link href={'https://www.tiktok.com/@leocchi26?lang=en'} aria-label="Tiktok" target="_blank" className="hover:text-accent transition all duration-300">
            <RiTiktokLine /></Link>
            <Link href={'https://github.com/Leolouise26'} aria-label="GitHub" target="_blank" className="hover:text-accent transition all duration-300">
            <RiGithubLine /></Link>
        </div>
    )
}

export default Socials