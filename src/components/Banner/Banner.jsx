// import React from 'react';

const Banner = () => {
    return (
       <div className="hero bg-base-200 min-h-[50vh] rounded-2xl container mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
    <img
      src="Book-Vibe-Project/src/assets/pngwing 1.png"
      className="rounded-lg max-w-[318px]"
    />
    <div className="space-y-5">
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
      
      <button className="btn btn-active bg-[#23BE0A] text-white">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;