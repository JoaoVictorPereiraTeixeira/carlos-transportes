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



const AdditionMenu = (props: Props) => {
    const classes = useStyles();
    let windowDimensions = useWindowDimensions();


    return (
        <div className={classes.additionMenu}>
            <TextField
                label={`${windowDimensions.width > 550 ? "Adicionar item" : "Add item"  }`}
                margin={'normal'}
                style = {{width:"25%"}}
            ></TextField>
            <Button variant="contained" size="large" color="primary">
                Adicionar
            </Button>
        </div>
    );
};

export default AdditionMenu