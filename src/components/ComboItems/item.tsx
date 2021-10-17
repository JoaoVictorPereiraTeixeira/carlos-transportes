import { Button, Container, createStyles, IconButton, makeStyles, Theme, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React, {useContext, useEffect, useState} from 'react';
import {DispatchContext} from '../../Context'
import { containerClasses } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {GrFormSubtract} from "react-icons/gr"
import {IoMdAdd} from "react-icons/io"


type Props = {
    item: string,
    showText: string,
    originalText: string
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    transportItem:{
      display: "flex",
      alignItems: "center",
      width: "100%",
      background: "#F5F5F5",
      borderRadius:"4px",
      padding:"10px",
      height: "70px",
      "&:hover": {
        background: "#E4E2E2",
      }
    },
    containerQuantity:{
      display: "flex",
      alignItems: "center",
      marginLeft: "5%"
    },
    item:{
      width:"100%"
    }
  }),
);



const TransportItem = (props: Props) => {
    const classes = useStyles();
    const {state, dispatch} = useContext(DispatchContext)
    let [quantity, setQuantity] = useState<number>(0)

    const add = () => {
      setQuantity(quantity + 1)
      dispatch({type: 'CHANGE_QUANTITY_ITEM_TRANSPORT', itemToTransport: props.originalText, quantity: quantity + 1})
    }

    const decrease = () => {
      if(quantity > 0){
        setQuantity(quantity - 1)
        dispatch({type: 'CHANGE_QUANTITY_ITEM_TRANSPORT', itemToTransport: props.originalText,  quantity: quantity - 1})
      }
    }

    const handleChangeIncrease =  (event : any) => {
      let value = Number(event.target.value)
      if(Number.isInteger(value)){
        setQuantity(value);
        dispatch({type: 'CHANGE_QUANTITY_ITEM_TRANSPORT', itemToTransport: props.originalText, quantity})
      }
    }

    const handleDeleteAction =  (event : any) => {
        dispatch({type: 'DELETE_ITEM_TRANSPORT', itemToDelete: props.originalText, quantity})
    }

    return (
        <div className={classes.transportItem}>
           <IconButton onClick={handleDeleteAction}>
            <DeleteOutlineOutlinedIcon/>
          </IconButton>
          <div className={classes.item}>
            <p>{props.showText}</p>
          </div>
          <div className={classes.containerQuantity}>
            <IconButton onClick={decrease}>
              <GrFormSubtract/>
            </IconButton>
            
            <TextField id="outlined-basic" variant="outlined" size="small" style={{width:"60px"}} value={quantity} onChange={handleChangeIncrease}/>
            
            <IconButton onClick={add}>
              <IoMdAdd/>
            </IconButton>
          </div>
        </div>
    );
};

export default TransportItem