// import React from 'react';
// import {createStore} from 'redux';
//import {saveState} from './localStorage/localStorage.js'

const defaultState = [{}];//{name: "chuan"};

export function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'showCat':
            state = action.payload;
            //alert("hello");
            //console.log(state);
            //localStorage.setItem('state', JSON.stringify(state));
            return state
        case 'changeListCatByIndex':
            state = action.payload;
            return state
        case 'getObjCat': 
            var category = action.payload;
            return category 
        case 'showBook': 
            state = action.payload;
            return state;
        case 'getObjBook':
            var book = action.payload;
            return book
        case 'changeListBookByIndex':
            state = action.payload;
            return state;
        case 'showAuthor': 
            state = action.payload;
            return state;
        case 'getObjAuthor': 
            var author = action.payload;
            return author 
        case 'changeListAuthorByIndex':
            state = action.payload;
            return state;
        case 'showComment': 
            state = action.payload;
            return state;
        case 'changeListCommentByIndex': 
            state = action.payload;
            return state;
        case 'showContact': 
            state = action.payload;
            return state;
        case 'showUser': 
            state = action.payload;
            return state;
        case 'getUserObject':
            var user = action.payload;
            return user
        case 'changeListUserByIndex':
            state = action.payload;
            return state
        case 'getObjectContact':
            var contact = action.payload;
            return contact
        default:
            return state
    }
    //return state;
 }

//const store = createStore(reducer);

// let changeName = {
//     type: "CHANGENAME",
//     payload: "Phan Minh Chuan"
// }

// store.dispatch(changeName);

//console.log(store.getState());