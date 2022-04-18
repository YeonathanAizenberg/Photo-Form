import React from 'react';
import './PhotoCard.css';

function PhotoCard({ data }) {

    const displayPhoto = data.photo
    return (
        <div className='photo-wrapper'>
            <img src={`data:image/jpeg;base64,${displayPhoto}`}/>
        </div>
    );
}

export default PhotoCard;