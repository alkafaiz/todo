// import { lazy, Suspense } from 'react';
import Dashboard from '../screens/Dashboard';
import Item from '../screens/Item';
// const ItemPage = lazy(() => import('../screens/Item'));

// const Item = () => (
//     <Suspense fallback={<div>Preparing page...</div>}>
//         <ItemPage />
//     </Suspense>
// );

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
