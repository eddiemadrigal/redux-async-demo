import { 
    FETCH_ADVICE_START, 
    FETCH_ADVICE_SUCCESS, 
    FETCH_ADVICE_FAILURE
} from '../actions/adviceActions';

export const initialState = {
    error: '',
    isFetching: false,
    advice: ''
};

export const adviceReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case FETCH_ADVICE_START:
            return {
                ...state,
                error: '',
                isFetching: true,
                advice: ''
            };
        case FETCH_ADVICE_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                advice: action.payload
            };
        case FETCH_ADVICE_FAILURE:
            return {
                ...state,
                error: 'A Fetch Error Occurred!',
                advice: ''
            }
        default:
            return state;
    }
}