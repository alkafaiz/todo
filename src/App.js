import Header from './components/Header';
import { History } from './routes/history';
import { Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Wrapper from './components/Wrapper';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <div>
            <Header />
            <Router history={History}>
                <Wrapper>
                    <AppRoutes />
                </Wrapper>
            </Router>
            <Toaster />
        </div>
    );
}

export default App;
