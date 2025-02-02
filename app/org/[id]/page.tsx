import { notFound } from "next/navigation";

const Page = () => {

    let data = {}

    if (!data) notFound()

    return (
        <>
            <div className="flex flex-col h-full">
                <div id="header">
                <header className="shrink-0 h-16 flex items-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-300">
                    {/* <span className="italic text-white">{`"${data.name}"`}</span> */}
                    </h1>
                </header>
                {/* <p className="text-white">{data.description}</p> */}
                </div>
            </div>
        </>
    )
}

export default Page