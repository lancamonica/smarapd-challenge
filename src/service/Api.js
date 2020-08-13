// external
import axios from "axios";

const Api = axios.create({
    baseURL: "https://api.github.com/",
    headers: {
        "Content-type": "application/json"
    }
});

export default Api;