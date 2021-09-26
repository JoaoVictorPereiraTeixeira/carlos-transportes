import * as React from 'react';
import CotacaoPage from '../pages/cotacao/PageForm';
import HomePage from '../pages/home/index'
import {RouteProps} from 'react-router-dom';
import SobreNosPage from '../pages/sobre-nos';

export interface myRouteProps extends RouteProps{
    name: string;
    label: string;
};

const routes: myRouteProps[] = [
    {
        name: 'home',
        label: 'Home',
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        name: 'cotacao',
        label: 'Cotação',
        path: '/cotacao',
        exact: true,
        component: CotacaoPage
    },
    {
        name: 'trabalhosRealizados',
        label: 'Trabalhos Realizados',
        path: '/trabalhos-realizados',
        exact: true,
    },
    {
        name: 'empresas',
        label: 'Empresas',
        path: '/empresas',
        exact: true,
    },
    {
        name: 'servicos',
        label: 'Serviços prestados',
        path: '/servicos',
        exact: true,
    },
    {
        name: 'contato',
        label: 'Contato',
        path: '/contato',
        exact: true,
    },
    {
        name: 'sobreNos',
        label: 'Sobre nós',
        path: '/sobre-nos',
        exact: true,
        component: SobreNosPage
    }
];

export default routes;