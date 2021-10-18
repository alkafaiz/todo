import React from 'react';

function SwapIcon({ size = '24px' }) {
    return (
        <svg style={{ width: size, height: size }} viewBox="0 0 24 24">
            <path fill="#a3a3a3" d="M9,3L5,7H8V14H10V7H13M16,17V10H14V17H11L15,21L19,17H16Z" />
        </svg>
    );
}

export default SwapIcon;
