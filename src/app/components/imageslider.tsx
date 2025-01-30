'use client';

import React, { useEffect, useRef } from 'react';

const HorizontalScrollCarousel: React.FC = () => {

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
      <img src="/images/pic1.jpg" alt="Image 1" className="w-full md:w-1/4 object-cover" />
      <img src="/images/pic2.jpg" alt="Image 2" className="w-full md:w-1/4 object-cover" />
      <img src="/images/pic3.jpg" alt="Image 3" className="w-full md:w-1/4 object-cover" />
      <img src="/images/pic4.jpg" alt="Image 4" className="w-full md:w-1/4 object-cover" />
      <img src="/images/pic5.jpg" alt="Image 5" className="w-full md:w-1/4 object-cover" />
      <img src="/images/pic6.jpg" alt="Image 6" className="w-full md:w-1/4 object-cover" />
    </div>
  );
};

export default HorizontalScrollCarousel;
