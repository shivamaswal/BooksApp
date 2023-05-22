import React,{useState} from 'react';
import { FormControl , FormGroup , InputLabel , Input , Typography ,Button , styled} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../services/api';


const Container = styled(FormGroup)`
width: 50%;
margin: 5% auto 0 auto;
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

const AddItem = () => { 

  const navigate = useNavigate();

  const [book , setBook] = useState(initalValue);

  const handleChange = (e) => {
  //   console.log(event.target.value, event.target.name);
    setBook({...book,[e.target.name]:e.target.value});
  }

  const handleClick = async() => {
    await addBook(book); 
    navigate("/books");
  }

  return (
    <Container sx={{fontSize:'18px'}}>
      <Typography variant='h4'>Add New Book</Typography>
      <FormControl>
        <InputLabel>Book Title</InputLabel>
          <Input onChange={(e)=>handleChange(e)} name="bookName"/>
      </FormControl> 
      <FormControl>
        <InputLabel>Author's Name</InputLabel>
        <Input onChange={(e)=>handleChange(e)} name="authorName"/>
      </FormControl>
      <FormControl>
        <InputLabel>Publishing Year</InputLabel>
        <Input onChange={(e)=>handleChange(e)} name="publishDate"/>
      </FormControl>
      <FormControl>
        <InputLabel>ISBN Number</InputLabel>
        <Input onChange={(e)=>handleChange(e)} name="isbnNo"/>
      </FormControl>
      <FormControl>
        <InputLabel>CoverPage Image Url</InputLabel>
        <Input onChange={(e)=>handleChange(e)} name="coverURL"/>
      </FormControl>
      <FormControl>
        <Button variant='text' onClick={()=>handleClick()}>Add Book</Button>
      </FormControl>
    </Container>
  )
}

export default AddItem;