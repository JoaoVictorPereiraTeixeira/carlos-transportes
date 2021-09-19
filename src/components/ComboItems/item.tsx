import { Button, Container, createStyles, IconButton, makeStyles, Theme, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { containerClasses } from '@mui/material';
import {GrFormSubtract} from "react-icons/gr"
import {IoMdAdd} from "react-icons/io"


type Props = {
    item: string,
    showText: string
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
    },
    inputQuantity:{
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

    return (
        <div className={classes.transportItem}>
          <div className={classes.item}>
            <p>{props.showText}</p>
          </div>
          <div className={classes.inputQuantity}>
            <IconButton>
              <GrFormSubtract/>
            </IconButton>
            
            <TextField id="outlined-basic" variant="outlined" size="small" style={{width:"60px"}}/>
            
            <IconButton>
              <IoMdAdd/>
            </IconButton>
          </div>
        </div>
    );
};

export default TransportItem