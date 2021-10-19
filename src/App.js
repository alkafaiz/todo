// import { lazy, Suspense } from 'react';
import Header from './components/Header';
import { History } from './routes/history';
import { Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Wrapper from './components/Wrapper';
import Alert from './components/Alert';

// const Alert = lazy(() => import('./components/Alert'));

function App() {
    return (
        <div>
            <Header />
            <Router history={History}>
                <Wrapper>
                    <AppRoutes />
                </Wrapper>
            </Router>
            <Alert />
            {/* <Suspense fallback={<div>Preparing alert...</div>}>
            </Suspense> */}
            <div data-cy="modal-delete"></div>
            <div data-cy="modal-information"></div>
        </div>
    );
}

export default App;
