import LateralMenuAndContent from "../../../layout/pages/lateralMenuAndContent/indext";
import Layout from "../../../layout/pages/layout/layout";
import CardPreviewVideo from "../../../videos/components/CardPreviewVideos";
import MenuUser from "../../components/Menu";

const DashBoard = () => {
  return (
    <div>
      <Layout>
        <LateralMenuAndContent>
          <MenuUser />
          <div>
            <CardPreviewVideo />
          </div>
        </LateralMenuAndContent>
      </Layout>
    </div>
  );
};

export default DashBoard;
