import Axios from 'axios';

export function ShowUsers() {
    return async(dispatch) => {
        Axios.get('http://localhost:8080/users',  {
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
        type: "showUser",
        payload: listUser
    }
}

export function GetUserSize() {
    var index = 0;
        var data = {};
        var config = {
            method: 'PUT',
            headers: {
            "Authorization": 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjA2ODgyMTUyLCJleHAiOjE2MDc0ODY5NTJ9.pqtJNdc_iy7vwEDOHFMxWr0qZtUb8wQDoPw_r5lyl-EfnQaiWacUbWxJ9TVyfS9v-VBqJkT7fRsfYQdq4CpNpA',
            'Content-Type': 'application/json'
            }
        }
        Axios.put('http://localhost:8080/users', data, config)
        .then(function (responds) {
            localStorage.setItem('userSize', responds.data.length);
        })  
        
    index = localStorage.getItem('userSize');
    return index;
}

export function ChangeListUserByPageIndex(id) {
    return async(dispatch) => {
        Axios.get('http://localhost:8080/users?page=' + (id-1)+ '&size=7', {
            method: 'GET',
            data: {},
            headers: {
                "Authorization": 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjA2ODgyMTUyLCJleHAiOjE2MDc0ODY5NTJ9.pqtJNdc_iy7vwEDOHFMxWr0qZtUb8wQDoPw_r5lyl-EfnQaiWacUbWxJ9TVyfS9v-VBqJkT7fRsfYQdq4CpNpA',
                'Content-Type': 'application/json'
            },
        })
            .then(function (responds) {
                dispatch(loadListUserByPageIndex(responds.data));
            })
    }
}

export function loadListUserByPageIndex(listUser) {
    return {
        type: 'changeListUserByIndex',
        payload: listUser
    }
}