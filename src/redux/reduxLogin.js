export function CheckApiLogin(id) {
    if (id == 1) {
        localStorage.setItem('loginIndex',1);
        window.location = "/";
    } else {
        localStorage.setItem('loginIndex',0);
        window.location = "/";
    }
   
}