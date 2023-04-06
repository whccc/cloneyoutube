import styles from "./styles.module.scss";
const MenuUser = () => {
  return (
    <div className={styles["wrapper-menu"]}>
      <ul>
        <li>
          <a>
            <i className="pi pi-images"></i>Mis Videos
          </a>
        </li>
        <li>
          <a>
            <i className="pi pi-images"></i>Subir Video
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuUser;
