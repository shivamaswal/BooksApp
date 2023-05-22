import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Navbar , Home ,AddItem, BooksList , UpdateBook , BookPage} from "./components";


const App = () => {

    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/add" element={<AddItem />}/>
                <Route path="/books" element={<BooksList />}/>
                <Route path="/update/:id" element={<UpdateBook />}/>
                <Route path="/books/:id" element={<BookPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
