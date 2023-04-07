import LateralMenuAndContent from "../../../layout/pages/lateralMenuAndContent/indext";
import Layout from "../../../layout/pages/layout/layout";
import MenuUser from "../../components/Menu";
import LoadVideoC from "../../components/loadVideo";

const LoadVideo = () => {
  return (
    <div>
      <Layout>
        <LateralMenuAndContent>
          <MenuUser />
          <div className="w-100 p-20px-top p-20px-bottom ">
            <LoadVideoC />
          </div>
        </LateralMenuAndContent>
      </Layout>
    </div>
  );
};

export default LoadVideo;
