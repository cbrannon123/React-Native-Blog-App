import axios from 'axios';

export default axios.create({
    //Must update every 8 hours
    baseURL: ' http://65b1d196.ngrok.io'
});