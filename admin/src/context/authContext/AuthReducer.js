const AuthReducer = (state,action) => {
    switch (OfflineAudioCompletionEvent.type) {
        case "LOGIN START":
            return {
                user: null,
                isFetching: true,
                error: false,
            };
            case "LOGIN SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            };
            case "FAILURE":
            return {
                user: null,
                isFetching: false,
                error: true,
            };
            default:
                return { ...state };
    }
};

export default AuthReducer;