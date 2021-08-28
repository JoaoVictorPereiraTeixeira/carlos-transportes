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
        width: 200,
    }
}));

export const Navbar : React.FC = (props: Props) => {
    const classes = useStyles();

    return (
        <AppBar>
            <Toolbar variant='dense' className={classes.toolbar}>
                <Typography className={classes.title}>
                    <img src={logo} alt="Carlos Transportes" className={classes.logo}/>
                </Typography>
                
                <Button color="inherit">Trabalhos realizados</Button>
                <Button color="inherit">Empresas</Button>
                <Button color="inherit">Serviços </Button>
                <Button color="inherit">Contato</Button>
                <Button color="inherit">Sobre nós</Button>
            </Toolbar>
        </AppBar>
    );
};