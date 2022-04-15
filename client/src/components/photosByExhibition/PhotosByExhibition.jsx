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
                setPhotos(data)
                displayModal(true)
                setLoading(false)
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
        <div>
            <Button onClick={getExhibitionPhotos}>
                Get Photos By Exhibition
            </Button>
            <MainModal
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
            {loading ? <Spinner animation="grow" variant="primary" /> : null}
        </div>
    );
}

export default PhotosByExhibition;