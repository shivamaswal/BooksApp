import React,{useState , useEffect} from 'react';
import { FormControl , FormGroup , InputLabel , Input , Typography ,Button , styled} from '@mui/material';
import { useNavigate , useParams } from 'react-router-dom';

import { getBook , editBook } from '../services/api';


const Container = styled(FormGroup)`
width: 50%;
margin: 5% auto 0% auto;
& > div {
  margin-top : 20px;
}
`

const initalValue = {
  bookName : '',
  authorName : '',
  publishDate : '',
  isbnNo : ''
}

const UpdateBook = () => { 

  const navigate = useNavigate();
  const [book , setBook] = useState(initalValue);
  const {id} = useParams();

  useEffect(()=>{
    getBookDetail();
  },[]);

  const getBookDetail = async() => {
    const response = await getBook(id);
    // console.log(response);
    setBook(response.data);
  }


  const { bookName, authorName, publishDate, isbnNo } = book;


  const handleChange = (e) => {
  //   console.log(event.target.value, event.target.name);
    setBook({...book,[e.target.name]:e.target.value});
  }

  const handleClick = async() => {
    await editBook(id,book); 
    navigate("/books");
  }

  return (
    <Container>
      <Typography variant='h4'>Update Book</Typography>
      <FormControl>
        <InputLabel>Book Title</InputLabel>
          <Input onChange={(e)=>handleChange(e)} name="bookName" value={bookName}/>
      </FormControl> 
      <FormControl>
        <InputLabel>Author's Name</InputLabel>
        <Input onChange={(e)=>handleChange(e)} name="authorName" value={authorName}/>
      </FormControl>
      <FormControl>
        <InputLabel>Publishing Year</InputLabel>
        <Input onChange={(e)=>handleChange(e)} name="publishDate" value={publishDate}/>
      </FormControl>
      <FormControl>
        <InputLabel>ISBN Number</InputLabel>
        <Input onChange={(e)=>handleChange(e)} name="isbnNo" value={isbnNo}/>
      </FormControl>
      <FormControl>
        <Button variant='text' onClick={()=>handleClick()}>Save Changes</Button>
      </FormControl>
    </Container>
  )
}

export default UpdateBook;