import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div >
      <BrowserRouter>
      <NavBar/>
      {/* navbar will be available in all the components */}
      <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory category="men"/>}/>
      {/* props added to identify each individual page: men,women and kid */}
      <Route path='/womens' element={<ShopCategory category="women"/>}/>
      <Route path='/kids' element={<ShopCategory category="kid"/>}/>
      {/* ShopCategory page used to render all pages in website */}
      <Route path="/product" element={<product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>






      </Routes>
      
     </BrowserRouter>
      
    </div>
  );
}

export default App;
