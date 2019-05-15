export default function(state={},action){
    switch(action.type){
        case "GET_GAMES":
            return { ...state, list:action.payload} 
        case "GET_REVIEW_DATA":
            return {...state,
                    game:action.payload.game,
                    reviewer:action.payload.reviewer
                }
        case "CLEAR_UNMOUNT_RELOAD":
                return {
                    ...state,
                    game:action.payload.game,
                    reviewer:action.payload.reviewer
                }
        case "ADD_GAME":
                return {
                    ...state,
                    newgame:action.payload,


                }
        default:
           return state;
    }
}