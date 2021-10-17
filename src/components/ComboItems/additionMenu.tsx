import React, {useContext, useEffect, useState} from 'react';
import {DispatchContext} from '../../Context'
import { Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import useWindowDimensions from '../../utils/responsive/index'


type Props = {
    
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    additionMenu: {
        display: "flex",
        alignItems: "center",
    }
  }),
);

export default function AdditionMenu(props: Props) {
    const classes = useStyles();
    let windowDimensions = useWindowDimensions();

    const {state, dispatch} = useContext(DispatchContext)
    const [itemToTransport, setItemToTransport] = useState('')

    const handleChange = (event : any) => {
        setItemToTransport(event.target.value);
    }

    const addItemToTransport = () => {
        if(itemToTransport.length > 0){
            dispatch({type: 'ADD_ITEM_TO_TRANSPORT', itemToTransport, quantity: 0})
            setItemToTransport('')
        }
    }

    return (
        <div className={classes.additionMenu}>
            <TextField
                label={`${windowDimensions.width > 550 ? "Adicionar item" : "Add item"  }`}
                margin={'normal'}
                style = {{width:"25%"}}
                value={itemToTransport}
                onChange={handleChange}
            ></TextField>
            <Button variant="contained" size="large" color="primary" onClick={addItemToTransport}>
                Adicionar
            </Button>
        </div>
    );
};

