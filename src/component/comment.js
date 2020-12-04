import React, { Component, useEffect } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { RiAddBoxFill } from "react-icons/ri";
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from "react-icons/bs";

import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ShowComments, GetCommentSize, ChangeListCommentByPageIndex, delFunc} from '../redux/reduxComment.js';
import $ from 'jquery'; 

function Comment() {
  $(document).ready(function(){
    $(".iconTasks").css("background-color", "");
    $("#iconTasks6").css("background-color", "rgba(0, 134, 60, 0.644)");
    $("#index1").css("background-color", "rgb(13, 187, 85)");
  });

  function changeColorBtn() {
    setTimeout(function(){
      $("#index1").css("background-color", "");
    }, 100);
  }

  const dispatch = useDispatch(); 
  let [comment, setComment] = useState({});
  useEffect(() => {
    setComment(dispatch(ShowComments()));
  }, comment)

  const listCommentSelector = useSelector(state => state);
  const listComment = Array.from(listCommentSelector);

  function getComment() {
    return (
      listComment.map((item, index) => {
        //item.user.usernameconsole.log(item.user.username);{item.user.username}{item.book.name}
        //var arrUser = [];
        //for (var i = 0; i < item.user.length; i++) {
        //  
        //}
        //console.log(item.user.length);
          var username = "";
          var bookname = "";
          if (item.book != null){
            bookname = item.book.name;
          }
          if (item.user != null) {
            username = item.user.username;
          }
          return (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.comment}</td>
            <td>{bookname}</td>
            <td>{username}</td>
            <td>
              <button class="deletedBtn" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?'))  delFunc(item.id) } }><AiFillDelete /></button>
            </td>
          </tr>
        )
      })
    )
  }

  function paginationFunc() {
    var arr = [];
    var index = GetCommentSize();
    var numberOfPages = Math.floor(index / 4);
    for (var i = 1 ; i <= numberOfPages; i++) {
      var index = i;
      arr.push(i);
    }

    return (
      arr.map((item, index) => {
        var idStr = "index" + item;
        return (
          <button class="phanTrangBtn" id={idStr} onClick={() => {dispatch(ChangeListCommentByPageIndex(item)); changeColorBtn()}}>{item}</button>
        )
      })
    )
  }

  return (
    <>
      <div class="titleNameForm">
        <h2>Comments Table</h2>
        <p style={{marginTop: '-3px'}}>Show class .table</p>
      </div><br/><br/><br/><br/><br/><br/>
      <div class="formData">
      <table>
        <tr>
          <th style={{width:'10%', marginLeft: '20px'}}>Id</th>
          <th style={{width:'30%'}}>Comment</th>
          <th style={{width:'30%'}}>Book</th>
          <th style={{width:'20%'}}>User</th>
          <th style={{width:'10%'}}>Funcion</th>
        </tr>
        {getComment()}
      </table>
      </div>
      <div class="phantrangComment">
           {paginationFunc()}
            {/* <button class="phanTrangBtn" ><Link to="#"><BsFillSkipBackwardFill /></Link></button>
                 
            <button class="phanTrangBtn"><Link to="#"><BsFillSkipForwardFill/></Link></button> */}
      </div>
    </>
  );  
}


export default Comment;