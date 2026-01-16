import Product from "./Product";
import { Alert } from "./Alert";
import { HiUser } from "react-icons/hi";
import { LoginButton } from "./LoginButton";
import { FollowButton } from "./FollowButton";


export default function App() {
  return (
    <div>
      <p><HiUser className="my-icon" size={24} /> Alla</p>

      <LoginButton />
      <FollowButton />

      <Alert variant="info" outlined elevated>
        Would you like to browse our recommended products?
      </Alert>

      <Alert variant="error" outlined elevated>
        There was an error during your last transaction
      </Alert>

      <Alert variant="success" outlined elevated>
        Payment received, thank you for your purchase
      </Alert>

      <Alert variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert>

       <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
        price={10.99}
      />

      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
        price={14.29}
      />

      {/* якщо треба — продукти нижче */}
      {/* <Product ... /> */}
    </div>
  );
}
