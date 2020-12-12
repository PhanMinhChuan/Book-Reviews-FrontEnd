import Axios from 'axios';
import {GetAuthorByIdForBook} from './reduxAuthor.js'


export function ShowBooks() {
    return async(dispatch) => {
        var Token = localStorage.getItem('Token');
        Axios.get('http://localhost:8080/books?page=0&size=5',  {
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

export function sendActionShowToRedux(listBook) {
    return {
        type: "showBook",
        payload: listBook
    }
}

export function GetBookSize() {
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
        Axios.put('http://localhost:8080/books', data, config)
        .then(function (responds) {
            localStorage.setItem('bookSize', responds.data.length);
        })  
        
    index = localStorage.getItem('bookSize');
    return index;
}

export function ChangeListBookByPageIndex(id) {
    var Token = localStorage.getItem('Token');
    return async(dispatch) => {
        Axios.get('http://localhost:8080/books?page=' + (id-1)+ '&size=5', {
            method: 'GET',
            data: {},
            headers: {
                "Authorization": Token,
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
    var Token = localStorage.getItem('Token');
    var data = {};
    var bookNameList = [];
    var config = {
        method: 'PUT',
        headers: {
        "Authorization": Token,
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

export function ChangeStatusBookByPageIndex(id, Token) {
    //var Token = localStorage.getItem('Token');
    Axios.post('http://localhost:8080/books/' + id,  {
            headers: {
                "Authorization": Token,
                'Content-Type': 'application/json'
            },
        })
            .then(function (responds) {
                window.location = "/book";
            })  
            .catch(function (error) {
                console.log(error);
              })
}

export function DeleteFunction(id) {
    var Token = localStorage.getItem('Token');
    Axios.delete('http://localhost:8080/books/' + id, {
      headers: {
        "Authorization": Token,
      },
    })
    .then(function (response) {
      //alert("delete Working!"); 
      window.location = "/book";
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function AddFunction(bookName, bookDescription, bookDetail, listCat, authorLabel, img) {
    var Token = localStorage.getItem('Token');
    var authorasd;

    if (authorLabel.current.state.value != null) {
        var authorId = authorLabel.current.state.value.id;
        authorasd = GetAuthorByIdForBook(authorId);
        console.log(authorasd);
    }

    if (img.current.files.length > 0) {
        var image = img.current.files[0].name;
    }
    
    var data = {name: bookName, description: bookDescription, detail : bookDetail, categories: listCat, authors: authorasd, image: image};
    console.log(JSON.stringify(data));
    Axios.post('http://localhost:8080/books', JSON.stringify(data),{
      headers: {
        "Authorization": Token,
        'Content-Type': 'application/json'
      },
      })
      .then(function (response) {
        alert("add Working!");
        window.location = "/book";
      })
      .catch(function (error) {
        console.log(error);
      })
}

export function GetBookById(id) {
    var Token = localStorage.getItem('Token');
    return async(dispatch) => {
        Axios.get('http://localhost:8080/books/' + id,  {
            method: 'GET',
            data: {},
            headers: {
                "Authorization": Token,
                'Content-Type': 'application/json'
            },
        })
            .then(function (responds) {
                dispatch(sendActionShowBookToRedux(responds.data));
            })
    }
}

export function sendActionShowBookToRedux(Author) {
    return {
        type: "getObjBook",
        payload: Author
    }
}

export function UpdateBookFunction(bookId, bookName, bookDescription, bookDetail, listCat, authorLabel, img) {
    var Token = localStorage.getItem('Token');
    var authorasd;

    if (authorLabel.current.state.value != null) {
        var authorId = authorLabel.current.state.value.id;
        authorasd = GetAuthorByIdForBook(authorId);
    }

    if (img.current.files.length > 0) {
        var imageaaaa = img.current.files[0].name;
    }
    
    var data = {name: bookName, description: bookDescription, detail : bookDetail, categories: listCat, author: authorasd, image: imageaaaa};
    Axios.put('http://localhost:8080/books/' + bookId, JSON.stringify(data),{
      headers: {
        "Authorization": Token,
        'Content-Type': 'application/json'
      },
      })
      .then(function (response) {
        //alert("Update Working!");
        window.location = "/book";
      })
      .catch(function (error) {
        console.log(error);
      })
}