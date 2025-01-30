'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const HorizontalScrollCarouselAnnoucement: React.FC = () => {

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const container = containerRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScrollLeft) {
          container.scrollTo({
            left: 0,
            behavior: 'smooth',
          });
        } else {
          container.scrollBy({
            left: container.clientWidth,
            behavior: 'smooth',
          });
        }
      }
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef} 
      className="overflow-hidden flex lg:space-x-4"
      style={{ scrollBehavior: 'smooth', width: '100%' }}
    >
      <Image src="/offer1.jpg" alt='Announcement1' width={500} height={500} className='w-full  object-cover'/>
      <Image src="/offer2.jpg" alt='Announcement2' width={500} height={500} className='w-full  object-cover'/>
    </div>
  );
};

export default HorizontalScrollCarouselAnnoucement;
