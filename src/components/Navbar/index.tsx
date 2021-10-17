import * as React from 'react';
import { NavbarPages } from './NavbarPages';
import { useLocation } from 'react-router-dom'
import { NavbarTransparent } from './NavbarTransparent';

type Props = {
    
};

export const Navbar : React.FC = (props: Props) => {
    let location = useLocation();
    console.log(location.pathname)
    return (
        location.pathname === "/" ? <NavbarTransparent/> : <NavbarPages/> 
    )
};