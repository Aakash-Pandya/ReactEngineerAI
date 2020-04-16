import { apiUrl,nasaApiKey } from "../config.json";
import http from "./httpService";

const apiEndPoint = apiUrl;

function appendNasaApiKey(){
    return "?api_key=" + nasaApiKey;
}

export function getAsteroids(){
    return http.get(apiEndPoint + "browse" + appendNasaApiKey());
}

export function getAsteroidByID(id){
    return http.get(apiEndPoint + id + appendNasaApiKey());
}