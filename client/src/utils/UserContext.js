import React from "react";
import {
    USER_SIGNIN,
    USER_SIGNUP,
    USER_LOGOUT,
    ERR_PASSWORD,
    ERR_SIGNIN,
    ERR_SIGNUP
} from "./actions";

// Set the user of the page to default to ""
// The getUserToken method defaults to an empty method
export const UserContext = React.createContext();
const initialState = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    user_type: "client",
    unMatchPwdErr: "",
    signupError: {},
    signinError: {},
    isAuthenticated: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case USER_SIGNUP:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                user_type: action.payload.user_type,
                isAuthenticated: true
            }
        case USER_SIGNIN:
            return {
                ...state,
                isAuthenticated: true,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                user_type: action.payload.user_type
            };
        case USER_LOGOUT:
            return {
                ...state,
                isAuthenticated: false
            };
        case ERR_PASSWORD:
            return {
                ...state,
                unMatchPwdErr: action.error,
                isAuthenticated: false
            }
        case ERR_SIGNIN:
            return {
                ...state,
                signinError: action.error,
                isAuthenticated: false
            };
        case ERR_SIGNUP:
            return {
                ...state,
                signupError: action.error,
                isAuthenticated: false
            };
        default:
            return state;
    }
};

export const UserProvider = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <UserContext.Provider value={{state, dispatch}}>
            {props.children}
        </UserContext.Provider>
    )
}