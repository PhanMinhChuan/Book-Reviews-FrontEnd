import React, { Component, useEffect, useRef } from 'react';
import {userRouteMatch, useParams} from "react-router-dom";
import {useState} from 'react';
import Axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { Multiselect } from 'multiselect-react-dropdown';
import Select from 'react-select'
//import { CKEditor } from '@ckeditor/ckeditor5-react';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from 'ckeditor4-react';
import {AddFunction, UpdateBookFunction, GetBookById} from '../../redux/reduxBook.js';
import {GetCatListFromDB} from '../../redux/reduxCat.js';
import {GetAuthorListFromDB} from '../../redux/reduxAuthor.js';
import $ from 'jquery'; 

function BookChange( {match} ) {
    $(document).ready(function(){
        $(".iconTasks").css("background-color", "");
        $("#iconTasks3").css("background-color", "rgba(0, 134, 60, 0.644)");
    });
    
    const bookName = useRef();
    const bookDescription = useRef();
    const bookDetails = useRef();
    const listBookAdd = useRef();
    const author = useRef();
    const bookImg= useRef();

    var listBook = GetCatListFromDB();

    // const data = [
    //     {Country: 'India', id: 1},
    //     {Country: 'American', id: 2},
    //     {Country: 'English', id: 3},
    //     {Country: 'Vietnamese', id: 4},
    //     {Country: 'asd', id: 1},
    //     {Country: 'aaa', id: 2},
    //     {Country: 'Englwwish', id: 3},
    //     {Country: 'Vietwwnamese', id: 4},
    //     {Country: 'Indwwia', id: 1},
    //     {Country: 'Amewwrican', id: 2},
    //     {Country: 'Engwwwlish', id: 3},
    //     {Country: 'Vietnawwwmese', id: 4}
    // ]
    //const [options] = useState(data);

    var optionsasd = GetAuthorListFromDB();
    // const optionsasd = [
    //     { label: 'Chocolate' },
    //     { label: 'Strawberry' },
    //     { label: 'Vanilla' }
    //   ]

    const dispatch = useDispatch(); 
    useEffect(() => {
        if (match.params.id != null) {
            dispatch(GetBookById(match.params.id));
        }
    }, [])
    var book = useSelector(state => state);
    //console.log(book);
    //localStorage.setItem('bookImage', book.image);
    function ChangePic(src) {
        if (src.current.files.length > 0) {
            var image = src.current.files[0].name;
        }
        localStorage.setItem('bookImage', image);
        window.location = "/bookChange/" + match.params.id;
    }

    if (match.params.id == null) {
        return (
            <>
            <div class="titleNameForm">
            <h2>Books Table</h2>
            <p style={{marginTop: '8px'}}>Add class .table</p>
            </div><br/><br/>
            <div class="formDataBookContact">
                <label for="exampleInputCat">Book Name (*)</label><br/>
                <input name="name" type="text" id="exampleInputEmail1" style={{ width: '500px', marginBottom: "20px", height: '35px'}} ref={bookName}></input> &ensp;<br/>
                <label for="exampleInputCat">Description (*)</label><br/>
                <textarea name="name" type="text" id="exampleInputEmail1" style={{ width: '1280px', marginBottom: "20px", height: '70px', paddingLeft: "5px"}}  ref={bookDescription}></textarea> &ensp;<br/>
                <label for="exampleInputCat">Detail (*)</label><br/>
                <div class="editorCss">
                {/* <CKEditor editor={ ClassicEditor }></CKEditor> */}
                <CKEditor ref={bookDetails}></CKEditor>
                </div><br/>
                <label for="exampleInputCat">Categories List(*)</label>
                <div  class="selectCss"><Multiselect options={listBook} displayValue="name" ref={listBookAdd}/></div><br/>
                <label for="cars">Author</label>
                <div  class="selectCss"><Select options={optionsasd} ref={author}/></div><br/>
                <label for="exampleInputCat">Books Image:</label>&emsp;
                {/* <input type="image" src="https://www.festivalinfo.nl/img/upload/c/b/shawn_mendes.jpg" alt="Submit" width="48" height="48"></input> */}
                <input type="file" ref={bookImg}/>
                <br/><br/>
                <button onClick= {() => AddFunction(bookName.current.value, bookDescription.current.value, bookDetails.current.editor.getData(), listBookAdd.current.getSelectedItems(), author, bookImg)}>Add</button>
            </div>
            </>
        )
    } else {
        var authorList;
        if (book.author != null) {
            authorList = {label: book.author.name, id: book.author.id};
        }

        var bookImage = localStorage.getItem('bookImage');
        return (
        <>
        <div class="titleNameForm">
        <h2>Books Table</h2>
        <p style={{marginTop: '8px'}}>Add class .table</p>
        </div><br/><br/>
        <div class="formDataBookContact">
            <label for="exampleInputCat">Book Name (*)</label><br/>
            <input name="name" type="text" id="exampleInputEmail1" style={{ width: '500px', marginBottom: "20px", height: '35px'}} defaultValue={book.name} ref={bookName}></input> &ensp;<br/>
            <label for="exampleInputCat">Description (*)</label><br/>
            <textarea name="name" type="text" id="exampleInputEmail1" style={{ width: '1280px', marginBottom: "20px", height: '70px', paddingLeft: "5px"}} defaultValue={book.description}  ref={bookDescription}></textarea> &ensp;<br/>
            <label for="exampleInputCat">Detail (*)</label><br/>
            <div class="editorCss">
            {/* <CKEditor editor={ ClassicEditor }></CKEditor> */}
            <CKEditor data={book.detail} ref={bookDetails}></CKEditor>
            </div><br/>
            <label for="exampleInputCat">Categories List(*)</label>
            <div  class="selectCss"><Multiselect options={listBook} displayValue="name" selectedValues={book.categories} ref={listBookAdd}/></div>
            <br/>
            <label for="cars">Author</label>
            <div  class="selectCss"><Select options={optionsasd} value={authorList}  placeholder="Author Name" ref={author}/></div><br/>
            <label for="exampleInputCat">Books Image:</label>&emsp;
            {/* <input type="image" src="https://www.festivalinfo.nl/img/upload/c/b/shawn_mendes.jpg" alt="Submit" width="48" height="48"></input> */}
            <input type="file" ref={bookImg} style={{width: '140px', color: 'transparent'}}/>  {/* onChange={() => ChangePic(bookImg)} */}
            <img src={book.image} style={{width: '90px', height: '90px'}}/>
            <button onClick={() => {if (window.confirm('Are you sure you wish to update this item?')) UpdateBookFunction(match.params.id, bookName.current.value, bookDescription.current.value, bookDetails.current.editor.getData(), listBookAdd.current.getSelectedItems(), author, bookImg)}} style={{marginLeft: "100px", height: '30px', width: "80px"}}>Update</button>
        </div>
        </>
        )
    }
}

export default BookChange;