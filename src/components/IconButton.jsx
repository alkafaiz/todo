import React from 'react';

function IconButton({ icon, onClick = () => {}, size = 'large', type = 'button' }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${
                size === 'small' ? 'p-1' : 'p-3'
            } flex items-center transition rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
        >
            {icon}
        </button>
    );
}

export default IconButton;
