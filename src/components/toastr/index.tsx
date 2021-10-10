
import * as React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {useContext, useEffect, useState} from 'react';

import {DispatchContext} from '../../Context'
import 'react-toastify/dist/ReactToastify.css';

type Props = {
    
};

const notifySuccess = (message: string) => toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

const notifyError = (message: string) => toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

const notifyWarning = (message: string) => toast.warning(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});


export default function Toastr(type : string, message : string){
    // const {state} = useContext(DispatchContext)
    switch(type){
        case "SUCCESS":
            notifySuccess(message)
            break;
        case "WARNING":
            notifyWarning(message)
            break;
        case "ERROR":
            notifyError(message)
            break;
    }
}


// export function Toastr(props: Props){
//     const notifySuccess = () => toast.success('🦄 Wow so easy!', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//     });

//     const notifyError = () => toast.error('🦄 Wow so easy!', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//     });

//     return (
//         <div>
//             <button onClick={notifySuccess}>Notify!</button>
//         </div>
//     );
// };
