import * as types from '../actions/actionTypes';

export default function Detail (state={} , action={}){
  console.log(action,1112)
  switch (action.type) {
    case types.ARTICLE_DETAIL:
      return Object.assign(
        {} , state , {
          data : action.data
        }
      )
      break;
    default:
      return state;
  }
}
