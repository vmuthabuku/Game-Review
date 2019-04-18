import axios from "axios"

export function getGames(
    limit = 10,
    start = 0,
    order = 'asc',
    list = ""
){
    
    const request = axios.get(`/api/getgames?limit=${limit}&skip=${start}&order=${order}`)
                        .then(response => {
                            if(list) {
                                return [...list, ...response.data]
                            }else{
                                return response.data
                            }
                        })

    return {
        type:'GET_GAMES',
        payload:request
    }

}

export function getGameWithReviewer(id){
    const request = axios.get(`/api/getgame?id=${id}`)

    return(dispatch)=>{
        request.then(({data})=>{
            let game = data
            console.log(game)

            axios.get(`/api/getReviewer?id=${game.ownerId}`)
            .then(({data})=>{
                let response = {
                    game,
                    reviewer:data
                }
                console.log(response)

                dispatch({
                    type:'GET_REVIEW_DATA',
                    payload:response
                })
            })
        })
    }
}

export function clearGameWithReviewer(){
    return {
        type:"CLEAR_UNMOUNT_RELOAD",
        payload:{
            game:{},
            reviewer:{}
        }
    }
}

