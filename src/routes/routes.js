import { lazy, Suspense } from 'react';
import Dashboard from '../screens/Dashboard';

const ItemPage = lazy(() => import('../screens/Item'));

const Item = () => (
    <Suspense fallback={<div>Preparing page...</div>}>
        <ItemPage />
    </Suspense>
);

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
        exact: true,
    },
    {
        path: '/item/:id',
        name: 'todo-item',
        component: Item,
        exact: true,
    },
];

export default routes;
