import * as React from 'react';
import {RouteProps} from 'react-router-dom'

export interface myRouteProps extends RouteProps{
    name: string;
    label: string;
};

const routes: myRouteProps[] = [
    {
        name: 'home',
        label: 'Home',
        path: '/',
        exact: true
    },
    {
        name: 'trabalhosRealizados',
        label: 'Trabalhos Realizados',
        path: '/trabalhos-realizados',
        exact: true
    },
    {
        name: 'empresas',
        label: 'Empresas',
        path: '/empresas',
        exact: true
    },
    {
        name: 'servicos',
        label: 'Serviços prestados',
        path: '/servicos',
        exact: true
    },
    {
        name: 'contato',
        label: 'Contato',
        path: '/contato',
        exact: true
    },
    {
        name: 'sobreNos',
        label: 'Sobre nós',
        path: '/sobre-nos',
        exact: true
    }
];

export default routes;