import React, { useEffect, useState } from 'react';
import BookmarkTittle from '../Bookmark-tittle/BookmarkTittle';

const SideCart = ({readTime}) => {
    const [time, setTime]= useState(readTime )
    useEffect(()=>{
        const getReadTime =localStorage.getItem('readTime');
        console.log(getReadTime);
        setTime(getReadTime)
    },[readTime])

    // const[tittle, setTittle]=useState([])
    const bookmarkTittle=localStorage.getItem('bookMark');
    const bookMarkParse = JSON.parse(bookmarkTittle)
    
    return (
        <div  className='p-5'>
            <div className='border-2 p-5 bg-purple-200 text-black text-lg font-bold text-center'>Spend time on read:{time}  Min</div>
            <div className='border-2 p-5 bg-purple-400 text-black text-lg font-bold text-center mt-5'>
                <h1 className='mb-5'>Bookmark Blog: {bookMarkParse?.length} </h1>
                <div>
                    {
                     bookMarkParse?.map(single => <h5 className='border-2 p-5 bg-purple-200 text-black text-lg font-bold text-center mb-5'>{single}</h5>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SideCart;