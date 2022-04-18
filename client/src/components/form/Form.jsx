import { useState } from 'react';
import { addNewEvent, addNewPhotoToEvent } from '../../lib/api';
import CountrySelector from '../countrySelector/CountrySelector';
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
    }

    const handlePhotographer = (e) => {
        setPhotographer(e)
    }

    const handleExhibition = (e) => {
        setExhibition(e)
    }

    const handleYear = (e) => {
        setYear(e)
    }

    const handleStyle = (e) => {
        setStyle(e)
    }

    const handlePhoto = (e) => {
        setPhoto(e)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (photoName !== "" || photographer !== "" || exhibition !== "" || country !== "" || year !== "" || style !== "" || photo !== "") {
            const formData = new FormData();
            formData.append('file', photo);
            const newEventData = {
                photoName: photoName,
                photographer: photographer,
                exhibition: exhibition,
                country: country?.label,
                year: parseInt(year.split("-")[0]),
                style: style,
            }
            try {
                addNewEvent(newEventData).then(data => {
                    addNewPhotoToEvent(formData, data?.data.insertId).then(data => {
                        setPhotoName("")
                        setPhotographer("")
                        setExhibition("")
                        setCountry("")
                        setYear("")
                        setStyle("")
                        setPhoto("")
                        alert("Event was saved!")
                    })
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

            <form onSubmit={onSubmit}>
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

                <div className='country-selector'>
                    Country:
                    <CountrySelector
                        country={country}
                        setCountry={setCountry}
                    />
                </div>
                

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
                    accept="image/*"
                    value={photo?.name}
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
