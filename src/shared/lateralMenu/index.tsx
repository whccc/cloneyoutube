import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ReactNode } from "react";
interface MenuProps {
  children: ReactNode;
}
const Menu = ({ children }: MenuProps) => {
  const isActiveMenu = useSelector(
    (state: RootState) => state.menuActive.isActive
  );

  return (
    <div
      className={`${styles["wrapper-menu"]} ${
        isActiveMenu ? "show-menu" : "hidden-menu"
      }`}
    >
      {children}
    </div>
  );
};

export default Menu;
