import Header from './components/Header';
import { History } from './routes/history';
import { Router } from 'react-router-dom';
import Container from './components/Container';
import AppRoutes from './routes/AppRoutes';

function App() {
    return (
        <div>
            <Header />
            <Router history={History}>
                <Container>
                    <AppRoutes />
                </Container>
            </Router>
        </div>
    );
}

export default App;
