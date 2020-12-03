import React, { Component, useEffect } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { RiAddBoxFill } from "react-icons/ri";
import { HiUserAdd } from "react-icons/hi";
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from "react-icons/bs";

import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ShowUsers, GetUserSize, ChangeListUserByPageIndex} from '../redux/reduxUser.js';

function User() {

  const dispatch = useDispatch(); 
  let [user, setUser] = useState({});
  useEffect(() => {
    setUser(dispatch(ShowUsers()));
  }, user)

  const listUserSelector = useSelector(state => state);
  const listUser = Array.from(listUserSelector);

  function getUser() {
    return (
      listUser.map((item, index) => {
        var bookName = "";
        if (item.books != null) {
          for (var i = 0; i < item.books.length; i++) {
            if (i != item.books.length) {
              bookName += "["+item.books[i].name +"], ";
            } else {
              bookName += "["+item.books[i].name +"]";
            }
            
            
          }
        }
        if (item.username !== "admin") {
          return (
                  <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.password}</td>
                  <td>{bookName}</td>
                  <td>
                    <button class="deletedBtn"><AiFillDelete/></button>
                    <Link to={`/userChange/${item.id}`} ><button class="updatedBtn"><GrUpdate/></button></Link>
                  </td>
                  </tr>
                 )
        } else {
          return (
            <tr key={index}>
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.password}</td>
            <td>{bookName}</td>
            <td>
            </td>
            </tr>
           )
        }
      })
    )
  }
  

  function paginationFunc() {
    var arr = [];
    var index = GetUserSize();
    var numberOfPages = Math.floor(index / 4);
    for (var i = 1 ; i <= numberOfPages; i++) {
      var index = i;
      arr.push(i);
    }

    return (
      arr.map((item, index) => {
        return (
          <button class="phanTrangBtn" onClick={() => {dispatch(ChangeListUserByPageIndex(item))}}>{item}</button>
        )
      })
    )
  }

  return (
    <>
      <div class="titleNameForm">
        <h2>Users Table</h2>
        <p style={{marginTop: '-3px'}}>Show class .table</p>
      </div><br/><br/><br/><br/>
      <Link to="/userChange" class="addBtn">< HiUserAdd class="borderCss"/></Link>
      <div class="formData">
      <table>
        <tr>
          <th style={{width:'10%'}}>Id</th>
          <th style={{width:'15%'}}>Username</th>
          <th style={{width:'25%'}}>Password</th>
          <th style={{width:'25%'}}>Books</th>
          <th style={{width:'15%'}}>Function</th>
        </tr>
        {getUser()}
      </table>
      </div>
      <div class="phantrangMe">
          {paginationFunc()}
            {/* <button class="phanTrangBtn" ><Link to="#"><BsFillSkipBackwardFill /></Link></button>
                  {paginationFunc()}
            <button class="phanTrangBtn"><Link to="#"><BsFillSkipForwardFill/></Link></button> */}
      </div>
    </>
  );
}


export default User;