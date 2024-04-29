import * as types from '../../actions/types';
import { createLogic } from 'redux-logic';
import axios from 'axios';

const loginLogic = createLogic({
    type: [types.START_LOGIN, types.START_SET_USER],
    latest: true,

    // processOptions: {
    //     dispatchReturn: true,
    //     successType: types.LOGIN_SUCCESSFULL,
    //     failType: types.LOGIN_FAILURE,
    // },

    process({ action }, dispatch, done){
        if(action.type === types.START_LOGIN){
            // console.log('started process with action type: ' + action.type);
            // console.log('started process with action payload: ' + action.payload);
    
            return axios({
                    method: 'post',
                    url: '/api/v1/eevee/login/',
                    data: action.payload,
                    headers: {
                        accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
            }).then ((resp) => {
                if(resp.data.status_code === 200){
                    dispatch({ type: types.LOGIN_SUCCESSFULL, payload: resp.data.data.user });
                }else{
                    dispatch({ type: types.LOGIN_FAILURE, payload: resp.data.data });    
                }
            }).catch((resp)=>{
                dispatch({ type: types.LOGIN_FAILURE, payload: resp.data });
            }).finally(()=>{
                done();
            })
        }else if(action.type === types.START_SET_USER){
            // console.log('started process with action type: ' + action.type);
            // console.log('started process with action payload: ' + action.payload);
    
            return axios({
                    method: 'get',
                    url: '/api/v1/eevee/user/',
                    headers: {
                        accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
            }).then ((res) => {
                if(res.data.status_code === 200){
                    // dispatch({ type: types.SET_USER, payload: res.data.data.user });
                    dispatch({ type: types.LOGIN_SUCCESSFULL, payload: res.data.data.user });
                }
            }).catch((res)=>{
                dispatch({ type: types.LOGIN_FAILURE, payload: res.data });
            }).finally(()=>{
                done();
            })
        }
    }
})

export default [
    loginLogic
]