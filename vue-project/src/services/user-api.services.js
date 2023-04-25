import axios from 'axios'

const http = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
})


export class UserServices{

    getUser=()=>{
       return http.get('users')
    };
    getUserById= (id) => {
        return http.get('users/' +id);
    };

    postUser =(body)=>{

        return http.post('users', body);

    };
    putUser =(body,id)=>{
        return http.put('users/'+id,body)

    }
    deleteUser =(id)=>{
        return http.delete("users/"+id);
    }

}