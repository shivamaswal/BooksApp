import React,{useEffect, useState} from 'react'
import { Table, TableBody, TableHead, TableRow , TableCell ,styled , Button } from '@mui/material'
import {Link} from 'react-router-dom';

import {getBooks,deleteBook} from '../services/api';

const StyledTable = styled(Table)`
width:90%;
margin: 50px auto 0 auto;
`;

const Thead = styled(TableRow)`
background:#000;
& > th{
  color:#fff;
  font-size:18px;
}
`;

const Trow = styled(TableRow)`
    & > td{
        font-size: 16px
    }
`;

const BooksList = () => {

  const [books , setBooks] = useState([]);

  useEffect(()=>{
    getBooksDetails();
  },[]);

  const getBooksDetails = async() => {
    const response = await getBooks();
    setBooks(response.data);
  }

  const deleteBookData = async(id) => {
    await deleteBook(id);
    getBooksDetails();
  }

  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>id</TableCell>
          <TableCell>Book Name</TableCell>
          <TableCell>Author Name</TableCell>
          <TableCell>Published On</TableCell>
          <TableCell>ISBN</TableCell>
          <TableCell></TableCell>
        </Thead>
      </TableHead>
      <TableBody>
      {
        books.map(book => (
          <Trow>
            <TableCell>{book.id}</TableCell>
            <TableCell>{book.bookName}</TableCell>
            <TableCell>{book.authorName}</TableCell>
            <TableCell>{book.publishDate}</TableCell>
            <TableCell>{book.isbnNo}</TableCell>
            <TableCell>
            <Button variant='contained'style={{marginRight : '10px'}} component={Link} to={`/update/${book.id}`}>Edit</Button>
            <Button variant="contained" color="error" onClick={()=>deleteBookData(book.id)}>Delete</Button>
            </TableCell> 
          </Trow>
        )) 
      }

      </TableBody>
    </StyledTable>
  )
}

export default BooksList