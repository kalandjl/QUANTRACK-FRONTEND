import { FC } from "react";
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

interface Props {
    open: boolean
    fullscreen?: boolean
    params?: any
}

const Loader: FC<Props> = (props) => {

    const { open, fullscreen, params} = props

    return (
        <>
            {
                open ?
                    fullscreen ?
                    <Backdrop
                        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                        open={open}
                    >
                        <CircularProgress color="#fff" {...params} />
                    </Backdrop>
                    :
                    <CircularProgress sx={(theme) => ({ color: params.color ?? "inherit", zIndex: theme.zIndex.drawer + 1 })} />
                : 
                <></>
            }       
        </>
    )
}

export default Loader