import Axios from 'axios';


export function ShowBooks() {
    return async(dispatch) => {
        Axios.get('http://localhost:8080/books?page=0&size=5',  {
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

export function sendActionShowToRedux(listBook) {
    return {
        type: "showBook",
        payload: listBook
    }
}

export function GetBookSize() {
    var index = 0;
        var data = {};
        var config = {
            method: 'PUT',
            headers: {
            "Authorization": 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjA2ODgyMTUyLCJleHAiOjE2MDc0ODY5NTJ9.pqtJNdc_iy7vwEDOHFMxWr0qZtUb8wQDoPw_r5lyl-EfnQaiWacUbWxJ9TVyfS9v-VBqJkT7fRsfYQdq4CpNpA',
            'Content-Type': 'application/json'
            }
        }
        Axios.put('http://localhost:8080/books', data, config)
        .then(function (responds) {
            localStorage.setItem('bookSize', responds.data.length);
        })  
        
    index = localStorage.getItem('bookSize');
    return index;
}

export function ChangeListBookByPageIndex(id) {
    return async(dispatch) => {
        Axios.get('http://localhost:8080/books?page=' + (id-1)+ '&size=5', {
            method: 'GET',
            data: {},
            headers: {
                "Authorization": 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjA2ODgyMTUyLCJleHAiOjE2MDc0ODY5NTJ9.pqtJNdc_iy7vwEDOHFMxWr0qZtUb8wQDoPw_r5lyl-EfnQaiWacUbWxJ9TVyfS9v-VBqJkT7fRsfYQdq4CpNpA',
                'Content-Type': 'application/json'
            },
        })
            .then(function (responds) {
                dispatch(loadListBookByPageIndex(responds.data));
            })
    }
}

export function loadListBookByPageIndex(listUser) {
    return {
        type: 'changeListBookByIndex',
        payload: listUser
    }
}

export function GetBookListFromDB() {
    var data = {};
    var bookNameList = [];
    var config = {
        method: 'PUT',
        headers: {
        "Authorization": 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjA2ODgyMTUyLCJleHAiOjE2MDc0ODY5NTJ9.pqtJNdc_iy7vwEDOHFMxWr0qZtUb8wQDoPw_r5lyl-EfnQaiWacUbWxJ9TVyfS9v-VBqJkT7fRsfYQdq4CpNpA',
        'Content-Type': 'application/json'
        }
    }
    Axios.put('http://localhost:8080/books', data, config)
    .then(function (responds) {
        for (var i = 0; i <= responds.data.length; i++) {
            if (responds.data[i] != null) {
                if (responds.data[i].statusBook == "APPROVED")
                bookNameList.push({Country: responds.data[i].name, id: responds.data.id});
            }
        }
        localStorage.setItem('booksNameList', JSON.stringify(bookNameList));
    }) 

    const jsonBookNameList = localStorage.getItem('booksNameList');
    const getBookNameList = JSON.parse(jsonBookNameList);
    return getBookNameList;
}

export function ChangeStatusBookByPageIndex(id) {
    Axios.post('http://localhost:8080/books/' + id,  {
            method: 'POST',
            data: {},
            headers: {
                "Authorization": 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjA2ODgyMTUyLCJleHAiOjE2MDc0ODY5NTJ9.pqtJNdc_iy7vwEDOHFMxWr0qZtUb8wQDoPw_r5lyl-EfnQaiWacUbWxJ9TVyfS9v-VBqJkT7fRsfYQdq4CpNpA',
                'Content-Type': 'application/json'
            },
        })
            .then(function (responds) {
                window.location = "/book";
            })
}

export function DeleteFunction(id) {
    Axios.delete('http://localhost:8080/books/' + id, {
      headers: {
        "Authorization": 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjA2ODgyMTUyLCJleHAiOjE2MDc0ODY5NTJ9.pqtJNdc_iy7vwEDOHFMxWr0qZtUb8wQDoPw_r5lyl-EfnQaiWacUbWxJ9TVyfS9v-VBqJkT7fRsfYQdq4CpNpA',
      },
    })
    .then(function (response) {
      alert("delete Working!"); 
      window.location = "/book";
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function AddFunction(id, iex) {
    console.log(id);
    console.log(iex);
}