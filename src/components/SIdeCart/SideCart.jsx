import React, { useEffect, useState } from 'react';
import BookmarkTittle from '../Bookmark-tittle/BookmarkTittle';

const SideCart = ({readTime, bookMark}) => {
    const [time, setTime]= useState(readTime )
    useEffect(()=>{
        const getReadTime =localStorage.getItem('readTime');
        // console.log(getReadTime);
        setTime(getReadTime)
    },[readTime])
    const[tittle, setTittle]=useState([])
    const bookmarkTittle=localStorage.getItem('bookMark');
    const bookMarkParse = JSON.parse(bookmarkTittle)
    useEffect(()=>{
        for(bookMark of bookMarkParse){
           setTittle(bookMark) 
        }
    },[bookMark])
    return (
        <div  className='p-5'>
            <div className='border-2 p-5 bg-purple-200 text-black text-lg font-bold text-center'>Spend time on read: {time}  Min</div>
            <div className='border-2 p-5 bg-purple-300 text-black text-lg font-bold text-center mt-5'>
                <h1>Bookmark Blog:{bookMarkParse.length} </h1>
                <div>
                    <h5><BookmarkTittle></BookmarkTittle></h5>
                </div>
            </div>
        </div>
    );
};

export default SideCart;