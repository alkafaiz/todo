import Dashboard from '../screens/Dashboard';
import Item from '../screens/Item';

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
        exact: true,
    },
    {
        path: '/item',
        name: 'todo-item',
        component: Item,
        exact: true,
    },
];

export default routes;
