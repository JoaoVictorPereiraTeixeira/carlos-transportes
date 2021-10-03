// @flow 
import * as React from 'react';
import { AppBar, Button, makeStyles, Toolbar, Typography, Theme, IconButton, Icon, styled, ButtonProps} from '@material-ui/core';
import useWindowDimensions from '../../utils/responsive/index'
import routes, { myRouteProps } from '../../routes/index'
import logo from '../../static/img/logo.png'
import { Link } from 'react-router-dom';
import { Menu } from './menu';
import { yellow } from '@material-ui/core/colors';


const listRoutes: any = {
    'home' : 'Home',
    'contato' : 'Contato',
    'sobreNos' : 'Sobre nós',
    'detalhesCaminhoes' : 'Detalhes dos caminhoes',
    'cotacao' : 'Cotação'
}



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
        width: 130,
        [theme.breakpoints.up('sm')] : {
            width: 200
        }
    },
}));

export const NavbarPages = (props: Props) => {
    const classes = useStyles();

    const CotacaoButton = styled(Button)<ButtonProps>(({ theme }) => ({
        backgroundColor: yellow[400],
        '&:hover': {
          backgroundColor: yellow[700],
        },
        marginLeft:"50px"
      }));

    let windowDimensions = useWindowDimensions();
    var menuRoutes = routes.filter(route => Object.keys(listRoutes).includes(route.name))

    return (
        <AppBar position="static">
            <Toolbar variant='dense' className={classes.toolbar}>
                    <Typography className={classes.title}>
                        <Link to="/">
                            <img src={logo} alt="Carlos Transportes" className={classes.logo}/>
                        </Link>
                    </Typography>

                <>
                    {windowDimensions.width > 910 ? 
                        (
                            Object.keys(listRoutes).map(
                                (routeName, key) => {
                                    const route = menuRoutes.find(route => route.name === routeName) as myRouteProps;
                                    
                                    if(routeName == "cotacao"){
                                        return (
                                            <Link style={{textDecoration:"none", color:"#ffffff "}} to={route.path as string}>
                                                <CotacaoButton key={key} variant="contained">
                                                    {listRoutes[routeName]}
                                                </CotacaoButton>
                                            </Link>
                                        )
                                    } 

                                    return (
                                        <Button key={key} component={Link} to={route.path as string} color="inherit">{listRoutes[routeName]}</Button>
                                    )
                                }
                            )                        
                        ) 
                        : 
                        (
                            <Menu itemsToShow={listRoutes} />
                        )
                    }
                </>
            </Toolbar>
        </AppBar>  
    );
};