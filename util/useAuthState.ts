import UserObj from "@/lib/types/userObj"
import { useEffect, useState } from "react"


interface Props {

}


// Fetch state of user from server, return as reactive state
const useAuthState = (props: Props): [UserObj | undefined, boolean] => {

    // While fetching
    let [loading, setLoading] = useState<boolean>(true)
    let [user, setUser] = useState<UserObj | undefined>(undefined);


    useEffect(() => {

        // Fetching code HERE

        let res = {}

        setUser(res)
    }, [props])

    setLoading(false)

    return [user, loading]
}

export default useAuthState