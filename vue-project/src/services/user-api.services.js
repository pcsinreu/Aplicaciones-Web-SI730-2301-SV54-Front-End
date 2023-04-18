import axios from 'axios'

const http = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
})


export class UserServices{

    getUser=()=>{
       return http.get('users')
    };
    getUserById= (id) => {
        return http.get('users' +id);
    };

    postUser =(body)=>{

        return http.postUser('users',{ body});

    };
    putUser =(body,id)=>{
        return axios({
            method: 'post',
            url: 'users' +id,
            data:body
        })

    }
    deletUser =(id)=>{
        return axios({
            method: 'delete',
            url: 'users' +id
        })

    }

}