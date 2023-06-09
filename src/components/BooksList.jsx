import React,{useEffect, useState} from 'react'
import Book from './Book';

import {getBooks} from '../services/api';

const BooksList = () => {

  const [books , setBooks] = useState([]);

  useEffect(()=>{
    getBooksDetails();
  },[]);

  const getBooksDetails = async() => {
    const response = await getBooks();
    setBooks(response.data);
  }


  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>List of Books Available..</h2>
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
    </section>
  )  
}

export default BooksList