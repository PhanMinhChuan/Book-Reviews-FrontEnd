import React, { Component, useEffect} from 'react';
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { RiAddBoxFill } from "react-icons/ri";
import {useSelector, useDispatch} from 'react-redux';
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from "react-icons/bs";

import {useState} from 'react';
import {ShowContact} from '../redux/reduxContact.js';
import $ from 'jquery'; 

function Contact() {
  $(document).ready(function(){
    $(".iconTasks").css("background-color", "");
    $("#iconTasks7").css("background-color", "rgba(0, 134, 60, 0.644)");
  });

  const dispatch = useDispatch(); 
  let [contact, setContact] = useState({});
  useEffect(() => {
    setContact(dispatch(ShowContact()));
  }, contact)

  const listContactSelector = useSelector(state => state);
  console.log(listContactSelector);

  const listContact = [];
  listContact.push(listContactSelector);
  const listFinally = Array.from(listContact);

  //console.log(listContact);

  function getContact() {
    return (
      listFinally.map((item, index) => {
        return (
          <tr key={index}>
          <td>{item.facebook}</td>
          <td>{item.youtube}</td>
          <td>{item.gmail}</td>
          <td>{item.address}</td>
          <td>{item.phoneNumber}</td>
          <td>
            <Link to={`/contactChange/${item.id}`} ><button class="updatedBtn" ><GrUpdate/></button></Link>
          </td>
        </tr>
        )
      })
    )
  }

  return (
    <div>
      <div class="titleNameForm">
        <h2>Contacts Table</h2>
        <p style={{marginTop: '-3px'}}>Show class .table</p>
      </div><br/><br/><br/><br/><br/><br/><br/>
      <div class="formData">
      <table>
        <tr>
          <th style={{width:'20%'}}>Facebook</th>
          <th style={{width:'20%'}}>Youtube</th>
          <th style={{width:'20%'}}>Gmail</th>
          <th style={{width:'20%'}}>Address</th>
          <th style={{width:'10%'}}>Phone</th>
          <th style={{width:'10%'}}>Funcion</th>
        </tr>
        {getContact()}
      </table>

      </div>
    </div>
  );  
}


export default Contact;