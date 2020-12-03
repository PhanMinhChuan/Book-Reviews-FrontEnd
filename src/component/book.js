import React, { Component, useEffect } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { RiAddBoxFill } from "react-icons/ri";
import { HiUserAdd } from "react-icons/hi";
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from "react-icons/bs";

import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ShowBooks, GetBookSize, ChangeListBookByPageIndex} from '../redux/reduxBook.js';
import $ from 'jquery'; 


function Book() {
  $(document).ready(function(){
    $(".iconTasks").css("background-color", "");
    $("#iconTasks3").css("background-color", "rgba(0, 134, 60, 0.644)");
  });
  

  const dispatch = useDispatch(); 
  let [book, setBook] = useState({});
  useEffect(() => {
    setBook(dispatch(ShowBooks()));
  }, book)

  const listBookSelector = useSelector(state => state);
  const listBook = Array.from(listBookSelector);

  function GetBook() {
    return (
      listBook.map((item, index) => {
        var catName = "";
        var authorName = "";
        if (item.categories != null){
          console.log(item.categories.name);
          for (var i = 0; i< item.categories.length; i++) {
            catName += "[" + item.categories[i].name + "] ";
          }
        }
        if (item.authors != null) {
          authorName = item.authors.name;
        }

        console.log(item);
        return (
          <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td><p class="overflow-ellipsis">{item.description}</p></td>
          <td><p class="overflow-ellipsis">{item.detail}</p></td>
          <td>{catName}</td>
          <td>{authorName}</td>
          <td><img src={item.image} style={{height: '80px', width: '90px', marginLeft: '15px'}}/></td>
          <td>
            <button class="deletedBtn"><AiFillDelete/></button>
            <Link to={`/bookChange/${item.id}`} ><button class="updatedBtn" ><GrUpdate/></button></Link>
          </td>
        </tr>
        )
      })
    )
  }

  function paginationFunc() {
    var arr = [];
    var index = GetBookSize();
    var numberOfPages = Math.floor(index / 4);
    for (var i = 1 ; i <= numberOfPages; i++) {
      var index = i;
      arr.push(i);
    }

    return (
      arr.map((item, index) => {
        return (
          <button class="phanTrangBtn" onClick={() => {dispatch(ChangeListBookByPageIndex(item))}}>{item}</button>
        )
      })
    )
  }

  return (
    <>
      <div class="titleNameForm">
        <h2>Books Table</h2>
        <p style={{marginTop: '-3px'}}>Show class .table</p>
      </div><br /><br /><br />
      <Link to="/bookChange" class="addBtn">< HiUserAdd class="borderCss"/></Link>
      <div class="formData">
      <table>
        <tr>
          <th style={{width:'5%'}}>Id</th>
          <th style={{width:'15%'}}>Name</th>
          <th style={{width:'15%'}}>Description</th>
          <th style={{width:'15%'}}>Detail</th>
          <th style={{width:'15%'}}>Category</th>
          <th style={{width:'12%'}}>Author</th>
          <th style={{width:'10%'}}>Image</th>
          <th style={{width:'13%'}}>Funcion</th>
        </tr>
        {GetBook()}
      </table>
      </div>
      <div class="phantrangMe">
                  {paginationFunc()}
      </div>
    </>    
  );
}

export default Book;