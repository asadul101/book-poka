import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToMarksRead, addToWistlis } from '../../Utilitis/Utilitis';

const BookDetalis = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const book = books.find(book => book.bookId === id);
    const { bookId: currentId, tags, yearOfPublishing, publisher, rating, totalPages, review, author, bookName, image } = book;

    const haltleMarkesRead=(id)=>{
        addToMarksRead(id)
    }
    const haldleWistlist=(id)=>{
       
        addToWistlis(id)
    }
    return (
        <div>
            <div className="hero bg-base-200 rounded-xl mt-10 mb-10">
                <div className="hero-content gap-10 flex-col lg:flex-row">
                    <img
                        src={image}
                        className="w-[500px] bg-blue-200 p-6 rounded-lg" />
                    <div>
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className="py-6 text-xl">
                            By: {author}
                        </p>
                        <div className='border-t-2 border-b-2 mt-3 mb-3 border-black'>
                            <p className='text-xl font-semibold'>Fison</p>
                        </div>
                        <p><span className='text-xl font-bold text-black'>rivew:</span> {review}</p>
                        <div className='mt-5 mb-5 flex gap-14'>
                            <span className='text-xl font-bold text-black'>Tag</span>  {tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-green-100   text-green-500">{tag}</button>)}
                        </div>
                        <div className='border-b-2 border-black mb-3'></div>
                        <div className='flex gap-10 items-center '>
                            <div>
                                <p className='text-xl'>Nuber of pages :</p>
                                <p className='text-xl'>Publisher :</p>
                                <p className='text-xl'>yearOfPublishing :</p>
                                <p className='text-xl'>Rating :</p>
                            </div>
                            <div>
                                <span className='text-xl font-medium'>{totalPages}</span> <br />
                                <span className='text-xl font-medium'>{publisher}</span> <br />
                                <span className='text-xl font-medium'>{yearOfPublishing}</span> <br />
                                <span className='text-xl font-medium'>{rating}</span> <br />
                            </div>
                        </div>
                       <div className='flex gap-6 mt-6'>
                       <button onClick={()=> haltleMarkesRead (bookId)} className="btn btn-outline btn-accent">Read</button>
                       <button onClick={()=> haldleWistlist (bookId)} className="btn btn-success">Wishlist</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetalis;