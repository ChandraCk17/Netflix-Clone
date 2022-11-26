export const getMoviesStart = () => ({
    type: "GET_MOVIES_START",
});

export const getMoviesSuccess = () => ({
    type: "GET_MOVIES_SUCCESS",
});

export const getMoviesFailure = () => ({
    type: "GET_MOVIES_FAILURE",
});

export const deleteMovieStart = () => ({
    type: "DELETE_MOVIES_START",
});

export const deleteMovieSuccess = (id) => ({
    type: "DELETE_MOVIES_SUCCESS",
    payload: id,
});

export const deleteMovieFailure = () => ({
    type: "DELETE_MOVIES_FAILURE",
});