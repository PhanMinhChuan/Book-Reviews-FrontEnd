import React, { Component, useEffect, useRef } from 'react';
import {userRouteMatch, useParams} from "react-router-dom";
import {useState} from 'react';
import Axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { Multiselect } from 'multiselect-react-dropdown';
import Select from 'react-select'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function BookChange( {match} ) {
    function previewImage() {
    }

    const data = [
        {Country: 'India', id: 1},
        {Country: 'American', id: 2},
        {Country: 'English', id: 3},
        {Country: 'Vietnamese', id: 4},
        {Country: 'asd', id: 1},
        {Country: 'aaa', id: 2},
        {Country: 'Englwwish', id: 3},
        {Country: 'Vietwwnamese', id: 4},
        {Country: 'Indwwia', id: 1},
        {Country: 'Amewwrican', id: 2},
        {Country: 'Engwwwlish', id: 3},
        {Country: 'Vietnawwwmese', id: 4}
    ]
    const [options] = useState(data);

    const optionsasd = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    if (match.params.id == null) {
        return (
            <>
            <div class="titleNameForm">
            <h2>Books Table</h2>
            <p style={{marginTop: '8px'}}>Add class .table</p>
            </div><br/><br/>
            <div class="formDataBookContact">
                <label for="exampleInputCat">Book Name (*)</label><br/>
                <input name="name" type="text" id="exampleInputEmail1" style={{ width: '500px', marginBottom: "20px", height: '35px'}} ></input> &ensp;<br/>
                <label for="exampleInputCat">Description (*)</label><br/>
                <input name="name" type="text" id="exampleInputEmail1" style={{ width: '1280px', marginBottom: "20px", height: '90px'}} ></input> &ensp;<br/>
                <label for="exampleInputCat">Detail (*)</label><br/>
                <div class="editorCss">
                <CKEditor editor={ ClassicEditor } />
                </div><br/>
                <label for="exampleInputCat">Categories List(*)</label>
                <div  class="selectCss"><Multiselect options={options} displayValue="Country"/></div><br/>
                <label for="cars">Author</label>
                <div  class="selectCss"><Select options={optionsasd} /></div><br/>
                <label for="exampleInputCat">Books Image:</label>&emsp;
                {/* <input type="image" src="https://www.festivalinfo.nl/img/upload/c/b/shawn_mendes.jpg" alt="Submit" width="48" height="48"></input> */}
                <input type="file" name="file" id="file" accept="image/*" onchange={previewImage()} />
                <br/><br/><br/>
                <button>Add</button>
            </div>
            </>
        )
    } else {
        return (
            <>
            <div class="titleNameForm">
            <h2>Books Table</h2>
            <p style={{marginTop: '8px'}}>Update class .table</p>
            </div><br/><br/>
            <div class="formDataBookContact">
                <label for="exampleInputCat">Book Name (*)</label><br/>
                <input name="name" type="text" id="exampleInputEmail1" style={{ width: '500px', marginBottom: "20px", height: '35px'}} ></input> &ensp;<br/>
                <label for="exampleInputCat">Description (*)</label><br/>
                <input name="name" type="text" id="exampleInputEmail1" style={{ width: '1280px', marginBottom: "20px", height: '90px'}} ></input> &ensp;<br/>
                <label for="exampleInputCat">Detail (*)</label><br/>
                <div class="editorCss">
                <CKEditor editor={ ClassicEditor } />
                </div><br/>
                <label for="exampleInputCat">Categories List(*)</label>
                <div  class="selectCss"><Multiselect options={options} displayValue="Country"/></div><br/>
                <label for="cars">Author</label>
                <div  class="selectCss"><Select options={optionsasd} /></div><br/>
                <label for="exampleInputCat">Books Image:</label>&emsp;
                {/* <input type="image" src="https://www.festivalinfo.nl/img/upload/c/b/shawn_mendes.jpg" alt="Submit" width="48" height="48"></input> */}
                <input type="file" name="file" id="file" accept="image/*" onchange={previewImage()} />
                <br/><br/><br/>
                <button>Update</button>
            </div>
            </>
        )
    }
}

export default BookChange;