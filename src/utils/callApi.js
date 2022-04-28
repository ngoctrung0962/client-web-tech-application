import axios from 'axios';

export const callApi = (endpoint, method = 'GET') =>{
    return  axios({
        method: method,
        url: `http://localhost:8080/api/technological_appliances/${endpoint}`,
    })
    .catch(error => console.log(error))
}

export const apiContainData = (endpoint, method = 'PUT', data) =>{
    // const headers = {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Headers": 'Origin, X-Requested-With, Content-Type, Accept ',
    //     "Access-Control-Allow-Credentials": "PUT"
    // }
    return  axios({
        method: method,
        url: `http://localhost:8080/api/technological_appliances/${endpoint}`,
        data: data,
        //header: headers
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
    })
    .catch(error => console.log(error))
}