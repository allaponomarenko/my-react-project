import Product from "./Product";
import { Alert } from "./Alert";
import { HiUser } from "react-icons/hi";
import { LoginButton } from "./LoginButton";
import { FollowButton } from "./FollowButton";


export default function App() {
  const alerts = [
    {
      id: 1,
      variant: "info",
      text: "Would you like to browse our recommended products?",
    },
    {
      id: 2,
      variant: "error",
      text: "There was an error during your last transaction",
    },
    {
      id: 3,
      variant: "success",
      text: "Payment received, thank you for your purchase",
    },
    {
      id: 4,
      variant: "warning",
      text: "Please update your profile contact information",
    },
  ];

  return (
    <div>
      <p><HiUser className="my-icon" size={24} /> Alla</p>

      <LoginButton />
      <FollowButton />

      {alerts.map(({ id, variant, text }) => (
        <Alert key={id} variant={variant} outlined elevated>
          {text}
        </Alert>
      ))}

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
