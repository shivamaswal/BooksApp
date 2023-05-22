import axios from 'axios';

const API_URL = 'http://localhost:3002/books';

export const addBook = async(data) => {
    try{
        return await axios.post(`${API_URL}`, data);
    }catch(error){
        console.log("Error while calling addUser API" , error);
    }
}

export const getBooks = async() => {
    try{
        return await axios.get(`${API_URL}`);
    }catch(error){
        console.log("Error while calling addUser API" , error);
    }
}

export const getBook = async(data) => {
    try{
        return await axios.get(`${API_URL}/${data}`);
    }catch(error){
        console.log("Error while calling addUser API" , error);
    }
}

export const editBook = async(id , data) => {
    try{
        return await axios.put(`${API_URL}/${id}`, data);
    }catch(error){
        console.log("Error while calling addUser API" , error);
    }
}

export const deleteBook = async (id) => {
    try{
        return await axios.delete(`${API_URL}/${id}`);
    }catch(error){
        console.log("Error while calling addUser API" , error);
    }
}