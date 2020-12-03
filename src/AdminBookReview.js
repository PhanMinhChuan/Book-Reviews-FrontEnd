import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Home from './component/home.js';
import Categories from './component/categories.js';
import CategoriesChange from './component/add&update/categoriesChange.js';
import Book from './component/book.js'
import BookChange from './component/add&update/bookChange.js';
import Author from './component/author.js'
import AuthorChange from './component/add&update/authorChange.js';
import Comment from './component/comment.js'
import User from './component/user.js'
import UserChange from './component/add&update/userChange.js';
import Contact from './component/contact.js'
import ContactChange from './component/add&update/contactChange.js';
import { Bootstrap } from 'bootstrap/dist/css/bootstrap.css';
import { VscAccount } from "react-icons/vsc";
import { AiFillContacts, AiOutlineHome} from "react-icons/ai";
import { BiCommentDetail, BiBook, BiDuplicate} from "react-icons/bi";
import { FaUserEdit, FaUserCircle} from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import {useDispatch} from 'react-redux';
import {ShowCat} from './redux/reduxCat.js';
import {ShowBook} from './redux/reduxBook.js';





function App() {
  //let [post, setPost] = useState({});

  // useEffect(() => {
  //   axios.get('http:/localhost:3000/posts', {
  //     params: {
  //       id: 1
  //     }
  //   }) 
  //   .then(function(response) {
  //     setPost(response.data);
  //   })
  //   .catch(function(error) {
  //     console.log(error)
  //   })
  // })
  return (
    <div className="App">
      <Router>
        <Page />
        <div>
          {/* <h1>{post.title}</h1>
          <p>{post.author}</p> */}
        </div>
      </Router>
    </div>
    
  );
}

function Page() {
  return (
    <div>
      <header className="App-MenuTask-Me">
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link> 
        onClick={() => {dispatch(ShowCat())}}
        */}
        <div class="cssSlideBar">
          <Link to="/" style={{ textDecoration: 'none',fontSize: '45px',color: 'darkcyan',  fontFamily: 'Charmonman',fontSize: '40px', marginLeft: '40px'}}><strong>ADMIN</strong></Link>
          <hr style={{ marginTop: '20px', backgroundColor:'azure'}}/>
          <Link to="/" style={{ textDecoration: 'none',fontSize: '20px',color: 'white'}}><div class="iconTasks"><AiOutlineHome class="iconMe"/>Home</div></Link>
          <Link to="/cat" style={{ textDecoration: 'none',fontSize: '20px',color: 'white'}} ><div class="iconTasks"><BiDuplicate class="iconMe"/>Categories</div></Link>
          <Link to="/book" style={{ textDecoration: 'none',fontSize: '20px',color: 'white'}} ><div class="iconTasks"><BiBook class="iconMe"/>Book</div></Link>
          <Link to="/author" style={{ textDecoration: 'none',fontSize: '20px',color: 'white'}}><div class="iconTasks"><FaUserEdit class="iconMe" />Authors</div></Link>
          <Link to="/user" style={{ textDecoration: 'none',fontSize: '20px',color: 'white'}}><div class="iconTasks"><VscAccount class="iconMe"/>User</div></Link>
          <Link to="/comment" style={{ textDecoration: 'none',fontSize: '20px',color: 'white'}}><div class="iconTasks"><BiCommentDetail class="iconMe"/>Comments</div></Link>
          <Link to="/contact" style={{ textDecoration: 'none',fontSize: '20px',color: 'white'}}><div class="iconTasks"><AiFillContacts class="iconMe"/>Contact</div></Link>
        </div>
        
      </header>
      <header className="App-header-Me">
        <button class="btnLogin">Log Out</button>
        <span class="usernameLogin">Minh Chuẩn</span>
        <span class="iconLogin"><img src="https://www.festivalinfo.nl/img/upload/c/b/shawn_mendes.jpg"  style={{ height: '50px', width: '50px', borderRadius: "50%"}}/></span>
      </header>
      <main class="main-Me">
        <Switch>
          <Route exact path="/" component= {Home} />
          <Route exact path="/cat" component= {Categories} />
          <Route exact path="/catAdd" component= {CategoriesChange} />
          <Route exact path="/catAdd/:id" component= {CategoriesChange} />
          <Route exact path="/book" component= {Book} />
          <Route exact path="/bookChange" component= {BookChange} />
          <Route exact path="/bookChange/:id" component= {BookChange} />
          <Route exact path="/author" component= {Author} />
          <Route exact path="/authorChange" component= {AuthorChange} />
          <Route exact path="/authorChange/:id" component= {AuthorChange} />
          <Route exact path="/comment" component= {Comment} />
          <Route exact path="/user" component= {User} />
          <Route exact path="/userChange" component= {UserChange} />
          <Route exact path="/userChange/:id" component= {UserChange} />
          <Route exact path="/contact" component= {Contact} />
          <Route exact path="/contactChange/:id" component= {ContactChange} />
        </Switch>
      </main>
      <footer className="App-footer-Me">
      <p>2020 © Ample Admin brought to you by Minh Chuan |  <IoLogoGithub/></p>
      </footer>
      
      {/* <footer>
        footer Page
      </footer> */}
    </div>
    
  )
}

export default App;
