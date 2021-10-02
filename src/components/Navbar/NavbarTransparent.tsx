import { AppBar, Button, makeStyles, Toolbar, Typography, Theme, IconButton, Icon} from '@material-ui/core';
import useWindowDimensions from '../../utils/responsive/index'
import routes, { myRouteProps } from '../../routes/index'
import logo from '../../static/img/logo.png'
import { Link } from 'react-router-dom';
import { Menu } from './menu';


const listRoutes: any = {
    'home' : 'Home',
    'contato' : 'Contato',
    'sobreNos' : 'Sobre nós',
    'cotacao' : 'Cotação'
}

const menuRoutes = routes.filter(route => Object.keys(listRoutes).includes(route.name))

type Props = {
    
};

const useStyles = makeStyles((theme : Theme) => ({
    toolbar: {
        display:"flex",
        justifyContent:"right",
        padding:"20px"
    }
}));

export const NavbarTransparent = (props: Props) => {
    const classes = useStyles();
    let windowDimensions = useWindowDimensions();

    return (
            <div className={classes.toolbar}>
                    {windowDimensions.width > 910 ? 
                        (
                            Object.keys(listRoutes).map(
                                (routeName, key) => {
                                    const route = menuRoutes.find(route => route.name === routeName) as myRouteProps;
                                    let button = routeName == "cotacao" ?
                                    (
                                        <Button key={key} variant="contained" component={Link} to={route.path as string} color="primary">{listRoutes[routeName]}</Button>) 
                                    : 
                                    (
                                        <Button key={key} component={Link} to={route.path as string} color="inherit">{listRoutes[routeName]}</Button>
                                    )
                                    return button
                                }                   
                            )
                        ) 
                        : 
                        (
                            <Menu itemsToShow={listRoutes} />
                        )
                    }  
            </div>
    );
};