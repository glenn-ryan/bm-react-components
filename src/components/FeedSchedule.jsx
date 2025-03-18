import React from 'react';

const FeedSchedule = () => {
  // Mock data for the feed schedule
  const scheduleData = {
    feed: [
      { 
        time: 'AM',
        items: [
          { type: 'Everyday', value: '2 Scoop Senior Purina' },
          { days: ['Mo', 'We', 'Fr'], value: '2 Flake 80/20 Alfalfa Timothy 10/31/23' }
        ]
      },
      { 
        time: 'PM',
        items: [
          { type: 'Everyday', value: '2 Scoop Senior Purina' },
          { days: ['Mo', 'We', 'Fr'], value: '2 Flake 80/20 Alfalfa Timothy 10/31/23' }
        ]
      },
      { 
        time: 'NC',
        items: [
          { type: 'Everyday', value: '2 Scoop Senior Purina' },
          { days: ['Mo', 'We', 'Fr'], value: '2 Flake 80/20 Alfalfa Timothy 10/31/23' }
        ]
      }
    ],
    supplements: [
      { 
        time: 'AM',
        items: [
          { days: ['Mo', 'We', 'Fr'], value: '2 Flake 80/20 Alfalfa Timothy 10/31/23' }
        ]
      },
      { 
        time: 'PM',
        items: [
          { days: ['Mo', 'We', 'Fr'], value: '2 Flake 80/20 Alfalfa Timothy 10/31/23' }
        ]
      },
      { 
        time: 'NC',
        items: [
          { days: ['Mo', 'We', 'Fr'], value: '2 Flake 80/20 Alfalfa Timothy 10/31/23' }
        ]
      }
    ],
    medications: [
      { 
        time: 'AM',
        items: [
          { days: ['Mo', 'We', 'Fr'], value: '2 Flake 80/20 Alfalfa Timothy 10/31/23' }
        ]
      }
    ],
    showMedications: [
      { 
        time: 'AM',
        items: [
          { days: ['Mo', 'We', 'Fr'], value: '2 Flake 80/20 Alfalfa Timothy 10/31/23' }
        ]
      },
      { 
        time: 'PM',
        items: [
          { days: ['Mo', 'We', 'Fr'], value: '2 Flake 80/20 Alfalfa Timothy 10/31/23' }
        ]
      }
    ]
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      <FeedColumn 
        title="Feed" 
        items={scheduleData.feed} 
      />
      <FeedColumn 
        title="Supplements" 
        items={scheduleData.supplements} 
      />
      <FeedColumn 
        title="Medications" 
        items={scheduleData.medications} 
      />
      <FeedColumn 
        title="Show Medications" 
        items={scheduleData.showMedications} 
      />
    </div>
  );
};

const FeedColumn = ({ title, items }) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 font-medium border-b border-gray-200">
        {title}
      </div>
      <div className="p-2">
        {items.map((timeSlot, index) => (
          <div key={`${timeSlot.time}-${index}`} className="mb-4">
            <div className="bg-[#1F3E68] text-white py-1 px-2 text-sm mb-2">
              {timeSlot.time}
            </div>
            {timeSlot.items.map((item, itemIndex) => (
              <div key={`${timeSlot.time}-item-${itemIndex}`} className="mb-2">
                {item.type && (
                  <div className="bg-gray-100 p-2 text-sm text-gray-600 mb-1">
                    {item.type}
                  </div>
                )}
                {item.days && (
                  <div className="bg-gray-100 p-2 text-sm text-gray-600 mb-1">
                    {item.days.join(', ')}
                  </div>
                )}
                <div className="p-2 text-sm font-medium">
                  {item.value}
                </div>
                <button className="text-gray-400 hover:text-gray-600 ml-auto">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedSchedule; 