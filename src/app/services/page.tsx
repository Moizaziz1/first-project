import Link from "next/link";

export default function Services(){
    return(
        <div  className="grid justify-center mt-56 p-2 text-teal-400 text-4xl font-extrabold font-serif text-center ">
            <h1>Hi Sir!</h1>
            <p>This is my Services Page</p>
            <div className="inline-flex gap-7 justify-center mt-5">
                <button className="grid border-4 py-3 px-2 bg-amber-300 text-black rounded hover:bg-yellow-200"><Link href="./services/freelancing">Freelancing</Link></button>
                <button className="grid border-4 py-3 px-2 bg-amber-300 text-black rounded hover:bg-yellow-200"><Link href="./services/job">Job</Link></button>

            </div>
        </div>
    )
}