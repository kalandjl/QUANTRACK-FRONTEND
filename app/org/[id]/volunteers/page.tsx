import OrganizationVolunteersWithLoading from "@/components/organization/volunteers/OrganizationVolunteersWithLoading";
import { fetchOrgVolunteers } from "@/lib/db/organization/fetchOrgData";
import { NextPage } from "next";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params : {id: string }}) => {

    let volunteers = await fetchOrgVolunteers(params.id);

    if (!volunteers) return notFound()

    return (
        <>
            <OrganizationVolunteersWithLoading>
                <div className="flex flex-col h-full">
                    <main id="volunteers" className="grid h-full gap-10 grid-cols-4 pr-32">
                        {volunteers.map((volunteer, i) => (
                            <>
                                {volunteer ? <div key={i} id="volunteer" className="w-full h-full grid gap-4 hover:scale-105 hover:cursor-pointer transition ease-in-out">
                                    <div id="volunteer-image" className="bg-zinc-800 h-64 rounded-lg">

                                    </div>
                                    <div id="volunteer-info" className="pl-2">
                                        <p className="font-bold">{volunteer.name}</p>
                                        <p className="text-gray-500">{volunteer.role}</p>
                                    </div>
                                </div> 
                                :
                                <></>
                                }  
                            </>
                        ))}
                    </main>
                </div>
            </OrganizationVolunteersWithLoading>
        </>
    )
}

export default Page