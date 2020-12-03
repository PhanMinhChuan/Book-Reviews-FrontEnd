import Axios from 'axios';

export function ShowAuthors() {
    return async(dispatch) => {
        Axios.get('http://localhost:8080/authors',  {
            method: 'GET',
            data: {},
            headers: {
                "Authorization": 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjA2ODgyMTUyLCJleHAiOjE2MDc0ODY5NTJ9.pqtJNdc_iy7vwEDOHFMxWr0qZtUb8wQDoPw_r5lyl-EfnQaiWacUbWxJ9TVyfS9v-VBqJkT7fRsfYQdq4CpNpA',
                'Content-Type': 'application/json'
            },
        })
            .then(function (responds) {
                dispatch(sendActionShowToRedux(responds.data));
            })
    }
}

export function sendActionShowToRedux(listUser) {
    return {
        type: "showAuthor",
        payload: listUser
    }
}

export function GetAuthorSize() {
    var index = 0;
        var data = {};
        var config = {
            method: 'PUT',
            headers: {
            "Authorization": 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjA2ODgyMTUyLCJleHAiOjE2MDc0ODY5NTJ9.pqtJNdc_iy7vwEDOHFMxWr0qZtUb8wQDoPw_r5lyl-EfnQaiWacUbWxJ9TVyfS9v-VBqJkT7fRsfYQdq4CpNpA',
            'Content-Type': 'application/json'
            }
        }
        Axios.put('http://localhost:8080/authors', data, config)
        .then(function (responds) {
            localStorage.setItem('authorSize', responds.data.length);
        })  
        
    index = localStorage.getItem('authorSize');
    return index;
}

export function ChangeListAuthorByPageIndex(id) {
    return async(dispatch) => {
        Axios.get('http://localhost:8080/authors?page=' + (id-1)+ '&size=7', {
            method: 'GET',
            data: {},
            headers: {
                "Authorization": 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjA2ODgyMTUyLCJleHAiOjE2MDc0ODY5NTJ9.pqtJNdc_iy7vwEDOHFMxWr0qZtUb8wQDoPw_r5lyl-EfnQaiWacUbWxJ9TVyfS9v-VBqJkT7fRsfYQdq4CpNpA',
                'Content-Type': 'application/json'
            },
        })
            .then(function (responds) {
                dispatch(loadListAuthorByPageIndex(responds.data));
            })
    }
}

export function loadListAuthorByPageIndex(listAuthor) {
    return {
        type: 'changeListAuthorByIndex',
        payload: listAuthor
    }
}