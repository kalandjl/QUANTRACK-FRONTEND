"use client"

import useAuthState from "@/util/useAuthState";
import { FC } from "react";
import Loader from "../Loader";

interface Props {

}

const NavAccountSection: FC<Props> = (props) => {

    let [ user, loading ] = useAuthState({})
    
    return (
        <>
            <section id="account-wrap">
                {/* Depending on auth state */}
                {user ? 
                <>
                    {/* Account dropdown */}
                    {/* Signout button */}
                </> 
                : 
                <>
                    {
                    loading ? 
                    <>
                        <Loader open={loading} fullscreen={false} params={{color: "#fff"}}/>
                    </>
                    :
                    <>
                        {/* Login & Signup */}
                    </>
                    }
                </>
                }
            </section>
        </>
    )
}

export default NavAccountSection