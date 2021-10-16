import Header from './components/Header';
import { History } from './routes/history';
import { Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Wrapper from './components/Wrapper';

function App() {
    return (
        <div>
            <Header />
            <Router history={History}>
                <Wrapper>
                    <AppRoutes />
                </Wrapper>
            </Router>
        </div>
    );
}

export default App;
