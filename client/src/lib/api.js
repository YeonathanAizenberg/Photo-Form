import axios from "axios";

const BaseURL = "http://localhost:5500"

export async function addNewEvent(eventData) { 
    const {photoName, photographer, exhibition, country, year, style} = eventData
    const response = await axios.post(`${BaseURL}/events`, {photoName, photographer, exhibition, country, year, style});
    return response;
}

export async function addNewPhotoToEvent(formPhoto, eventId) { 
    const response = axios.post(`${BaseURL}/photo/${eventId}`, formPhoto,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    );
    return response;
}

export async function getAllPhotosByExhibition(exhibition) { 
    const response = await axios.get(`${BaseURL}/events/exhibition/${exhibition}`);
    return response;
}

export async function getAllPhotosMetaByCountry(country) { 
    const response = await axios.get(`${BaseURL}/events/country/${country}`);
    return response;
}