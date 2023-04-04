import React, { useEffect, useState } from 'react';
import SingleCard from '../../SingleCard/SingleCard';

const Cards = ({totalReadTime, setTittleBookmark}) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        const loadData = async() =>{
            const res = await fetch('../public/fakedata.json')
            const value= await res.json()
            // console.log(data)
            setData(value)
        }
        loadData()
    },[])
    return (
        <div>
          <div>
          {
            data.map(singleData =><SingleCard totalReadTime={totalReadTime} singleData = {singleData} setTittleBookmark={setTittleBookmark}></SingleCard>)
           } 
          </div>
         
        </div>
    );
};

export default Cards;