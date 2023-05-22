import React from 'react';
import { AppBar , Toolbar, Typography ,styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import "../css/index.css"

const Header = styled(AppBar)`
background : #222831;
`

const Tab = styled(NavLink)`
font-size : 20px;
margin-right : 15px;
color : #00ADB5;
text-decoration : none;
& > span {
  font-size : 22px;
  font-weight : bold;
  color : #EEEEEE; 
}
`

const Navbar = () => {
  return (
    <Header position='static'>
      <Toolbar>
        <Tab to="/">
        <span>BooksOnline</span>
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



