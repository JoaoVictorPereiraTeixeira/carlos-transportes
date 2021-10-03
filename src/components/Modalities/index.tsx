// @flow 
import {createStyles, makeStyles, Theme} from '@material-ui/core';
import { Link } from 'react-router-dom';

type Props = {
    title : string
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modalitie:{
      display: "inline",
      background: "#A59720",
      transition:"0.5s",
      '&:hover': {
        background: "#F5E233",
      },
      cursor:"pointer",
      padding:"8px",
      borderRadius:"8px",
      fontSize:"48px",
      color: "#FFFFFF",
      fontWeight: "normal",
    },
    container:{
      marginBottom: "10px"
    }
  }),
);


const Modalities = (props: Props) => {
    const classes = useStyles();
    return (
      <div className={classes.container}>
        <div className={classes.modalitie}>
          
          <Link style={{textDecoration:"none", color:"#ffffff "}} to="/cotacao">{props.title}</Link>
        </div>
      </div>
    );
};

export default Modalities