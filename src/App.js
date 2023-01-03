import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Hotel from './Pages/Hotel/Hotel/Hotel';
import List from './Pages/List/List/List';
function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home></Home>}></Route>
     <Route path="/hotels" element={<List></List>}></Route>
     <Route path="/hotels/:id" element={<Hotel></Hotel>}></Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
