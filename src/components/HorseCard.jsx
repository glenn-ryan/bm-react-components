import React from 'react';
import { FiMapPin, FiStar, FiMoreHorizontal } from 'react-icons/fi';

const HorseCard = ({ horse }) => {
  const { 
    name, 
    id, 
    location, 
    imageUrl, 
    tags = [], 
    owner = {}, 
    subtitle = '',
    archived = false
  } = horse;

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-4 ${archived ? 'opacity-60' : ''}`}>
      <div className="p-4">
        <div className="flex items-start">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 mr-4 flex-shrink-0">
            {imageUrl ? (
              <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                {name?.charAt(0) || '?'}
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-medium text-gray-900">{name}</h3>
              <div className="flex items-center space-x-1">
                <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                  <FiStar />
                </button>
                <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                  <FiMoreHorizontal />
                </button>
              </div>
            </div>
            
            <div className="text-sm text-gray-500 mb-3">
              {id && <div>{id}</div>}
              {subtitle && <div>{subtitle}</div>}
              {location && (
                <div className="flex items-center mt-1">
                  <FiMapPin className="text-gray-400 mr-1 h-3 w-3" />
                  <span>{location}</span>
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2.5 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {owner.name && (
              <div className="flex items-center text-sm text-gray-500">
                <div className="w-5 h-5 rounded-full bg-gray-200 mr-2 flex-shrink-0">
                  {owner.avatar ? (
                    <img src={owner.avatar} alt={owner.name} className="w-full h-full rounded-full" />
                  ) : null}
                </div>
                <div>Owned By {owner.name}</div>
              </div>
            )}
            
            {archived && (
              <div className="mt-3 flex items-center justify-between">
                <div className="text-xs text-gray-500">Archived</div>
                <button className="text-xs px-3 py-1 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50">
                  Reactivate
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorseCard; 