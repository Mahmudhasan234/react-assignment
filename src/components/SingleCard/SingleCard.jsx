import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'

const SingleCard = (props) => {
    console.log(props.singleData)
    const { blog_cover_image, author_name, author_image, blog_title, publish_date, read_time } = props.singleData
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
                         <span> <FontAwesomeIcon icon={faBookmark} /></span></div>
                        
                    </div>
                    <h2 className="card-title text-4xl font-bold">{blog_title}</h2>
                    <button className='text-left mt-5'> Mark as Read</button>

                </div>
            </div>
        </div>
    );
};

export default SingleCard;