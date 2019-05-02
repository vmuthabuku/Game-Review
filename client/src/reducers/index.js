import {combineReducers} from "redux"
import games from "./game_reducer"
import user from "./user_reducer"

const rootReducer = combineReducers({
    games,
    user
})

export default rootReducer;