import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    //https://api.themoviedb.org/3/movie/550?api_key=7fb4b1c39f0d6052ef9c71d7371f9428
});

export default instance;