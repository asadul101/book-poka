import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, tags, image, author, bookName } = book;
    return (
        <Link to={`book/${bookId}`}>
            <div className="card bg-base-100 p-6 shadow-xl ">
                <figure className='bg-fuchsia-300 p-6 rounded-xl'>
                    <img className='w-[166px] h-[136px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex  items-center gap-8 '>
                        {
                            tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-green-100   text-green-500">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className='border-t-2 border-dashed'></div>
                    <div className="card-actions flex  items-center gap-10 ">
                        <div className="">Fashion</div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-100" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-100" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;