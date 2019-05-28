import {SET_CURRENT_USER, CLEAR_CURRENT_USER} from '../actions/users'
import {ADD_ANSWER} from '../actions/shared';

export default function currentUser (state = {}, action) {
    switch (action.type) {
        case SET_CURRENT_USER :
            return action.currentUser;
        case CLEAR_CURRENT_USER :
            return {};
        case ADD_ANSWER :
            const {authedUser, qid, answer} = action.answerObj;
            if(state.id !== authedUser) return state;
            return {
                ...state,
                answers: {...state.answers, [qid]: answer}
            };
        default :
            return state;
    }
}
