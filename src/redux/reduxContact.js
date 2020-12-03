import Axios from 'axios';

export function ShowContact() {
    return async(dispatch) => {
        Axios.get('http://localhost:8080/contacts',  {
            method: 'GET',
            data: {},
            headers: {
                "Authorization": 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjA2ODgyMTUyLCJleHAiOjE2MDc0ODY5NTJ9.pqtJNdc_iy7vwEDOHFMxWr0qZtUb8wQDoPw_r5lyl-EfnQaiWacUbWxJ9TVyfS9v-VBqJkT7fRsfYQdq4CpNpA',
                'Content-Type': 'application/json'
            },
        })
            .then(function (responds) {
                dispatch(sendActionShowToRedux(responds.data));
            })
    }
}

export function sendActionShowToRedux(listContact) {
    return {
        type: "showContact",
        payload: listContact
    }
}

// export function GetObjectContactById(id) {
//     return async(dispatch) => {
//         Axios.get('http://localhost:8080/contacts/' + id,  {
//             method: 'GET',
//             data: {},
//             headers: {
//                 "Authorization": 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjA2ODgyMTUyLCJleHAiOjE2MDc0ODY5NTJ9.pqtJNdc_iy7vwEDOHFMxWr0qZtUb8wQDoPw_r5lyl-EfnQaiWacUbWxJ9TVyfS9v-VBqJkT7fRsfYQdq4CpNpA',
//                 'Content-Type': 'application/json'
//             },
//         })
//             .then(function (responds) {
//                 dispatch(sendActionGetObjectToRedux(responds.data));
//             })
//     }
// }

// export function sendActionGetObjectToRedux(contact) {
//     return {
//         type: "getObjectContact",
//         payload: contact
//     }
// }

export function UpdateContactFunction(id, facebook1, youtube1, gmail1, address1, phone1) {
    var contactJson = {facebook: facebook1, youtube: youtube1, gmail: gmail1, phoneNumber: phone1, address: address1};
    Axios.post('http://localhost:8080/contacts', JSON.stringify(contactJson),{
      headers: {
        "Authorization": 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjA2ODgyMTUyLCJleHAiOjE2MDc0ODY5NTJ9.pqtJNdc_iy7vwEDOHFMxWr0qZtUb8wQDoPw_r5lyl-EfnQaiWacUbWxJ9TVyfS9v-VBqJkT7fRsfYQdq4CpNpA',
        'Content-Type': 'application/json'
      },
      })
      .then(function (response) {
        //alert("update Working!");
        window.location = "/contact";
      })
      .catch(function (error) {
        console.log(error);
      })

}