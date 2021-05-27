import { combineReducers } from 'redux'
import GetTrends from './reducers/trendsReducer'
//                  combina todos reducers
const rootReducer = combineReducers({
    trend: GetTrends,
})

export default rootReducer