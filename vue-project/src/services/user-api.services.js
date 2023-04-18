import axios from 'axios'

export class UserServices{

    getUser=()=>{

       return axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users'
        })


    };
    getUserById= (id) =>{

    };

    postUser =(body)=>{

    };
    putUser =(body,id)=>{

    }
    deletUser =(id)=>{

    }

}