import Layout from "../../../layout/pages/layout/layout";
import Login from "../../components/login";
import styles from "./styles.module.scss";
const LoginPage = () => {
  return (
    <div className={styles.root}>
      <Layout>
        <Login />
      </Layout>
    </div>
  );
};

export default LoginPage;
