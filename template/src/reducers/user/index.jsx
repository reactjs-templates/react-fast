import { combineReducers } from 'redux';
import { ADD_USER, EDIT_USER, DELETE_USER } from '../../constants/ActionTypes';

import _ from 'lodash';

const initialState = {
    users: [1, 2, 3],
    usersById: {
        1: {
            id: 1,
            name: 'lulin'
        },
        2: {
            id: 2,
            name: 'lxh'
        },
        3: {
            id: 3,
            name: 'susu'
        }
    }
};

export function user (state = initialState, action) {
    switch(action.type) {
        case ADD_USER:
            // 自增的 id
            const newId = state.users[state.users.length - 1] + 1;
            return {
                users: state.users.concat(newId),
                usersById: {
                    ...state.usersById,
                    [newId]: {
                        id: newId,
                        name: action.name
                    }
                }
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(id => id !== action.id),
                usersById: _.omit(state.usersById, action.id)
            };
        case EDIT_USER:
            return state;
        default:
            return state;
    }
}
