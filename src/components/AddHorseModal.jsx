import React, { useState } from 'react';

const AddHorseModal = ({ isOpen, onClose, onSave }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [membership, setMembership] = useState('');

  const steps = [
    { id: 1, name: 'Basic Info' },
    { id: 2, name: 'Organizations' },
    { id: 3, name: 'Documentations' },
    { id: 4, name: 'Owner Info' },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSave();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSave = () => {
    // Here you would collect all form data and pass it to onSave
    onSave();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-2xl overflow-hidden shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-barn-blue">Add Horse</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-barn-blue transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Steps */}
        <div className="bg-gray-50 py-4 px-5">
          <div className="flex flex-wrap">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center mb-2">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    currentStep >= step.id ? 'bg-barn-blue text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step.id}
                </div>
                <span className={`ml-2 mr-4 text-sm font-medium ${currentStep >= step.id ? 'text-barn-blue' : 'text-gray-500'}`}>
                  {step.name}
                </span>
                {step.id < steps.length && (
                  <div className={`border-t w-8 mx-2 ${currentStep > step.id ? 'border-barn-blue' : 'border-gray-300'}`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {currentStep === 1 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-barn-blue">Basic Info</h3>
              {/* Basic Info Form Fields would go here */}
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-barn-blue">USEF Info</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">USEF #</label>
                  <input 
                    type="text" 
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-barn-blue/30 focus:border-barn-blue transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Membership</label>
                  <div className="relative">
                    <select 
                      className="appearance-none w-full p-2.5 border border-gray-300 rounded-lg pr-8 focus:ring-2 focus:ring-barn-blue/30 focus:border-barn-blue transition-colors"
                      value={membership}
                      onChange={(e) => setMembership(e.target.value)}
                    >
                      <option value="">Select Membership</option>
                      <option value="basic">Basic</option>
                      <option value="premium">Premium</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Horse Card Link</label>
                  <input 
                    type="text" 
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-barn-blue/30 focus:border-barn-blue transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Horse Results Link</label>
                  <input 
                    type="text" 
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-barn-blue/30 focus:border-barn-blue transition-colors"
                  />
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4 text-barn-blue">Organizations</h3>
                <button 
                  className="flex items-center text-barn-blue hover:text-blue-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Add Organization
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-barn-blue">Documentations</h3>
              {/* Documentations Form Fields would go here */}
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-barn-blue">Owner Info</h3>
              {/* Owner Info Form Fields would go here */}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between p-5 border-t border-gray-100 bg-gray-50">
          <button 
            onClick={handleBack}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors flex items-center"
            disabled={currentStep === 1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </button>
          <button 
            onClick={handleNext}
            className="px-4 py-2 bg-barn-blue text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
          >
            {currentStep === steps.length ? 'Save' : (
              <>
                Next
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddHorseModal; 