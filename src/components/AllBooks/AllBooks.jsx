// import React from 'react';

import { use } from "react";

import Cards from "../Cards/Cards";



const booksPromise=fetch('/data/booksData.json').then(response => response.json()) ;
const AllBooks = () => {

    const books= use(booksPromise)
    // console.log(books,'books');
    return (
        <div className="mt-12 container mx-auto">
            <h2 className=" text-center font-bold text-3xl">Books</h2>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
             {books.map((book,index)=>{
                    return (
                        <Cards key={index} book={book}></Cards>
                    )
                   

                    
                })};
           </div>
        </div>
    );
};

export default AllBooks;