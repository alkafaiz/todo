import React, { memo, useState } from 'react';
import useClickOutside from '../helper/useClickOutside';
import { PRIORITIES } from '../helper/constants';
import { getPriorityColor } from '../helper/utilities';
import CheckIcon from './CheckIcon';

function ChevronIconDown() {
    return (
        <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
            <path fill="#6e6e6e" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
    );
}

function PrioritySelect({ value, ...props }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen((prev) => !prev);
    const onClose = () => setIsOpen(false);
    let menuRef = useClickOutside(onClose);

    const onSelect = (prio) => {
        props.onChange(prio);
    };

    const getPriorityLabel = (prio) => {
        const priority = PRIORITIES.find((priority) => priority.value === prio);
        return priority.label;
    };

    return (
        <div ref={menuRef} className="relative">
            <button
                data-cy="modal-add-priority-dropdown"
                type="button"
                onClick={toggleOpen}
                className="hover:bg-gray-100 flex w-full items-center my-1 px-3 py-2 border rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
                {!!value && <div className={`${getPriorityColor(value)} rounded-full w-3 h-3 mr-2`}></div>}
                <span>{value ? getPriorityLabel(value) : 'Pilih priority'}</span>
                <div className="ml-auto">
                    <ChevronIconDown />
                </div>
            </button>
            {/* {isOpen && ( */}
            <div className={`${isOpen ? '' : 'hidden'} absolute mt-2 w-full z-10`}>
                <div className="bg-white block border rounded-md border-gray-300 shadow-sm">
                    {PRIORITIES.map((prio, index) => {
                        const isSelected = prio.value === value;
                        return (
                            <div
                                data-cy="modal-add-priority-item"
                                onClick={() => onSelect(prio.value)}
                                key={prio.label}
                                className={`flex items-center px-3 py-2 hover:bg-gray-100 ${
                                    index !== 0 ? 'border-t' : ''
                                }`}
                            >
                                <div className={`${prio.color} rounded-full w-3 h-3 mr-2`}></div>
                                <span>{prio.label}</span>
                                {isSelected && (
                                    <div className="ml-auto">
                                        <CheckIcon />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* )} */}
        </div>
    );
}

const WrappedPrioritySelect = React.forwardRef((props, ref) => <PrioritySelect {...props} inputRef={ref} />);

export default memo(WrappedPrioritySelect);
