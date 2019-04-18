import {combineReducers} from "redux"
import games from "./game_reducer"
import users from "./user_reducer"

const rootReducer = combineReducers({
    games,
    users
})

export default rootReducer;