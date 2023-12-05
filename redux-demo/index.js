const BUY_CAKE = 'BUY_CAKE';

//action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First Redux action',
  };
}


const initialState ={
    numOfCakes =10

}

const reducere
 = (state = initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
    
}