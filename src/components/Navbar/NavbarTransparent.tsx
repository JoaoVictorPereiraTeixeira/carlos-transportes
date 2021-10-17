import { Button, makeStyles, Theme, styled} from '@material-ui/core';
import useWindowDimensions from '../../utils/responsive/index'
import { ButtonProps } from '@mui/material/Button';
import routes, { myRouteProps } from '../../routes/index'
import { Link } from 'react-router-dom';
import { Menu } from './menu';
import { yellow, grey } from '@mui/material/colors';

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
        display:"flex",
        justifyContent:"right",
        padding:"20px"
    }
}));

export const NavbarTransparent = (props: Props) => {
    const classes = useStyles();
    let windowDimensions = useWindowDimensions();
    let menuRoutes = routes.filter(route => Object.keys(listRoutes).includes(route.name))

    const CotacaoButton = styled(Button)<ButtonProps>(({ theme }) => ({
        backgroundColor: yellow[400],
        '&:hover': {
          backgroundColor: yellow[700],
        },
        marginLeft:"50px",
        color: yellow[700]
      }));

    const MenuButton = styled(Button)<ButtonProps>(({ theme }) => ({
        marginLeft:"10px",
        '&:hover': {
          backgroundColor: grey[500]
        },
      }));

    return (
            <div className={classes.toolbar}>
                    {windowDimensions.width > 910 ? 
                        (
                            Object.keys(listRoutes).map(
                                (routeName, key) => {
                                    const route = menuRoutes.find(route => route.name === routeName) as myRouteProps;
                                    let button = routeName === "cotacao" ?
                                    (
                                        <Link style={{textDecoration:"none", color:"#ffffff "}} to={route.path as string}>
                                            <CotacaoButton key={key} variant="contained">{listRoutes[routeName]}</CotacaoButton>
                                        </Link>
                                    ) 
                                    : 
                                    (
                                        <Link style={{textDecoration:"none", color:"#ffffff "}} to={route.path as string}>
                                            <MenuButton key={key}>
                                                {listRoutes[routeName]}
                                            </MenuButton>
                                        </Link>
                                    )
                                    // component={Link} to={route.path as string}
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