import React, { useState } from 'react';
import IconButton from './IconButton';
import SwapIcon from './SwapIcon';
import useClickOutside from '../helper/useClickOutside';
import { ORDERS, SORT_AZ, SORT_TERBARU, SORT_TERLAMA, SORT_ZA } from '../helper/constants';
import CheckIcon from './CheckIcon';
import { useRefreshTodo } from '../helper/TodoContext';
import SortAscIcon from './SortAscIcon';
import SortDescIcon from './SortDescIcon';
import SortAlpaAscIcon from './SortAlpaAscIcon';
import SortAlpaDescIcon from './SortAlpaDescIcon';

function SortTodoItems() {
    const [isOpen, setIsOpen] = useState(false);
    const [sortBy, setSortBy] = useState(SORT_TERBARU);
    const toggleOpen = () => setIsOpen((prev) => !prev);
    const onClose = () => setIsOpen(false);
    let menuRef = useClickOutside(onClose);
    const { sort } = useRefreshTodo();

    function getSortIcon(sorting) {
        switch (sorting) {
            case SORT_TERBARU:
                return <SortAscIcon />;
            case SORT_TERLAMA:
                return <SortDescIcon />;
            case SORT_AZ:
                return <SortAlpaAscIcon />;
            case SORT_ZA:
                return <SortAlpaDescIcon />;

            default:
                return <SwapIcon />;
        }
    }

    const onSelect = (value) => {
        setSortBy(value);
        sort(value);
        onClose();
    };

    return (
        <div ref={menuRef} className="mr-4 ">
            <IconButton
                data-cy="todo-sort-button"
                onClick={toggleOpen}
                variant="outlined"
                icon={<SwapIcon size="28px" />}
            />
            {isOpen && (
                <div className="absolute mt-2 ">
                    <div
                        data-cy="sort-parent"
                        className="bg-white block border rounded-md border-gray-300 w-56 shadow-sm"
                    >
                        {ORDERS.map((order, index) => {
                            const isSelected = order.value === sortBy;
                            return (
                                <button key={index} data-cy="sort-selection" onClick={() => onSelect(order.value)}>
                                    <div
                                        {...(isSelected && { 'data-cy': 'sort-selection-selected' })}
                                        className={`flex items-center px-3 py-2 hover:bg-gray-100 w-56 ${
                                            index !== 0 ? 'border-t' : ''
                                        }`}
                                    >
                                        <div data-cy="sort-selection-icon" className={`mr-2`}>
                                            {getSortIcon(order.value)}
                                        </div>
                                        <span data-cy="sort-selection-title">{order.label}</span>
                                        {isSelected && (
                                            <div className="ml-auto">
                                                <CheckIcon />
                                            </div>
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default SortTodoItems;
