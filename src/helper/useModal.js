import { useState } from 'react';

function useModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return { isModalOpen, handleOpenModal, handleCloseModal };
}

export default useModal;
