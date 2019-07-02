import { ADD_IMAGE, GET_REQUEST, GET_SUCCESS, GET_FAIL } from '../actions/galleryActions'

const initialState = {
    listImage: [],
    arrayImage: []
}

export function galleryReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_IMAGE:
            return { 
                ...state, 
                listImage: [
                    ...state.listImage, 
                    {
                        id:parseInt(+new Date()/1000, 10),
                        url: action.payload
                    }
                ] 
            }
        case GET_REQUEST:
                return { ...state}
        case GET_SUCCESS:
            //console.log(action.payload, 'action.payload')
            return { 
                ...state, 
                arrayImage: action.payload
            }
        case GET_FAIL:
                return {...state}
        default:
            return state
    }
}
