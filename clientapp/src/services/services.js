import axios from "axios";
import {getItemFromLocalStorage} from "./common";

const config = {
    headers: {
        'Content-type': 'application/json'
    }
}

export function AuthorizedGet(url) {
    let accessToken = getItemFromLocalStorage('accessToken');
    return axios.get(url,{
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
}

// Api Calls

export const ClientAuthorization = (data) => {
    return axios.post('/api/users/login', data);
}

// Authorized Calls
export const GetClientInfo = () => {
    return AuthorizedGet('/api/users/profile');
}
