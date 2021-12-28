const initialState={
    bats:20
}

const batReducer=(state=initialState,action)=>{
    // return state;
    switch(action.type){
        case "BUY_BAT":
            return {...state,bats:state.bats-1}

        default:
            return state    
    }
}

export default batReducer;

