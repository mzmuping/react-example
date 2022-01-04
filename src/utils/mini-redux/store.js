import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import count_redux from './count_redux';
//异步函数
const store = createStore(count_redux, applyMiddleware(thunk))
export default store;