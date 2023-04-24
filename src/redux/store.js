import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { zoomReducer } from "../redux/reducer/zoomReducer";
import { studentReducer } from "../redux/reducer/studentReducer";

const reducer = combineReducers({
  zoom: zoomReducer,
  stu: studentReducer,
});


const middleware = [thunk];
 
const store = createStore(
    reducer,
    
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;