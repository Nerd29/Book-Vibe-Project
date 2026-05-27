import  { useContext } from 'react';
import { listedBookContext } from '../../BookContext/BookContext';
import WishlistCard from './WishlistCard';


const Wishlist = () => {
    const {wishedBooks}=useContext(listedBookContext)
            console.log(wishedBooks)
            if(wishedBooks.length===0){
                return <div className='h-[50vh] flex items-center justify-center bg-gray-200'>
                    <h2 className='font-bold text-2xl'>No wishlist data found</h2>
                </div>
            }
        return (
            <div className='container mx-auto space-y-5'>
                {
                wishedBooks.map((book,index)=>{
                    return <WishlistCard key={index} book={book}></WishlistCard>
                })
            }
            </div>
            
        );
};

export default Wishlist;