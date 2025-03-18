import React, { useState } from 'react';
import HorseCard from './HorseCard';

const HorseList = () => {
  // This would typically come from an API or Redux store
  const [horses] = useState([
    {
      id: '1094',
      name: 'Alaska',
      subtitle: '',
      location: 'Virginia',
      tags: ['Dr.Smith', 'Rehabing', 'Retired', 'Walk Under Tack', 'Gelding'],
      owner: { name: 'Nicole Lakin' },
      imageUrl: '/horse-images/alaska.jpg',
    },
    {
      id: '',
      name: 'Amarillo',
      subtitle: 'Amarillo V',
      location: 'Virginia',
      tags: ['Gelding'],
      owner: { name: 'Nicole Lakin' },
      imageUrl: '/horse-images/amarillo.jpg',
    },
    {
      id: '',
      name: 'Bob',
      subtitle: 'Bob\'s Your Uncle',
      location: 'Virginia',
      tags: ['Gelding'],
      owner: { name: 'Nicole Lakin' },
      imageUrl: '/horse-images/bob1.jpg',
    },
    {
      id: '1094',
      name: 'Betty',
      subtitle: '',
      location: 'No Location',
      tags: ['Dr. Smith', 'Healthy', 'Pleasure', 'Mare'],
      owner: { name: 'Nicole Lakin' },
      imageUrl: '/horse-images/betty.jpg',
    },
    {
      id: '',
      name: 'Bob',
      subtitle: 'Bob\'s Your Uncle',
      location: 'Virginia',
      tags: ['Dr.Smith', 'Stallion'],
      owner: { name: 'Nicole Lakin' },
      imageUrl: '/horse-images/bob2.jpg',
    },
    {
      id: '',
      name: 'Harvey',
      subtitle: 'Harvey Lakin',
      location: 'No Location',
      tags: ['Active', 'Healthy', 'Gelding'],
      owner: { name: 'No owner assigned' },
      imageUrl: '',
      archived: true,
    },
    {
      id: '',
      name: 'Monkey',
      subtitle: 'Monkey',
      location: 'Florida',
      tags: [],
      owner: { name: '' },
      imageUrl: '/horse-images/monkey.jpg',
    },
    {
      id: '',
      name: 'Betsy',
      subtitle: 'Betsy',
      location: 'Florida',
      tags: [],
      owner: { name: '' },
      imageUrl: '/horse-images/betsy.jpg',
    },
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {horses.map((horse, index) => (
        <HorseCard key={index} horse={horse} />
      ))}
    </div>
  );
};

export default HorseList; 