'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const HorizontalScrollCarouselAnnoucement: React.FC = () => {

  const containerRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Correct position

  useEffect(() => {
    const handleResize = () => {
      
      if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      } else {
        if (!intervalRef.current) {
          startScrollingInterval();
        }
      }
    };

    const startScrollingInterval = () => {
      if (intervalRef.current) return;
      
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

      intervalRef.current = interval;
    };
    
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-x-scroll no-scrollbar flex lg:justify-center lg:space-x-4 space-x-2 snap-x snap-mandatory"
      style={{ scrollBehavior: 'smooth', width: '100%' }}
    >
      <Image src="/Announcement1.jpg" alt='Announcement1' width={500} height={500} className='w-full object-cover rounded-xl shadow-md snap-center lg:max-w-xl' />
      <Image src="/Announcement2.jpg" alt='Announcement2' width={500} height={500} className='w-full object-cover rounded-xl shadow-md snap-center lg:max-w-xl' />
    </div>
  );
};

export default HorizontalScrollCarouselAnnoucement;