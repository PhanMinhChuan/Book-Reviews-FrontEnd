import React, { Component, useEffect } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { RiAddBoxFill } from "react-icons/ri";
import { HiUserAdd } from "react-icons/hi";
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from "react-icons/bs";

import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ShowAuthors, GetAuthorSize, ChangeListAuthorByPageIndex, DeletedAuthorFunc} from '../redux/reduxAuthor.js';
import $ from 'jquery';

function Author() {
  $(document).ready(function(){
    $(".iconTasks").css("background-color", "");
    $("#iconTasks4").css("background-color", "rgba(0, 134, 60, 0.644)");
    $("#index1").css("background-color", "rgb(13, 187, 85)");
  });

  function changeColorBtn() {
    setTimeout(function(){
      $("#index1").css("background-color", "");
    }, 100);
  }


  const dispatch = useDispatch(); 
  let [author, setAuthor] = useState({});
  useEffect(() => {
    setAuthor(dispatch(ShowAuthors()));
  }, author)

  const listAuthorSelector = useSelector(state => state);
  const listAuthor = Array.from(listAuthorSelector);

  function getAuthor() {
    return (
      listAuthor.map((item, index) => {
        var catName = "";
        if(item.categories != null) {
          for (var i = 0; i < item.categories.length; i++) {
            catName += "[" + item.categories[i].name + "] ";
          }
        }
        return (
          <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.brith}</td>
          <td>{item.sex}</td>
          <td>{catName}</td>
          <td>
            <Link to={`/authorChange/${item.id}`} ><button class="updatedBtn"><GrUpdate/></button></Link>
            <button class="deletedBtn" onClick={() => {if (window.confirm('Are you sure you wish to delete this item?')) DeletedAuthorFunc(item.id)}}><AiFillDelete/></button>
          </td>
          </tr>
        )
      })
    )
  }

  function paginationFunc() {
    var arr = [];
    var index = GetAuthorSize();
    var numberOfPages = Math.floor(index / 4);
    for (var i = 1 ; i <= numberOfPages; i++) {
      var index = i;
      arr.push(i);
    }

    return (
      arr.map((item, index) => {
        var idStr = "index" + item;
        return (
          <button class="phanTrangBtn" id={idStr} onClick={() => {dispatch(ChangeListAuthorByPageIndex(item)); changeColorBtn()}}>{item}</button>
        )
      })
    )
  }

  return (
    <>
      <div class="titleNameForm">
        <h2>Authors Table</h2>
        <p style={{marginTop: '-3px'}}>Show class .table</p>
        </div><br/><br/><br/>
      <Link to="/authorChange" class="addBtn">< HiUserAdd class="borderCss"/></Link>
      <div class="formData">
      <table>
        <tr>
          <th style={{width:'10%'}}>Id</th>
          <th style={{width:'20%'}}>Name</th>
          <th style={{width:'20%'}}>Birth</th>
          <th style={{width:'20%'}}>Sex</th>
          <th style={{width:'17%'}}>Categories</th>
          <th style={{width:'13%'}}>Funcion</th>
        </tr>
        {getAuthor()}
      </table>

      </div>
      <div class="phantrangAuthor">
            {paginationFunc()}
            {/* <button class="phanTrangBtn" ><Link to="#"><BsFillSkipBackwardFill /></Link></button>
            
            <button class="phanTrangBtn"><Link to="#"><BsFillSkipForwardFill/></Link></button> */}
      </div>
    </>  
  );
}


export default Author;