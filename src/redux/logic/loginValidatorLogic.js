import * as types from '../../actions/types';
import { createLogic } from 'redux-logic';
import axios from 'axios';
import store from './../appStore';
import { startLogin } from '../../actions';

const loginValidatorLogic = createLogic({
    type: types.START_VALIDATION,
    latest: true,

    processOptions: {
        dispatchReturn: true,
        successType: types.VALIDATION_SUCCESSFULL,
        failType: types.VALIDATION_FAILURE
    },

    process({ action }){

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
                    return resp.data;

                    // console.log(resp.headers);
                    // console.log(resp.headers['Set-Cookie']);
                    // console.log("lol");
                    // console.log(Cookies.get('token'));
                    
                    // Get the token and call the login api
                    // const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNWU0OTMzMzM2OWQ4YWU0YmIwNDU1NDA1IiwiZW1haWwiOiJmcm9udGVuZEBkb2NzdW1vLmNvbSIsImlhdCI6MTcxNDMxNjUxNCwicm9sZSI6Im93bmVyIiwib3JnX2lkIjoiNWU0OTMzMzM2OWQ4YWU0YmIwNDU1NDA1IiwiaXNfb3R0Ijp0cnVlLCJtb2RlIjoicHJvZCIsImV4cCI6MTcxNDMxNjgxNH0.vhcntl_4Vw0W02YcTQA8b4KEks-bvB0E27MxqDYKmGU";
                    // return token;

                    // await axios({
                    //     method: 'post',
                    //     url: '/api/v1/eevee/login/',
                    //     data: action.payload,
                    //     headers: {
                    //         accept: 'application/json',
                    //         'Content-Type': 'application/json',
                    //     },
                    //     withCredentials: true,
                    // }).then(res => {
                    //     console.log(res.data.data.token);
                    //     return res.data.data;
                    // })
                }else{
                    return resp.data;
                }
            });
    }
})

export default [
    loginValidatorLogic
]