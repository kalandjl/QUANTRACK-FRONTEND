import { NextPage } from "next";


const OrganizationEventsLoading: NextPage = () => {

    return (
        <>
            <div className="animate-pulse">
                {/* Header skeleton */}
                <div className="mb-10">
                    <div className="h-8 w-48 bg-zinc-800 rounded-lg"></div>
                </div>
            </div>
        </>
    )
}

export default OrganizationEventsLoading