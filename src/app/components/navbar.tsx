import Link from "next/link"


export default function Navbar(){
    return (
        <div className="flex items-center justify-center gap-52  bg-amber-300 text-lg font-extrabold text-black font-serif py-6 ">
            <Link className="grid hover:border-b-4 border-yellow-700" href="./">Home</Link>
            <Link className="grid hover:border-b-4 border-yellow-700" href="./about">About</Link>
            <Link className="grid hover:border-b-4 border-yellow-700" href="./services">Services</Link>
            <Link className="grid hover:border-b-4 border-yellow-700" href="./Protfolio">Portfolio</Link>
            <Link className="grid hover:border-b-4 border-yellow-700" href="./contact">Contact</Link>


        </div>
    )
}