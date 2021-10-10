import React, {createContext, useReducer} from 'react'
import useCombinedReducers from 'use-combined-reducers';
import {initialState as feedbackInitial, feedbackReducer } from './reducers/feedbackReducer';
import {initalState as transportItemsInitial, transportItemsReducer} from './reducers/transportItemsReducer'

interface IContextProps {
    state: any;
    dispatch: any;
}

export const DispatchContext = createContext({} as IContextProps)

export function ContextProvider(props: any){
    const [state, dispatch] = useCombinedReducers({
        itemsToTransport: useReducer(transportItemsReducer, transportItemsInitial),
        feedback: useReducer(feedbackReducer, feedbackInitial)
    });

    return (
        <DispatchContext.Provider value={{state, dispatch}}>
            {props.children}
        </DispatchContext.Provider>
    )
} 
