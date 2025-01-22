import UserObj from "@/lib/types/UserObj"
import { useEffect, useState } from "react"


interface Props {

}


// Fetch state of user from server, return as reactive state
const useAuthState = (props: Props): [UserObj | undefined, boolean] => {

    let [user, setUser] = useState<UserObj | undefined>(undefined)
    let [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {

        // While fetching
        setLoading(true)

        // Asynchornous fetching 
        const doFetch = async (): Promise<UserObj | undefined> => {

            // Example auth fetching code
            // fetch('http://localhost:4000/auth/get-user', {
            //     method: "POST",
            //     headers: {
            //         "Authorization": `Bearer ${accessToken}`,
            //         "Content-Type": "application/json"
            //     }
            // })
            // .then(r => r.json())
            // .then(data => setUser(data))
            // .catch(e => {
            //     console.error(e);
            //     setUser(undefined);  // Handle error by resetting the user
            // }).finally(() => {
            //     setLoading(false) // Stop loading once the fetch completes
            // })

            return undefined
        }

        doFetch()
            .then((res) => setUser(res))
            .catch((e) => {
                console.error(e)
                setUser(undefined) // Reset user on error
            })
            .finally(() => setLoading(false))
        
    }, []) // Re-run the effect when props change

    return [user, loading]
}

export default useAuthState