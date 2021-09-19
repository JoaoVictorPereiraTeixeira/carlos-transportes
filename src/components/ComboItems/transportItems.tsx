import { Button, Container, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import useWindowDimensions from '../../utils/responsive/index'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Item from './item';

type Props = {
    values: string[]
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
        marginTop:"40px",
        paddingTop:"20px",
        width: "100%",
        background: "#F5F5F5",
        borderRadius:"4px",
        padding:"10px",
        height: "100px"
    },
    boxItems:{
        marginTop:"20px"
    }
  }),
);



const TransportItems = (props: Props) => {
    const classes = useStyles();
    let windowDimensions = useWindowDimensions();
    return (
        <Box className={classes.boxItems} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

            {
                props.values.length > 0 ? 
                    (
                        props.values.map(item =>  {
                            let showText = item.length >= 40 ? item.substring(0,40) + "..." : item

                            return (
                                <Grid item xs={windowDimensions.width > 1200 ? 4 : 12}>
                                    <Item item={item} showText={showText} />
                                </Grid>
                            )
                        })
                    )
                :
                (
                    <div className={classes.item}>
                        Nenhum item para transportar adicionado
                    </div>
                )
            }

            </Grid>
        </Box>       
    );
};

export default TransportItems