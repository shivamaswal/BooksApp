import React,{useState , useEffect} from 'react'
import "../css/index.css"
import { useNavigate , useParams ,Link } from 'react-router-dom';
import { getBook } from '../services/api';
import cover_img from '../images/cover_not_found.jpg';
import {Button} from '@mui/material';
import {deleteBook} from '../services/api';

const initalValue = {
    bookName : '',
    authorName : '',
    publishDate : '',
    isbnNo : '',
    coverUrl : ''
  }


const BookPage = () => {

    const navigate = useNavigate();
    const [book , setBook] = useState(initalValue);
    const {id} = useParams();
  
    useEffect(()=>{
      getBookDetail();
    },[]);
  
    const getBookDetail = async() => {
      const response = await getBook(id);
      console.log(response);
      setBook(response.data);
    }

    const deleteBookData = async(id) => {
        await deleteBook(id);
        navigate("/books");
    }
  
  
    const { bookName, authorName, publishDate, isbnNo, coverURL } = book;

  return (
    <section className='book-details'>
      <div className='container'>
        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src = {book.coverURL || cover_img} alt = "cover img" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{bookName}</span>
            </div>
            <div className='book-details-item description'>
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Author Name: </span>
              <span className='text-italic'>{authorName}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Published Date: </span>
              <span className='text-italic'>{publishDate}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>ISBN Number: </span>
              <span>{isbnNo}</span>
            </div>
            <div style={{ textAlign:'center'}}>
            <Button variant='contained'style={{marginRight : '10px'}} component={Link} to={`/update/${book.id}`}>Edit</Button>
            <Button variant="contained" color="error" onClick={()=>deleteBookData(book.id)}>Delete</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookPage