import axios from "axios";

const BaseURL = "http://localhost:5500"

export async function addNewEvent(eventData) { 
    const {photoName, photographer, exhibition, country, year, style, emptyCanvas} = eventData
    const response = await axios.post(`${BaseURL}/events`, {photoName, photographer, exhibition, country, year, style, emptyCanvas});
    return response;
}

export async function addNewPhotoToEvent(formPhoto) { 
    const response = axios.post(`${BaseURL}/photo`, formPhoto,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    );
    return response;
}

export async function getAllPhotosByExhibition(exhibition) { 
    const response = await axios.get(`${BaseURL}/events/${exhibition}`);
    return response;
}

export async function getAllPhotosByCountry(country) { 
    const response = await axios.get(`${BaseURL}/events/${country}`);
    return response;
}