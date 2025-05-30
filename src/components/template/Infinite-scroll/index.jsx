import React from 'react';
import Glass from '@/components/elements/Glass'; 

const InfiniteScroll = () => {
  // Define the content array to make it easier to duplicate
  const items = [
    { id: 1, text: 'Text 1' },
    { id: 2, text: 'Text 2' },
    { id: 3, text: 'Text 3' },
    { id: 4, text: 'Text 4' },
    { id: 5, text: 'Text 5' },
    { id: 6, text: 'Text 6' },
  ];

  return (
    <div className="relative overflow-hidden mt-16">
      <div className="flex animate-scroll-x">
       
        {items.map((item) => (
          <Glass key={`original-${item.id}`} className="w-[150px] md:w-[450px] md:h-[400px] h-[100px]  mx-1.5">
            {item.text}
          </Glass>
        ))}
        {items.map((item) => (
          <Glass key={`duplicate-${item.id}`} className="w-[150px] md:w-[450px] md:h-[400px] h-[100px]  mx-1.5">
            {item.text}
          </Glass>
        ))}
        {items.map((item) => (
          <Glass key={`duplicate-${item.id}`} className="w-[150px] md:w-[450px] md:h-[400px] h-[100px]  mx-1.5">
            {item.text}
          </Glass>
        ))}
        {items.map((item) => (
          <Glass key={`duplicate-${item.id}`} className="w-[150px] md:w-[450px] md:h-[400px] h-[100px]  mx-1.5">
            {item.text}
          </Glass>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;