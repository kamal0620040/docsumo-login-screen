import * as types from '../../actions/types';

const initialState = {
    isLoginProcessing: true,
    loginData: undefined,
    isLoggedIn: false
};

const login = (state = initialState, action) => {
    switch(action.type){
        case types.START_LOGIN:
            return {
                ...state,
                isLoginProcessing: true
            };
        
        case types.LOGIN_SUCCESSFULL:
            // console.log({
            //     action_payload: action.payload
            // });

            return {
                ...state,
                isLoginProcessing: false,
                isLoggedIn: true,
                loginData: action.payload
            };
        
        case types.LOGIN_FAILURE:
            // console.log({
            //     action_payload: action.payload
            // });
            
            return {
                ...state,
                isLoginProcessing: false,
                isLoggedIn: false,
                loginData: undefined,
            };
        
        case types.START_SET_USER:
            // console.log({
            //     action_payload: action.payload
            // });

            return {
                ...state,
                isLoginProcessing: true,
                isLoggedIn: false,
                loginData: undefined,
            };
        
        // case types.SET_USER:
        //     console.log({
        //         action_payload: action.payload
        //     });

        //     return {
        //         ...state,
        //         isLoginProcessing: false,
        //         isLoggedIn: true,
        //         loginData: action.payload,
        //     };

        default:
            return state;
    }
}

export default login;