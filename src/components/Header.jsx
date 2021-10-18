import React from 'react';
import Container from './Container';

function Header() {
    return (
        <header className="py-6 bg-blue-500 text-white font-bold">
            <Container>
                <h1 data-cy="header-title" className="text-4xl">
                    TO DO LIST APP
                </h1>
            </Container>
        </header>
    );
}

export default Header;
