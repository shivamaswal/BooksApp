import React,{useEffect, useState} from 'react'
import Book from './Book';

import {getBooks} from '../services/api';

const Suggestions = () => {

  const [books , setBooks] = useState([]);

  useEffect(()=>{
    getBooksDetails();
  },[]);

  const getBooksDetails = async() => {
    const response = await getBooks();
    setBooks(response.data);
  }
  return(
      <div className='container'>
        <div className='section-title'>
          <h2>Trending Books..</h2>
        </div>
        <div className='booklist-content grid'>
          {
            books.map((item,index) => {
              return (
                  <Book key = {index}{...item} />
              )
            })
          }
        </div>
      </div>
  )
}

  export default Suggestions