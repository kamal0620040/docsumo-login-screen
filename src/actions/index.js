import * as types from './types';

// These are action creators. They are simply wrappers around actions
// that make it neater for components to dispatch actions. Instead
// of the component having to use a dispatch method and include the action
// themselves they can simple call one of these action creators
// which will be passed as a callback function.

export const startValidator = (emailAndPassword) => ({
    type: types.START_VALIDATION,
    payload: emailAndPassword
})

export const startLogin = (emailAndPassword) => ({
    type: types.START_LOGIN,
    payload: emailAndPassword
})

export const setUser = () => ({
    type: types.START_SET_USER,
})