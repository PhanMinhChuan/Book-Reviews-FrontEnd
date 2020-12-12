import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import { AiFillContacts, AiOutlineHome, AiOutlineUserAdd} from "react-icons/ai";
import { BiCommentDetail, BiBook, BiDuplicate} from "react-icons/bi";
import { FaUserEdit, FaUserCircle} from "react-icons/fa";
import $ from 'jquery'; 

function Home() {

  // function loadPage() {
  //   window.location = "/cat";
  // }
  // var Token = localStorage.getItem('Token');

  // useEffect(()=>{
  //   loadPage();
  // }, Token)

  $(document).ready(function(){
    $(".iconTasks").css("background-color", "");
    $("#iconTasks1").css("background-color", "rgba(0, 134, 60, 0.644)");
  });

    return (
      <>
        <div class= "formData">
          <div class="homeData">
            <Link to="/cat" style={{ textDecoration: 'none',fontSize: '45px'}}><button class="btnHome"><BiDuplicate class="homeIcon"/></button></Link>
            <Link to="/book" style={{ textDecoration: 'none',fontSize: '45px'}}><button class="btnHome"><BiBook class="homeIcon"/></button></Link>
            <Link to="/user" style={{ textDecoration: 'none',fontSize: '45px'}}><button class="btnHome"><AiOutlineUserAdd class="homeIcon"/></button></Link>
          </div>
        </div>
      </>
      
    );
}


export default Home;