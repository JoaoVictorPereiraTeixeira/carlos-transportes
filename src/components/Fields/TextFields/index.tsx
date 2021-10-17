import { TextField } from '@material-ui/core';
import * as React from 'react';

export default function CustomField(props: any) {
    let [originCity, setOriginCity] = React.useState('')
    console.log("dentro originCity")
    console.log(originCity)

    if(props.value != undefined && originCity != props.value){
        setOriginCity = props.value
    }

    return (
        <TextField
           {...props}
           value={originCity}
           onChange={(e: any) => {
            props.onChangeFunction(e)
            setOriginCity(e.target.value)
          }}
        />
    );
};