// import React from 'react';

import { CiStar } from "react-icons/ci";
import { Link } from "react-router";


const Cards = ({book}) => {
    return (
         <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100  shadow-sm space-y-4 rounded-xl">
  
    <figure className="p-6 bg-gray-200">
    <img className="rounded-xl h-[200px]"
      src={book.image}
      alt={book.bookName}/>
  </figure>
  <div className="card-body">
    <div className="flex gap-3">
         {
            book.tags.map((tag,index)=><button key={index} className="btn bg-green-100 text-green-500">{tag}</button>)
         }
    </div>
     
    <h2 className="card-title font-bold text-2xl">
       {book.bookName} 
      
    </h2>
    <p className="font-semibold text-[#131313] text-lg"> <span className="">By </span>: {book.author}</p>

    <div className="card-actions flex justify-between text-xl text-[#131313]  border-t border-dashed border-gray-300 pt-3">
      <div className="font-semibold">{book.category}</div>
      <div className="flex items-center gap-2 font-semibold">{book.rating}<CiStar /></div>
    </div>
  </div>
  </Link>
    );
};

export default Cards;