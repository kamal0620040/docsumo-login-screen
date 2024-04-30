import * as types from '../../actions/types';
import { createLogic } from 'redux-logic';
import axios from 'axios';
import store from './../appStore';
import { startLogin } from '../../actions';

const loginValidatorLogic = createLogic({
    type: types.START_VALIDATION,
    latest: true,

    // processOptions: {
    //     dispatchReturn: true,
    //     successType: types.VALIDATION_SUCCESSFULL,
    //     failType: types.VALIDATION_FAILURE
    // },

    process({ action }, dispatch, done){

        // console.log('started process with action type: ' + action.type);
        // console.log('started process with action payload: ' + action.payload);

        return axios({
                method: 'post',
                url: '/api/v1/eevee/validate/login/?type=email',
                data: action.payload,
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            }).then ((resp) => {
                // console.log(resp.data);
                if(resp.data.status_code === 200){
                    store.dispatch(startLogin(action.payload));
                }else{
                    dispatch({type: types.VALIDATION_FAILURE, payload: resp.data})
                }
            }).catch((error)=>{
                // console.log(error.response.data);
                dispatch({type: types.VALIDATION_FAILURE, payload: error.response.data})
            }).finally(()=> done());
    }
})

export default [
    loginValidatorLogic
]