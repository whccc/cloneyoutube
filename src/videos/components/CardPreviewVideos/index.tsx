import styles from "./style.module.scss";
const CardPreviewVideo = () => {
  return (
    <div className={styles["wrapper-card"]}>
      <img src="./gato.jpg" />
      <div className={styles["wrapper-data-title-card"]}>
        <img src="./gato.jpg" />
        <div>
          <h1>Video prueba</h1>
          <p>2022/07/10</p>
          <p>1.000 Visualizaciones</p>
        </div>
      </div>
      <div className={styles["wrapper-chip-duration-video"]}>1:00:00</div>
    </div>
  );
};

export default CardPreviewVideo;
