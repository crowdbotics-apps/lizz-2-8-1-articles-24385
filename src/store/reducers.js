import * as types from "./constants"

const initialState = { dogapi_get_RandomDogImages: [], dogAPI: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.DOGAPI_GET_BREEDS_IMAGE_RANDOM_READ:
    case types.DOGAPI_GET_BREEDS_IMAGE_RANDOM_READ_SUCCEEDED:
      return Object.assign({}, state, {
        dogapi_get_RandomDogImages: [
          ...state.dogapi_get_RandomDogImages.filter(
            record => record.id !== action.response.id
          ),
          action.response
        ]
      })
    case types.DOGAPI_GET_BREEDS_IMAGE_RANDOM_READ_FAILED:
      return Object.assign({}, state, {
        dogAPI: [...state.dogAPI, action.response]
      })
    default:
      return state
  }
}
