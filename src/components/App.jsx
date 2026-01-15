import Product from './Product';
import { Alert } from "./Alert";




export default function App() {
  return (
    <div>
      <Alert variant="alert--info" outlined elevated>
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="alert--error" outlined elevated>
        There was an error during your last transaction
      </Alert>
      <Alert variant="alert--success" outlined elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="alert--warning" outlined elevated>
        Please update your profile contact information
      </Alert>









      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
    </div>
  );
}


