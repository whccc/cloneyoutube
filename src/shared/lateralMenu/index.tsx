import styles from "./styles.module.scss";
const Menu = ({ children }) => {
  return <div className={styles["wrapper-menu"]}>{children}</div>;
};

export default Menu;
