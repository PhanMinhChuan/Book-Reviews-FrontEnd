import React, { Component, useEffect, useRef } from 'react';
import {userRouteMatch, useParams} from "react-router-dom";
import {useState} from 'react';
import Axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { Multiselect } from 'multiselect-react-dropdown';

function AuthorChange({match}) {

    const data = [
        {Country: 'India', id: 1},
        {Country: 'American', id: 2},
        {Country: 'English', id: 3},
        {Country: 'Vietnamese', id: 4}
    ]
    const [options] = useState(data);

    if (match.params.id == null) {
        return (
            <>
            <div class="titleNameForm">
            <h2>Author Table</h2>
            <p style={{marginTop: '8px'}}>Add class .table</p>
            </div><br/><br/>
            <div class="formDataAddContact"><br/>
                <label for="exampleInputCat">Name Author (*)</label><br/>
                <input name="name" type="text" id="exampleInputEmail1" style={{ width: '425px', marginBottom: "20px", height: '45px'}} defaultValue='Username' disabled></input> &ensp;<br/>
                <label for="exampleInputCat">Birth (*)</label><br/>
                <input type="datetime-local" id="deadline" name="birthdaytime"/><br/><br/>
                <input type="radio" id="male" name="gender" value="male" />
                <label for="male">Male</label>&emsp;
                <input type="radio" id="female" name="gender" value="female" />
                <label for="female">Female</label><br/>
                <label for="exampleInputCat">List Categories</label>
                <div  class="selectCss"><Multiselect options={options} displayValue="Country"/></div>
                <br/>
                <button>Add</button>
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
            <div class="formDataAddContact"><br/>
                <label for="exampleInputCat">Name Author (*)</label><br/>
                <input name="name" type="text" id="exampleInputEmail1" style={{ width: '425px', marginBottom: "20px", height: '45px'}} defaultValue='Username' disabled></input> &ensp;<br/>
                <label for="exampleInputCat">Birth (*)</label><br/>
                <input type="datetime-local" id="deadline" name="birthdaytime"/><br/><br/>
                <input type="radio" id="male" name="gender" value="male" />
                <label for="male">Male</label>&emsp;
                <input type="radio" id="female" name="gender" value="female" />
                <label for="female">Female</label><br/>
                <label for="exampleInputCat">List Categories</label>
                <div  class="selectCss"><Multiselect options={options} displayValue="Country"/></div>
                <br/>
                <button>Update</button>
            </div>
            </>
        )
    }
}

export default AuthorChange;