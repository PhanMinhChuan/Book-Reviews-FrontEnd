import Axios from 'axios';

export function ShowUsers() {
    var Token = localStorage.getItem('Token');
    return async(dispatch) => {
        Axios.get('http://localhost:8080/users?page=0&size=6',  {
            method: 'GET',
            data: {},
            headers: {
                "Authorization": Token,
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
    var Token = localStorage.getItem('Token');
    var index = 0;
        var data = {};
        var config = {
            method: 'PUT',
            headers: {
            "Authorization": Token,
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
    var Token = localStorage.getItem('Token');
    return async(dispatch) => {
        Axios.get('http://localhost:8080/users?page=' + (id-1)+ '&size=6', {
            method: 'GET',
            data: {},
            headers: {
                "Authorization": Token,
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

export function DeletedUserFunc(id) {
    var Token = localStorage.getItem('Token');
    Axios.delete('http://localhost:8080/users/' + id, {
      headers: {
        "Authorization": Token,
      },
    })
    .then(function (response) {
      window.location = "/user";
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function GetObjectUserById(id) {
    var Token = localStorage.getItem('Token');
    return async(dispatch) => {
        Axios.get('http://localhost:8080/users/' + id,  {
            method: 'GET',
            data: {},
            headers: {
                "Authorization": Token,
                'Content-Type': 'application/json'
            },
        })
            .then(function (responds) {
                dispatch(GetUser(responds.data));
            })
    }
}

export function GetUser (userObject) {
    return {
        type: "getUserObject",
        payload: userObject
    }
}

export function AddUserFunc(username, password) {
    var Token = localStorage.getItem('Token');
    var data = {username: username, password: password};
    Axios.post('http://localhost:8080/users', JSON.stringify(data),{
      headers: {
        "Authorization": Token,
        'Content-Type': 'application/json'
      },
      })
      .then(function (response) {
        alert("add Working!");
        window.location = "/user";
      })
      .catch(function (error) {
        console.log(error);
      })
}

export function UpdateBookFunc(index, listBookName) {
    var Token = localStorage.getItem('Token');
    var listBookNameParse = [];
    //console.log(listBookName);
    for(var i = 0; i < listBookName.length; i++) {
        //console.log(listIdBook[i]);
        //listIdBook.push({id: listIdBook[i].id})
        listBookNameParse.push(listBookName[i].Country);
    }

    var data = {fruits: listBookNameParse};
    //console.log(JSON.stringify(data));
    Axios.put('http://localhost:8080/users/' + index, JSON.stringify(data),{
      headers: {
        "Authorization": Token,
        'Content-Type': 'application/json'
      },
      })
      .then(function (response) {
        //alert("update Working!");
        window.location = "/user";
      })
      .catch(function (error) {
        console.log(error);
      })
}