import React, { Component, useEffect, useRef } from 'react';
import {userRouteMatch, useParams} from "react-router-dom";
import {useState} from 'react';
import Axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {addFunc, GetObjById , UpdateFunc} from '../../redux/reduxCat.js';


function CategoriesAdd( {match} ) {
  
  const stringCat = useRef();

  // function addFunc(e) {
  //   e.preventDefault();
  //   alert(stringCat.current.value);
  //   var data = {name: stringCat.current.value};
  //   Axios.post('http://localhost:8080/cats', JSON.stringify(data),{
  //     headers: {
  //       "Authorization": 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjA2ODgyMTUyLCJleHAiOjE2MDc0ODY5NTJ9.pqtJNdc_iy7vwEDOHFMxWr0qZtUb8wQDoPw_r5lyl-EfnQaiWacUbWxJ9TVyfS9v-VBqJkT7fRsfYQdq4CpNpA',
  //       'Content-Type': 'application/json'
  //     },
  //     })
  //     .then(function (response) {
  //       alert("add Working!");
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // }

  // function updateFunc(id) {
  //   console.log(stringCat.current.value);
  // }

  const dispatch = useDispatch(); 
  
  let [objCat, setCat] = useState();
  useEffect(() => {
    if (match.params.id != null) {
      // Axios.get('http://localhost:8080/cats/' + match.params.id, {
      // headers: {
      //   "Authorization": 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjA2ODgyMTUyLCJleHAiOjE2MDc0ODY5NTJ9.pqtJNdc_iy7vwEDOHFMxWr0qZtUb8wQDoPw_r5lyl-EfnQaiWacUbWxJ9TVyfS9v-VBqJkT7fRsfYQdq4CpNpA',
      // },
      // responseType: 'json',
      // })
      // .then(function (response) {
      //   setCat(response.data)
      //   console.log(response.data);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // })
      setCat(dispatch(GetObjById(match.params.id)));
    }
  }, objCat)
  const cat = useSelector(state => state);
  //console.log(listCat);

  if (match.params.id == null) {
    return (
    <>
      <div class="titleNameForm">
        <h2>Categories Table</h2>
        <p style={{marginTop: '8px'}}>Add class .table</p>
      </div><br/><br/><br/>
      <div class="formDataAddCat">
        <label for="exampleInputCat">Category (*)</label><br/>
        <input type="text" id="exampleInputEmail1" placeholder="Category" style={{width: '425px', marginBottom: "10px", height: 'height: 35px'}} ref={stringCat}></input><br/>
        <button onClick={() => addFunc(stringCat.current.value)}>Add</button>
      </div>
    </>    
    );
  } else {
    
    return (
    <>
      <div class="titleNameForm">
      <h2>Categories Table</h2>
      <p style={{marginTop: '8px'}}>Update class .table</p>
      </div><br/><br/><br/>
      <div class="formDataAddCat">
        <label for="exampleInputCat">Category (*)</label><br/>
        <input name="name" type="text" id="exampleInputEmail1" style={{width: '425px', marginBottom: "10px", height: 'height: 35px'}} defaultValue={cat.name} ref={stringCat}></input><br/>
        <button onClick={() => UpdateFunc(match.params.id, stringCat.current.value)}>Update</button>
      </div>
    </>
    );
  }
  
}



export default CategoriesAdd;