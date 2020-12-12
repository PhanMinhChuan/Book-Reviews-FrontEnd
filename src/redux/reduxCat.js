// import React from 'react';
// import {createStore} from 'redux';
import Axios from 'axios';
import {useState} from 'react';
import {useDispatch} from 'react-redux';


// export function ShowCat() {
//     //alert("hello");
//     //let [listCat, asdSet] = useState([{}]);
//     var listCat = [{}];
//     Axios.get('http://localhost:8080/cats', {
//         method: 'GET',
//         data: {},
//         headers: {
//         "Authorization": Token,
//         'Content-Type': 'application/json'
//         },
//     })
//     .then(function (response) {
//         //localStorage.setItem('state', JSON.stringify(response.data));
//         listCat = response.data;
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     //asdSet(setList);
//     //var catObj = [{id: 1, name: "cat1"}, {id: 2, name: "cat2"}, {id: 3, name: "cat3"}];
//     //localStorage.setItem('state', JSON.stringify(catObj));
//     //const jsonCat = localStorage.getItem('state');
//     //const listCat = JSON.parse(jsonCat);

//     return {
//         type: "showCat",
//         payload: listCat
//     }
// }

export function ShowCat() {
    var Token = localStorage.getItem('Token');
    return async(dispatch) => {
        Axios.get('http://localhost:8080/cats',  {
            method: 'GET',
            data: {},
            headers: {
                "Authorization": Token,
                'Content-Type': 'application/json'
            },
        })
            .then(function (asdwe) {
                dispatch(GetListCat(asdwe.data));
            })
    }
    //const dispatch = useDispatch(); 
    //alert("hello");
    //let [listCat, asdSet] = useState([{}]);
    //const listCat = [];
    //return (dispatch) => {
    //return (dispatch) => {
        //var listCat = [];
        //alert("hi");
        // return Axios.get('http://localhost:8080/cats', {
        //     method: 'GET',
        //     data: {},
        //     headers: {
        //         "Authorization": Token,
        //         'Content-Type': 'application/json'
        //     },
        // }).then((asdwe) => asdwe.data)

        //const list = promise

        //console.log(list);
        //return list;
        // Axios.get('http://localhost:8080/cats', {
        //     method: 'GET',
        //     data: {},
        //     headers: {
        //         "Authorization": Token,
        //         'Content-Type': 'application/json'
        //     },
        // })
        //     .then(function (asdwe) {
        //         //localStorage.setItem('state', JSON.stringify(response.data));
        //         // listCat = response.data;
        //         //dispatch(getListCat(response.data));
        //         //getListCat({ type: "showCat", payload: response.data });
        //         //dispatch(getListCat(response.data));
        //         //var catObj = [{id: 1, name: "cat1"}, {id: 2, name: "cat2"}, {id: 3, name: "cat3"}];
        //         //console.log(asdwe.data);
        //         // return { 
        //         //     type: "showCat",payload: [{}]
        //         //var listCat = [{id: 1, name: "cat1"}, {id: 2, name: "cat2"}];
            
        // //         //var catObj = [{id: 1, name: "cat1"}, {id: 2, name: "cat2"}, {id: 3, name: "cat3"}];
        // //         //console.log(catObj.length);
        // //         //var catObj = JSON.parse(asdwe.data);
        //             //for (var i = 0; i < asdwe.data.length; i++) {
        //                   setTimeout(function(){
        //                     //listCat = asdwe.data[0];
        //                     //console.log(asdwe.data[0]);
        //             //        listCat.push(asdwe.data[i]);
        //                 //}, 2000);
        //             //}
        //             console.log(asdwe.data);
        //             return asdwe.data;
        //             //console.log(listCat);
        // //         //return catObj;
                            //     strr.push(asdwe.data);
                            //     for (var i = 0; i < asdwe.data.length; i++) {
                            //         strr.push(asdwe.data[i]);
                            //     }

                            // }, 2000);
                            // //console.log(strr);
         //   })
        //asdSet(setList);
        //var listCat = [{id: 1, name: "cat1"}, {id: 2, name: "cat2"}];
        //return listCat;
        //localStorage.setItem('state', JSON.stringify(catObj));
        //const jsonCat = localStorage.getItem('state');
        //const listCat = JSON.parse(jsonCat);
        // var catObj = [{id: 1, name: "cat1"}, {id: 2, name: "cat2"}, {id: 3, name: "cat3"}];
        // return {
        //    type: "showCat",payload: catObj
        // }
    //}
    // var catObj = [{id: 1, name: "cat1"}, {id: 2, name: "cat2"}, {id: 3, name: "cat3"}];
    // console.log(catObj.length);
    // for (var i = 0; i < catObj.length; i++) {
    //     listCat.push(catObj[i]);
    // }
    //console.log("hello");
    //console.log(listCat);
    //return data;
}

export function GetListCat (listCat) {
    //console.log(listCat);
    
    return {
        type: "showCat",
        payload: listCat
    }
    //console.log(listCat);
    //var listCat = ShowCat();
    //for (var i = 0; i < ShowCat().length; i++) {
    //    listCat.push(catObj[i]);
    //}
    //console.log(ShowCat());
    //readFile().
    //console.log(ShowCat());
    //console.log(listCat);
    //var listCat = [{id: 1, name: "cat1"}, {id: 2, name: "cat2"}];
    //var listCat = [];
    //ShowCat(listCat);
    //console.log(listCat.length);
    
    // setTimeout(function(){
    //     //console.log(listCat);
    //     //console.log(listCat);
    //     if (listCat.length > 0) {
    //         return {
    //             type: "showCat",
    //             payload: listCat
    //         }  
    //     }
    // }, 500);
    //if ()
    // if (listCat.length <= 0) {
    //     return {
    //         type: "showCat",
    //         payload: []
    //     } 
    // } else {
    //    console.log(listCat);
        // return {
        //     type: "showCat",
        //     payload: []
        // } 
    //}
    //console.log(listCat);
}

export function ShowCatSize() {
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
        Axios.put('http://localhost:8080/cats', data, config)
        .then(function (asd) {
            localStorage.setItem('index', asd.data.length);
            //index = asd.data;
        })  
        
    index = localStorage.getItem('index');
    //console.log("Asdadasd");
    //console.log(index);
    return index;
}

export function GetCatListFromDB() {
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
    Axios.put('http://localhost:8080/cats', data, config)
    .then(function (asd) {
        localStorage.setItem('listCat', JSON.stringify(asd.data));
    })  

    const jsonCatNameList = localStorage.getItem('listCat');
    const getCatNameList = JSON.parse(jsonCatNameList);
    return getCatNameList;
}

// export function GetIndexPage (id) {
//     return id;
// }

export function ChangeListCatByPageIndex (id) {
    //alert("Asd"+ id)
    // return dispatch => {
    //     Axios.get('http://localhost:8080/cats?page=' + (id-1)+ '&size=7', {
    //         method: 'GET',
    //         data: {},
    //         headers: {
    //             "Authorization": Token,
    //             'Content-Type': 'application/json'
    //         },
    //     })
    //         .then(function (response) {
    //             //localStorage.setItem('state', JSON.stringify(response.data));
    //             dispatch(loadListCatByPageIndex(response.data));
    //         })
    //         .catch(function (error) {
    //             console.log(error);  
    //         })
    // }
    //localStorage.setItem('state', JSON.stringify([{id: 1, name: "cat1"}, {id: 2, name: "cat2"}]));
    //const jsonSizeCat = localStorage.getItem('sizeCat');
    //const sizeListCat = JSON.parse(jsonSizeCat);
    //return sizeListCat;
    //alert(id);
    var Token = localStorage.getItem('Token');
    return async(dispatch) => {
        Axios.get('http://localhost:8080/cats?page=' + (id-1)+ '&size=7', {
            method: 'GET',
            data: {},
            headers: {
                "Authorization": Token,
                'Content-Type': 'application/json'
            },
        })
            .then(function (asdwe) {
                dispatch(loadListCatByPageIndex(asdwe.data));
            })
    }
}

export function loadListCatByPageIndex(sizeListCat) {
    console.log("working!")
    return {
        type: "changeListCatByIndex",
        payload: sizeListCat
    }
}

export function delFunc(id) {
    var Token = localStorage.getItem('Token');
    Axios.delete('http://localhost:8080/cats/' + id, {
      headers: {
        "Authorization": Token,
      },
    })
    .then(function (response) {
      //alert("delete Working!"); 
      window.location = "/cat";
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function addFunc(catName) {
    var Token = localStorage.getItem('Token');
    //e.preventDefault();
    //alert(stringCat.current.value);
    //alert(catName);
    //confirm("Press a button!");
    var data = {name: catName};
    Axios.post('http://localhost:8080/cats', JSON.stringify(data),{
      headers: {
        "Authorization": Token,
        'Content-Type': 'application/json'
      },
      })
      .then(function (response) {
        alert("add Working!");
        window.location = "/cat";
      })
      .catch(function (error) {
        console.log(error);
      })
}

export function GetObjByIdEx (id) {
    var Token = localStorage.getItem('Token');
    alert(id);
    var str = [];
    fetch.get('http://localhost:8080/cats/' + id, {
    headers: {
    "Authorization": Token,
    },
    responseType: 'json',
    })
    .then(function (response) {
        //console.log(response.data);
        //getValue(response.data.name);
        //return "222";
    })
    .catch(function (error) {
        console.log(error);
    })
    
    // setTimeout(function(){
         //console.log(str);
         //return "222";
    // }, 500);
}

export function GetObjById(id) {
    var Token = localStorage.getItem('Token');
    return async(dispatch) => {
        Axios.get('http://localhost:8080/cats/' + id,  {
            method: 'GET',
            data: {},
            headers: {
                "Authorization": Token,
                'Content-Type': 'application/json'
            },
        })
            .then(function (asdwe) {
                //console.log(asdwe.data)
                dispatch(GetListCatasd(asdwe.data));
            })
    }
}

export function GetListCatasd (catObj) {
    //console.log(catObj);
    //alert(id);
    return {
        type: "getObjCat",
        payload: catObj
    }
}

export function UpdateFunc (id, catName) {
    var Token = localStorage.getItem('Token');
    var data = {name: catName};
    Axios.put('http://localhost:8080/cats/' + id, JSON.stringify(data),{
      headers: {
        "Authorization": Token,
        'Content-Type': 'application/json'
      },
      })
      .then(function (response) {
        //alert("update Working!");
        window.location = "/cat";
      })
      .catch(function (error) {
        console.log(error);
      })
}


//const store = createStore(reducer);

// let changeName = {
//     type: "CHANGENAME",
//     payload: "Phan Minh Chuan"
// }

// store.dispatch(changeName);

// console.log(store.getState());