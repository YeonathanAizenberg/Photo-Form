import { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { getAllPhotosByCountry } from '../../lib/api';
import MainModal from '../modal/MainModal';
import './PhotosByCountry.css';

function PhotosByCountry() {

    const [displayModal, setDisplayModal] = useState(false)
    const [country, setCountry] = useState("")
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(false)

    const getCountryPhotos = () => {
        if (country !== "") {
            setLoading(true)
            try {
                getAllPhotosByCountry(country).then(data => {
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
            <Button onClick={getCountryPhotos}>
                Get Photos By Country
            </Button>
            <MainModal
                show={displayModal}
                onHide={() => setDisplayModal(false)}
                data={photos}
                title="Photos By Country"
            />
            <input
                name="photosByCountry"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            />
            {loading ? <Spinner animation="grow" variant="primary" /> : null}
        </div>
    );
}

export default PhotosByCountry;