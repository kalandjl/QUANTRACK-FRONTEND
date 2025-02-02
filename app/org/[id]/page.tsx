import { fetchOrg } from "@/lib/db/organization/fetchOrgData";
import organizations from "@/res/organizations";
import { notFound } from "next/navigation";


const Page = async ({ params }: { params: { id: string } }) => {

    let data = await fetchOrg(params.id)

    if (!data) notFound()

    return (
        <>
            <div className="flex flex-col h-full">
                <p className="text-white">{data.description}</p>
                {/* Location, Ammount of volunteers, Date joined Quantrack */}
            </div>
        </>
    )
}

export default Page