import { FETCH_IMAGE_LOADING, FETCH_IMAGE_SUCCESS, FETCH_IMAGE_FAIL } from './../actions'

const initialState = {
    url: "",
    // isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        // case (FETCH_IMAGE_LOADING):
        //     return ({
        //         ...state,
        //         isFetching: true
        //     })

        case (FETCH_IMAGE_SUCCESS):
            return ({
                ...state,
                url: action.payload
            })

        case (FETCH_IMAGE_FAIL):
            return ({
                ...state,
                error: action.payload,
            })

        default:
            return state;

    }
};

