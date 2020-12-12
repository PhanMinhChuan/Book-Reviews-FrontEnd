import Axios from 'axios';

export function ShowAuthors() {
    var Token = localStorage.getItem('Token');
    return async(dispatch) => {
        Axios.get('http://localhost:8080/authors',  {
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
        type: "showAuthor",
        payload: listUser
    }
}

export function GetAuthorSize() {
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
        Axios.put('http://localhost:8080/authors', data, config)
        .then(function (responds) {
            localStorage.setItem('authorSize', responds.data.length);
        })  
        
    index = localStorage.getItem('authorSize');
    return index;
}

export function ChangeListAuthorByPageIndex(id) {
    var Token = localStorage.getItem('Token');
    return async(dispatch) => {
        Axios.get('http://localhost:8080/authors?page=' + (id-1)+ '&size=7', {
            method: 'GET',
            data: {},
            headers: {
                "Authorization": Token,
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

export function GetAuthorListFromDB() {
    var Token = localStorage.getItem('Token');
    var data = {};
    var AuthorNameList = [];
    var config = {
        method: 'PUT', 
        headers: {
        "Authorization": Token,
        'Content-Type': 'application/json'
        }
    }
    Axios.put('http://localhost:8080/authors', data, config)
    .then(function (responds) {
        for (var i = 0; i <= responds.data.length; i++) {
            if (responds.data[i] != null) {
                AuthorNameList.push({label: responds.data[i].name, id: responds.data[i].id});
            }
        }
        localStorage.setItem('authorList', JSON.stringify(AuthorNameList));
    }) 

    const jsonAuthorNameList = localStorage.getItem('authorList');
    const getAuthorNameList = JSON.parse(jsonAuthorNameList);
    return getAuthorNameList;
}

export function AddAuthorFunc(authorName, birthDay, sex, listCat) {
    var Token = localStorage.getItem('Token');
    var data = {name: authorName, birth: birthDay, sex: sex, categories: listCat};
    Axios.post('http://localhost:8080/authors', JSON.stringify(data),{
      headers: {
        "Authorization": Token,
        'Content-Type': 'application/json'
      },
      })
      .then(function (response) {
        alert("add Working!");
        window.location = "/author";
      })
      .catch(function (error) {
        console.log(error);
      })
}

export function DeletedAuthorFunc(id) {
    var Token = localStorage.getItem('Token');
    Axios.delete('http://localhost:8080/authors/' + id, {
      headers: {
        "Authorization": Token,
      },
    })
    .then(function (response) {
      //alert("delete Working!"); 
      window.location = "/author";
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function GetAuthorById(id) {
    var Token = localStorage.getItem('Token');
    return async(dispatch) => {
        Axios.get('http://localhost:8080/authors/' + id,  {
            method: 'GET',
            data: {},
            headers: {
                "Authorization": Token,
                'Content-Type': 'application/json'
            },
        })
            .then(function (responds) {
                dispatch(sendActionShowAuthorToRedux(responds.data));
            })
    }
}

export function sendActionShowAuthorToRedux(Author) {
    return {
        type: "getObjAuthor",
        payload: Author
    }
}

export function GetAuthorByIdForBook(id) {
    var Token = localStorage.getItem('Token');
    Axios.get('http://localhost:8080/authors/' + id,  {
        method: 'GET',
        data: {},
        headers: {
            "Authorization": Token,
            'Content-Type': 'application/json'
        },
    })
        .then(function (responds) {
            localStorage.setItem('authorForBook', JSON.stringify(responds.data));
        })
    const jsonAuthor = localStorage.getItem('authorForBook');
    const getAuthor = JSON.parse(jsonAuthor);
    return getAuthor;
}

export function UpdateAuthorFunc(id, authorName, birthDay, sex, listCat) {
    var Token = localStorage.getItem('Token');
    var data = {name: authorName, birth: birthDay, sex: sex, categories: listCat};
    Axios.put('http://localhost:8080/authors/' + id, JSON.stringify(data),{
      headers: {
        "Authorization": Token,
        'Content-Type': 'application/json'
      },
      })
      .then(function (response) {
        window.location = "/author";
      })
      .catch(function (error) {
        console.log(error);
      })
}
