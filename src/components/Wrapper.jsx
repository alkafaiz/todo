import React from 'react';
import Container from './Container';

function Wrapper({ children }) {
    return (
        <div>
            <Container>{children}</Container>
        </div>
    );
}

export default Wrapper;
