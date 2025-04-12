'use client';

import React, { useEffect, useRef } from 'react';
import Image from "next/image";

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
      <Image src="/images/pic1.jpg" alt="Image 1" width={700} height={500} className='w-full md:w-1/4 object-cover'/>
      <Image src="/gallery/img6.jpg" alt="Image 3" width={700} height={500} className='w-full md:w-1/4 object-cover'/>
      <Image src="/images/pic4.jpg" alt="Image 4" width={700} height={500} className='w-full md:w-1/4 object-cover'/>
      <Image src="/images/pic8.jpg" alt="Image 5" width={700} height={500} className='w-full md:w-1/4 object-cover'/>
      <Image src="/images/pic6.jpg" alt="Image 6" width={700} height={500} className='w-full md:w-1/4 object-cover'/>
      <Image src="/images/pic3.jpg" alt="Image 7" width={700} height={500} className='w-full md:w-1/4 object-cover'/>
      <Image src="/gallery/st256.jpg" alt="Image 8" width={700} height={500} className='w-full md:w-1/4 object-cover'/>
    </div>
  );
};

export default HorizontalScrollCarousel;
