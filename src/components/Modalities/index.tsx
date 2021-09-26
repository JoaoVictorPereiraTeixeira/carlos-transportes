// @flow 
import {createStyles, makeStyles, Theme} from '@material-ui/core';

type Props = {
    title : string
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modalitie:{
      display: "inline",
      background: "rgba(156, 156, 155, 0.53)",
      padding:"8px",
      fontSize:"48px",
      color: "#FFFFFF",
      fontWeight: "normal"
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
          {props.title}
        </div>
      </div>
    );
};

export default Modalities