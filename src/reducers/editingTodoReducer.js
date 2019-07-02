import {SET_TODO_TEXT, ADD_TODO} from '../actions';

const INITAL_STATE = {
    id: null,
    text: '',
    done: false
};

const editingTodoReducer = (state = INITAL_STATE , action) => {
    switch (action.type){
        case  SET_TODO_TEXT:         
            return {
              ...state,
              text: action.text
            };
        case ADD_TODO:
            return {
                INITAL_STATE
            }
        default:
            return state;
    }
}

export default editingTodoReducer;