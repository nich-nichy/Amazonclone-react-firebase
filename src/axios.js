import axios from "axios";
const instance = axios.create({
    baseURl: 'http://localhost:5001/clone-2d8be/us-central1/api'
});
export default instance; 