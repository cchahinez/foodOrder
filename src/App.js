import { useState } from 'react';
import NotFound from './components/UI/NotFound';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import { Route, Routes } from 'react-router-dom';
import AdminArea from './components/adminArea/AdminArea';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    
      <Routes>
        <Route path='/' element={<CartProvider>
          {cartIsShown && <Cart onClose={hideCartHandler}/>}
          <Header onShowCart={showCartHandler} />
          <main>
          <Meals />
          </main>
        </CartProvider>} />
      
        <Route path ='/adminArea' element={<AdminArea/>} />
        <Route path ='*' element={<NotFound/>} />
      </Routes>
    
  );
}

export default App;

/*

<CartProvider>
      <Routes>
        <Route path='/' element={}>
        <Route path ='/cart' element={cartIsShown && <Cart onClose={hideCartHandler} />} />
        <Route path ='/home' element={<Header onShowCart={showCartHandler} />} />
        <Route path ='/meals' element={<Meals />} />
        </Route>
        <Route path ='/adminArea' element={<AdminArea/>} />
        <Route path ='*' element={<NotFound/>} />
      </Routes>
    </CartProvider>
*/