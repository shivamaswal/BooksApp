import React from 'react';
import { AppBar , Toolbar, Typography ,styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background : #000;
`

const Tab = styled(NavLink)`
font-size : 20px;
margin-right : 15px;
color : gray;
color : inherit;
text-decoration : none;
`

const Navbar = () => {
  return (
    <Header position='static'>
      <Toolbar>
        <Tab to="/">
        BooksOnline
        </Tab>
        <Tab to="/books">
        All Books
        </Tab>
        <Tab to="/add">
        Add Book
        </Tab>
      </Toolbar>
    </Header>
  )
}

export default Navbar