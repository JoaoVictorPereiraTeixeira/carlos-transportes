import * as React from 'react';
import { makeStyles, Theme} from '@material-ui/core';
import { NavbarPages } from './NavbarPages';
import { useLocation } from 'react-router-dom'
import { NavbarTransparent } from './NavbarTransparent';

const listRoutes: any = {
    'home' : 'Home',
    'contato' : 'Contato',
    'sobreNos' : 'Sobre nós',
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


export const Navbar : React.FC = (props: Props) => {
    let location = useLocation();
    console.log(location.pathname)
    return (
        location.pathname == "/" ? <NavbarTransparent/> : <NavbarPages/> 
    )
};