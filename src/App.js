import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Navbar , Home ,AddItem, BooksList , UpdateBook} from "./components";


const App = () => {

    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/add" element={<AddItem />}/>
                <Route path="/books" element={<BooksList />}/>
                <Route path="/update/:id" element={<UpdateBook />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
