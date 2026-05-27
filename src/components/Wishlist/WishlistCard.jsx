// import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { IoIosTime } from 'react-icons/io';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const WishlistCard = ({book}) => {
    return (
         <div className="flex gap-3 justify-between items-center bg-base-100 shadow-sm p-4 mt-4 ">
                 <figure className="w-[180px]  rounded-2xl flex items-center">
                   <img className=" h-[250px] w-[300px] "
                     src={book.image}
                     alt="Album" />
                 </figure>
                 <div className="card-body">
                   <h2 className="card-title text-2xl font-bold">{book.bookName}</h2>
                   <p className="font-semibold text-xl opacity-60">By : {book.author}</p>
                   <div className="flex items-center gap-3  border-gray-300 p-4">
                        {
                            book.tags.map((tag,index)=><button key={index} className="btn bg-green-100 text-green-500">{tag}</button>)
                        }
                        <p className="flex gap-2 items-center"><IoIosTime /><span className="font-semibold opacity-60 ">Year of Publishing </span>: <span className="font-semibold opacity-60">{book.yearOfPublishing}</span></p>
                   </div>
        
                   <div className="flex gap-6 justify-start items-center flex-grow-0 w-fit">
        
                   <p className="flex gap-2 items-center font-semibold opacity-60"><FaUserFriends />Publisher : {book.publisher}</p>
                   <p className="flex gap-2 items-center font-semibold opacity-60"><IoDocumentTextOutline />Page: {book.totalPages}</p>
                   </div>
               
               <div className="flex gap-4 mt-2 border-t p-3">
        
                   <button className="btn btn-soft btn-info">Category : {book.category}</button>
                   <button className="btn btn-soft btn-warning">Rating : {book.rating}</button>
                   <Link to={`/bookDetails/${book.bookId}`}>
                   <button className="btn  btn-success">View Details</button>
                   </Link>
                   
               </div>
                   
                   
                 </div>
               </div>
    );
};

export default WishlistCard;