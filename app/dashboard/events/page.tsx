import DashboardEventsWithLoading from "@/components/dashboard/events/DashboardEventsWithLoading";
import { NextPage } from "next";
import arr from "@/res/events.json"
import Event from "@/lib/types/Event";

const Page: NextPage = () => {

    let events: Event[] = arr

    return (
        <>
            <DashboardEventsWithLoading>
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <header className="shrink-0 h-16 flex items-center mb-10">
                        <h1 className="text-2xl md:text-3xl font-bold text-white">Events</h1>
                    </header>
                    <main className="h-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 overflow-y-auto">
                        {/* Left column (event schedule) */}
                        <div id="event-schedule" className="h-64 w-full bg-zinc-800 rounded-md">
                            
                        </div>  
                        {/* Right Column (event action forms) */}
                    </main>
                </div>
            </DashboardEventsWithLoading>
        </>
    )
}

export default Page