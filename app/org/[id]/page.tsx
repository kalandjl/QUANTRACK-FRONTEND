import organizations from "@/res/organizations";
import { NextPage } from "next";
import { notFound } from "next/navigation";


// Fetch data from database
async function getOrgData(id: string) {

    return organizations.find(org => org.id === id)

    // Use fetch code when backend is up
    // const res = await fetch(`https://your-api.com/org/${id}`, {
    //     cache: "no-store", 
    // })
  
    // if (!res.ok) {
    //   throw new Error("Failed to fetch data")
    // }
  
    // return res.json()
}

const Page = async ({ params }: { params: { id: string } }) => {

    
    const data = await getOrgData(params.id);
    
    if (!data) return notFound()


    return (
        <>
            <div className="flex flex-col h-full">

                <div id="header">
                    <header className="shrink-0 h-16 flex items-center">
                        <h1 className="text-2xl md:text-3xl font-bold text-white">{data.name}</h1> 
                    </header>
                    <p className="text-white">
                        {data.description}
                    </p>
                </div>


            </div>
        </>
    )
}

export default Page