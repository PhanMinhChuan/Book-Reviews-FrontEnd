import React, { Component, useEffect, useRef } from 'react';
import {userRouteMatch, useParams} from "react-router-dom";
import {useState} from 'react';
import Axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { ShowContact, UpdateContactFunction} from '../../redux/reduxContact.js';

function ContactChange( {match} ) {
    const facebook = useRef();
    const youtube = useRef();
    const gmail = useRef();
    const address = useRef();
    const phone = useRef();

    const dispatch = useDispatch(); 
  
    let [objectContact, setContact] = useState();
    useEffect(() => {
      if (match.params.id != null) {
        setContact(dispatch(ShowContact(match.params.id)));
      }
    }, objectContact)
    const contact = useSelector(state => state);

    if (match.params.id != null) {
        return (
        <>
            <div class="titleNameForm">
            <h2>Contact Table</h2>
            <p style={{marginTop: '8px'}}>Update class .table</p>
            </div><br/><br/>
            <div class="formDataAddContact">
                <label for="exampleInputCat">Facebook (*)</label><br/>
                <input name="name" type="text" id="exampleInputEmail1" style={{ width: '425px', marginBottom: "10px", height: 'height: 35px'}} defaultValue={contact.facebook} ref={facebook}></input> &ensp;<br/>
                <label for="exampleInputCat">Youtube (*)</label><br/>
                <input name="name" type="text" id="exampleInputEmail1" style={{ width: '425px', marginBottom: "10px", height: 'height: 35px'}} defaultValue={contact.youtube} ref={youtube}></input> &ensp;<br/>
                <label for="exampleInputCat">Gmail (*)</label><br/>
                <input name="name" type="text" id="exampleInputEmail1" style={{ width: '425px', marginBottom: "10px", height: 'height: 35px'}} defaultValue={contact.gmail} ref={gmail}></input> &ensp;<br/>
                <label for="exampleInputCat">Address (*)</label><br/>
                <input name="name" type="text" id="exampleInputEmail1" style={{ width: '425px', marginBottom: "10px", height: 'height: 35px'}} defaultValue={contact.address} ref={address}></input> &ensp;<br/>
                <label for="exampleInputCat">Phone (*)</label><br/>
                <input name="name" type="text" id="exampleInputEmail1" style={{ width: '425px', marginBottom: "20px", height: 'height: 35px'}} defaultValue={contact.phoneNumber} ref={phone}></input> &ensp;<br/>
                
                <button onClick={() => {if (window.confirm('Are you sure you wish to update this item?')) UpdateContactFunction(match.params.id, facebook.current.value, youtube.current.value, gmail.current.value, address.current.value, phone.current.value)}}>Update</button>
            </div>
        </>    
        );
      } else {
            return (
                <></>
            );
      }

}

export default ContactChange;