export const initialState = {
  loading: false,
  success: false,
  error: false,
  data: {},
};

export const ADD_RESERVATION_REQUEST = 'ADD_RESERVATION_REQUEST';
export const ADD_RESERVATION_ERROR = 'ADD_RESERVATION_ERROR';
export const ADD_RESERVATION_SUCCESS = 'ADD_RESERVATION_SUCCESS';
export const CLEAR_RESERVATION = 'CLEAR_RESERVATION';

export const addReservation = (data) => ({
  type: ADD_RESERVATION_REQUEST,
  data,
});

export const clearReservation = () => ({
  type: CLEAR_RESERVATION
})

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ADD_RESERVATION_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      }
    case ADD_RESERVATION_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload
      }
    case CLEAR_RESERVATION:
      return {
        ...state,
        loading: false,
        success: false,
        error: false,
      }
    default:
      return state;
  }
}


export default reducer;