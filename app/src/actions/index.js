import axios from 'axios';

export const FETCH_IMAGE_SUCCESS = "FETCH_IMAGE_SUCCESS";
// export const FETCH_IMAGE_LOADING = "FETCH_IMAGE_LOADING";
export const FETCH_IMAGE_FAIL = "FETCH_IMAGE_FAIL";


export const getImage = () => {

    return dispatch => {
        // dispatch(fetchImageLoading());

        axios
            .get("https://api.thecatapi.com/v1/images/search")
            .then((res) => {
                console.log(res)
                dispatch(fetchImageSuccess(res.data[0].url));
            })
            .catch((err) => {
                console.log(err)
                dispatch(FETCH_IMAGE_FAIL(err.Response.code));
            });
    }
}


// export const fetchImageLoading = () => {
//     return ({ type: FETCH_IMAGE_LOADING })
// }

export const fetchImageSuccess = (url) => {
    return ({ type: FETCH_IMAGE_SUCCESS, payload: url })
}

export const fetchImageFail = (error) => {
    return ({ type: FETCH_IMAGE_FAIL, payload: error })
}