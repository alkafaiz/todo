import React, { useState } from 'react';
import useClickOutside from '../helper/useClickOutside';
import { useTransition, animated } from 'react-spring';
import { easeQuadIn, easeQuadOut } from 'd3-ease';

function ChevronIconDown() {
    return (
        <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
            <path fill="#6e6e6e" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24">
            <path fill="#6e6e6e" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
        </svg>
    );
}

const priorities = [
    { label: 'Very High', color: 'bg-red-500' },
    { label: 'High', color: 'bg-yellow-500' },
    { label: 'Medium', color: 'bg-green-500' },
    { label: 'Low', color: 'bg-blue-500' },
    { label: 'Very Low', color: 'bg-purple-500' },
];

function PrioritySelect({ value, ...props }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen((prev) => !prev);
    const onClose = () => setIsOpen(false);
    let menuRef = useClickOutside(onClose);

    let transitions = useTransition(isOpen, null, {
        from: { opacity: 0, transform: 'scale(0.95)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0.95)' },
        config: (item, state) => ({
            easing: state === 'leave' ? easeQuadIn : easeQuadOut,
            duration: state === 'leave' ? 75 : 100,
        }),
    });

    const onSelect = (prio) => {
        props.onChange(prio);
    };

    const getPriorityColor = (prio) => {
        const priority = priorities.find((priority) => priority.label === prio);
        return priority?.color || '';
    };

    return (
        <div ref={menuRef} className="relative">
            <button
                type="button"
                onClick={toggleOpen}
                className="hover:bg-gray-100 flex w-full items-center my-1 px-3 py-2 block border rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
                {!!value && <div className={`${getPriorityColor(value)} rounded-full w-3 h-3 mr-2`}></div>}
                <span>{value || 'Pilih priority'}</span>
                <div className="ml-auto">
                    <ChevronIconDown />
                </div>
            </button>
            {transitions.map(
                ({ item, key, props }) =>
                    item && (
                        <animated.div style={props} key={key} className="absolute mt-2 w-full ">
                            <div className=" bg-white block border rounded-md border-gray-300 shadow-sm">
                                {priorities.map((prio, index) => {
                                    const isSelected = prio.label === value;
                                    return (
                                        <div
                                            onClick={() => onSelect(prio.label)}
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
                        </animated.div>
                    )
            )}
        </div>
    );
}

const WrappedPrioritySelect = React.forwardRef((props, ref) => <PrioritySelect {...props} inputRef={ref} />);

export default WrappedPrioritySelect;
