import Link from "next/link";
import { FC } from "react";

const Custom404: FC<{}> = () => {


    return (
        <>
        <div id="404-grid" className="grid place-items-center px-16 pt-20">
            <div id="text-wrap" className="
            3xl:px-64 2xl:px-64 xl:px-64 lg:px-48 md:px-32 sm:px-16
            pt-10 w-full">
                <h1 className="text-4xl md:text-6xl font-bold text-stone-300">
                    <div id="text-inner-wrap" className="flex flex-col gap-6">
                        <div id="main-text">
                            <span className="block text-5xl md:text-7xl mb-4">
                                404
                            </span>
                            <span className="block text-3xl md:text-5xl mb-2 ">
                                Page not found
                            </span>
                        </div>

                        <div id="return-wrap" className="w-max hover:scale-105 transition ease-in-out">
                            <Link href="/">
                                <p className="text-sm hover:cursor-pointer text-white">
                                    Return Home <span aria-hidden="true">&rarr;</span>
                                </p>
                                <div id="underline" className="border-b-2 border-slate-300 animate-fade-in"></div>
                            </Link>
                        </div>
                    </div>
                </h1>          
            </div>
        </div>
        </>
    )
}

export default Custom404