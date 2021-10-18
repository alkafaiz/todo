import { useEffect, useRef } from 'react';

function useClickOutside(handler) {
    let domNode = useRef();

    useEffect(() => {
        let preHandler = (event) => {
            if (!!domNode.current && !domNode.current.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener('mousedown', preHandler);

        return () => {
            document.removeEventListener('mousedown', preHandler);
        };
        // eslint-disable-next-line
    }, []);

    return domNode;
}

export default useClickOutside;
