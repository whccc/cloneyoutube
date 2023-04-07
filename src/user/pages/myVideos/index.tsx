import LateralMenuAndContent from "../../../layout/pages/lateralMenuAndContent/indext";
import Layout from "../../../layout/pages/layout/layout";
import CardPreviewVideo from "../../../videos/components/CardPreviewVideos";
import MenuUser from "../../components/Menu";
import styles from "./styles.module.scss";

const MyVideos = () => {
  return (
    <div>
      <Layout>
        <LateralMenuAndContent>
          <MenuUser />
          <div className={`${styles["wrapper-content-videos"]} w-100`}>
            <CardPreviewVideo />
            <CardPreviewVideo />
            <CardPreviewVideo />
            <CardPreviewVideo />
            <CardPreviewVideo />
            <CardPreviewVideo />
            <CardPreviewVideo />
            <CardPreviewVideo />
            <CardPreviewVideo />
            <CardPreviewVideo />
            <CardPreviewVideo />
            <CardPreviewVideo />
          </div>
        </LateralMenuAndContent>
      </Layout>
    </div>
  );
};

export default MyVideos;
