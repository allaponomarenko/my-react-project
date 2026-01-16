import clsx from 'clsx';
import styles from "./Alert.module.css";



import { HiUser } from "react-icons/hi";

const UserMenu = ({ name }) => {
  return (
    <div>
      <p><HiUser /> {name}</p>
    </div>
  );
};



 export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(
        styles.alert,
        styles[variant],
        outlined && styles.isOutlined,
        elevated && styles.isElevated
      )}
    >
      {children}
    </p>
  );
};