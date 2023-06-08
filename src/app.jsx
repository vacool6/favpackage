import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Home from "./components/Home";
import Data from "./components/Data";
import TableComp from "./components/TableComp";







function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Data' element={<Data/>}/>
    <Route path="/TableComp" element={<TableComp/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
