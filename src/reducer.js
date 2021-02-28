export const initialState ={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    // token:null,
}
const reducer =(state, action) =>{
    switch(action.type){
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLIST":
            return{
                ...state,
                playlists: action.playlists,
            };
        default:
        return state;
    }
}
export default reducer;