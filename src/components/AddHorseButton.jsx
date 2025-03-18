import React, { useState } from 'react';
import AddHorseModal from './AddHorseModal';

const AddHorseButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveHorse = () => {
    // Here you would handle saving the horse data
    // For now, we'll just close the modal
    setIsModalOpen(false);
  };

  return (
    <>
      <button 
        onClick={handleOpenModal}
        className="px-4 py-2.5 bg-barn-blue text-white rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors shadow-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
        <span>Add a Horse</span>
      </button>
      
      <AddHorseModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        onSave={handleSaveHorse}
      />
    </>
  );
};

export default AddHorseButton; 