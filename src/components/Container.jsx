import React from 'react';

function Container({ children, className }) {
    return <div className="container mx-auto max-w-screen-lg px-6">{children}</div>;
}

export default Container;
