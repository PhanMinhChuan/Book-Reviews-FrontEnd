import Axios from 'axios';

export function ShowComments() {
    return async(dispatch) => {
        Axios.get('http://localhost:8080/comments',  {
            method: 'GET',
            data: {},
            headers: {
                "Authorization": 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjA2ODgyMTUyLCJleHAiOjE2MDc0ODY5NTJ9.pqtJNdc_iy7vwEDOHFMxWr0qZtUb8wQDoPw_r5lyl-EfnQaiWacUbWxJ9TVyfS9v-VBqJkT7fRsfYQdq4CpNpA',
                'Content-Type': 'application/json'
            },
        }) 
            .then(function (responds) {
                //console.log(responds.data);
                dispatch(sendActionShowToRedux(responds.data));
            })
    }
}

export function sendActionShowToRedux(listContact) {
    return {
        type: "showComment",
        payload: listContact
    }
}

export function GetCommentSize(id) {
    var index = 0;
        var data = {};
        var config = {
            method: 'PUT',
            headers: {
            "Authorization": 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjA2ODgyMTUyLCJleHAiOjE2MDc0ODY5NTJ9.pqtJNdc_iy7vwEDOHFMxWr0qZtUb8wQDoPw_r5lyl-EfnQaiWacUbWxJ9TVyfS9v-VBqJkT7fRsfYQdq4CpNpA',
            'Content-Type': 'application/json'
            }
        }
        Axios.put('http://localhost:8080/comments', data, config)
        .then(function (responds) {
            localStorage.setItem('commentSize', responds.data.length);
        })  
        
    index = localStorage.getItem('commentSize');
    return index;
}

export function ChangeListCommentByPageIndex(id) {
    return async(dispatch) => {
        Axios.get('http://localhost:8080/comments?page=' + (id-1)+ '&size=7', {
            method: 'GET',
            data: {},
            headers: {
                "Authorization": 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjA2ODgyMTUyLCJleHAiOjE2MDc0ODY5NTJ9.pqtJNdc_iy7vwEDOHFMxWr0qZtUb8wQDoPw_r5lyl-EfnQaiWacUbWxJ9TVyfS9v-VBqJkT7fRsfYQdq4CpNpA',
                'Content-Type': 'application/json'
            },
        })
            .then(function (responds) {
                dispatch(loadListCommentByPageIndex(responds.data));
            })
    }
}

export function loadListCommentByPageIndex(listComment) {
    return {
        type: 'changeListCommentByIndex',
        payload: listComment
    }
}

export function delFunc(id) {
    Axios.delete('http://localhost:8080/comments/' + id, {
      headers: {
        "Authorization": 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjA2ODgyMTUyLCJleHAiOjE2MDc0ODY5NTJ9.pqtJNdc_iy7vwEDOHFMxWr0qZtUb8wQDoPw_r5lyl-EfnQaiWacUbWxJ9TVyfS9v-VBqJkT7fRsfYQdq4CpNpA',
      },
    })
    .then(function (response) {
      //alert("delete Working!"); 
      window.location = "/comment";
    })
    .catch(function (error) {
      console.log(error);
    })

}