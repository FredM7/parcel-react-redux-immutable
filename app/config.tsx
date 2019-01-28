import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { createStore } from "redux";
import { Provider } from "react-redux";

import Main from "./main";

//The reducer is responsible for 
//supplying the initial state, for Redux.
class InitialState {
    name: string = "zxczczc";
    count: number = 0;
}

function reducer(state = new InitialState, action) {
    console.log(action);
    switch (action.type) {
        case "Increment":
            return {
                count: state.count + 1
            };    
        default:
            return state;
    }
}

const store = createStore(reducer);
store.dispatch({
    type: "Increment"
});

if (process.env.NODE_ENV === 'development') { 
    //Or, process.env.NODE_ENV !== 'production'?
    //Currently, this only runs in development and 
    //will be stripped from production build.
}

let Config: any = (
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
            <Main name={"asdad"}/>
        </Router>
    </Provider>
);
export default Config;