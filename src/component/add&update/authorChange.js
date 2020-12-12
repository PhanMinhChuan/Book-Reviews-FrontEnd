import React, { Component, useEffect, useRef } from 'react';
import {userRouteMatch, useParams} from "react-router-dom";
import {useState} from 'react';
import Axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { Multiselect } from 'multiselect-react-dropdown';
import {AddAuthorFunc, GetAuthorById, UpdateAuthorFunc} from '../../redux/reduxAuthor.js';
import {GetCatListFromDB} from '../../redux/reduxCat.js';

function AuthorChange({match}) {

    const authorName = useRef();
    const dateBirth = useRef();
    const listCat = useRef();
    var index = 1;
    const data = GetCatListFromDB();
    const [options] = useState(data);
    
    function changeSexMaleFun() {
        index = 1;
    }

    function changeSexFemalyFun() {
        index = 0;
    }

    const dispatch = useDispatch(); 
    useEffect(() => {
        if (match.params.id != null) {
            dispatch(GetAuthorById(match.params.id));
        }
    }, [])

    const author = useSelector(state => state);

    function getRadio(sex) {
        if (sex == "MALE") {
            return (
                <>
                    <label for="exampleInputCat">Sex</label><br/>
                    <input type="radio" id="male" name="gender" value="0asd" checked onClick={() => changeSexMaleFun()}/>&ensp;
                    <label for="male" onClick={() => changeSexMaleFun()}>MALE</label>&ensp;&ensp;
                    <input type="radio" id="female" name="gender" value="1asd" onClick={() => changeSexFemalyFun()}/>&ensp;
                    <label for="female" onClick={() => changeSexFemalyFun()}>FEMALE</label><br/><br/>
                </>)
        } else if (sex == "FEMALE") {
            return (
                <>
                    <label for="exampleInputCat">Sex</label><br/>
                    <input type="radio" id="male" name="gender" value="0asd" onClick={() => changeSexMaleFun()}/>&ensp;
                    <label for="male" onClick={() => changeSexMaleFun()}>MALE</label>&ensp;&ensp;
                    <input type="radio" id="female" name="gender" value="1asd" checked onClick={() => changeSexFemalyFun()}/>&ensp;
                    <label for="female" onClick={() => changeSexFemalyFun()}>FEMALE</label><br/><br/>
                </>)
        }
    }

    if (match.params.id == null) {
        return (
            <>
            <div class="titleNameForm">
            <h2>Author Table</h2>
            <p style={{marginTop: '8px'}}>Add class .table</p>
            </div><br/><br/>
            <div class="formDataAuthorContact"><br/>
                <label for="exampleInputCat">Name Author (*)</label><br/>
                <input name="name" type="text" id="exampleInputEmail1" style={{ width: '500px', marginBottom: "20px", height: '45px'}} placeholder='Username'  ref={authorName} ></input> &ensp;<br/>
                <label for="exampleInputCat">Birth (*)</label><br/>
                <input type="datetime-local" id="deadline" name="birthdaytime" ref={dateBirth}></input><br/><br/>
                <label for="exampleInputCat">Sex</label><br/>
                <input type="radio" id="male" name="gender" value="0asd" checked onClick={() => changeSexMaleFun()}/>&ensp;
                <label for="male" onClick={() => changeSexMaleFun()}>MALE</label>&ensp;&ensp;
                <input type="radio" id="female" name="gender" value="1asd" onClick={() => changeSexFemalyFun()}/>&ensp;
                <label for="female" onClick={() => changeSexFemalyFun()}>FEMALE</label><br/><br/>
                <label for="exampleInputCat">List Category</label>
                <div  class="selectCss"><Multiselect options={options} displayValue="name" ref={listCat}/></div>
                <br/>
                <button onClick={() => AddAuthorFunc(authorName.current.value, dateBirth.current.value, index, listCat.current.getSelectedItems())}>Add</button>
            </div>
            </>
        )   
    } else {
        return (
            <>
            <div class="titleNameForm">
            <h2>Author Table</h2>
            <p style={{marginTop: '8px'}}>Update class .table</p>
            </div><br/><br/>
            <div class="formDataAuthorContact"><br/>
                <label for="exampleInputCat">Name Author (*)</label><br/>
                <input name="name" type="text" id="exampleInputEmail1" style={{ width: '500px', marginBottom: "20px", height: '45px'}} placeholder='Username'  defaultValue={author.name} ref={authorName}></input> &ensp;<br/>
                <label for="exampleInputCat">Birth (*)</label><br/>
                <input type="datetime-local" id="deadline" name="birthdaytime" defaultValue={author.brith} ref={dateBirth}></input><br/><br/>
               
                {getRadio(author.sex)}
                
                <label for="exampleInputCat">List Category</label>
                <div  class="selectCss"><Multiselect options={options} displayValue="name" selectedValues={author.categories} ref={listCat}/></div>
                <br/>
                <button onClick= {() => {if (window.confirm('Are you sure you wish to update this item?')) UpdateAuthorFunc(author.id, authorName.current.value, dateBirth.current.value, index, listCat.current.getSelectedItems())}}>Update</button>
            </div>
            </>
        )
    }
}

export default AuthorChange;