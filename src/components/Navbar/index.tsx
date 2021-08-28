import * as React from 'react';
import { AppBar, Button, makeStyles, Toolbar, Typography, Theme, IconButton, Icon} from '@material-ui/core';

import logo from '../../static/img/logo.png'

type Props = {
    
};

const useStyles = makeStyles((theme : Theme) => ({
    toolbar: {
        background: '#3F3F41',
    },
    title:{
        flexGrow: 1,
        textAlign:'left',
    },
    logo:{
        paddingTop:4,
        width: 100,
    },
    button:{
        fontSize:9,
    },
}));

export const Navbar : React.FC = (props: Props) => {
    const classes = useStyles();

    return (
        <AppBar>
            <Toolbar variant='dense' className={classes.toolbar}>
                <Typography className={classes.title}>
                    <img src={logo} alt="Carlos Transportes" className={classes.logo}/>
                </Typography>
                
                <Button color="inherit" className={classes.button}>Trabalhos realizados</Button>
                <Button color="inherit" className={classes.button}>Empresas</Button>
                <Button color="inherit" className={classes.button}>Serviços </Button>
                <Button color="inherit" className={classes.button}>Contato</Button>
                <Button color="inherit" className={classes.button}>Sobre nós</Button>
            </Toolbar>
        </AppBar>
    );
};