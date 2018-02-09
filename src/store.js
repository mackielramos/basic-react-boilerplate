import { applyMiddleware, createStore } from "redux"

import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"
let middleware = applyMiddleware(promise(), thunk, createLogger())
if(process.env.NODE_ENV == 'production'){
	middleware = applyMiddleware(promise(), thunk)
}

export default createStore(reducer, middleware)
