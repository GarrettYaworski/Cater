const initialstate = {
  stuff: []
}

const GET_STUFF = 'GET_STUFF'

export default function(state = initialstate, action){
  switch (action.type) {
    case `${GET_STUFF}_FULFILLED`:{
      return{
        ...state,
        stuff: action.payload
      }
    }
    default:
      return state
  }
}

export function getStuff(){
  return {
    type: 'GET_STUFF',
    payload: ["stuff"]
  }
}