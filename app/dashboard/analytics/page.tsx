import { chunkArray } from "@/lib/arr";
import Volunteer from "@/lib/types/Volunteer";
import { NextPage } from "next";
import example from "@/res/volunteers.json"
import DashboardVolunteersWithLoading from "@/components/dashboard/volunteers/DashboardVolunteersWithLoading";
import DashboardAnalyticsWithLoading from "@/components/dashboard/analytics/DashboardAnalyticsWithLoading";
import RevenueChart from "@/components/dashboard/RevenueChart";
import VolunteerHoursChart from "@/components/dashboard/VolunteerHoursChart";


const Page: NextPage = () => {

    let volunteers: Volunteer[] = example

    return (
        <>
            <DashboardAnalyticsWithLoading>
                <div className="flex flex-col h-full">
                    <header className="shrink-0 h-16 flex items-center mb-10">
                        <h1 className="text-2xl md:text-3xl font-bold text-white">Analytics</h1>
                    </header>
                    <main id="analytics" className="h-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 overflow-y-auto">
                        <div className="flex flex-col gap-4 md:gap-6">
                            <div className="h-[300px] md:flex-1"> {/* Fixed height on mobile, flex on desktop */}
                                <VolunteerHoursChart />
                            </div>
                            <div className="h-[300px] md:flex-1"> {/* Fixed height on mobile, flex on desktop */}
                                <RevenueChart />
                            </div>
                        </div>
                        <div className=""></div>
                        
                    </main>
                </div>
            </DashboardAnalyticsWithLoading>
        </>
    )
}

export default Page