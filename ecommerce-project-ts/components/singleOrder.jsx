import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { Header } from "./utils/header";

const API = "https://amazon-clone-react-typescript-redux-3lcl.onrender.com";

export function SingleOrder() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    async function loadOrder() {
      const response = await axios.get(`${API}/api/orders/${orderId}?expand=products`);
      setOrder(response.data);
    }

    loadOrder();
  }, [orderId]);

  if (!order) return <div>Loading...</div>;

  return (
    <>
      <Header />

      <h1>Order success</h1>

      {order.products.map(item => (
        <div key={item.productId}>
          <img src={item.product.image} />
          <div>{item.product.name}</div>
          <div>Qty: {item.quantity}</div>
        </div>
      ))}

      <Link to="/order">Back</Link>
    </>
  );
}
