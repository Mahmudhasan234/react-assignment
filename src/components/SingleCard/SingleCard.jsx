import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'

const SingleCard = ({singleData, toalReadTime, setTittleBookmark}) => {
    // console.log(props.singleData) 
    const { blog_cover_image, author_name, author_image, blog_title, publish_date, read_time } = singleData
    const readTime = parseFloat(read_time)
    
    return (
        <div>

            <div className="mb-10">
                <div className="card-body">
                    <div>
                        <img className='rounded-xl' src={blog_cover_image} alt="" />
                    </div>

                    <div className='flex items-center  justify-between'>

                        <div className='flex items-center'>
                            <div><img className='border-4 scale-75 rounded-full' src={author_image} alt="" /></div>
                            <div>
                            <h5 className='text-2xl font-bold'>{author_name}</h5>
                            <p>{publish_date}</p>
                            
                            </div>
                        </div>
                        <div>{read_time}
                         <button className='ml-2' onClick={()=>setTittleBookmark(blog_title)}> <FontAwesomeIcon icon={faBookmark} /></button></div>
                        
                    </div>
                    <h2 className="card-title text-4xl font-bold">{blog_title}</h2>
                    <button onClick={()=>toalReadTime(readTime)} className='text-left mt-5'> Mark as Read</button>

                </div>
            </div>
        </div>
    );
};

export default SingleCard;