import  { useContext } from 'react';
import { listedBookContext } from '../../BookContext/BookContext';
import ReadListCard from './ReadListCard';

const ReadList = () => {
    const {storedBooks,wishedBooks}=useContext(listedBookContext)
        console.log(storedBooks,wishedBooks)
        if(wishedBooks.length===0){
                return <div className='h-[50vh] flex items-center justify-center bg-gray-200'>
                    <h2 className='font-bold text-2xl'>No read list data found</h2>
                </div>
            }
    return (
        <div className='container mx-auto space-y-5'>
            {
            storedBooks.map((book,index)=>{
                return <ReadListCard key={index} book={book}></ReadListCard>
            })
        }
        </div>
        
    );
};

export default ReadList;