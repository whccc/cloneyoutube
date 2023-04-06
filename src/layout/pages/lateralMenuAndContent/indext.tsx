import styles from "./styles.module.scss";
const LateralMenuAndContent = ({ children }) => {
  return <div className={styles["wrapper-layout-menu"]}>{children}</div>;
};

export default LateralMenuAndContent;
