import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
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
import './signin.css'
import {CheckApiLogin, LogOutFun, GetUsername} from './redux/reduxLogin.js';



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
    <Router>
      <Page />
    </Router>
  );
}

function Page() {

  const username = useRef();
  const password = useRef();

  var Token = localStorage.getItem('Token');
  var nameStr =  GetUsername(Token);

  var image = "";
  if (nameStr == "admin") {
    nameStr = "Minh Chuan";
    image = "https://images-na.ssl-images-amazon.com/images/I/619A8hOoG3L._SL1152_.jpg";
  } else {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQARPRzahfEwt6xf7y7V2wDIWSKRGb0PmE3ow&usqp=CAU";
  }

  if (Token != null) {
    return (
    <div>
      <header className="App-MenuTask-Me">
        <div class="cssSlideBar">
          <Link to="/" style={{ textDecoration: 'none',fontSize: '45px',color: 'darkcyan',  fontFamily: 'Charmonman',fontSize: '40px', marginLeft: '40px'}}><strong>ADMIN</strong></Link>
          <hr style={{ marginTop: '20px', backgroundColor:'azure'}}/>
          <Link to="/" style={{ textDecoration: 'none',fontSize: '20px',color: 'white'}} ><span><div class="iconTasks" id="iconTasks1"><AiOutlineHome class="iconMe"/>Home</div></span></Link>
          <Link to="/cat" style={{ textDecoration: 'none',fontSize: '20px',color: 'white'}}><div class="iconTasks" id="iconTasks2"><BiDuplicate class="iconMe"/>Categories</div></Link>
          <Link to="/book" style={{ textDecoration: 'none',fontSize: '20px',color: 'white'}} ><div class="iconTasks" id="iconTasks3"><BiBook class="iconMe"/>Book</div></Link>
          <Link to="/author" style={{ textDecoration: 'none',fontSize: '20px',color: 'white'}}><div class="iconTasks" id="iconTasks4"><FaUserEdit class="iconMe" />Authors</div></Link>
          <Link to="/user" style={{ textDecoration: 'none',fontSize: '20px',color: 'white'}}><div class="iconTasks" id="iconTasks5"><VscAccount class="iconMe"/>User</div></Link>
          <Link to="/comment" style={{ textDecoration: 'none',fontSize: '20px',color: 'white'}}><div class="iconTasks" id="iconTasks6"><BiCommentDetail class="iconMe"/>Comments</div></Link>
          <Link to="/contact" style={{ textDecoration: 'none',fontSize: '20px',color: 'white'}} ><div class="iconTasks" id="iconTasks7"><AiFillContacts class="iconMe"/>Contact</div></Link>
        </div>
        
      </header>
      <header className="App-header-Me-ver2">
      </header>
      <div className="App-header-posion">
        <header className="App-header-Me">
        <button class="btnLogin" onClick={() => LogOutFun()}>Log Out</button>
        <span class="usernameLogin">{nameStr}</span>
        <span class="iconLogin"><img src={image}  style={{ height: '50px', width: '50px', borderRadius: "50%"}}/></span>
        </header>
      </div>
      
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
      <p>2020 © my Admin brought to you by Minh Chuan |  <IoLogoGithub/></p>
      </footer>
    </div>
    
    )
  } else {
    return (
    <>
      <div>
          <div className="signin-body">
              <div href="/signin" className="container-sigin" id="container">
                  <div className="form-container sign-in-container">
                      <div className="form-signin">
                          <h3 class="nameLogin" style={{color:'#FF0059'}}><strong>LOGIN</strong></h3>
                          <form action="#" onSubmit={() => {CheckApiLogin(username.current.value, password.current.value)}}>
                            <input className="signin-input-thongtin" type="text" placeholder="Email" ref={username} />
                            <input className="signin-input-thongtin" type="password" placeholder="Password" ref={password}/><br/><br/>
                            <a className="a-Forgotyourpassword">Forgot your password?</a><br/><br/>
                            <button className="button-signin-signup">Sign In</button>
                          </form>
                      </div>
                  </div>
                  <div className="overlay-container">
                      <div className="overlay">
                          <div className="overlay-panel overlay-right">
                              <h1>Hello, Friend!</h1>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
    )
  }
  
}

// function LoginPage() {
//   return (
//     <>
//       <div>
//           <div className="signin-body">
//               <div href="/signin" className="container-sigin" id="container">
//                   <div className="form-container sign-in-container">
//                       <div className="form-signin">
//                           <h3 style={{color:'#FF0059'}}>LOGIN ADMIN</h3><br/>
//                           <input className="signin-input-thongtin" type="email" placeholder="Email" />
//                           <input className="signin-input-thongtin" type="password" placeholder="Password" />
//                           <a className="a-Forgotyourpassword">Forgot your password?</a><br/>
//                           <button className="button-signin-signup" onClick={App2}>Sign In</button>
//                       </div>
//                   </div>
//                   <div className="overlay-container">
//                       <div className="overlay">
//                           <div className="overlay-panel overlay-right">
//                               <h1>Hello, Friend!</h1>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </div>
//     </>
//   )
// }

export default App;
