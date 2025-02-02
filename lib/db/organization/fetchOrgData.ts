import Event from "@/lib/types/Event"
import Volunteer from "@/lib/types/Volunteer"
import events from "@/res/events"
import organizations from "@/res/organizations"
import volunteers from "@/res/volunteers"

export const fetchOrg = async (id: string) => {

    return organizations.find(org => org.id === id)
}

export const fetchOrgEvents = async (id: string) => {

    let orgEventIds = organizations.find(org => org.id === id)?.events

    if (!orgEventIds) return undefined

    let orgEvents: (Event | undefined)[] = orgEventIds?.map(id => events.find(event => event?.id === id))

    return orgEvents
}

export const fetchOrgVolunteers = async (id: string) => {

    let orgVolunteerIds = organizations.find(org => org.id === id)?.volunteers

    if (!orgVolunteerIds) return undefined

    let orgVolunteers: (Volunteer | undefined)[] = orgVolunteerIds?.map(id => volunteers.find(volunteer => volunteer?.id === id))

    return orgVolunteers
}
