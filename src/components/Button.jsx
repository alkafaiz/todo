import React from 'react';

function Button({ children, onClick, startIcon, variant = 'primary', size = 'large', type = 'button', ...props }) {
    const getVariantClassName = () => {
        switch (variant) {
            case 'primary':
                return 'bg-blue-500 hover:bg-blue-700 focus:ring-blue-600';

            case 'default':
                return 'bg-gray-100 hover:bg-gray-200 focus:ring-gray-600';

            case 'danger':
                return 'bg-red-500 hover:bg-red-700 focus:ring-red-600';

            default:
                return 'bg-blue-500 hover:bg-blue-700 focus:ring-blue-600';
        }
    };

    const getVariantLabelClassName = () => {
        switch (variant) {
            case 'primary':
                return 'text-white';

            case 'default':
                return 'text-gray-600';

            default:
                return 'text-white';
        }
    };

    const getSizeClassName = () => {
        switch (size) {
            case 'large':
                return 'py-3 px-5';

            case 'medium':
                return 'py-2 px-4';

            default:
                return 'py-3 px-5';
        }
    };

    const getFontSizeClassName = () => {
        switch (size) {
            case 'large':
                return 'text-xl';

            case 'medium':
                return 'text-lg';

            default:
                return 'text-xl';
        }
    };
    return (
        <button
            type={type}
            onClick={onClick}
            className={`flex items-center ${getSizeClassName()} transition rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-50 ${getVariantClassName()}`}
            {...props}
        >
            {startIcon}
            <span
                className={`${getVariantLabelClassName()} ${getFontSizeClassName()} font-semibold ${
                    !!startIcon ? 'ml-1' : ''
                }`}
            >
                {children}
            </span>
        </button>
    );
}

export default Button;
