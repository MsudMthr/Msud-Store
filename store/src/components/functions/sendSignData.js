import axios from "axios";

export const sendData =async data => {
    await axios.post('https://jsonplaceholder.typicode.com/posts' , {
        data
    })
    console.log(data);
}