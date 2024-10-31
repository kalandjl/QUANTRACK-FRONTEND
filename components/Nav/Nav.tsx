import { FC } from "react";
import { mainLinks } from "./NavOptions";

interface Props {
    
}

const Nav: FC<Props> = (props) => {

    return (
        <>
            <nav id="nav-wrap">
                <div id="nav" className="bg-zinc-900 min-h-20 flex items-center w-full">
                    <div id="nav-flex" className="flex justify-between w-full">
                        <section id="logo-wrap">

                        </section>
                        <section id="main-links-wrap h-full">
                            <div id="main-links-flex" className={`
                                flex px-10 h-full items-center 
                                2xl:gap-20 xl:gap-20 lg:gap-16 md:gap-10 sm:gap-6 
                            `}>
                                {mainLinks.map((link, i) => (
                                    <p className={`
                                        font-semibold text-stone-300 
                                        2xl:text-xl xl:text-xl lg:texl-xl md:text-lg sm:text-md
                                        hover:underline hover:scale-105 hover: cursor-pointer
                                        transition ease-in-out
                                    `} key={i}>
                                        {link}
                                    </p>
                                ))}
                            </div>
                        </section>
                        <section id="account-wrap">

                        </section>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav