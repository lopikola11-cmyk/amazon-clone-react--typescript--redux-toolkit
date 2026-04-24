import './App.css';
import { Checkout } from '../components/checkout.jsx';
import { HomePage } from '../components/HomePage.jsx';
import { Order } from '../components/orders.jsx';
import { Routes, Route } from 'react-router';
import { Traking } from '../components/tracking.jsx';
import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import{fetchCheckouts} from '../store/slice.jsx';


function App() {

const dispatch = useDispatch();

 

  

  useEffect(() => {
     dispatch(fetchCheckouts());

    
  }, []);
 
  return (
   
    <Routes>

      {/* HOME PAGE */}
      <Route
        index
        element={
          
          <HomePage
           
          />
          
        }
      />

      {/* CHECKOUT PAGE */}
      <Route
        path="/cheackout"
        element={
          <Checkout
     
          />
        }
      />

      {/* ORDERS PAGE */}
      <Route
        path="/order"
        element={
          <Order
             // ⭐ IMPORTANT
          />
        }
      />

      {/* TRACKING PAGE */}
      <Route
        path="/tracking/:orderId/:productId"
        element={
          <Traking/>
        }
      />

    </Routes>
  );
}

export default App;
