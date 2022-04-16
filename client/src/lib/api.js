import axios from "axios";

const BaseURL = "http://localhost:5500/photos"

export async function addNewEvent(eventData) { 
    const {photoName, photographer, exhibition, country, year, style, photo, emptyCanvas} = eventData
    console.log(eventData)
    const response = await axios.post(
        `${BaseURL}`, 
        {photoName, photographer, exhibition, country, year, style, photo, emptyCanvas},
        // {headers: {
        //         "Content-type": "multipart/form-data",
        //         "boundary": "********",
        //     },
        // }
    );
    return response;
}

export async function getAllPhotosByExhibition(exhibition) { 
    const response = await axios.get(`${BaseURL}/${exhibition}`);
    return response;
}

export async function getAllPhotosByCountry(country) { 
    const response = await axios.get(`${BaseURL}/${country}`);
    return response;
}