import React from 'react';

function Button({ children, startIcon }) {
    return (
        <button className="flex items-center py-3 px-5 bg-blue-500 transition rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
            {startIcon}
            <span className={`text-white text-xl font-semibold ${!!startIcon ? 'ml-1' : ''}`}>{children}</span>
        </button>
    );
}

export default Button;
