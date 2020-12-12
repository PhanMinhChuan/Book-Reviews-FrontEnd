import Axios from 'axios';

export function ShowContact() {
    var Token = localStorage.getItem('Token');
    return async(dispatch) => {
        Axios.get('http://localhost:8080/contacts',  {
            method: 'GET',
            data: {},
            headers: {
                "Authorization": Token,
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
//                 "Authorization": Token,
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
    var Token = localStorage.getItem('Token');
    var contactJson = {facebook: facebook1, youtube: youtube1, gmail: gmail1, phoneNumber: phone1, address: address1};
    Axios.post('http://localhost:8080/contacts', JSON.stringify(contactJson),{
      headers: {
        "Authorization": Token,
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