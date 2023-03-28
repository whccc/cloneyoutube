import { useForm } from "react-hook-form";

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
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label className="label-form">Email</label>
        <input
          className="input-form"
          type="text"
          {...register("email", { required: true })}
        />
        <label className="label-form">Contraseña</label>
        <input
          type="password"
          className="input-form"
          {...register("password", { required: true })}
        />
        <button className="button-primary " type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
