import { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { getAllPhotosByExhibition } from '../../lib/api';
import MainModal from '../modal/MainModal';
import './PhotosByExhibition.css';

function PhotosByExhibition() {

    const [displayModal, setDisplayModal] = useState(false)
    const [exhibition, setExhibition] = useState("")
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(false)

    const getExhibitionPhotos = () => {
        if (exhibition !== "") {
            setLoading(true)
            try {
                getAllPhotosByExhibition(exhibition).then(data => {
                    if(data.data !== "No data found") {
                        setPhotos(data)
                        setDisplayModal(true)
                        setLoading(false)
                    } else {
                        alert(data.data)
                        setLoading(false)
                    }
                })
            } catch (err) {
                console.log(err)
                alert(err)
                setLoading(false)
            }

        } else {
            alert("Please fill in the fields!")
        }
    }

    return (
        <div className='btn-exhibition-wrapper'>
            <Button onClick={getExhibitionPhotos}>
                Get Photos By Exhibition
            </Button>
            <MainModal
                metaData={false}
                show={displayModal}
                onHide={() => setDisplayModal(false)}
                data={photos}
                title="Photos By Exhibition"
            />
            <input
                name="photosByExhibition"
                type="text"
                value={exhibition}
                onChange={(e) => setExhibition(e.target.value)}
            />
            {loading ? <div className='spinner-wrapper'><Spinner animation="grow" variant="primary" /></div> : null}
        </div>
    );
}

export default PhotosByExhibition;