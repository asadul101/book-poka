import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getMarksRead, getWistlis } from '../../Utilitis/Utilitis';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Book from '../Book/Book';

const Booklist = () => {
    const [readbook, setReadbook] = useState([])
    const [wating, setWating] = useState([])
    const allbooks = useLoaderData()
    useEffect(() => {
        //read list
        const strogeRead = getMarksRead()
        const readListIn = strogeRead.map(id => parseInt(id));
        const readListall = allbooks.filter(book => readListIn.includes(book.bookId))
        setReadbook(readListall)

        // wating lis
        const wating = getWistlis();
        const watingRead = wating.map(id => parseInt(id));
        const watingSet = allbooks.filter(book => watingRead.includes(book.bookId))
        setWating(watingSet)
    }, [])
    const [stor,setStor]=useState(' ')
    const hadleClick=stortype=>{
        setStor(stortype)
        if(stortype==='Rating'){
            const ratings=[...readbook].stor((a,b)=>a.rating-b.rating);
            setReadbook(ratings)
        }
        if(stortype==='No pages book'){
            const ratingsl=[...readbook].stor((a,b)=>a.totalPages-b.totalPages);
            setReadbook(ratingsl)
        }
    }
    return (
        <div className='mt-10 mb-10'>
            <details className="dropdown">
                <summary className="btn m-1">
                    {
                        stor ? `Stor by:${stor}`:'Stor By'
                    }
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=> hadleClick('Rating')}><a>Rataing</a></li>
                    <li  onClick={()=> hadleClick('No pages book')}><a>No page book</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wint list</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-3xl font-bold'>Read list</h2>
                    <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 '>
                        {
                            readbook.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-3xl font-bold'>Wait List</h2>
                    <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 '>
                        {
                            wating.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Booklist;