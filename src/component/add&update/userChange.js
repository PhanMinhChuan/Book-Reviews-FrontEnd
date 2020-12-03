import React, { Component, useState,useEffect, useRef } from 'react';
import {userRouteMatch, useParams} from "react-router-dom";
import Axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { Multiselect } from 'multiselect-react-dropdown';

function UserChange( {match} ) {
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
            <h2>User Table</h2>
            <p style={{marginTop: '8px'}}>Add class .table</p>
            </div><br/><br/>
            <div class="formDataAddContact"><br/><br/>
                <label for="exampleInputCat">Username (*)</label><br/>
                <input name="name" type="text" id="exampleInputEmail1" style={{ width: '425px', marginBottom: "20px", height: '45px'}} defaultValue='Username' disabled></input> &ensp;<br/>
                <label for="exampleInputCat">Password (*)</label><br/>
                <input name="name" type="text" id="exampleInputEmail1" style={{ width: '425px', marginBottom: "20px", height: '45px'}} defaultValue='Password'></input> &ensp;<br/>
                <br/>
                <button>Add</button>
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
                <input name="name" type="text" id="exampleInputEmail1" style={{ width: '425px', marginBottom: "20px", height: '45px'}} defaultValue='Username' disabled></input> &ensp;<br/>
                <label for="exampleInputCat">Password (*)</label><br/>
                <input name="name" type="text" id="exampleInputEmail1" style={{ width: '425px', marginBottom: "20px", height: '45px'}} defaultValue='Password' ></input> &ensp;<br/>
                <label for="exampleInputCat">List Book</label>
                <div  class="selectCss"><Multiselect options={options} displayValue="Country"/></div>
                <br/>
                <button>Update</button>
            </div>
            </>
        )
    }
}

export default UserChange;