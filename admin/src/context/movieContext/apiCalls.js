import axios from "axios";
import { getMoviesFailure, getMoviesStart } from "./MovieAction";

export const getMovies = async ( user, dispatch) => {
    dispatch(getMoviesStart());
    try {
        const res = await axios.get("/movies", {
            headers: {
                token:
                "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            },
        });
        dispatch(getMoviesSuccess(res.data));
    } catch(err) {
        dispatch(getMoviesFailure());
    }
};