import axios from "axios";

//General information to all requests
export const api = axios.create({
    baseURL: 'https://us-central1-ss-devops.cloudfunctions.net/',
})