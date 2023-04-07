import Menu from "../../../shared/lateralMenu";
import styles from "./styles.module.scss";
import Router from "next/router";
const MenuUser = () => {
  const navigationToMyVideos = () => {
    Router.push("/user/misvideos");
  };

  const navigationToLoadVideo = () => {
    Router.push("/user/cargar-video");
  };
  const navigationToVideos = () => {
    Router.push("/");
  };
  return (
    <div>
      <Menu>
        <div className={styles["wrapper-user"]}>
          <img src="/gato.jpg" />
          <h1>Wilson</h1>
        </div>
        <ul>
          <li>
            <a onClick={navigationToVideos}>
              <i className="pi pi-images"></i>
              <label>Videos</label>
            </a>
          </li>
          <li>
            <a onClick={navigationToMyVideos}>
              <i className="pi pi-images"></i>
              <label>Mis Videos</label>
            </a>
          </li>
          <li>
            <a onClick={navigationToLoadVideo}>
              <i className="pi pi-images"></i>
              <label>Subir Video</label>
            </a>
          </li>
        </ul>
      </Menu>
    </div>
  );
};

export default MenuUser;
