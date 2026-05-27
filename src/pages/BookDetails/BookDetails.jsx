// import React from 'react';

import { use, useContext } from "react";
import { FaBookmark } from "react-icons/fa";
import { useParams } from "react-router";
import { listedBookContext } from "../../BookContext/BookContext";

const booksPromise=fetch('/data/booksData.json').then(response => response.json()) ;  
const BookDetails = () => {
    const {bookId}=useParams()

    const {handleMarkRead,handleWishlist}=useContext(listedBookContext)
    console.log({handleMarkRead})
    // console.log(params)
    const books= use(booksPromise)
        // console.log(books,'books');
        const DetailsBook=books.find(book=>book.bookId==bookId)
        // console.log(DetailsBook)
       
    
        
    return (
        <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto">
  <figure className="bg-gray-200 rounded-2xl flex justify-center items-center">
    <img className=" h-[500px] w-[400px] "
      src={DetailsBook.image}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">{DetailsBook.bookName}</h2>
    <p className="font-semibold text-xl opacity-60">By : {DetailsBook.author}</p>
    <p className="font-semibold text-[16px] mt-3 p-4 border-t border-b  border-gray-300">{DetailsBook.category}</p>
    <p><span className="font-bold">Review </span>: <span className="opacity-60 font-semibold">{DetailsBook.review}</span></p>
    <div className="flex gap-3 border-b  border-gray-300 p-4">
         {
            DetailsBook.tags.map((tag,index)=><button key={index} className="btn bg-green-100 text-green-500">{tag}</button>)
         }
    </div>

    <p><span className="font-semibold opacity-60">Number of Pages </span>: <span className="font-bold">{DetailsBook.totalPages}</span></p>
    <p><span className="font-semibold opacity-60">Publisher</span> : <span className="font-bold">{DetailsBook.publisher}</span></p>
    <p><span className="font-semibold opacity-60">Year of Publishing </span>: <span className="font-bold">{DetailsBook.yearOfPublishing}</span></p>
    <p><span className="font-semibold opacity-60">Rating</span> : <span className="font-bold">{DetailsBook.rating}</span></p>
    <div className="card-actions">
      <button className="btn btn-active font-bold" onClick={()=>handleMarkRead(DetailsBook)}>Mark as Read</button>
      <button className="btn btn-primary font-bold" onClick={()=>handleWishlist(DetailsBook)}><FaBookmark />Add To Wishlist</button>
    </div>
  </div>
</div>
    );
};

export default BookDetails;