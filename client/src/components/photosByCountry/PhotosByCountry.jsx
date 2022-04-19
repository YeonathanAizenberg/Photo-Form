import { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { getAllPhotosMetaByCountry } from '../../lib/api';
import CountrySelector from '../countrySelector/CountrySelector';
import MainModal from '../modal/MainModal';
import './PhotosByCountry.css';

function PhotosByCountry({dataLoaded}) {

    const [displayModal, setDisplayModal] = useState(false)
    const [country, setCountry] = useState("")
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(false)

    const getCountryPhotos = () => {
        if (country !== "") {
            setLoading(true)
            try {
                getAllPhotosMetaByCountry(country?.label).then(data => {
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
        <div>
            <Button disabled={dataLoaded} onClick={getCountryPhotos}>
                Get Photos By Country
            </Button>
            <MainModal
                metaData={true}
                show={displayModal}
                onHide={() => setDisplayModal(false)}
                data={photos}
                title="Photos By Country"
            />

            <div className='country-meta-data-selector'>
                <CountrySelector
                    country={country}
                    setCountry={setCountry}
                />
            </div>

            {loading ? <div className='spinner-wrapper'><Spinner animation="grow" variant="primary" /></div> : null}
        </div>
    );
}

export default PhotosByCountry;