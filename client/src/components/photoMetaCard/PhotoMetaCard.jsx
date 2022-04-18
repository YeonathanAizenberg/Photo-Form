import React from 'react';
import './PhotoMetaCard.css';

function PhotoMetaCard({ data }) {
    return (
        <div className='photoMeta-wrapper'>
            <div>
                <h6>
                    name:
                </h6>
                {data.name}
            </div>
            <div>
                <h6>
                    size:
                </h6>
                {data.size}
            </div>
            <div>
                <h6>
                    encoding:
                </h6>
                {data.encoding}
            </div>
            <div>
                <h6>
                    md5:
                </h6>
                {data.md5}
            </div>
            <div>
                <h6>
                    mimetype:
                </h6>
                {data.mimetype}
            </div>
            <div>
                <h6>
                    mv:
                </h6>
                {data.mv}
            </div>
            <div>
                <h6>
                    tempFilePath:
                </h6>
                {data.tempFilePath}
            </div>
            <div>
                <h6>
                    truncated:
                </h6>
                {data.truncated}
            </div>
        </div>
    );
}

export default PhotoMetaCard;