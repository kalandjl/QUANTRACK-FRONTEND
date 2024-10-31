import { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {

    return (
        <>
            <section id="main-section">

                <div id="header-content-wrap" className={`
                    2xl:pl-64 xl:pl-64 lg:pl-48 md:pl-32 sm:pl-10
                    2xl:pt-32 xl:pt-32 lg:pt-28 md:pt-20 sm:pt-10 
                    `}>
                    <div id="main-text-wrap" className={`
                        grid gap-4
                    `}>
                        <h1 className={`
                            2xl:text-7xl xl:text-7xl lg:text-7xl md:text-7xl sm:text-5xl
                            font-extrabold text-stone-300
                        `}>
                            Quantrack
                        </h1>
                        <h4 className={`
                            text-3xl sm:text-xl
                            font-semibold text-stone-300
                        `}>
                            The solution for non-profit volunteer tracking.
                            Free of cost.
                        </h4>
                    </div>
                </div>
            </section> 
        </>
    )
}

export default Home