import { useState } from 'react';
import { addNewEvent } from '../../lib/api';
import Input from '../input/Input';
import './Form.css';

function Form() {

    const [photoName, setPhotoName] = useState("")
    const [photographer, setPhotographer] = useState("")
    const [exhibition, setExhibition] = useState("")
    const [country, setCountry] = useState("")
    const [year, setYear] = useState("")
    const [style, setStyle] = useState("")
    const [photo, setPhoto] = useState("")

    const handlePhotoName = (e) => {
        setPhotoName(e)
        console.log(e)
    }

    const handlePhotographer = (e) => {
        setPhotographer(e)
        console.log(e)
    }

    const handleExhibition = (e) => {
        setExhibition(e)
        console.log(e)
    }

    const handleCountry = (e) => {
        setCountry(e)
        console.log(e)
    }

    const handleYear = (e) => {
        setYear(e)
        console.log(e)
    }

    const handleStyle = (e) => {
        setStyle(e)
        console.log(e)
    }

    const handlePhoto = (e) => {
        setPhoto(e)
        console.log(e)
    }

    const handleNewEvent = (event) => {
        event.preventDefault();
        if (photoName !== "" || photographer !== "" || exhibition !== "" || country !== "" || year !== "" || style !== "" || photo !== "") {
            const newEventData = {
                photoName: photoName,
                photographer: photographer,
                exhibition: exhibition,
                country: country,
                year: year,
                style: style,
                photo: photo
            }
            try {
                addNewEvent(newEventData).then(data => {
                setPhotoName("")
                setPhotographer("")
                setExhibition("")
                setCountry("")
                setYear("")
                setStyle("")
                setPhoto("")
                alert(data?.exhibition + " was saved!")
            })
            } catch (err) {
                console.log(err)
                alert(err)
            }
            
        } else {
            alert("Please fill in the fields!")
        }
    }

    return (
        <div className="form-wrapper">
            <h2>
                Photo-Form
            </h2>

            <form onSubmit={handleNewEvent}>
                <Input
                    label="Photo Name"
                    name="Photo Name"
                    type="input"
                    value={photoName}
                    onChange={handlePhotoName}
                />

                <Input
                    label="Photographer"
                    name="Photographer"
                    type="input"
                    value={photographer}
                    onChange={handlePhotographer}
                />

                <Input
                    label="Exhibition"
                    name="Exhibition"
                    type="input"
                    value={exhibition}
                    onChange={handleExhibition}
                />

                <Input
                    label="Country"
                    name="Country"
                    type="input"
                    value={country}
                    onChange={handleCountry}
                />

                <Input
                    label="Year"
                    name="Year"
                    type="month"
                    value={year}
                    onChange={handleYear}
                />

                <Input
                    label="Style"
                    name="Style"
                    type="input"
                    value={style}
                    onChange={handleStyle}
                />

                <Input
                    label="Photo"
                    name="Photo"
                    type="file"
                    value={photo}
                    onChange={handlePhoto}
                />          

                <Input
                    name="Submit"
                    type="submit"
                    value="submit"
                />    
            </form>
        </div>
    );
}

export default Form;
