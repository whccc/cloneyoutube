import { useForm } from "react-hook-form";
import styles from "./user.styles.module.scss";
import inputsStyles from "../../../../styles/styles.global.inputs.module.scss";
import labelsStyles from "../../../../styles/styles.global.labels.module.scss";
import cardsStyles from "../../../../styles/styles.global.cards.module.scss";
import buttonsStyles from "../../../../styles/styles.global.buttons.module.scss";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = (dataForm) => {
    console.log(dataForm);
  };
  return (
    <>
      <div className={styles["wrapper-login"]}>
        <form
          onSubmit={handleSubmit(submit)}
          className={cardsStyles["wrapper-card-form"]}
        >
          <label className={labelsStyles["label-form"]}>Email</label>
          <input
            className={inputsStyles["input-form"]}
            type="text"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <label className={labelsStyles["label-error-form"]}>
              Campo requerido...
            </label>
          )}
          <label className={labelsStyles["label-form"]}>Contraseña</label>

          <input
            type="password"
            className={inputsStyles["input-form"]}
            {...register("password", { required: true })}
          />
          {errors.password && (
            <label className={labelsStyles["label-error-form"]}>
              Campo requerido..
            </label>
          )}
          <hr />
          <button className={buttonsStyles["button-primary"]} type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
