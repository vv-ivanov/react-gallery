export const ADD_IMAGE = 'ADD_IMAGE'
export const GET_REQUEST = 'GET_REQUEST'
export const GET_SUCCESS = 'GET_SUCCESS'
export const GET_FAIL = 'GET_FAIL'

import axios from 'axios'

export function addImage(image) {
    return dispatch => {
        dispatch({
            type: ADD_IMAGE,
            payload: image,
        })
    }
}

export function addImageList(imageList) {//https://api.myjson.com/bins/tx4hf
    return function(dispatch){
        dispatch({
            type: GET_REQUEST,
        })
    
        axios.get(imageList)
            .then(function (response) {
                if(response.status === 200){
                    dispatch({
                        type: GET_SUCCESS,
                        payload: response.data.galleryImages,
                    })
                }
            })
            .catch(function (error) {
                dispatch({
                    type: LOGIN_FAIL,
                })
                console.error(error);
            })
    }
}