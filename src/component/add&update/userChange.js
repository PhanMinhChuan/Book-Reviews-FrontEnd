import React, { Component, useState,useEffect, useRef } from 'react';
import {userRouteMatch, useParams} from "react-router-dom";
import Axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { Multiselect } from 'multiselect-react-dropdown';
import {GetObjectUserById, AddUserFunc, UpdateBookFunc } from '../../redux/reduxUser.js';
import {GetBookListFromDB} from '../../redux/reduxBook.js';

function UserChange( {match} ) {

    const username = useRef();
    const password = useRef();
    const listIdBook = useRef();

    var listNameBook = GetBookListFromDB();
    console.log(listNameBook);
    
    //Get List Book From Object User
    const dispatch = useDispatch(); 
    let [usersObject, setUser] = useState();
    useEffect(() => {
      if (match.params.id != null) {
        setUser(dispatch(GetObjectUserById(match.params.id)));
      }
    }, usersObject)

    const user = useSelector(state => state);

    const valueDefaulBookList = []

    if (user.books != null) {
        for(var i = 0; i< user.books.length; i++) {
            valueDefaulBookList.push({Country: user.books[i].name, id: i+1});
        }
    }

    if (match.params.id == null) {
        return (
            <>
            <div class="titleNameForm">
            <h2>User Table</h2>
            <p style={{marginTop: '8px'}}>Add class .table</p>
            </div><br/><br/>
            <div class="formDataAddContact"><br/><br/>
                <label for="exampleInputCat">Username (*)</label><br/>
                <input name="name" type="text" id="exampleInputEmail1" style={{ width: '500px', marginBottom: "20px", height: '35px'}} placeholder="Username" ref={username}></input> &ensp;<br/>
                <label for="exampleInputCat">Password (*)</label><br/>
                <input name="name" type="password" id="exampleInputEmail1" style={{ width: '500px', marginBottom: "25px", height: '35px'}} placeholder="Password" ref={password}></input> &ensp;<br/>
                <button onClick={() => AddUserFunc(username.current.value, password.current.value)}>Add</button>
            </div>
            </>
        )
    } else {
        return (
            <>
            <div class="titleNameForm">
            <h2>User Table</h2>
            <p style={{marginTop: '8px'}}>Update class .table</p>
            </div><br/><br/>
            <div class="formDataAddContact">
                <label for="exampleInputCat">Username (*)</label><br/>
                <input name="name" type="text" id="exampleInputEmail1" style={{ width: '500px', marginBottom: "20px", height: '45px'}} defaultValue={user.username} disabled></input> &ensp;<br/>
                <label for="exampleInputCat">List Book</label>
                <div class="selectCss">
                <Multiselect 
                    options={listNameBook} 
                    selectedValues={valueDefaulBookList}
                    displayValue="Country"
                    ref={listIdBook}
                />
                </div><br/>
                <br/>
                <button onClick={() => {if (window.confirm('Are you sure you wish to update this item?')) UpdateBookFunc(user.id ,listIdBook.current.getSelectedItems())}}>Update</button>
            </div>
            </>
        )
    }
}

export default UserChange;