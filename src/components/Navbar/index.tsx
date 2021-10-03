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



export const Navbar : React.FC = (props: Props) => {
    let location = useLocation();
    console.log(location.pathname)
    return (
        location.pathname == "/" ? <NavbarTransparent/> : <NavbarPages/> 
    )
};