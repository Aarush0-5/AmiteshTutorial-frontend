

const gallery: React.FC = () => {
   return (<div>
     <header>
       <h2 className="bg-black text-white font-bold text-5xl p-3 text-center mt-2 mb-5">Gallery</h2>
    </header>

    <main>
      <div className="bg-gradient-to-br from-white via-green-400 to-green-600 p-4 ">
  <h2 className="text-center text-3xl font-bold underline">Christmas 2024</h2>
  <div className="flex flex-col lg:grid lg:grid-cols-2 p-10 ">
    <div className="h-1/4 w-auto">
      <img
        src="/gallery/img7.jpg"
        alt="1st pic"
        className=" shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
    </div>
    <div className="h-1/4 w-auto">
      <img
        src="/gallery/img3.jpg"
        alt="3rd pic"
        className=" shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
    </div>
    <div className="h-1/4 w-auto">
      <img
        src="/gallery/img2.jpg"
        alt="2nd pic"
        className=" shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
    </div>
    <div className="h-1/4 w-auto">
      <img
        src="/gallery/img4.jpg"
        alt="4th pic"
        className=" shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
    </div>
    <div className="h-1/4 w-auto">
      <img
        src="/gallery/img5.jpg"
        alt="5th pic"
        className=" shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
    </div>
    <div className="h-1/4 w-auto">
      <img
        src="/gallery/img1.jpg"
        alt="6th pic"
        className=" shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
    </div>
  </div>
</div>


      <div className="bg-gradient-to-br from-orange-600 via-white to-green-600 p-4  mt-5">
      <h2 className="text-center text-3xl font-bold underline">Republic Day 2025</h2>
      <div className="flex flex-col lg:grid lg:grid-cols-2 p-10">
         <div className=" transition-transform duration-300 ease-in-out transform hover:scale-110 h-1/4 w-auto"><img src="/gallery/rep42025.jpg" alt="1st pic" /></div>
         <div className=" transition-transform duration-300 ease-in-out transform hover:scale-110 h-1/4 w-auto"><img src="/gallery/rep22025.jpg" alt="3rd pic" /></div>
         <div className=" transition-transform duration-300 ease-in-out transform hover:scale-110 h-1/4 w-auto"><img src="/gallery/rep2025.jpg" alt="2nd pic"  /></div>
         <div className=" transition-transform duration-300 ease-in-out transform hover:scale-110 h-1/4 w-auto"><img src="/gallery/rep32025.jpg" alt="4th pic"  /></div>
     </div>
      </div>
     
    </main>

    <footer>
      <a href="https://www.instagram.com/amiteshtutorials/" className=" mt-4 flex flex-row justify-center items-center text-3xl text-center font-semibold bg-gray-700 text-white ">More on: <img src="/instagramm.png" alt="Insta's logo" /></a>
    </footer>
   
   </div>
   
   )
}

export default gallery;