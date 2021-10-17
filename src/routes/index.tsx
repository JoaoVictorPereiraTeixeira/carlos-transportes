import CotacaoPage from '../pages/cotacao/PageForm';
import HomePage from '../pages/home/index'
import {RouteProps} from 'react-router-dom';
import SobreNosPage from '../pages/sobre-nos';
import ContatoPage from '../pages/contato'

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
        name: 'detalhesCaminhoes',
        label: 'Detalhes dos caminhões',
        path: '/detalhes-caminhoes',
        exact: true,
    },
    {
        name: 'empresas',
        label: 'Empresas',
        path: '/empresas',
        exact: true,
    },
    {
        name: 'home',
        label: 'Home',
        path: '/home',
        exact: true,
        component: HomePage

    },
    {
        name: 'contato',
        label: 'Contato',
        path: '/contato',
        exact: true,
        component: ContatoPage

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