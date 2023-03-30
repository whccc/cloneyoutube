import type { NextPage } from "next";
import Layout from "../src/layout/pages/layout/layout";
import IndexPage from "../src/videos/pages/home/indexPage";

const Home: NextPage = () => {
  return (
    <Layout>
      <IndexPage />
    </Layout>
  );
};

export default Home;
