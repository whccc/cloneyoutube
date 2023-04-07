import styles from "./styles.module.scss";
import stylesButtons from "../../../../styles/styles.global.buttons.module.scss";
import stylesLabels from "../../../../styles/styles.global.labels.module.scss";
import stylesInputs from "../../../../styles/styles.global.inputs.module.scss";
const LoadVideoC = () => {
  return (
    <div className={styles["wrapper-load-video"]}>
      <div className={styles["wrapper-load-video__wrapper-video"]}>
        <div className={styles["wrapper-load-video__wrapper-video__video"]}>
          <div>
            <h1>Cargar video...</h1>
            <button className={stylesButtons["button-primary"]}>Cargar</button>
          </div>
        </div>
        <div></div>
      </div>

      <form className={styles["wrapper-load-video__form"]}>
        <label className={stylesLabels["label-form"]}>Titulo</label>
        <input type="text" className={stylesInputs["input-form"]} />
        <label className={stylesLabels["label-form"]}>Categoría</label>
        <input type="text" className={stylesInputs["input-form"]} />
        <label className={stylesLabels["label-form"]}>Descripción</label>
        <textarea className={stylesInputs["input-form"]}></textarea>
        <hr />
        <div className="text-right">
          <button className={stylesButtons["button-primary"]}>Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default LoadVideoC;
