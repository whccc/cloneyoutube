import Layout from "../../../layout/pages/layout/layout";
import CardPreviewVideo from "../../../videos/components/CardPreviewVideos";
import MenuUser from "../../components/Menu";

const DashBoard = () => {
  return (
    <div>
      <Layout>
        <MenuUser />
        <div>
          <CardPreviewVideo />
        </div>
      </Layout>
    </div>
  );
};

export default DashBoard;
