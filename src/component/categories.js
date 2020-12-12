import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiAddBoxFill } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import { HiUserAdd } from "react-icons/hi";
import { GrUpdate } from "react-icons/gr";
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from "react-icons/bs";

import {useState} from 'react';
import Axios from 'axios';
import proxy from 'http-proxy-middleware';
import {useSelector, useDispatch} from 'react-redux';
import {ShowCat, GetListCat , ShowCatSize, ChangeListCatByPageIndex, GetIndexPage, delFunc} from '../redux/reduxCat.js';
import $ from 'jquery'; 

function Categories() {
  $(document).ready(function(){
    $(".iconTasks").css("background-color", "");
    $("#iconTasks2").css("background-color", "rgba(0, 134, 60, 0.644)");
    $("#index1").css("background-color", "rgb(13, 187, 85)");
  });

  function changeColorBtn() {
    setTimeout(function(){
      $("#index1").css("background-color", "");
    }, 100);
  }
  //const dispatch = useDispatch(); 
  //const listCat = useSelector(state => state);
  //console.log(listCat);

  //dispatch(ShowCat());
  //const index = useSelector(state => state.name);
  //console.log(index);
  //const stateStore = useSelector(state => state);
  //console.log(stateStore.name);

  //app.use('/api/**', proxy({ target: "http://localhost:8080" }));
  //let [post, setPost] = useState([]); //{id: 1, name: "cc"} , {id: 2, name: "cl"}
  //Axios.defaults.headers.common["Authorization"] = this.state.token;Token;

  // useEffect(() => {
  //   Axios.get('http://localhost:8080/cats', {
  //     method: 'GET',
  //     data: {},
  //     //data: JSON.stringify(),
  //     //contentType: 'application/json', 
  //     //responseType: 'application/json',
  //     headers: {
  //       "Authorization": Token,
  //       //'Access-Control-Allow-Origin': 'http://localhost:3000',
  //       //'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //       //"proxy": "http://localhost:8080"
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //   .then(function (response) {
  //     setPost(response.data)
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  // }, post)
 
  // let [sizePage, setCat] = useState();
  // var data = {};
  // var config = {
  //   method: 'PUT',
  //   headers: {
  //     "Authorization": Token,
  //     'Content-Type': 'application/json'
  //   }
  // }
  // Axios.put('http://localhost:8080/cats', data, config)
  // .then(function (asd) {
  //   setCat(asd.data);
  // })  
  // .catch(function (error) {
  //   console.log(error);
  // })

  
  //var index =  dispatch(ShowCatSize());
  //const index = useSelector(stateMore => stateMore);
  //console.log(index);
  //dispatch(ShowCat());
  //dispatch(ShowCat())
  //const index = useSelector(state => state.name);
  //const jsonCat = localStorage.getItem('state');
  //const listCat = JSON.parse(jsonCat);
  
  //console.log(JSON.parse(listCat));
  //console.log(index);
  //const dispatch = useDispatch(); 

  const dispatch = useDispatch(); 
  let [cat, setCat] = useState({});
  //setCat(dispatch(ShowBook()));
  useEffect(() => {
    setCat(dispatch(ShowCat()));
    var index = ShowCatSize();
    return () => {
      //var index = ShowCatSize();
    }
  }, cat)
  //dispatch(ShowCat());
  //const dispatch = useDispatch(); 
  //var listCatEx = ShowCat(listCatEx);
  //dispatch(GetListCat);
  
  //dispatch(getListCat());

  
  // if (cat.payload !== null) {
  //   console.log("cat");
  //console.log(cat.payload);
  // }
  //var catObj = [];
  //for (var i = 0; i < 7; i++) {
  //  catObj.push(cat.payload[i]);
  //}
  // setTimeout(function(){
  //   console.log(cat.payload);
  // }, 1000);
  //var listCat = [{}, {}];
  //listCat = cat.payload;
  

  //console.log(listCatEx);
  //setTimeout(function(){
  // dispatch(GetListCat(listCatEx));
  //}, 1000);
  const listCat = useSelector(state => state);
  //console.log(listCat);
  // function getStart() {
  //   var listCatEx = [];
  //   ShowCat(listCatEx);
  //   dispatch(GetListCat(listCatEx));
  // }
  const list = Array.from(listCat);

  function listObj() {
    //var listCatEx = ShowCat();
    //var listCatEx = ShowCat();
    //dispatch(GetListCat(listCatEx));
    //dispatch(GetListCat(listCatEx));
    //const dispatch = useDispatch(); 
    
    //dispatch(ShowCat());
    //console.log(stateStore.name);
    //alert("hello");
    //setTimeout(function(){
    //console.log(cat.payload);
    // for (var i = 0; i < cat.payload.length; i++) {
    //    listCat.push(cat.payload[i]);
    // }
    //console.log(listCat);
    //}, 1000);
      return (
        list.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <Link to={`/catAdd/${item.id}`} ><button class="updatedBtn" ><GrUpdate/> </button></Link>
                <button class="deletedBtn" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?'))  delFunc(item.id) } }><AiFillDelete /></button>
              </td>
            </tr>
          )
        })
        //<></>
      )
    //}, 1000);
  }

  // function delFunc(id) {
  //   Axios.delete('http://localhost:8080/cats/' + id, {
  //     headers: {
  //       "Authorization": Token,
  //     },
  //   })
  //   .then(function (response) {
  //     console.log("working!")
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })

  // }
 
  const arr = [];

  // function LoadPhanTrang(index) {
  //   Axios.get('http://localhost:8080/cats?page=' + (index-1)+ '&size=7', {
  //     method: 'GET',
  //     data: {},
  //     headers: {
  //       "Authorization": Token,
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //   .then(function (response) {
  //     setPost(response.data)
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  // }

  function paginationFunc() {
    var index = ShowCatSize();
    var numberOfPages = Math.floor(index / 4);
    for (var i = 1 ; i <= numberOfPages; i++) {
      var index = i;
      arr.push(i);
    }

    return (
      arr.map((item, index) => {
        var idStr = "index" + item;
        return (
          <button class="phanTrangBtn" id={idStr} onClick={() => {dispatch(ChangeListCatByPageIndex(item)); changeColorBtn()}}>{item}</button>
        )
      })
    )
  }

  return (
    <>
      <div class="titleNameForm">
        <h2>Categories Table</h2>
        <p style={{marginTop: '8px'}}>Show class .table</p>
      </div><br/><br/><br/>
      <Link to="/catAdd" class="addBtn">< HiUserAdd class="borderCss"/></Link>
      <div class="formData">
      <table class="table">
        <tr>
          <th style={{width:'20%'}}>Id</th>
          <th style={{width:'45%'}}>Category</th>
          <th style={{width:'35%'}}>Funcion</th>
        </tr>
        
        {/* {getStart()} */}
        {listObj()}
        
      </table>
      </div>
      <div class="phantrangCategory">
           {paginationFunc()}
            {/* <button class="phanTrangBtn" ><Link to="#"><BsFillSkipBackwardFill /></Link></button>
                  {paginationFunc()}
            <button class="phanTrangBtn"><Link to="#"><BsFillSkipForwardFill/></Link></button> */}
      </div>
    </>    
  );
  //}, 1000);
}

export default Categories;