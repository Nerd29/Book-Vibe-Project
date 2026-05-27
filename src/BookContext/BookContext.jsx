import  { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const listedBookContext=createContext()
// export const wishlistBookContext=createContext()
const BookContext = ({children}) => {

     const[storedBooks,setStoredBooks]=useState([]);
     const[wishedBooks,setWishedBooks]=useState([]);
        console.log(storedBooks)
        
        const handleMarkRead=(currentBook)=>{
                console.log(currentBook)
                const isExistBook=storedBooks.find((book)=>book.bookId === currentBook.bookId)
                if(isExistBook){
        
                    toast.error(`${currentBook.bookName} is already saved!`)
                }
                else{
                    toast.success(`${currentBook.bookName} is successfully saved!`)
                   setStoredBooks([...storedBooks,currentBook])
                }
        }
        
        const handleWishlist=(currentBook)=>{
                // console.log(currentBook)
                 const isExistinReadList=storedBooks.find((book)=>book.bookId === currentBook.bookId)
                if(isExistinReadList){
        
                    toast.error(`${currentBook.bookName} is already in read list!`)
                    return
                }

                const isExistBook=wishedBooks.find((book)=>book.bookId === currentBook.bookId)
                if(isExistBook){
        
                    toast.error(`${currentBook.bookName} is already added to wishlist!`)
                }
                else{
                    toast.success(`${currentBook.bookName} is successfully added to wishlist!`)
                   setWishedBooks([...wishedBooks,currentBook])
                }
        }
    const data={
       storedBooks,setStoredBooks,handleMarkRead,wishedBooks,setWishedBooks,handleWishlist
    }
    return <listedBookContext.Provider value={data}>
        {children}
    </listedBookContext.Provider>
    
};

export default BookContext;