import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from 'lucide-react';

export default function AboutMeSection() {


    return(
        <div className="h-full w-full flex items-center justify-center pt-10 text-black">
            <div className="text-gray-300 flex-col gap-5 items-center border-2 shadow-2xl rounded-2xl min-w-60 min-h-100 flex p-10">
                <div>
                    <Image width={100} height={100} src={"/profile.png"} className="rounded-full"/>
                </div>
                <div>
                    <h1 className="text-black font-bold text-2xl">Constantin Meier</h1>
                    <p className="text-black ">A Hackclubber</p>
                </div>
                <div>
                    <Link alt={"Opens the users github profile"} href={"https://github.com/CoolV3"} className="flex py-3 px-5 rounded-2xl transition bg-white text-black group">Github <ArrowUpRight className="w-0 overflow-hidden group-hover:w-5 group-hover:ml-1 transition-all duration-500 text-black "/> </Link>
                </div>
            </div>
        </div>
    )
}