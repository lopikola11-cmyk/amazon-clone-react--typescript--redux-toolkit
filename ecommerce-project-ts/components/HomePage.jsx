import { useEffect, useState } from 'react';
import '../src/styles/pages/HomePage.css';
import '../src/styles/shared/header.css';
import { Header } from './utils/header';
import axios from 'axios';
import { ProductCard } from './productCard';

const API_BASE = "https://amazon-clone-react-typescript-redux-3lcl.onrender.com";

export function HomePage() { 

  const [productGrid, setProductGrid] = useState([]);

  async function homePage() {  
    let response = await axios.get(`${API_BASE}/api/products`);
    setProductGrid(response.data);
  }

  useEffect(() => {     
    homePage();
  }, []);

  return (   
    <> 
      <title>HomePage</title>
      <Header />

      <div className="home-page">
        <div className="products-grid">

          {productGrid.map(product => (
            <ProductCard 
              product={product} 
              key={product.id}   
            />
          ))}

        </div>
      </div>
    </>
  );
}
