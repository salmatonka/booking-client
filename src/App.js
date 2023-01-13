import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Hotel from './Pages/Hotel/Hotel/Hotel';
import List from './Pages/List/List/List';
import Login from './Pages/LogIn/Login/Login';
import PropertySection from './Pages/PropertySection/PropertySection/PropertySection';
import Register from './Pages/Register/Register/Register';
function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home></Home>}></Route>
     <Route path="/hotels" element={<List></List>}></Route>
     <Route path="/hotels/:id" element={<Hotel></Hotel>} 
     
     ></Route>
     <Route path="/propertySection" element={<PropertySection></PropertySection>}></Route>
     <Route path="/register" element={<Register></Register>}></Route>
     <Route path="/login" element={<Login></Login>}></Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;