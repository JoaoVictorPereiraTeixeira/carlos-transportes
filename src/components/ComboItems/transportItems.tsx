import { createStyles, makeStyles, Theme } from '@material-ui/core';
import {useContext} from 'react';
import {DispatchContext} from '../../Context'
import useWindowDimensions from '../../utils/responsive/index'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Item from './item';

type Props = {
    
};

type ItemToTransport = {
    item: string;
    quantity: number;
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
    const {state} = useContext(DispatchContext)

    const classes = useStyles();
    let windowDimensions = useWindowDimensions();

    return (
        <Box className={classes.boxItems} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            
            {
                state.itemsToTransport.length > 0 ? 
                    (
                        state.itemsToTransport.map((itemToTransport: ItemToTransport) =>  {
                            let showText = itemToTransport.item.length >= 40 ? itemToTransport.item.substring(0,40) + "..." : itemToTransport.item

                            return (
                                <Grid item xs={windowDimensions.width > 1200 ? 4 : 12}>
                                    <Item item={itemToTransport.item} quantity={itemToTransport.quantity} originalText={itemToTransport.item} showText={showText} />
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