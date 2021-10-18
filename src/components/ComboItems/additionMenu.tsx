import React, {useContext, useState} from 'react';
import {DispatchContext} from '../../Context'
import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import useWindowDimensions from '../../utils/responsive/index'
import Toastr from '../toastr';


type Props = {
    
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    additionMenu: {
        display: "flex",
        [theme.breakpoints.down('sm')] : {
            flexDirection: "column"
        },
        alignItems: "center"
    }
  }),
);

export default function AdditionMenu(props: Props) {
    const classes = useStyles();
    let windowDimensions = useWindowDimensions();

    const {dispatch} = useContext(DispatchContext)
    const [itemToTransport, setItemToTransport] = useState('')

    const handleChange = (event : any) => {
        setItemToTransport(event.target.value);
    }

    const addItemToTransport = () => {
        if(itemToTransport.length > 0){
            dispatch({type: 'ADD_ITEM_TO_TRANSPORT', itemToTransport, quantity: 0})
            setItemToTransport('')
        } else {
            Toastr("WARNING","Preencha algum item para transportar, por favor")
        }
    }

    return (
        <div className={classes.additionMenu}>
            <TextField
                label={`${windowDimensions.width > 550 ? "Adicionar item" : "Add item"  }`}
                margin={'normal'}
                style = {{width:`${windowDimensions.width > 700 ? "25%" : "100%"  }`}}
                value={itemToTransport}
                onChange={handleChange}
            ></TextField>
            <Button variant="contained" size="large" color="primary" onClick={addItemToTransport}>
                Adicionar
            </Button>
        </div>
    );
};

