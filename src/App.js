import Header from './components/Header';
import { History } from './routes/history';
import { Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Wrapper from './components/Wrapper';
import Alert from './components/Alert';

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
            <div data-cy="modal-delete"></div>
            <div data-cy="modal-information"></div>
        </div>
    );
}

export default App;
