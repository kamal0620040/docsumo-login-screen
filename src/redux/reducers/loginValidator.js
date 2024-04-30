import * as types from '../../actions/types';

const initialState = {
    isProcessing: false,
    validationData: {},
    isValidated: false
};

const loginValidator = (state = initialState, action) => {
    switch(action.type){
        case types.START_VALIDATION:
            return {
                ...state,
                isProcessing: true
            };
        
        case types.VALIDATION_SUCCESSFULL:
            // console.log({
            //     action_payload: action.payload
            // });

            return {
                ...state,
                isProcessing: false,
                isValidated: true,
                validationData: action.payload
            };
        
        case types.VALIDATION_FAILURE:
            // console.log({
            //     action_payload: action.payload
            // });
            
            return {
                ...state,
                isProcessing: false,
                isValidated: false,
                validationData: action.payload,
            };
        
        default:
            return state;
    }
}

export default loginValidator;

