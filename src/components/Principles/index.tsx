// @flow 
import { Box } from '@mui/system';
import {Container, createStyles, makeStyles, Theme } from '@material-ui/core';
import Principle from './principle';
type Props = {
    
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    principles:{
        display:"flex",
        width: "100%"
    }
  }),
);

const Principles = (props: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.principles}>
            <Principle/>
            <Principle/>         
            <Principle/>         
        </div>

    );
};

export default Principles