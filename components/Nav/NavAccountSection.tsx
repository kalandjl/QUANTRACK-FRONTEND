"use client"

import useAuthState from "@/util/useAuthState";
import { FC } from "react";
import Loader from "../Loader";
import Link from "next/link";

interface Props {

}

const NavAccountSection: FC<Props> = (props) => {

    let [ user, loading ] = useAuthState({})
    
    return (
        <>
            <section id="account-wrap" className="min-w-20">
                {/* Depending on auth state */}
                {user ? 
                <>
                    {/* Account dropdown */}
                    <button className="px-4 py-2 text-stone-300 hover:text-stone-400">
                        Account
                    </button>
                    {/* Signout button */}
                    <button className="px-4 py-2 text-stone-300 hover:text-stone-400">
                        Sign Out
                    </button>
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
                        <Link 
                            href="/signin"
                            className="px-4 py-2 text-stone-300 hover:text-stone-400 font-semibold"
                        >
                            Sign In
                        </Link>
                    </>
                    }
                </>
                }
            </section>
        </>
    )
}

export default NavAccountSection