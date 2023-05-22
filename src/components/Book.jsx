import React from 'react';
import { Link } from 'react-router-dom';
import cover_img from '../images/cover_not_found.jpg';
import "../css/index.css";

const Book = (book) => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src = {book.coverURL || cover_img} alt = "cover" />
      </div>

      <div className='book-item-info text-center'>
      <Link to = {`/books/${book.id}`}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.bookName}</span>
          </div>
      </Link>
      </div>
      
      <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.authorName}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>ISBN: </span>
          <span>{book.isbnNo}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{book.publishDate}</span>
        </div>
      </div>
  )
}

export default Book