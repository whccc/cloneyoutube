import LateralMenuAndContent from "../../../layout/pages/lateralMenuAndContent/indext";
import Layout from "../../../layout/pages/layout/layout";
import SliderCategory from "../../../shared/sliderCategory";
import CardPreviewVideo from "../../components/CardPreviewVideos";
import MenuVideo from "../../components/menuVideo";
import styles from "./styles.module.scss";

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <LateralMenuAndContent>
          <MenuVideo />
          <div className="w-100">
            <SliderCategory />
            <div className={`${styles["wrapper-section-videos"]} `}>
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
          </div>
        </LateralMenuAndContent>
      </Layout>
    </div>
  );
};

export default IndexPage;
