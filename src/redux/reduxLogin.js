import Axios from 'axios';

export function CheckApiLogin(username, password) {
  var data = {username: username, password: password};
  console.log(JSON.stringify(data));
  Axios.post('http://localhost:8080/users/login', JSON.stringify(data),{
    headers: {
      'Content-Type': 'application/json'
    },
    })
    .then(function (response) {
      localStorage.setItem('Token',response.data);
      window.location = "/";
    })
    .catch(function (error) {
      alert("ERROR:Sai tài khoản hoặc mật khẩu, xin vui lòng nhập lại!!");
      console.log(error);
    })
    //alert("ERROR:Sai tài khoản hoặc mật khẩu, xin vui lòng nhập lại!!");
    //window.location = "/";
}

export function GetUsername(Token) {
  var data = {};
  Axios.post('http://localhost:8080/jwt', data,{
    headers: {
      "Authorization": Token,
      'Content-Type': 'application/json'
    },
    })
    .then(function (response) {
      localStorage.setItem('Username',response.data);
    })
    .catch(function (error) {
      console.log(error);
    })

    var nameStr =  localStorage.getItem('Username');
    return nameStr;
}

export function LogOutFun() {
    localStorage.removeItem('Token');
    localStorage.removeItem('Username');
    
    window.location = "/";
}