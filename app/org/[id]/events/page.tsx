import DashboardEventsWithLoading from "@/components/dashboard/events/DashboardEventsWithLoading";
import { NextPage } from "next";
import arr from "@/res/events";
import Event from "@/lib/types/Event";
import { ClockIcon, PencilIcon, TrashIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import OrganizationEventsLoading from "./loading";
import OrganizationEventsWithLoading from "@/components/organization/events/OrganizationEventsWithLoading";
import { fetchOrgEvents } from "../../../../lib/db/organization/fetchOrgData";
import { notFound } from "next/navigation";

let eventOps = [
    { icon: PencilIcon, label: "Edit" },
    { icon: TrashIcon, label: "Delete" }
];



const Page = async ({ params }: { params : {id: string }}) => {
    
    let events = await fetchOrgEvents(params.id);

    if (!events) return notFound()

    return (
        <>
            <OrganizationEventsWithLoading>
                <div className="flex flex-col h-full">
                    <main className="h-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                        {/* Left column (event schedule) */}
                        <section id="event-schedule-outer" className="h-128 scrollable w-full bg-zinc-800 rounded-md px-6 py-5">
                            <div id="event-schedule-inner" className="grid gap-4">
                                {events.map((event, i) => (
                                    <>
                                        {event ? 
                                        <div key={i} className="group/event relative transition-all duration-300 ease-in-out">
                                            <div
                                                className={`bg-zinc-750 rounded-md px-3 py-2 grid grid-cols-10 gap-10 transition-all duration-300 ease-in-out
                                                    ${i === 0 ? "group-hover/event:mb-2" : i === events.length - 1 ? "group-hover/event:mt-2" : "group-hover/event:my-2"}
                                                    hover:scale-y-105`}
                                            >
                                                <div id="left-col" className="col-span-3">
                                                    <Link href={`/event/${event.id}`}>
                                                        <p className="font-semibold underline underline-offset-1 text-white">
                                                            {event.name}
                                                        </p>
                                                    </Link>
                                                    <p className="text-zinc-400">{event.date}</p>
                                                </div>
                                                <div id="mid-col" className="flex flex-col col-span-3">
                                                    <div id="stats-wrap" className="w-max flex gap-1 text-zinc-300">
                                                        <div id="icon-wrap" className="w-4 mt-1 text-white">
                                                            <UserIcon strokeWidth={3} />
                                                        </div>
                                                        <p className="h-min">{event.curVolunteers}</p>
                                                        <span>/</span>
                                                        <p>{event.minVolunteers}</p>
                                                        <p>Volunteers</p>
                                                    </div>
                                                    <div id="time-wrap" className="flex w-max gap-1 text-zinc-300">
                                                        <div id="icon-wrap" className="w-4 flex gap-1">
                                                            <ClockIcon strokeWidth={3} className="text-white" />
                                                        </div>
                                                        <p className="h-min">{event.startTime}</p>
                                                        <span>-</span>
                                                        <p>{event.endTime}</p>
                                                    </div>
                                                </div>
                                                <div id="right-col" className="col-span-4 flex gap-2 justify-end py-2 text-zinc-300">
                                                    {eventOps.map((op, i) => (
                                                        <div
                                                            key={i}
                                                            id="icon-wrap"
                                                            className="group/icons relative h-min px-1 py-1 hover:scale-110 hover:bg-zinc-600 hover:text-white transition ease-in-out rounded-md"
                                                        >
                                                            <op.icon className="w-6 h-6 hover:cursor-pointer" />
                                                            <div className="absolute bottom-full left-1/3 ml-2 px-2 py-1 bg-zinc-900 text-white text-xs rounded-md opacity-0 invisible group-hover/icons:opacity-100 group-hover/icons:visible transition-all duration-200">
                                                                {op.label}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <>
                                        </>
                                    }
                                    </>
                                ))}
                            </div>
                        </section>
                        {/* Right Column (event action forms) */}
                    </main>
                </div>
            </OrganizationEventsWithLoading>
        </>
    );
};

export default Page;
