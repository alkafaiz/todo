import React from 'react';

function IconButton({ icon, onClick = () => {}, size = 'large', type = 'button', variant = 'default', ...props }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${size === 'small' ? 'p-1' : 'p-3'} ${
                variant === 'outlined' ? 'border' : ''
            } flex items-center transition rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
            {...props}
        >
            {icon}
        </button>
    );
}

export default IconButton;
