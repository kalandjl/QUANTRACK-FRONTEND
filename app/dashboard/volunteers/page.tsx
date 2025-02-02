import { chunkArray } from "@/lib/arr";
import Volunteer from "@/lib/types/Volunteer";
import { NextPage } from "next";
import example from "@/res/volunteers"
import DashboardVolunteersWithLoading from "@/components/dashboard/volunteers/DashboardVolunteersWithLoading";


const Page: NextPage = () => {

    let volunteers: Volunteer[] = example

    return (
        <>
            <DashboardVolunteersWithLoading>
                <div className="flex flex-col h-full">
                    <header className="shrink-0 h-16 flex items-center mb-10">
                        <h1 className="text-2xl md:text-3xl font-bold text-white">Volunteers</h1>
                    </header>
                    <main id="volunteers" className="grid h-full gap-10 grid-cols-4 pr-32">
                        {volunteers.map((volunteer, i) => (
                            <div key={i} id="volunteer" className="w-full h-full grid gap-4 hover:scale-105 hover:cursor-pointer transition ease-in-out">
                                <div id="volunteer-image" className="bg-zinc-800 h-64 rounded-lg">

                                </div>
                                <div id="volunteer-info" className="pl-2">
                                    <p className="font-bold">{volunteer.name}</p>
                                    <p className="text-gray-500">{volunteer.role}</p>
                                </div>
                            </div>  
                        ))}
                    </main>
                </div>
            </DashboardVolunteersWithLoading>
        </>
    )
}

export default Page