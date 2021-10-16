import React from 'react';
import Container from './Container';

function Wrapper({ children }) {
    return (
        <div className="bg-gray-50">
            <Container>{children}</Container>
        </div>
    );
}

export default Wrapper;
